import type { Metadata } from "next";
import ContactForm from "@/src/components/ContactForm";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Hero from "@/src/components/Hero";
import Button from "@/src/components/Button";

export const metadata: Metadata = {
  title: "联系我们 | NFT Logistics",
  description:
    "联系 NFT Logistics，获取国际物流、海关清关与对外贸易的定制化专业解决方案。",
  alternates: {
    canonical: "/cn/contact",
  },
};

export default function ContactCnPage() {
  return (
    <main className="flex flex-col items-center relative bg-neutral-50 dark:bg-[#0a0a0a] transition-colors justify-center">
      <Hero
        className="mb-16"
        imageSrc="/imagens/complemento-nft-logistics-2.webp"
        title="联系我们"
        subtitle="在 NFT Logistics，我们深耕特殊运营的专业团队是我们物流解决方案的核心。"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 左侧联系信息栏 (5列) */}
          <div className="lg:col-span-5 space-y-8 pt-2 max-w-lg mx-6">
            <div>
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 rounded-full border border-orange-200 dark:border-orange-900/60">
                专业服务
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                探讨您的下一个项目合作？
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
                我们的专业团队随时准备了解您的运营挑战，在国际物流和海关清关领域提供量身定制的高效解决方案。
              </p>
            </div>

            {/* 联系方式卡片 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">电子邮箱</h3>
                  <a
                    href="mailto:comercial@nftlogistics.com.br"
                    className="text-sm text-neutral-700 dark:text-neutral-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    comercial@nftlogistics.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">办公地点</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200">
                    巴西 圣保罗 (São Paulo - SP, Brazil)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">服务时间</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200">
                    周一至周五，09:00 - 18:00 (巴西利亚时间 BRT)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧表单栏 (7列) */}
          <div className="lg:col-span-7 pt-2 max-w-lg mx-6">
            <ContactForm
              lang="cn"
              title="发送留言"
              description="请在下方填写您的信息并详细说明您的需求。"
            />
          </div>
        </div>
      </div>

      <Hero
        imageSrc="/imagens/feira-nft-logistics-7.jpg"
        title="携手巴西展会与大型活动首选的国际物流专家团队！"
        actions={
          <>
            <Button variant="primary" size="lg" href="mailto:comercial@nftlogistics.com.br" rightIcon={<ArrowRight />}>
              联系我们
            </Button>
          </>
        }
      />
    </main>
  );
}
