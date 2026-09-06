"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle2,
  FileText,
  Boxes,
  Sparkles,
  Ship,
  HardHat,
  Milestone,
  ScrollText,
  Navigation,
} from "lucide-react";

export default function CustomizedProjectsCnClient() {
  const whatsappProjectMessage =
    "您好！我想与NFT Logistics的重大件与工程物流专家咨询定制物流方案。";
  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    whatsappProjectMessage
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* 模块 1: HERO                                                              */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/transporte-nft-logistics.webp"
            alt="NFT Logistics 特种重大件定制工程物流"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#160d06]/75 to-neutral-50 dark:to-[#0a0a0a] transition-colors duration-200" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-600/15 blur-[130px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Compass className="w-4 h-4 text-orange-400" />
            <span>运输工程与重大件项目物流</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            超限与特种重大件定制项目物流
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 max-w-3xl leading-relaxed">
            提供多式联运、路线勘测（Route Survey）及超限（OOG）、散杂货（Breakbulk）与不可分割大型工业设备的端到端工程物流统筹方案。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>联系物流工程专家</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#steps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>查看工程实施方法</span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-xl transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/20 border border-orange-300 dark:border-orange-400/40 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                严谨工程技术、极致安全与绝对准时
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                为能源电力、矿业开采、石油化工、基础设施建设及重工业领域提供高难度重型物流保障。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 2: 图文双列                                                           */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl dark:shadow-2xl group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/operacao-nft-logistics-5.jpg"
                    alt="重大件项目运作与特种吊装 NFT Logistics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">从出厂到基座就位（Door-to-Foundation）</p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">从工厂起吊、多式联运至现场设备基座精确定位</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                量身定制物流工程
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                每个项目独一无二：为您精确规划每一毫米与每一分钟
              </h2>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                <p>
                  超限（OOG）或超重设备绝不容许任何侥幸。工业生产线总成、高压变压器、风电叶片、重型轮机及大型采矿设备，在启动任何物理移位前，都必须经过周密的工程技术模拟与路线验算。
                </p>
                <p>
                  NFT Logistics 深度融合运输工程学、路线通过性论证与专业清关报检。我们实地测量桥梁隧道荷载净空、道路转弯半径、跨空电线高度及港口泊位起重能力，统一申请超限通行许可证（AET）并部署合规护航团队。
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  统筹大型履带吊与汽车吊（Heavy Lift）、散杂货船部分或全船包租（Chartering）及全套一切险（All Risks）保单，全方位护航企业核心资产安全。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 3: 3项核心运力卡片                                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              专业运营能力
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              非标货物的体系化工程解决方案
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              为突破地理和尺寸限制而专属打造的高精度运输作业模式：
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 卡片 1 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Boxes className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    超限超重货物
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  OOG超限箱与框架箱（Flat Rack）
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  针对超出标准集装箱长宽高限制的工业机械、重型特种车辆及大型结构部件。采用框架箱（Flat Rack）、开顶箱（Open Top）及特种承重平台，配备国际认证的船级系固绑扎（Lashing）方案。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>特种集装箱装载与系固验算</span>
              </div>
            </div>

            {/* 卡片 2 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Ship className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    专用散杂货船与船舶租船
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  散杂货（Breakbulk）与不可分割重大件
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  适用于无法集装箱化、数百吨级不可拆解单体设备。统筹甲板及船舱积载规划、甲板载重负荷计算、散杂货船全船/部分包租及港口码头现场理货与理舱监管。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>海运租船与专业积载监装</span>
              </div>
            </div>

            {/* 卡片 3 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Truck className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    重载陆运与液压轴线车
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  特种公路重型运输与专业警力护航
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  调度超低平板半挂车、伸缩抽拉车及液压模块化多轴线板车（SPMT）。协调各级公路局、收费公路运营方、专业警车及引导车队，统筹清障移树与电力架线升降配合。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>多轴液压车组与全线押运</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 4: 优势与特色                                                         */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <span>工程技术与可靠交付</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                为何选择将核心重大件交由 NFT Logistics？
              </h2>

              <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed">
                重大件工程物流占据工业项目建设的核心投资。任何途中的延误或意外，都会直接导致全厂工程停摆并造成难以估量的巨额经济损失。
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                我们的资深物流工程师与运营专家全盘预判：精确验算货物重心、规划严密的起重吊装方案（Rigging Plan），并以最高效率办理各项跨部门特种准行许可。
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span>与工程专家团队沟通</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* 卡片 1 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Milestone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      全程实地路线勘测（Route Survey）
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      对行经路线实施严密几何三维测绘，模拟车辆拐弯轨迹、核验桥梁与立交桥承载极限、排查高空线网高度并制定备用绕行预案。
                    </p>
                  </div>
                </div>
              </div>

              {/* 卡片 2 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <ScrollText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      特种通行许可证与政府审批（AET / 交通部门）
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      高效办理巴西联邦及各州、市政各级特殊通行许可（AET），协调调度专业护航车辆与交警巡逻保障。
                    </p>
                  </div>
                </div>
              </div>

              {/* 卡片 3 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      吊装索具工程（Rigging Plan）
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      严密验算吊具、钢丝绳索、平衡梁规格以及伸缩臂吊车与履带吊的负荷半径，确保垂直吊装作业零误差、零风险。
                    </p>
                  </div>
                </div>
              </div>

              {/* 卡片 4 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      工程总监全流程驻场把控
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      资深工程总监亲临发运工厂起运端、港口码头换装现场、驳船转运及最终工业园区基座交付现场全程把关。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 5: 五步实施流程                                                       */}
      {/* ========================================================================= */}
      <section id="steps" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              操作方法论
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              定制工程物流实施的五大阶段
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              历经实践验证的严密工程方法论，保障关键工业装备安全、精准、准时运抵交付。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* 步骤 1 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">01</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  技术可行性论证
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  详细评估货物重量尺寸、重心分布、起吊受力点，制定最佳多式联运路径与运输方案。
                </p>
              </div>
              
            </div>

            {/* 步骤 2 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">02</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Milestone className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  路线勘测与吊装方案
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  实地勘探道路净空与桥梁承载力，编制专业吊车吊装图纸及货物绑扎固定（Lashing Plan）方案。
                </p>
              </div>
              
            </div>

            {/* 步骤 3 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">03</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <ScrollText className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  准行审批与交通护航
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  向交通主管机构申领超限准行证，协调引导车队伍与沿途各管区交警护送编队。
                </p>
              </div>
            </div>

            {/* 步骤 4 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">04</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Ship className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  多式联运发运与在途监控
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  特种船舶租船运输、港口码头专人理货换装监护及重载运输GPS多维度实时追踪。
                </p>
              </div>
              
            </div>

            {/* 步骤 5 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">05</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  现场吊装与基座落位
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  在最终目的地现场实施工程卸车，毫厘不差落位于工厂设备基础（Door-to-Foundation），完成签署验收。
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 5.5: 高难度工程与重型大件项目实操案例                                */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100/70 dark:bg-neutral-900/60 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>实战案例库</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              高难度复杂工业货物实景执行
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
              真实记录大型工业重型机械搬迁、新能源电站、精密制造产线及现场重吊组装。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: "/imagens/operacao-nft-logistics.jpg",
                alt: "不可分割大型工业机械公路运输",
                title: "重型工业产线与整机运输",
                tag: "多式联运工程",
                desc: "大型冲压机与不可拆卸工业构件的技术移位，配备特种超低平板挂车与持证警车护航。"
              },
              {
                src: "/imagens/operacao-nft-logistics-2.jpg",
                alt: "机械设备现场拆箱与重装卸车",
                title: "机械化拆箱与起重就位",
                tag: "专业工程吊装",
                desc: "在客户厂区内使用重型叉车、随车吊及大型伸缩臂汽车起重机进行毫米级精准落位。"
              },
              {
                src: "/imagens/transporte-nft-logistics.webp",
                alt: "重载公路运输护航车队",
                title: "特种公路护航与通行许可",
                tag: "专属公路重运车队",
                desc: "高效获批巴西国家陆路交通局（DNIT）与州公路局（DER）超限运输特准通行许可（AET）。"
              },
              {
                src: "/imagens/intersolar-nft-logistics.webp",
                alt: "光伏电站与新能源基建特种设备",
                title: "太阳能光伏与新能源基建",
                tag: "能源电力设施",
                desc: "大功率逆变器升压变压器及高密度光伏支架工程货物的现场准时精准交付。"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 shadow-md hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-neutral-900/80 backdrop-blur-md text-orange-400 border border-white/10">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 6: CTA                                                               */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060606] border-t border-neutral-800/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/intersolar-nft-logistics.webp"
            alt="NFT Logistics 重大件与特种工程物流咨询"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#180f08]/85 to-[#0a0a0a]/95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <Compass className="w-4 h-4 text-orange-400" />
            <span>重大件工程物流咨询</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            货物超重、超大或结构极度复杂？我们为您解决。
          </h2>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            直接与我们的运输工程师和重运物流专家交谈。我们为您提供全方位可行性评估与专属运输路线规划。
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
            为巴西全境及跨境国际重点工程项目提供端到端技术保障与实施交付。
          </p>
        </div>
      </section>
    </div>
  );
}
