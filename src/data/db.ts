/**
 * Consolidação dos dados estáticos da pasta `db/`.
 *
 * A pasta `db/` na raiz do projeto contém 10 arquivos JSON com dados estáticos
 * (navegação, contatos, conteúdo de seções, etc.). Esses JSONs NÃO são importados
 * por nenhum arquivo TypeScript do projeto — provavelmente são resquícios de uma
 * versão anterior ou usados por processos externos.
 *
 * Este módulo importa e re-exporta esses dados com tipagem TypeScript,
 * servindo como a fonte centralizada caso sejam necessários no código.
 *
 * Arquivos consolidados:
 * - contatos.json    → Dados de contato (email, whatsapp, redes sociais)
 * - datasEventos.json → Datas de próximos eventos/feiras
 * - nav.json          → Estrutura de navegação multilíngue
 * - nft-links.json    → Cartões digitais dos integrantes da equipe
 * - heroSection.json  → Conteúdo da seção hero (multilíngue)
 * - ctaSection.json   → Conteúdo de CTAs (multilíngue)
 * - stepsSection.json → Conteúdo da seção de passos/processo
 * - solutions.json    → Dados da grade de soluções
 * - solutionsShowcase.json → Dados do showcase de soluções
 * - privacy.json      → Conteúdo da política de privacidade
 */

// ─── Contatos ────────────────────────────────────────────────────────────────
import contatosJson from "@/db/contatos.json";
export const contatos = contatosJson;

// ─── Datas de Eventos ────────────────────────────────────────────────────────
import datasEventosJson from "@/db/datasEventos.json";
export const datasEventos = datasEventosJson;

// ─── Navegação ───────────────────────────────────────────────────────────────
import navJson from "@/db/nav.json";
export const nav = navJson;

// ─── Cartões Digitais (NFT Links) ───────────────────────────────────────────
import nftLinksJson from "@/db/nft-links.json";
export const nftLinks = nftLinksJson;

// ─── Seção Hero ──────────────────────────────────────────────────────────────
import heroSectionJson from "@/db/heroSection.json";
export const heroSection = heroSectionJson;

// ─── Seção CTA ───────────────────────────────────────────────────────────────
import ctaSectionJson from "@/db/ctaSection.json";
export const ctaSection = ctaSectionJson;

// ─── Seção Steps ─────────────────────────────────────────────────────────────
import stepsSectionJson from "@/db/stepsSection.json";
export const stepsSection = stepsSectionJson;

// ─── Soluções ────────────────────────────────────────────────────────────────
import solutionsJson from "@/db/solutions.json";
export const solutions = solutionsJson;

// ─── Showcase de Soluções ────────────────────────────────────────────────────
import solutionsShowcaseJson from "@/db/solutionsShowcase.json";
export const solutionsShowcase = solutionsShowcaseJson;

// ─── Política de Privacidade ─────────────────────────────────────────────────
import privacyJson from "@/db/privacy.json";
export const privacy = privacyJson;
