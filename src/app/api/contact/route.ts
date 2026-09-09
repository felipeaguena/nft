import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyChallenge } from "@/src/lib/bot-protection";
import { checkRateLimit, CONTACT_RATE_LIMIT, getClientIp } from "@/src/lib/rate-limit";

export const dynamic = "force-dynamic";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
  website?: string; // Honeypot
  challengeToken?: string;
  challengeAnswer?: string | number;
  lang?: "pt" | "en" | "cn";
}

export async function POST(req: NextRequest) {
  try {
    // 0. Rate Limiting por IP
    const clientIp = getClientIp(req);
    const rateCheck = checkRateLimit(clientIp, CONTACT_RATE_LIMIT);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Muitas tentativas. Tente novamente em ${rateCheck.retryAfterSeconds} segundos.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateCheck.retryAfterSeconds),
          },
        }
      );
    }

    const body: ContactRequestBody = await req.json();
    const { name, email, message, website, challengeToken, challengeAnswer, lang = "pt" } = body;

    // 1. Verificação de Honeypot (se preenchido, é um bot)
    if (website && website.trim() !== "") {
      console.warn("[Anti-Spam] Submissão bloqueada pelo Honeypot.");
      // Retorna sucesso para enganar o bot e não alertar o remetente malicioso
      return NextResponse.json(
        { success: true, message: "Mensagem recebida com sucesso!" },
        { status: 200 }
      );
    }

    // 2. Verificação do Desafio Anti-Bot
    if (!challengeToken || challengeAnswer === undefined || challengeAnswer === null) {
      return NextResponse.json(
        { success: false, error: "Por favor, responda à pergunta de segurança anti-bot." },
        { status: 400 }
      );
    }

    const verification = verifyChallenge(challengeToken, challengeAnswer);
    if (!verification.isValid) {
      return NextResponse.json(
        { success: false, error: verification.error || "Validação anti-bot incorreta." },
        { status: 400 }
      );
    }

    // 3. Validação dos campos obrigatórios
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Por favor, informe seu nome completo." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Por favor, informe um endereço de e-mail válido." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "A mensagem deve conter pelo menos 5 caracteres." },
        { status: 400 }
      );
    }

    // 3b. Validação de tamanho máximo dos campos
    if (name.length > 200) {
      return NextResponse.json(
        { success: false, error: "O nome deve ter no máximo 200 caracteres." },
        { status: 400 }
      );
    }
    if (email.length > 320) {
      return NextResponse.json(
        { success: false, error: "O e-mail deve ter no máximo 320 caracteres." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, error: "A mensagem deve ter no máximo 5000 caracteres." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const dateFormatted = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      dateStyle: "full",
      timeStyle: "short",
    });

    // 4. Configuração do envio de e-mails via Nodemailer
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser || "no-reply@seusite.com";
    const adminEmail = process.env.ADMIN_EMAIL || process.env.CONTACT_RECEIVER_EMAIL || smtpUser;

    // Se as credenciais SMTP não estiverem configuradas, executa em modo de desenvolvimento seguro (mock)
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("================================================================================");
      console.log("[API Contato - Modo Demonstração / Variáveis SMTP não configuradas]");
      console.log(`Para envio real, defina SMTP_HOST, SMTP_USER, SMTP_PASS e ADMIN_EMAIL no arquivo .env.local.`);
      console.log("--- E-mail para Administrador ---");
      console.log(`Para: ${adminEmail || "(ADMIN_EMAIL não definido)"}`);
      console.log(`De: ${cleanName} <${cleanEmail}>`);
      console.log(`Data: ${dateFormatted}`);
      console.log(`Mensagem:\n${cleanMessage}`);
      console.log("--- E-mail de Confirmação para o Usuário ---");
      console.log(`Para: ${cleanEmail}`);
      console.log(`Assunto: Confirmação de recebimento da sua mensagem`);
      console.log("================================================================================");

      return NextResponse.json(
        {
          success: true,
          message: "Mensagem enviada com sucesso!",
          note: "Servidor em modo de desenvolvimento: os e-mails foram exibidos no console.",
        },
        { status: 200 }
      );
    }

    // Criar transportador SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true para porta 465, false para outras
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 5. Template HTML para o Administrador
    const adminMailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; color: #1f2937;">
        <div style="border-bottom: 2px solid #ea580c; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #111827; margin: 0 0 4px 0; font-size: 20px;">Novo Contato Recebido</h2>
          <p style="color: #6b7280; font-size: 14px; margin: 0;">Recebido em: ${dateFormatted}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 90px; color: #4b5563;">Nome:</td>
            <td style="padding: 8px 0; color: #111827;">${cleanName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">E-mail:</td>
            <td style="padding: 8px 0;"><a href="mailto:${cleanEmail}" style="color: #ea580c; text-decoration: none;">${cleanEmail}</a></td>
          </tr>
        </table>

        <div style="background-color: #f9fafb; border-left: 4px solid #ea580c; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
          <h3 style="margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280;">Mensagem:</h3>
          <p style="margin: 0; white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #1f2937;">${cleanMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </div>

        <p style="font-size: 12px; color: #9ca3af; margin: 0; text-align: center; border-top: 1px solid #f3f4f6; padding-top: 16px;">
          Você pode responder diretamente a este e-mail para contatar ${cleanName}.
        </p>
      </div>
    `;

    // 6. Template HTML de confirmação para o Usuário (Multilíngue)
    const emailTemplates = {
      pt: {
        subject: "Recebemos sua mensagem! | NFT Logistics",
        greeting: `Olá, ${cleanName}!`,
        status: "Recebemos sua mensagem com sucesso.",
        body: "Agradecemos o seu contato! Nossa equipe já foi notificada e retornará o mais breve possível.",
        copyTitle: "Cópia da sua mensagem:",
        footer: "Este é um e-mail de confirmação automático. Não é necessário respondê-lo.",
        successMsg: "Mensagem enviada com sucesso! Verifique seu e-mail para confirmação.",
        text: `Olá ${cleanName},\n\nRecebemos sua mensagem com sucesso!\n\nCópia da mensagem:\n${cleanMessage}\n\nRetornaremos em breve.`,
      },
      en: {
        subject: "We have received your message! | NFT Logistics",
        greeting: `Hello, ${cleanName}!`,
        status: "We received your message successfully.",
        body: "Thank you for reaching out! Our team has been notified and will get back to you as soon as possible.",
        copyTitle: "Copy of your message:",
        footer: "This is an automated confirmation email. There is no need to reply.",
        successMsg: "Message sent successfully! Please check your email for confirmation.",
        text: `Hello ${cleanName},\n\nWe received your message successfully!\n\nCopy of your message:\n${cleanMessage}\n\nWe will get back to you shortly.`,
      },
      cn: {
        subject: "我们已收到您的留言！| NFT Logistics",
        greeting: `您好，${cleanName}！`,
        status: "我们已成功收到您的留言。",
        body: "感谢您的联系！我们的团队已收到通知，将尽快给您回复。",
        copyTitle: "您的留言副本：",
        footer: "这是一封自动发送的确认邮件，请勿直接回复。",
        successMsg: "留言已成功发送！请查收您的电子邮箱确认信。",
        text: `您好 ${cleanName}，\n\n我们已成功收到您的留言！\n\n留言内容：\n${cleanMessage}\n\n我们将尽快与您联系。`,
      },
    };

    const currentT = emailTemplates[lang] || emailTemplates.pt;

    const userMailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; color: #1f2937;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h2 style="color: #111827; margin: 0 0 8px 0; font-size: 22px;">${currentT.greeting}</h2>
          <p style="color: #4b5563; font-size: 15px; margin: 0;">${currentT.status}</p>
        </div>

        <p style="font-size: 15px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
          ${currentT.body}
        </p>

        <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
          <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #6b7280; letter-spacing: 0.05em;">${currentT.copyTitle}</h4>
          <p style="margin: 0; font-size: 14px; color: #4b5563; white-space: pre-wrap; line-height: 1.5;">${cleanMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </div>

        <p style="font-size: 13px; color: #9ca3af; text-align: center; margin: 0; border-top: 1px solid #f3f4f6; padding-top: 16px;">
          ${currentT.footer}
        </p>
      </div>
    `;

    // Enviar os dois e-mails em paralelo
    await Promise.all([
      // 1. Para o Administrador
      transporter.sendMail({
        from: `"${cleanName} via Site" <${smtpFrom}>`,
        to: adminEmail,
        replyTo: cleanEmail,
        subject: `[Novo Contato (${lang.toUpperCase()})] ${cleanName}`,
        text: `Nome: ${cleanName}\nE-mail: ${cleanEmail}\nIdioma: ${lang}\nData: ${dateFormatted}\n\nMensagem:\n${cleanMessage}`,
        html: adminMailHtml,
      }),

      // 2. Para o Usuário
      transporter.sendMail({
        from: `"NFT Logistics" <${smtpFrom}>`,
        to: cleanEmail,
        subject: currentT.subject,
        text: currentT.text,
        html: userMailHtml,
      }),
    ]);

    return NextResponse.json(
      { success: true, message: currentT.successMsg },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Erro no processamento do contato:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro interno ao processar o envio.";
    return NextResponse.json(
      { success: false, error: "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.", details: process.env.NODE_ENV === "development" ? errorMessage : undefined },
      { status: 500 }
    );
  }
}
