"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Activity,
  ArrowRight,
  ChevronDown,
  FileCheck2,
  Stethoscope,
  CalendarCheck,
} from "lucide-react";

export default function HealthCnPageClient() {
  // FAQ 手风琴状态 (模块 5)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // WhatsApp 咨询预设信息
  const whatsappCtaMessage =
    "我想参加巴西的展会，但我的医疗设备尚未在 Anvisa 注册，希望启动进口流程。";
  const whatsappHref = `https://wa.me/5511948530048?text=${encodeURIComponent(
    whatsappCtaMessage
  )}`;

  return (
    <div className="w-full bg-[#050b14] text-neutral-100 overflow-hidden">
      {/* ========================================================================= */}
      {/* 模块 1: HERO 首屏                                                         */}
      {/* 标签、主副标题、按钮以及专业合规信任背书                                   */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* 背景图与深蓝医院医疗滤镜 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/Home-Health-NFT-Logistics.jpg"
            alt="NFT Logistics 医疗设备与医院物流进口服务"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.42]"
          />
          {/* 医疗深蓝深青色渐变叠加 */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b14]/70 via-[#071933]/50 to-[#050b14]" />
          {/* 微光特效 */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/15 blur-[120px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* 官方展会货代身份标签 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Activity className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>Hospitalar 巴西国际医疗展官方指定国际货运代理</span>
          </div>

          {/* 主标题 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            医疗设备与医院精密机械进口至巴西
          </h1>

          {/* 补充说明 */}
          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
            专注于医院设备与医疗展会“暂时进境”（Admissão Temporária）特殊制度。全流程合规 | 全额税费暂免 | 精确时效把控
          </p>

          {/* 首屏行动按钮 */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#steps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-semibold text-base shadow-lg shadow-sky-600/30 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>了解操作流程</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>咨询行业专家</span>
            </a>
          </div>

          {/* 合规保障卡片 */}
          <div className="mt-12 border-t border-sky-900/40 flex items-center justify-center gap-3.5 max-w-xl text-left bg-sky-950/20 backdrop-blur-sm px-5 py-3.5 rounded-2xl border border-sky-800/30">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 text-sky-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                100% 监管合规操作
              </p>
              <p className="text-xs text-neutral-300 leading-snug mt-0.5">
                资深专家全程把关巴西国家卫生监督局（Anvisa）技术准入、卫生决议（RDC）及严苛国际装卸规范。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 2: 3 个深色卡片                                                      */}
      {/* 悬停时切换为亮蓝背景与白色文字                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#040912] border-t border-sky-950/50">
        <div className="max-w-7xl mx-auto">
          {/* 模块标题栏 */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/50 px-3.5 py-1 rounded-full">
              零意外进入巴西市场
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-white">
              医疗设备暂时进境的核心挑战
            </h2>
            <p className="mt-3 text-neutral-200 text-sm sm:text-base leading-relaxed">
              医疗设备物流操作要求如外科手术般精准。大型诊断系统、手术机器人与尖端科技设备在跨国调配中绝不容许出现监管合规风险。进入巴西最稳妥、高效的路径即为暂时进境制度（Admissão Temporária）。
            </p>
          </div>

          {/* 3 张卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 卡片 1 */}
            <div className="group relative rounded-2xl p-8 bg-[#09111e] shadow-xl transition-all duration-300 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-600/30 hover:-translate-y-1 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-950/80 text-sky-400 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-sky-600 group-hover:border-transparent transition-all duration-300">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  医疗器械与成套诊断设备
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  针对CT机、核磁共振（MRI）、超声系统、实验室分析仪及高价值手术激光设备，提供具备避震防护的专业清关与技术级运输。
                </p>
              </div>
            </div>

            {/* 卡片 2 */}
            <div className="group relative rounded-2xl p-8 bg-[#09111e] shadow-xl transition-all duration-300 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-600/30 hover:-translate-y-1 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-950/80 text-sky-400 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-sky-600 group-hover:border-transparent transition-all duration-300">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  展会、国际研讨会与现场演示
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  为跨国企业在 Hospitalar 医疗展、学术峰会及临床展示中参展医疗设备，提供全额暂停进口关税的暂时进境方案。
                </p>
              </div>
            </div>

            {/* 卡片 3 */}
            <div className="group relative rounded-2xl p-8 bg-[#09111e] shadow-xl transition-all duration-300 hover:bg-sky-600 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-600/30 hover:-translate-y-1 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-950/80 text-sky-400 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-sky-600 group-hover:border-transparent transition-all duration-300">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  法规事务与 Anvisa 卫生监管
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  严谨编制与审核技术卷宗、进口许可证（通过 Siscomex / LPCO 模块）、严格符合卫生决议（RDC），并在保税监管现场全程陪同查验。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 3: 双列布局                                                          */}
      {/* 左侧：标题与解说；右侧：5 个纵向步骤卡片                                   */}
      {/* ========================================================================= */}
      <section id="steps" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#060e1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* 左侧栏 */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <span>标准化实施步骤</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                医疗设备进入巴西的 5 大战略步骤
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                医疗健康产品的进口需要遵循极其严密的程序。发票、税则归类与卫生监管要求之间的任何细微不符，都可能导致设备在海港或机场口岸滞留。
              </p>

              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                我们的方法论确保法律合规的高确定性、清关通关的高效迅速，并在到达最终目的地前全面保护仪器校准与高敏状态。
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-sky-600/25"
                >
                  <span>针对您的设备咨询详情</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 右侧栏: 5 个战略步骤 */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
              {/* 步骤 1 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      法规诊断与海关税则归类 (NCM / HS 编码)
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      深入分析医疗设备技术规范，确定准确的巴西税则编码（NCM），核定卫生监管风险等级（I 至 IV 类）以及 LPCO 模块申请要求。
                    </p>
                  </div>
                </div>
              </div>

              {/* 步骤 2 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      技术卷宗编制与 Anvisa 许可申报 (LI / LPCO)
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      编制全套申报文件，通过 Siscomex / LPCO 系统递交进口许可证申请，并在始发港起运前确保所有前置卫生合规手续完备。
                    </p>
                  </div>
                </div>
              </div>

              {/* 步骤 3 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      特种防护包装与国际干线运输
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      按 ISPM 15（NIMF 15）国际标准量身定制防震、防撞木箱包装，配置专用减震缓冲结构，并提供全程可视化的国际干线运输。
                    </p>
                  </div>
                </div>
              </div>

              {/* 步骤 4 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      口岸海关清关与卫生监督现场查验
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      由资深关务专员在海港/空港现场全程陪同巴西联邦税务局与卫生局进行单证与实物查验，大幅加快 LI 获批与海关放行。
                    </p>
                  </div>
                </div>
              </div>

              {/* 步骤 5 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      特种内陆运输与目的地技术级交付
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      配备气囊减震与温控厢式车队进行公路运输，并在医院、实验室、诊所或展馆现场提供重型吊装与精密卸货就位。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 4: 实操经验与案例                                                    */}
      {/* 2 列 4 张图片卡片                                                         */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#040812] border-t border-sky-950/50">
        <div className="max-w-7xl mx-auto">
          {/* 标题 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/50 px-3.5 py-1 rounded-full">
              实际应用经验
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              实操实绩与口碑背书
            </h2>
            <p className="mt-3 text-neutral-200 text-sm sm:text-base leading-relaxed">
              在巴西医疗物流、大型国际展会与尖端设备供应链领域成功执行多起高难度复杂项目。
            </p>
          </div>

          {/* 4 张案例卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* 卡片 1 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e] shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/health-1-nft-logistics.jpg"
                  alt="手术系统与诊断影像设备进口"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  高精密与复杂项目
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  手术动力系统与高端医学影像诊断设备
                </h3>
              </div>
            </div>

            {/* 卡片 2 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e] shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/doutores-health.nft-logistics.webp"
                  alt="巴西国际医疗展会与学术研讨会"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  暂时进境制度
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  用于医学学术大会现场临床实操演示的手术机器人系统
                </h3>
              </div>
            </div>

            {/* 卡片 3 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e] shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/transporte-nft-logistics.webp"
                  alt="高灵敏医疗设备特种专业运输"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  特种工程物流
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  针对高灵敏度精密医疗仪器的技术运输与专业装卸
                </h3>
              </div>
            </div>

            {/* 卡片 4 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e] shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/anvisa-health-nft-logistics.webp"
                  alt="巴西卫生监督局 Anvisa 审批与放行"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  卫生合规保障
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  过去 12 个月内巴西 ANVISA 暂时进境审批保持 100% 成功率
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 5: 常见问题解答 (FAQ)                                                */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#050b16]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* 左侧栏 */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <span>常见问题</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                医疗健康设备进口常见疑问解答
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed">
                解答关于巴西卫生监管法规、口岸清关流程，以及尚未取得巴西正式注册许可的医疗设备赴巴参展的常见问题。
              </p>

              <div className="pt-2 text-sm text-neutral-300">
                还有其他具体产品的问题？{" "}<br />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline font-medium"
                >
                  即刻与我们的法规事务团队沟通
                </a>
                。
              </div>
            </div>

            {/* 右侧栏: 手风琴 3 个问题 */}
            <div className="lg:col-span-7 space-y-4">
              {/* 问题 1 */}
              <div className="rounded-2xl bg-[#091220] border border-sky-950/70 overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(0)}
                  aria-expanded={openFaqIndex === 0}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-sky-950/20 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    如果医疗设备尚未在巴西 Anvisa 注册，是否可以进口用于展会展示？
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-sky-950/80 border border-sky-800/50 flex items-center justify-center shrink-0 text-sky-400 transition-transform duration-300 ${
                      openFaqIndex === 0 ? "rotate-180 bg-sky-600 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {openFaqIndex === 0 && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-sky-950/60 pt-4">
                    <p>
                      <strong>可以！</strong> 根据巴西现行海关法规，医疗机械与医院设备可以通过<strong>商业展会与会议专属的“暂时进境”（Admissão Temporária）特殊海关制度</strong>进入巴西。在该制度下，全额免除/暂停缴纳进口税费，且无需具备 Anvisa 终审商业销售注册证即可进行实物展示与实机演示，前提是在展会结束后原样复出口退运。
                    </p>
                  </div>
                )}
              </div>

              {/* 问题 2 */}
              <div className="rounded-2xl bg-[#091220] border border-sky-950/70 overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(1)}
                  aria-expanded={openFaqIndex === 1}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-sky-950/20 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    进口医院设备和医疗用品需要准备哪些单证文件？
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-sky-950/80 border border-sky-800/50 flex items-center justify-center shrink-0 text-sky-400 transition-transform duration-300 ${
                      openFaqIndex === 1 ? "rotate-180 bg-sky-600 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {openFaqIndex === 1 && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-sky-950/60 pt-4">
                    <p>
                      所需单证包括：商业发票（Commercial Invoice）、装箱单（Packing List）、国际提单（海运提单 BL 或空运提单 AWB）、通过巴西外贸系统 Siscomex/LPCO 核发的进口许可证（LI）、设备技术参数与规格卷宗；如为境内商业分销，还须提供对应的卫生注册/备案凭证及产品合格认证文件。
                    </p>
                  </div>
                )}
              </div>

              {/* 问题 3 */}
              <div className="rounded-2xl bg-[#091220] border border-sky-950/70 overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(2)}
                  aria-expanded={openFaqIndex === 2}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-sky-950/20 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    NFT Logistics 如何保障精密脆弱的医疗设备在运输中万无一失？
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-sky-950/80 border border-sky-800/50 flex items-center justify-center shrink-0 text-sky-400 transition-transform duration-300 ${
                      openFaqIndex === 2 ? "rotate-180 bg-sky-600 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {openFaqIndex === 2 && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-sky-950/60 pt-4">
                    <p>
                      我们量身打造经过严格热处理熏蒸（符合 NIMF 15 / ISPM 15 标准）的多层减震防冲击木箱。内陆段全部采用气囊悬挂车队，配备温湿度监测与倾角感应器，并安排经验丰富的技术工程人员在交付地负责专业吊装与平稳就位。
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 6: 尾部 CTA 咨询转化                                                 */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030712] border-t border-sky-950/60">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/Home-Health-NFT-Logistics.jpg"
            alt="预约咨询巴西医疗设备与展会物流"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#06152b]/85 to-[#030712]/95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <Activity className="w-4 h-4 text-sky-400" />
            <span>预约专属咨询</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            切勿将精密设备托付给普通货代。选择真正精通 ANVISA 卫生法规与特殊海关制度的专家。
          </h2>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            无论是在无 Anvisa 注册的情况下赴巴参展演示，还是将医疗科技产品正式引入巴西市场，我们的专家团队都会全程为您护航。
          </p>

          <div className="mt-10">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white font-bold text-base sm:text-lg shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <svg
                className="w-6 h-6 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15s-.779.98-.955 1.181c-.176.2-.352.226-.653.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527s-.678-1.633-.929-2.235c-.244-.587-.493-.507-.678-.517l-.578-.01c-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.281.497 1.719.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 21.657h-.002a9.63 9.63 0 0 1-4.912-1.341l-.352-.209-3.652.958.975-3.56-.229-.365a9.638 9.638 0 0 1-1.478-5.1c0-5.32 4.329-9.648 9.655-9.648 2.578 0 5.003 1.004 6.827 2.828a9.587 9.587 0 0 1 2.826 6.822c0 5.322-4.329 9.65-9.653 9.65zm8.172-17.825A11.536 11.536 0 0 0 12.04 0C5.642 0 .438 5.204.438 11.602c0 2.043.534 4.04 1.549 5.8l-1.646 6.012 6.155-1.614a11.577 11.577 0 0 0 5.544 1.411h.005c6.398 0 11.602-5.204 11.602-11.603a11.53 11.53 0 0 0-3.39-8.176z" />
              </svg>
              <span>通过 WhatsApp 咨询专家</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-300">
            专人即时响应展会、峰会参展及医院设备进口需求。
          </p>
        </div>
      </section>
    </div>
  );
}
