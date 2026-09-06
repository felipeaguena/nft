import Hero from "@/src/components/Hero";
import Button from "@/src/components/Button";
import HomeClient from "@/src/components/HomeClient";

export default function CnPage() {
  return (
    <main>
      <Hero
        videoSrc="/videos/home-nft-logistics.mp4"
        title="我们协助全球企业在巴西参展、进口和运营，免除监管困扰。"
        subtitle="提供端到端的国际物流解决方案、海关清关与特殊监管制度咨询，助力您的全球业务与国际展会顺畅拓展巴西市场。"
        actions={
          <>
            <Button variant="primary" size="lg" href="/cn/contact-cn">
              联系我们
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/cn/solutions-cn"
              className="!border-white/40 !text-white hover:!bg-white/10 hover:!border-white/60 backdrop-blur-sm"
            >
              解决方案
            </Button>
          </>
        }
      />
      <HomeClient lang="cn" />
    </main>
  );
}


