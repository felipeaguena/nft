"use client";

import React, { useState, useEffect, useCallback, useId } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  User,
  Mail,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import Button from "./Button";

export type ContactFormLanguage = "pt" | "en" | "cn";

export interface ContactFormLabels {
  title?: string;
  description?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  botQuestionLabel?: string;
  botQuestionPlaceholder?: string;
  botHelpText?: string;
  submitButton?: string;
  submittingButton?: string;
  successTitle?: string;
  successMessage?: string;
  sendAnotherButton?: string;
}

export interface ContactFormProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  labels?: ContactFormLabels;
  onSuccess?: () => void;
  lang?: ContactFormLanguage;
}

interface ChallengeData {
  question: string;
  token: string;
}

const DEFAULT_TEXTS = {
  pt: {
    title: "Envie uma Mensagem",
    description: "Preencha o formulário abaixo. Retornaremos em breve com uma resposta.",
    nameLabel: "Seu Nome",
    namePlaceholder: "Ex: Ana Silva",
    emailLabel: "Seu E-mail",
    emailPlaceholder: "seuemail@exemplo.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Descreva sua dúvida, projeto ou solicitação...",
    botQuestionLabel: "Verificação de Segurança",
    botQuestionPlaceholder: "Sua resposta",
    botHelpText: "Resolva a operação para provar que é humano",
    submitButton: "Enviar Mensagem",
    submittingButton: "Enviando...",
    successTitle: "Mensagem enviada com sucesso!",
    successMessage:
      "Recebemos seu contato e enviamos uma confirmação para seu e-mail. Responderemos em breve.",
    sendAnotherButton: "Enviar outra mensagem",
    refreshTitle: "Trocar pergunta",
    refreshButton: "Trocar",
    loadingQuestion: "Carregando pergunta...",
    honeypotLabel: "Não preencha este campo (website)",
    errorName: "Por favor, preencha seu nome.",
    errorEmail: "Por favor, preencha seu e-mail.",
    errorMessage: "Por favor, escreva uma mensagem.",
    errorChallenge: "Por favor, responda à pergunta de verificação anti-bot.",
    errorLoadChallenge:
      "Não foi possível carregar a verificação de segurança. Tente atualizar a página.",
    errorConnection: "Erro de conexão. Verifique sua internet e tente novamente.",
    errorGeneric: "Ocorreu um erro ao enviar. Tente novamente.",
  },
  en: {
    title: "Send a Message",
    description: "Fill out the form below. We will get back to you shortly.",
    nameLabel: "Your Name",
    namePlaceholder: "e.g., John Smith",
    emailLabel: "Your Email",
    emailPlaceholder: "youremail@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Describe your inquiry, project, or request...",
    botQuestionLabel: "Security Verification",
    botQuestionPlaceholder: "Your answer",
    botHelpText: "Solve the math problem to prove you are human",
    submitButton: "Send Message",
    submittingButton: "Sending...",
    successTitle: "Message sent successfully!",
    successMessage:
      "We have received your message and sent a confirmation to your email. We will reply shortly.",
    sendAnotherButton: "Send another message",
    refreshTitle: "Change question",
    refreshButton: "Change",
    loadingQuestion: "Loading question...",
    honeypotLabel: "Do not fill this field (website)",
    errorName: "Please enter your name.",
    errorEmail: "Please enter your email.",
    errorMessage: "Please write a message.",
    errorChallenge: "Please answer the security verification question.",
    errorLoadChallenge:
      "Could not load security verification. Please refresh the page.",
    errorConnection: "Connection error. Please check your internet and try again.",
    errorGeneric: "An error occurred while sending. Please try again.",
  },
  cn: {
    title: "发送留言",
    description: "请填写下方表单，我们将尽快给您回复。",
    nameLabel: "您的姓名",
    namePlaceholder: "例如：张伟",
    emailLabel: "电子邮箱",
    emailPlaceholder: "youremail@example.com",
    messageLabel: "留言内容",
    messagePlaceholder: "请描述您的咨询、项目或具体需求...",
    botQuestionLabel: "安全验证",
    botQuestionPlaceholder: "您的答案",
    botHelpText: "请计算此算术题以验证您是人类",
    submitButton: "发送留言",
    submittingButton: "正在发送...",
    successTitle: "留言发送成功！",
    successMessage:
      "我们已收到您的联系请求，并已向您的邮箱发送确认信，我们将尽快与您联系。",
    sendAnotherButton: "发送另一条留言",
    refreshTitle: "换一题",
    refreshButton: "换一题",
    loadingQuestion: "正在加载题目...",
    honeypotLabel: "请勿填写此字段 (website)",
    errorName: "请填写您的姓名。",
    errorEmail: "请填写您的电子邮箱。",
    errorMessage: "请填写您的留言内容。",
    errorChallenge: "请回答安全验证问题。",
    errorLoadChallenge: "无法加载安全验证，请刷新页面重试。",
    errorConnection: "网络连接错误，请检查网络后重试。",
    errorGeneric: "发送过程中出错，请重试。",
  },
};

export default function ContactForm({
  title,
  description,
  className = "",
  labels = {},
  onSuccess,
  lang = "pt",
}: ContactFormProps) {
  const formId = useId();
  const defaultT = DEFAULT_TEXTS[lang] || DEFAULT_TEXTS.pt;

  // Estados dos campos
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Honeypot (campo oculto para capturar bots)
  const [websiteHoneypot, setWebsiteHoneypot] = useState("");

  // Desafio Anti-Bot
  const [challenge, setChallenge] = useState<ChallengeData | null>(null);
  const [challengeAnswer, setChallengeAnswer] = useState("");
  const [isLoadingChallenge, setIsLoadingChallenge] = useState(true);

  // Estados de submissão e feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Textos padronizados com suporte a personalização
  const t = {
    title: title ?? labels.title ?? defaultT.title,
    description: description ?? labels.description ?? defaultT.description,
    nameLabel: labels.nameLabel ?? defaultT.nameLabel,
    namePlaceholder: labels.namePlaceholder ?? defaultT.namePlaceholder,
    emailLabel: labels.emailLabel ?? defaultT.emailLabel,
    emailPlaceholder: labels.emailPlaceholder ?? defaultT.emailPlaceholder,
    messageLabel: labels.messageLabel ?? defaultT.messageLabel,
    messagePlaceholder: labels.messagePlaceholder ?? defaultT.messagePlaceholder,
    botQuestionLabel: labels.botQuestionLabel ?? defaultT.botQuestionLabel,
    botQuestionPlaceholder: labels.botQuestionPlaceholder ?? defaultT.botQuestionPlaceholder,
    botHelpText: labels.botHelpText ?? defaultT.botHelpText,
    submitButton: labels.submitButton ?? defaultT.submitButton,
    submittingButton: labels.submittingButton ?? defaultT.submittingButton,
    successTitle: labels.successTitle ?? defaultT.successTitle,
    successMessage: labels.successMessage ?? defaultT.successMessage,
    sendAnotherButton: labels.sendAnotherButton ?? defaultT.sendAnotherButton,
  };

  // Carrega ou renova o desafio anti-bot
  const fetchChallenge = useCallback(async () => {
    setIsLoadingChallenge(true);
    try {
      const res = await fetch(`/api/contact/challenge?lang=${lang}`, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setChallenge(data);
        setChallengeAnswer("");
      } else {
        throw new Error("Falha ao carregar desafio");
      }
    } catch {
      setErrorMessage(defaultT.errorLoadChallenge);
    } finally {
      setIsLoadingChallenge(false);
    }
  }, [lang, defaultT.errorLoadChallenge]);

  useEffect(() => {
    fetchChallenge();
  }, [fetchChallenge]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validações locais básicas
    if (!name.trim()) {
      setErrorMessage(defaultT.errorName);
      return;
    }
    if (!email.trim()) {
      setErrorMessage(defaultT.errorEmail);
      return;
    }
    if (!message.trim()) {
      setErrorMessage(defaultT.errorMessage);
      return;
    }
    if (!challengeAnswer.trim()) {
      setErrorMessage(defaultT.errorChallenge);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          website: websiteHoneypot, // Campo honeypot invisível
          challengeToken: challenge?.token,
          challengeAnswer: challengeAnswer.trim(),
          lang,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || defaultT.errorGeneric);
        // Atualiza a pergunta anti-bot em caso de erro para renovar o desafio
        fetchChallenge();
        return;
      }

      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setWebsiteHoneypot("");
      setChallengeAnswer("");

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
      setErrorMessage(defaultT.errorConnection);
      fetchChallenge();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    fetchChallenge();
  };

  return (
    <div
      className={`relative w-full max-w-xl mx-auto rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-neutral-900/5 dark:shadow-black/40 transition-all mb-12 ${className}`}
    >

      {isSuccess ? (
        /* Tela de Sucesso */
        <div className="flex flex-col items-center justify-center text-center py-8 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 mb-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-lg shadow-emerald-600/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            {t.successTitle}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
            {t.successMessage}
          </p>
          <Button
            variant="outline"
            size="md"
            onClick={handleResetForm}
            className="rounded-xl border-neutral-300 dark:border-neutral-700"
          >
            {t.sendAnotherButton}
          </Button>
        </div>
      ) : (
        /* Formulário de Contato */
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Cabeçalho */}
          {(t.title || t.description) && (
            <div className="mb-6">
              {t.title && (
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  {t.title}
                </h2>
              )}
              {t.description && (
                <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-200">
                  {t.description}
                </p>
              )}
            </div>
          )}

          {/* Mensagem de Erro */}
          {errorMessage && (
            <div
              role="alert"
              className="flex items-start gap-3 p-4 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-sm animate-in fade-in duration-200"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
              <div className="flex-1 font-medium">{errorMessage}</div>
            </div>
          )}

          {/* Campo: Nome */}
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-name`}
              className="block text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300"
            >
              <span className="inline-flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-neutral-400" />
                {t.nameLabel}
              </span>
            </label>
            <input
              id={`${formId}-name`}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              disabled={isSubmitting}
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/80 px-4 py-2.5 sm:py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>

          {/* Campo: E-mail */}
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-email`}
              className="block text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300"
            >
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                {t.emailLabel}
              </span>
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              disabled={isSubmitting}
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/80 px-4 py-2.5 sm:py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>

          {/* Campo: Mensagem */}
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-message`}
              className="block text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300"
            >
              <span className="inline-flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
                {t.messageLabel}
              </span>
            </label>
            <textarea
              id={`${formId}-message`}
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              disabled={isSubmitting}
              className="w-full resize-none rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/80 px-4 py-2.5 sm:py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>

          {/* ========================================================================= */}
          {/* CAMPO HONEYPOT: Invisível para humanos, mas bots preenchem automaticamente */}
          {/* ========================================================================= */}
          <div
            aria-hidden="true"
            style={{
              opacity: 0,
              position: "absolute",
              top: 0,
              left: 0,
              height: 0,
              width: 0,
              zIndex: -1,
              pointerEvents: "none",
            }}
          >
            <label htmlFor={`${formId}-website`}>{defaultT.honeypotLabel}</label>
            <input
              id={`${formId}-website`}
              type="text"
              name="website"
              value={websiteHoneypot}
              onChange={(e) => setWebsiteHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* ========================================================================= */}
          {/* CAMPO DE VALIDAÇÃO ANTI-BOT: Desafio matemático com renovação             */}
          {/* ========================================================================= */}
          <div className="p-4 rounded-2xl border border-orange-200/80 dark:border-orange-950/60 bg-orange-50/50 dark:bg-orange-950/20 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-800 dark:text-orange-400">
                <ShieldCheck className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span>{t.botQuestionLabel}</span>
              </div>
              <button
                type="button"
                onClick={fetchChallenge}
                disabled={isLoadingChallenge || isSubmitting}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-600 hover:text-orange-600 dark:text-neutral-300 dark:hover:text-orange-400 transition-colors disabled:opacity-50"
                title={defaultT.refreshTitle}
              >
                <RefreshCw
                  className={`w-3 h-3 ${isLoadingChallenge ? "animate-spin text-orange-600" : ""}`}
                />
                <span>{defaultT.refreshButton}</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 bg-white dark:bg-neutral-800/90 border border-neutral-300 dark:border-neutral-700 rounded-xl px-3.5 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 select-none">
                {isLoadingChallenge ? (
                  <span className="text-neutral-400 text-xs animate-pulse">{defaultT.loadingQuestion}</span>
                ) : (
                  <span>{challenge?.question || (lang === "cn" ? "3 + 4 等于多少？" : lang === "en" ? "What is 3 + 4?" : "Quanto é 3 + 4?")}</span>
                )}
              </div>

              <div className="w-28 sm:w-32">
                <input
                  id={`${formId}-challenge-answer`}
                  type="number"
                  inputMode="numeric"
                  required
                  value={challengeAnswer}
                  onChange={(e) => setChallengeAnswer(e.target.value)}
                  placeholder={t.botQuestionPlaceholder}
                  disabled={isLoadingChallenge || isSubmitting}
                  className="w-full text-center font-semibold rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/90 px-3 py-2 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <p className="text-[11px] text-neutral-600 dark:text-neutral-300">
              {t.botHelpText}
            </p>
          </div>

          {/* Botão de Enviar */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              disabled={isSubmitting || isLoadingChallenge}
              rightIcon={<Send className="w-4 h-4" />}
              className="w-full rounded-xl shadow-lg shadow-orange-600/20"
            >
              {isSubmitting ? t.submittingButton : t.submitButton}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
