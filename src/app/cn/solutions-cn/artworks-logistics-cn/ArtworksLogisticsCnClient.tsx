"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  ArrowRight,
  Clock,
  ShieldCheck,
  Truck,
  Layers,
  Landmark,
  CheckCircle2,
  FileText,
  Boxes,
  Sparkles,
  Eye,
  Lock,
  ThermometerSnowflake,
  FileSpreadsheet,
} from "lucide-react";

export default function ArtworksLogisticsCnClient() {
  const whatsappArtMessage =
    "您好！我想了解更多关于 NFT Logistics 艺术品与贵重文化藏品专业物流服务。";
  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    whatsappArtMessage
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* 模块 1: HERO                                                              */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/nft-art-2.jpg"
            alt="NFT Logistics 艺术品与博物馆级专业物流"
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
            <Palette className="w-4 h-4 text-orange-400" />
            <span>博物馆级艺术物流策展方案</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            艺术品与贵重文化资产专业物流服务
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 max-w-3xl leading-relaxed">
            为双年展、博物馆、画廊、拍卖行及私人藏家提供安全的巴西境内与跨国运输、定制恒温恒湿木箱以及全程海关特殊手续。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>咨询艺术品物流专家</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#steps-cn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>了解保护标准</span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-xl transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/20 border border-orange-300 dark:border-orange-400/40 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                国际公认 Nail-to-Nail (墙到墙) 服务标准
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                专业艺术品专递押运员全程陪同、手工定制博物馆级包装与严守商业机密。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 2: 双列图文介绍                                                      */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl dark:shadow-2xl group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/nft-art.jpg"
                    alt="艺术品与历史藏品的精密包装与运输"
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
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">博物馆级预防性保护</p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">严格控制温湿度、防潮与振动缓冲</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                极度敏感与高精标准
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                艺术品不是普通的货物：它们是需要奉献敬畏之心守护的文明瑰宝
              </h2>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                <p>
                  油画、古代雕塑、多媒体当代装置与珍贵文物的移动所遵循的规程远超普通商业物流。相对湿度的剧烈变化、温度骤变或不当的机械振动，都会对无价的藏品造成不可逆转的损害。
                </p>
                <p>
                  NFT Logistics 提供严格的“墙到墙”（Nail-to-Nail）闭环管理。我们定制采用 NIMF 15 国际标准的航海级胶合板木箱，内衬透气中性 Tyvek 材料与高密度防震泡沫，并出具详尽的《藏品状况技术报告》（Condition Reports）。
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  我们协助办理巴西历史艺术遗产局（IPHAN）与博物馆协会（IBRAM）的审批文书，设立免税暂时进境制度，并配置全额 All Risks Fine Arts 艺术品保险。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 3: 3项核心服务卡片                                                   */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              专业艺术服务
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              艺术品流转中每个环节的极致把控
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              针对油画画布、青铜、大理石雕塑、纸本手稿或多媒体现代装置提供针对性的工程防护方案：
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Boxes className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    结构性防护
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  恒温恒湿定制博物馆木箱
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  手工定制符合国际植检标准（NIMF 15）的防潮熏蒸木箱。内嵌 Tyvek 透气防护层、化学中性 Plastazote/Ethafoam 缓冲海绵及减震垫。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>符合 NIMF 15 国际标准与中性惰性材料</span>
              </div>
            </div>

            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Truck className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    全程不间断押运
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Nail-to-Nail 专车运输与专递陪同
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  采用全气囊悬挂恒温卡车，实时监控车厢温湿度与行驶轨迹。支持专业艺术品 Courier 专家在陆运和空运全流程贴身陪同。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>气囊减震悬挂与专属押运人员</span>
              </div>
            </div>

            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Landmark className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    政府文物法规合规
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  暂时进境与 IPHAN / IBRAM 批文
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  办理展览专用的暂时进境海关申报以免除进口关税。向巴西国家历史与艺术遗产局（IPHAN）和国家博物馆协会（IBRAM）申请出入境许可。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>免税海关制度与 IPHAN 批文代办</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 4: 竞争优势                                                          */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <span>机密与信赖</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                为什么 NFT Logistics 备受艺术界知名机构信赖？
              </h2>

              <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed">
                珍罕艺术品绝不能交由普通物流承运。任何运输震动都可能导致百年油彩微裂或雕塑结构失衡。
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                我们的专业人员佩戴无尘纯棉或医用手套操作，严格遵循国际博物馆协会（ICOM）的预防性保护准则，并严格履行保密协议（NDA）。
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span>与我们的艺术物流顾问洽谈</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      详尽状况报告 (Condition Report)
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      在提货与交付现场由专员进行细致查验，拍摄超高精度微距相片，详细记录藏品各个部位的现状。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <ThermometerSnowflake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      恒温恒湿车厢与空气悬挂
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      专车维持恒温（18°C 至 22°C）与恒湿（50% 至 55%），气囊避震系统百分之百吸收公路颠簸。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      All Risks Fine Arts 全险保单 (钉到钉)
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      与全球知名艺术品保险公司合作，定制涵盖起运地挂钩至目的地入库全行程的综合险保障。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      严格保密与安全押运
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      运输路线与时间绝对保密；对于特级高估值珍贵艺术品，提供便衣武装押运与卫星战术定位。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 5: 5步博物馆操作流程                                                 */}
      {/* ========================================================================= */}
      <section id="steps-cn" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              博物馆标准规程
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              艺术品物流五步实施流程
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              严格遵循国际文物与艺术保护标准，确保您的珍贵藏品受到全方位呵护。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">01</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  现场查验与初始状况报告
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  专员实地测量尺寸、评估材质框架状态，出具严谨的初始 Condition Report。
                </p>
              </div>
              
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">02</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Boxes className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  定制恒温熏蒸木箱包装
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  手工打制符合 NIMF 15 标准的专用木箱，配以 Tyvek 呼吸层与惰性减震海绵。
                </p>
              </div>
              
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">03</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  文化部批文与暂时进境清关
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  办妥 IPHAN 与 IBRAM 文化出入境许可证，办理展览专用的免税海关暂时进境。
                </p>
              </div>
              
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">04</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  气囊恒温专车与押运陪同
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  全气囊避震卡车转运，温湿度远程监控，专业押运专递员跟车保障。
                </p>
              </div>
              
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">05</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  环境适应与挂墙安装
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  进入展室环境适应静置期，专业开箱复核状态报告并配合布展固定。
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 模块 5.5: 珍稀艺术品与文化馆藏实操记录                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100/70 dark:bg-neutral-900/60 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>策展与馆藏保护</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              稀世珍品策展级包装、运输与防震实况
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
              真实呈现我们在文化遗产、馆藏文物及当代艺术品在跨国运输与布展中的严苛技术标准。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: "/imagens/nft-art.jpg",
                alt: "当代大型雕塑与装置艺术品运输",
                title: "重型雕塑与空间装置艺术",
                tag: "高阶减震吊装",
                desc: "气垫悬挂重型特种车运输，双年展及画廊大型雕塑毫米级精细位移。"
              },
              {
                src: "/imagens/nft-art-2.jpg",
                alt: "艺术品微观状态报告鉴定与检验",
                title: "状况报告（Condition Reports）与司法鉴定",
                tag: "数码高清存证",
                desc: "微观光学检测光油层、画布边缘及细微网状裂纹，进出境双向比对闭环存证。"
              },
              {
                src: "/imagens/operacao-nft-logistics.jpg",
                alt: "恒温恒湿定制木箱及防震缓冲内衬",
                title: "专属恒温定制木箱（ISPM 15）",
                tag: "微环境控制",
                desc: "双层结构博物馆级木箱，内附渐进式密度吸震发泡胶与铝箔高分子防潮密封气室。"
              },
              {
                src: "/imagens/operacao-nft-logistics-3.jpg",
                alt: "国际巡回展览与博物馆馆藏运输",
                title: "国际大展与巡展护航",
                tag: "全程点对点保障",
                desc: "在巴西国家历史艺术遗产局（IPHAN）与博物馆协会（IBRAM）监管下办理免税出入境手续并配套“钉到钉”全额险。"
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
            src="/imagens/nft-art-2.jpg"
            alt="NFT Logistics 艺术品物流咨询"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#180f08]/85 to-[#0a0a0a]/95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <Palette className="w-4 h-4 text-orange-400" />
            <span>艺术物流策展顾问</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            需要在绝对保密与全面保护下运送艺术品吗？
          </h2>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            欢迎直接咨询我们的艺术品物流策展团队。我们为美术馆、画廊、拍卖机构及私人藏家定制专属运输方案，恪守无条件保护承诺。
          </p>

          <div className="mt-10">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white font-bold text-base sm:text-lg shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15s-.779.98-.955 1.181c-.176.2-.352.226-.653.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527s-.678-1.633-.929-2.235c-.244-.587-.493-.507-.678-.517l-.578-.01c-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.281.497 1.719.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 21.657h-.002a9.63 9.63 0 0 1-4.912-1.341l-.352-.209-3.652.958.975-3.56-.229-.365a9.638 9.638 0 0 1-1.478-5.1c0-5.32 4.329-9.648 9.655-9.648 2.578 0 5.003 1.004 6.827 2.828a9.587 9.587 0 0 1 2.826 6.822c0 5.322-4.329 9.65-9.653 9.65zm8.172-17.825A11.536 11.536 0 0 0 12.04 0C5.642 0 .438 5.204.438 11.602c0 2.043.534 4.04 1.549 5.8l-1.646 6.012 6.155-1.614a11.577 11.577 0 0 0 5.544 1.411h.005c6.398 0 11.602-5.204 11.602-11.603a11.53 11.53 0 0 0-3.39-8.176z" />
              </svg>
              <span>通过 WhatsApp 直接咨询专家</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-300">
            为博物馆、双年展、画廊及私人藏家提供专属尊享服务。
          </p>
        </div>
      </section>
    </div>
  );
}
