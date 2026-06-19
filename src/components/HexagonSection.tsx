import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useTheme, useLanguage, Language } from "../theme";
import { Check, Zap, Shield, Crown, ArrowRight } from "lucide-react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

const TRANSLATIONS = {
  "日本語": {
    brandName: "ONISAKI株式会社",
    heroSubtitle: "深淵なるテクノロジー",
    scroll: "Scroll",
    pricingTitle: "Pricing Plans",
    operationsDescPre: "ONISAKI株式会社は、最先端の",
    operationsDescBold: "Web開発・デザイン・サイト運用",
    operationsDescPost: "を一貫して行っています。お客様のビジネスフェーズに合わせた最適なWebソリューションをご提供します。",
    contactBtn: "お問い合わせ",
  },
  "English": {
    brandName: "ONISAKI Co., Ltd.",
    heroSubtitle: "Deep Tech & Design Craftsmanship",
    scroll: "Scroll",
    pricingTitle: "Pricing Plans",
    operationsDescPre: "ONISAKI Co., Ltd. provides end-to-end cutting-edge ",
    operationsDescBold: "Web Development, Design & Operations",
    operationsDescPost: ". We deliver optimal web solutions tailored to your business stage.",
    contactBtn: "Inquiries",
  },
  "简体中文": {
    brandName: "ONISAKI 株式会社",
    heroSubtitle: "深邃科技与匠心开发",
    scroll: "向下滑动",
    pricingTitle: "制作方案",
    operationsDescPre: "ONISAKI 株式会社提供前沿的一站式",
    operationsDescBold: "网页开发、设计与运维服务",
    operationsDescPost: "。根据您企业的不同发展阶段，量身打造最优质的网页解决方案。",
    contactBtn: "联系我们",
  },
  "繁體中文": {
    brandName: "ONISAKI 株式会社",
    heroSubtitle: "深邃科技與匠心開發",
    scroll: "向下滑動",
    pricingTitle: "製作方案",
    operationsDescPre: "ONISAKI 株式会社提供前沿的一站式",
    operationsDescBold: "網頁開發、設計與運維服務",
    operationsDescPost: "。根據您企業的不同發展階段，量身打造最優質的網頁解決方案。",
    contactBtn: "聯絡我們",
  }
};

const PLANS_DATA = {
  "日本語": [
    {
      id: "simple",
      name: "シンプルデザイン",
      sub: "SIMPLE DESIGN",
      price: "10,000",
      unit: "円(固定)",
      desc: "創業初期や、まずは名刺代わりのサイトが欲しい方に最適。",
      features: [
        "シンプルで洗練されたデザイン",
        "サーバー代・ドメイン代無料",
        "ドメインいつでも差し替え可能",
        "保守管理費 0円",
        "永久使用可能",
        "最短48時間で納品・公開",
        "創業初期・スタートアップ向け"
      ]
    },
    {
      id: "standard",
      name: "スタンダードデザイン",
      sub: "STANDARD DESIGN",
      price: "50,000",
      unit: "円(固定)",
      desc: "ブランドイメージを重視し、より高度な機能を求める方に。",
      highlight: true,
      features: [
        "独自のデザインスタイル適用",
        "高級・高速サーバー採用",
        "SEO最適化（基本設定）",
        "レスポンシブ完全対応",
        "お問い合わせフォーム設置",
        "SNS連携・OGP設定",
        "ブランド力向上に最適"
      ]
    },
    {
      id: "custom",
      name: "カスタムデザイン",
      sub: "CUSTOM DESIGN",
      price: "200,000",
      unit: "円〜",
      desc: "細部までこだわり抜いた、世界に一つだけの完全オーダーメイド。",
      features: [
        "100%完全オリジナルデザイン",
        "フルオーダーメイド開発",
        "高度なアニメーション・演出",
        "複雑なシステム連携対応",
        "専属デザイナーによる監修",
        "徹底したパフォーマンス改善",
        "大規模・プロフェッショナル向け"
      ]
    }
  ],
  "English": [
    {
      id: "simple",
      name: "Simple Design",
      sub: "SIMPLE DESIGN",
      price: "10,000",
      unit: "JPY (Fixed)",
      desc: "Ideal for early-stage startups or those who want a digital business card first.",
      features: [
        "Simple & sophisticated design",
        "Free server & domain fee",
        "Replaceable domain at any time",
        "0 JPY maintenance fee",
        "Permanent usage license",
        "Launch within 48 hours",
        "Designed for early-stage & startups"
      ]
    },
    {
      id: "standard",
      name: "Standard Design",
      sub: "STANDARD DESIGN",
      price: "50,000",
      unit: "JPY (Fixed)",
      desc: "For those prioritizing brand identity and requiring more advanced features.",
      highlight: true,
      features: [
        "Tailored bespoke styles applied",
        "Premium high-speed servers",
        "SEO optimization (basic setup)",
        "Fully responsive on all screens",
        "Inquiry contact form inclusion",
        "Social media & OGP metadata setup",
        "Optimized for brand value improvement"
      ]
    },
    {
      id: "custom",
      name: "Custom Design",
      sub: "CUSTOM DESIGN",
      price: "200,000",
      unit: "JPY ~",
      desc: "Fully customized from scratch, down to the absolute finest details.",
      features: [
        "100% original custom layouts",
        "Tailor-made full-scale development",
        "Advanced interactive animations",
        "Complex system & third-party integrations",
        "Supervision by dedicated designers",
        "Rigorous performance optimization",
        "Built for enterprise & professionals"
      ]
    }
  ],
  "简体中文": [
    {
      id: "simple",
      name: "简约设计",
      sub: "SIMPLE DESIGN",
      price: "10,000",
      unit: "日元 (固定费)",
      desc: "适用于创业初期、精简建站或需要线上电子展示型网站 of 客户。",
      features: [
        "极简且富有质感的设计",
        "免服务器费和域名费",
        "随时支持域名更换",
        "0 元后期维护管理费",
        "永久可供合规使用",
        "最快 48 小时内交付上线",
        "专为初期创始和初创团队打造"
      ]
    },
    {
      id: "standard",
      name: "标准设计",
      sub: "STANDARD DESIGN",
      price: "50,000",
      unit: "日元 (固定费)",
      desc: "注重品牌视觉形象，需要更高级、更全能网页功能的客户首选。",
      highlight: true,
      features: [
        "应用定制专属视觉设计",
        "采用极速优质服务器",
        "搜索引擎优化（SEO 基础设置）",
        "移动端/全端自适应响应",
        "配备专属在线联系表单",
        "社交媒体联动与 OGP 分享设置",
        "提升品牌整体公信力的出众之选"
      ]
    },
    {
      id: "custom",
      name: "高端定制",
      sub: "CUSTOM DESIGN",
      price: "200,000",
      unit: "日元起~",
      desc: "精雕细琢，独一无二的全新一站式尊豪定制开发。",
      features: [
        "100% 独立原创定制化设计",
        "深度原生全量定制化开发",
        "电影级动效与极流畅微交互",
        "支撑复杂业务系统级对接",
        "资深专属设计师全程把驾护航",
        "超高运行性能与极速秒开体验",
        "适用于大中型、高标准企业级项目"
      ]
    }
  ],
  "繁體中文": [
    {
      id: "simple",
      name: "簡約設計",
      sub: "SIMPLE DESIGN",
      price: "10,000",
      unit: "日元 (固定費)",
      desc: "適用於創業初期、精簡建站或需要線上電子展示型網站的客戶。",
      features: [
        "極簡且富有質感的设计",
        "免伺服器費和網域費",
        "隨時支援網域更換",
        "0 元後期維護管理費",
        "永久可供合規使用",
        "最快 48 小時內交付上線",
        "專為初期創始和新創團隊打造"
      ]
    },
    {
      id: "standard",
      name: "標準設計",
      sub: "STANDARD DESIGN",
      price: "50,000",
      unit: "日元 (固定費)",
      desc: "注重品牌視覺形象，需要更高級、更全能網頁功能的客戶首選。",
      highlight: true,
      features: [
        "應用定制專屬視覺設計",
        "採用極速優質伺服器",
        "搜尋引擎最佳化（SEO 基礎設置）",
        "行動端/全端自適應響應",
        "配備專屬線上聯絡表單",
        "社交媒體連動與 OGP 分享設置",
        "提升品牌整體公信力的出眾之選"
      ]
    },
    {
      id: "custom",
      name: "高端定制",
      sub: "CUSTOM DESIGN",
      price: "200,000",
      unit: "日元起~",
      desc: "精雕細琢，獨一無二的全新一站式尊豪定制開發。",
      features: [
        "100% 獨立原創設計",
        "深度原生全量定制開發",
        "電影級動效與流暢微交互",
        "支援複雜業務系統對接",
        "資深專屬設計師全程把關",
        "高性能與極速網頁體驗",
        "適用於大中型企業級項目"
      ]
    }
  ]
};

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const timeoutRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const scramble = () => {
      let iteration = 0;
      const maxIterations = 20;
      clearInterval(intervalRef.current);
      
      intervalRef.current = setInterval(() => {
        if (!isMounted) return;
        setDisplayText((prev) => {
          return text
            .split("")
            .map((char, index) => {
              if (index < (iteration / maxIterations) * text.length) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
        });

        iteration++;

        if (iteration > maxIterations) {
          clearInterval(intervalRef.current);
          if (isMounted) setDisplayText(text);
          scheduleNext();
        }
      }, 50);
    };

    const scheduleNext = () => {
      clearTimeout(timeoutRef.current);
      const waitTime = 3000 + Math.random() * 5000;
      timeoutRef.current = setTimeout(() => {
        if (isMounted) scramble();
      }, waitTime);
    };

    scramble();

    return () => {
      isMounted = false;
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [text]);

  return <>{displayText}</>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 14,
      mass: 0.8,
    },
  },
};

export default function HexagonSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const plans = PLANS_DATA[language];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let hexWidth = window.innerWidth > 768 ? 120 : 70;
    let R = hexWidth / Math.sqrt(3);
    let hexHeight = R * 2;
    let rowHeight = hexHeight * 0.75;
    let halfWidth = hexWidth / 2;

    let cols = Math.ceil(width / hexWidth) + 2;
    let rows = Math.ceil(height / rowHeight) + 2;

    // Unified animation velocity
    const getVelocity = () => 0.003 + Math.random() * 0.004;

    let gridCells = Array.from({ length: cols * rows }, () => ({
      alpha: Math.random(),
      targetAlpha: Math.random(),
      velocity: getVelocity(),
    }));

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      hexWidth = window.innerWidth > 768 ? 120 : 70;
      R = hexWidth / Math.sqrt(3);
      hexHeight = R * 2;
      rowHeight = hexHeight * 0.75;
      halfWidth = hexWidth / 2;

      cols = Math.ceil(width / hexWidth) + 2;
      rows = Math.ceil(height / rowHeight) + 2;
      gridCells = Array.from({ length: cols * rows }, () => ({
        alpha: Math.random(),
        targetAlpha: Math.random(),
        velocity: getVelocity(),
      }));
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const isDark = theme === "dark";

    const drawHex = (x: number, y: number, alpha: number) => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle_deg = 60 * i - 30; // Pointy top arrangement
            const angle_rad = (Math.PI / 180) * angle_deg;
            const px = x + R * Math.cos(angle_rad);
            const py = y + R * Math.sin(angle_rad);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();

        if (isDark) {
          // Dark mode: Deep dark cyan/indigo tint
          const r = 10 + alpha * 25;
          const g = 15 + alpha * 40;
          const b = 25 + alpha * 60;
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fill();

          ctx.strokeStyle = '#030612';
          ctx.lineWidth = 4;
          ctx.stroke();
          
          ctx.strokeStyle = `rgba(100, 220, 255, ${alpha * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          // Light mode: Bright cyan/indigo tinted white
          const r = 230 - alpha * 30;
          const g = 240 - alpha * 20;
          const b = 255;
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fill();

          ctx.strokeStyle = '#e2e8f0';
          ctx.lineWidth = 4;
          ctx.stroke();
          
          ctx.strokeStyle = `rgba(0, 140, 255, ${alpha * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
    };

    const tick = () => {
      ctx.fillStyle = isDark ? "#02040a" : "#f8fafc";
      ctx.fillRect(0, 0, width, height);

      gridCells.forEach((cell, i) => {
        if (Math.abs(cell.alpha - cell.targetAlpha) <= cell.velocity) {
          cell.alpha = cell.targetAlpha;
          cell.targetAlpha = Math.random();
          cell.velocity = getVelocity(); 
        } else {
          if (cell.alpha < cell.targetAlpha) cell.alpha += cell.velocity;
          else cell.alpha -= cell.velocity;
        }

        const col = (i % cols) - 1;
        const row = Math.floor(i / cols) - 1;

        let cx = col * hexWidth + halfWidth;
        let cy = row * rowHeight + hexHeight / 2;

        // Offset odd rows
        if (row % 2 !== 0) cx += halfWidth;

        drawHex(cx, cy, cell.alpha);
      });

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <section 
      className={`relative w-full transition-colors duration-500 pt-[1px] ${isDark ? "bg-[#02040a]" : "bg-[#f8fafc]"}`}
    >
      {/* Sticky Background */}
      <div className="sticky top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        {/* Animated Canvas Layer */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

        {/* Deep subtle vignette to give depth to the grid */}
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,${isDark ? "rgba(2,4,10,0.85)" : "rgba(248,250,252,0.6)"}_100%)] pointer-events-none z-0 transition-colors duration-500`} />
      </div>

      <div className="relative z-10 w-full -mt-[100vh]">
        {/* HOME SECTION */}
        <div id="home" className="relative min-h-screen w-full flex items-center justify-center">
          {/* Central Blur/Glow behind text to ensure readability */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] ${isDark ? "bg-black/60" : "bg-white/60"} blur-[80px] rounded-full pointer-events-none z-0 transition-colors duration-500`} />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center pointer-events-none text-center px-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] tracking-tight md:tracking-normal font-black drop-shadow-2xl transition-colors duration-500 uppercase ${isDark ? "text-white" : "text-black"}`}
            >
              <ScrambleText text={t.brandName} />
            </motion.h1>
            
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 1.5 }}
               className="mt-8 flex flex-col items-center gap-4"
            >
              <div className="w-12 h-px bg-cyan-500/50" />
              <p className={`text-sm md:text-lg tracking-[0.4em] font-medium uppercase transition-colors duration-500 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {t.heroSubtitle}
              </p>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
          >
            <span className={`text-[9px] tracking-[0.3em] uppercase transition-colors duration-500 ${isDark ? "text-gray-500" : "text-gray-400"}`}>{t.scroll}</span>
            <div className={`w-[1px] h-12 bg-gradient-to-b ${isDark ? "from-gray-500" : "from-gray-400"} to-transparent`} />
          </motion.div>
        </div>

        {/* PRICING SECTION */}
        <div id="pricing" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-20">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="flex flex-col items-center w-full max-w-6xl px-6 relative z-10"
           >
             <h2 className={`text-3xl md:text-5xl font-black tracking-[0.2em] uppercase mb-6 ${isDark ? "text-white" : "text-black"}`}>
               {t.pricingTitle}
             </h2>
             <div className="w-12 h-px bg-cyan-500/50 mb-8" />
             
             <p className={`text-sm md:text-base tracking-[0.1em] mb-16 text-center max-w-2xl leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
               {t.operationsDescPre}<strong className={isDark ? "text-cyan-400 font-bold mx-1" : "text-cyan-600 font-bold mx-1"}>{t.operationsDescBold}</strong>{t.operationsDescPost}
             </p>
             
             {/* Cards Grid */}
             <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
             >
               {plans.map((plan) => {
                 const Icon = plan.id === "simple" ? Zap : plan.id === "standard" ? Shield : Crown;
                 const isHighlighted = plan.highlight;
                 
                 const getIconColors = () => {
                   if (plan.id === "simple") return isDark ? "text-cyan-400 bg-cyan-500/10" : "text-cyan-600 bg-cyan-100";
                   if (plan.id === "standard") return isDark ? "text-cyan-300 bg-cyan-400/20" : "text-cyan-600 bg-cyan-100";
                   if (plan.id === "custom") return isDark ? "text-cyan-400 bg-cyan-500/10" : "text-cyan-600 bg-cyan-100";
                   return "";
                 };

                 return (
                   <motion.div 
                     variants={itemVariants}
                     key={plan.id} 
                     className={`flex flex-col p-8 md:p-10 rounded-2xl backdrop-blur-md border transition-all duration-300 relative group
                       ${isHighlighted 
                         ? (isDark ? "bg-[#0b101e]/80 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]" : "bg-white/90 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)]") 
                         : (isDark ? "bg-[#0b101e]/40 border-white/5 hover:border-cyan-500/30" : "bg-white/60 border-black/5 hover:border-cyan-500/30 shadow-lg")
                       }`}
                   >
                     {/* Icon */}
                     <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${getIconColors()}`}>
                       <Icon size={24} />
                     </div>
                     
                     {/* Header */}
                     <h3 className={`text-xl md:text-2xl font-bold tracking-widest mb-1 ${isDark ? "text-white" : "text-black"}`}>
                       {plan.name}
                     </h3>
                     <p className={`text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                       {plan.sub}
                     </p>
                     
                     {/* Price */}
                     <div className="flex items-baseline mb-6">
                       <span className={`text-4xl md:text-5xl font-black font-mono tracking-tight mr-2 ${isDark ? "text-white" : "text-black"}`}>
                         {plan.price}
                       </span>
                       <span className={`text-sm tracking-wider font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                         {plan.unit}
                       </span>
                     </div>
                     
                     <p className={`text-xs tracking-widest leading-relaxed mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                       {plan.desc}
                     </p>
                     
                     {/* Features */}
                     <ul className="flex flex-col gap-4 mb-10 flex-grow">
                       {plan.features.map((feature, idx) => (
                         <li key={idx} className="flex items-start gap-3">
                           <Check size={16} className={`shrink-0 mt-0.5 text-cyan-500`} strokeWidth={3} />
                           <span className={`text-xs md:text-[13px] tracking-widest leading-relaxed font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                             {feature}
                           </span>
                         </li>
                       ))}
                     </ul>
                     
                     {/* Action */}
                     <a 
                       href="#contact" 
                       onClick={(e) => {
                         e.preventDefault();
                         document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                       }}
                       className={`mt-auto w-full flex items-center justify-center gap-2 py-4 rounded-lg text-xs font-bold tracking-[0.2em] transition-all duration-300 ${
                         isHighlighted 
                           ? isDark ? "bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold shadow-[0_0_20px_rgba(6,182,212,0.35)]" : "bg-cyan-600 hover:bg-cyan-500 text-white font-extrabold shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                           : (isDark 
                               ? "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20" 
                               : "bg-black/5 hover:bg-black/10 text-black border border-black/10 hover:border-black/20")
                       }`}
                     >
                       {t.contactBtn} <ArrowRight size={16} />
                     </a>
                   </motion.div>
                 );
               })}
             </motion.div>
           </motion.div>
         </div>
       </div>
     </section>
   );
}
