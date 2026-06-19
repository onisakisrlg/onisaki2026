import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme, useLanguage } from "../theme";
import { ArrowUpRight, Copy, Check, MessageSquare, Mail, Phone, Lock, Unlock } from "lucide-react";

const SECTIONS_TRANSLATIONS = {
  "日本語": {
    worksTitle: "Our Works",
    contactTitle: "Contact Us",
    contactSubtitle: "お問い合わせはLINE、メール、またはお電話にて承っております。お気軽にご連絡ください。",
    contactLineTitle: "公式LINE",
    contactLineDesc: "友だち追加で簡単にお問い合わせ・お見積もりが可能です（24時間受付）",
    contactEmailTitle: "メールアドレス",
    contactEmailDesc: "support@onisaki.com",
    contactEmailSub: "24時間受付中、通常営業日内にご返信いたします",
    contactPhoneTitle: "お電話番号",
    contactPhoneDesc: "050-6864-0984",
    contactPhoneSub: "受付時間：平日 10:00 - 18:00（土日祝・年末年始を除く）",
    clickToReveal: "クリックして表示 / Click to Reveal",
    clickToConnect: "クリックで開く / Click to Open",
    emailLabel: "EMAIL",
    emailPlaceholder: "hello@example.com",
    messageLabel: "MESSAGE",
    messagePlaceholder: "メッセージを入力してください...",
    sendButton: "送信する",
    bankTitle: "お振込先口座 (BANK ACCOUNTS)",
    bankSubtitle: "ご希望の銀行口座へお振込みをお願いいたします。各項目をクリックするとコピーできます。",
    copiedAlert: "コピーしました！",
  },
  "English": {
    worksTitle: "Our Works",
    contactTitle: "Contact Us",
    contactSubtitle: "We accept inquiries via LINE, Email, or Phone. Please feel free to reach out.",
    contactLineTitle: "LINE Support",
    contactLineDesc: "Add us on LINE for quick chat support & free quotes (24/7 support)",
    contactEmailTitle: "Email Address",
    contactEmailDesc: "support@onisaki.com",
    contactEmailSub: "Available 24/7, we will reply within business hours",
    contactPhoneTitle: "Phone Contact",
    contactPhoneDesc: "050-6864-0984",
    contactPhoneSub: "Business Hours: Weekdays 10:00 - 18:00 JST",
    clickToReveal: "Click to Reveal",
    clickToConnect: "Click to Connect",
    emailLabel: "EMAIL",
    emailPlaceholder: "hello@example.com",
    messageLabel: "MESSAGE",
    messagePlaceholder: "Your minimal message...",
    sendButton: "SEND",
    bankTitle: "BANK ACCOUNTS",
    bankSubtitle: "Please transfer to your preferred bank account below. Click on any item to copy it.",
    copiedAlert: "Copied!",
  },
  "简体中文": {
    worksTitle: "制作案例",
    contactTitle: "联系我们",
    contactSubtitle: "我们支持通过官方 LINE、电子邮件或电话进行咨询。期待您的联系。",
    contactLineTitle: "官方 LINE",
    contactLineDesc: "添加好友即可快捷开展沟通和免费获取报价（24小时接收）",
    contactEmailTitle: "邮箱地址",
    contactEmailDesc: "support@onisaki.com",
    contactEmailSub: "24小时接收邮件，我们将于工作日内快速回复",
    contactPhoneTitle: "电话号码",
    contactPhoneDesc: "050-6864-0984",
    contactPhoneSub: "服务时间：工作日 10:00 - 18:00（周末及节假日除外）",
    clickToReveal: "点击显示联系方式 / Click to Reveal",
    clickToConnect: "点击立即前往 / Click to Open",
    emailLabel: "邮箱地址",
    emailPlaceholder: "hello@example.com",
    messageLabel: "留言内容",
    messagePlaceholder: "请填写您的需求或建议...",
    sendButton: "提交发送",
    bankTitle: "汇款银行账户 (BANK ACCOUNTS)",
    bankSubtitle: "请将款项汇入您指定的银行账户。点击任一项目即可快捷复制。",
    copiedAlert: "已复制到剪贴板！",
  },
  "繁體中文": {
    worksTitle: "製作案例",
    contactTitle: "聯絡我們",
    contactSubtitle: "我們支援透過官方 LINE、電子郵件或電話進行諮詢。期待您的聯絡。",
    contactLineTitle: "官方 LINE",
    contactLineDesc: "新增好友即可快捷開展溝通與免費獲取報價（24小時接收）",
    contactEmailTitle: "電子郵件",
    contactEmailDesc: "support@onisaki.com",
    contactEmailSub: "24小時接收郵件，我們將於工作日內快速回覆",
    contactPhoneTitle: "電話號碼",
    contactPhoneDesc: "050-6864-0984",
    contactPhoneSub: "服務時間：工作日 10:00 - 18:00（週末及例假日除外）",
    clickToReveal: "點選顯示聯絡資訊 / Click to Reveal",
    clickToConnect: "點選立即前往 / Click to Open",
    emailLabel: "電子信箱",
    emailPlaceholder: "hello@example.com",
    messageLabel: "留言內容",
    messagePlaceholder: "請填寫您的需求或建議...",
    sendButton: "確定發送",
    bankTitle: "匯款銀行帳戶 (BANK ACCOUNTS)",
    bankSubtitle: "請將款項匯入您指定的銀行帳戶。點選任一項目即可快捷複製。",
    copiedAlert: "已複製至剪貼簿！",
  }
};

const COMPANY_NAME_TRANSLATIONS: Record<string, Record<string, string>> = {
  "株式会社天馬": {
    "日本語": "株式会社天馬",
    "English": "Tianma Co., Ltd.",
    "简体中文": "天马株式会社",
    "繁體中文": "天馬株式會社",
  },
  "京辰株式会社": {
    "日本語": "京辰株式会社",
    "English": "Kyoshin Co., Ltd.",
    "简体中文": "京辰株式会社",
    "繁體中文": "京辰株式會社",
  },
  "RAINBOW PASSPORT 合同会社": {
    "日本語": "RAINBOW PASSPORT 合同会社",
    "English": "RAINBOW PASSPORT LLC",
    "简体中文": "RAINBOW PASSPORT 合同会社",
    "繁體中文": "RAINBOW PASSPORT 合同會社",
  },
  "建誠株式会社": {
    "日本語": "建誠株式会社",
    "English": "Kensei Co., Ltd.",
    "简体中文": "建诚株式会社",
    "繁體中文": "建誠株式會社",
  },
  "ORINOVA株式会社": {
    "日本語": "ORINOVA株式会社",
    "English": "ORINOVA Co., Ltd.",
    "简体中文": "ORINOVA 株式会社",
    "繁體中文": "ORINOVA 株式会社",
  },
  "合同会社琴商事": {
    "日本語": "合同会社琴商事",
    "English": "Kinshoji LLC",
    "简体中文": "琴商事合同会社",
    "繁體中文": "琴商事合同會社",
  },
  "TF合同会社": {
    "日本語": "TF合同会社",
    "English": "TF LLC",
    "简体中文": "TF 合同会社",
    "繁體中文": "TF 合同會社",
  },
  "AMAZONE NATURE LODGE": {
    "日本語": "AMAZONE NATURE LODGE",
    "English": "AMAZONE NATURE LODGE",
    "简体中文": "AMAZONE NATURE LODGE",
    "繁體中文": "AMAZONE NATURE LODGE",
  },
  "早興業株式会社": {
    "日本語": "早興業株式会社",
    "English": "Haya Kougyou Co., Ltd.",
    "简体中文": "早兴业株式会社",
    "繁體中文": "早興業株式會社",
  },
  "EXIST合同会社": {
    "日本語": "EXIST合同会社",
    "English": "EXIST LLC",
    "简体中文": "EXIST 合同会社",
    "繁體中文": "EXIST 合同會社",
  },
  "小松株式会社": {
    "日本語": "小松株式会社",
    "English": "Komatsu Co., Ltd.",
    "简体中文": "小松株式会社",
    "繁體中文": "小松株式會社",
  },
  "株式会社初禾": {
    "日本語": "株式会社初禾",
    "English": "Chuhe Co., Ltd.",
    "简体中文": "株式会社初禾",
    "繁體中文": "株式会社初禾",
  },
  "COMING SOON": {
    "日本語": "COMING SOON",
    "English": "COMING SOON",
    "简体中文": "敬请期待",
    "繁體中文": "敬請期待",
  },
};

const TAG_TRANSLATIONS: Record<string, Record<string, string>> = {
  "物流": { "日本語": "物流", "English": "Logistics", "简体中文": "物流", "繁體中文": "物流" },
  "貿易": { "日本語": "貿易", "English": "Trading", "简体中文": "贸易", "繁體中文": "貿易" },
  "グローバル": { "日本語": "グローバル", "English": "Global", "简体中文": "全球化", "繁體中文": "全球化" },
  "不動産": { "日本語": "不動産", "English": "Real Estate", "简体中文": "房地产", "繁體中文": "房地產" },
  "投資": { "日本語": "投資", "English": "Investment", "简体中文": "投资", "繁體中文": "投資" },
  "コンサルティング": { "日本語": "コンサルティング", "English": "Consulting", "简体中文": "咨询", "繁體中文": "諮詢" },
  "会員制": { "日本語": "会員制", "English": "Membership", "简体中文": "会员制", "繁體中文": "會員制" },
  "コンシェルジュ": { "日本語": "コンシェルジュ", "English": "Concierge", "简体中文": "礼宾服务", "繁體中文": "禮賓服務" },
  "内装工事": { "日本語": "内装工事", "English": "Interior Works", "简体中文": "内装施工", "繁體中文": "內裝施工" },
  "リノベーション": { "日本語": "リノベーション", "English": "Renovation", "简体中文": "翻新改建", "繁體中文": "翻新改建" },
  "原状回復": { "日本語": "原状回復", "English": "Restoration", "简体中文": "原状恢复", "繁體中文": "原狀恢復" },
  "WEB開発": { "日本語": "WEB開発", "English": "Web Dev", "简体中文": "网页开发", "繁體中文": "網頁開發" },
  "UI/UXデザイン": { "日本語": "UI/UXデザイン", "English": "UI/UX Design", "简体中文": "UI/UX设计", "繁體中文": "UI/UX設計" },
  "DX支援": { "日本語": "DX支援", "English": "DX Support", "简体中文": "数字化转型支援", "繁體中文": "數位化轉型支援" },
  "卸売": { "日本語": "卸売", "English": "Wholesale", "简体中文": "批发", "繁體中文": "批發" },
  "グッズ制作": { "日本語": "グッズ制作", "English": "Merchandising", "简体中文": "周边制作", "繁體中文": "周邊製作" },
  "オリジナル商品": { "日本語": "オリジナル商品", "English": "Original Goods", "简体中文": "原创商品", "繁體中文": "原創商品" },
  "ECサイト": { "日本語": "ECサイト", "English": "E-Commerce", "简体中文": "电商网站", "繁體中文": "電商網站" },
  "ロッジ": { "日本語": "ロッジ", "English": "Lodge", "简体中文": "度假山庄", "繁體中文": "度假山莊" },
  "自然体験": { "日本語": "自然体験", "English": "Nature Experience", "简体中文": "自然体验", "繁體中文": "自然體驗" },
  "観光": { "日本語": "観光", "English": "Tourism", "简体中文": "观光旅游", "繁體中文": "觀光旅遊" },
  "建設": { "日本語": "建設", "English": "Construction", "简体中文": "建设", "繁體中文": "建設" },
  "工業": { "日本語": "工業", "English": "Industry", "简体中文": "工业", "繁體中文": "工業" },
  "コーポレート": { "日本語": "コーポレート", "English": "Corporate", "简体中文": "企业官网", "繁體中文": "企業官網" },
  "リフォーム": { "日本語": "リフォーム", "English": "Remodeling", "简体中文": "住宅翻新", "繁體中文": "住宅翻新" },
  "住宅改修": { "日本語": "住宅改修", "English": "House Renovation", "简体中文": "住宅改造", "繁體中文": "住宅改造" },
  "設備": { "日本語": "設備", "English": "Facilities", "简体中文": "设备", "繁體中文": "設備" },
  "制作中": { "日本語": "制作中", "English": "In Progress", "简体中文": "制作中", "繁體中文": "製作中" },
  "新プロジェクト": { "日本語": "新プロジェクト", "English": "New Project", "简体中文": "新项目", "繁體中文": "新項目" },
};

const WORKS_ITEMS = [
  { name: "株式会社天馬", url: "https://tianma.vercel.app/", tags: ["物流", "貿易", "グローバル"] },
  { name: "京辰株式会社", url: "https://kyoshin.vercel.app/", tags: ["不動産", "投資", "コンサルティング"] },
  { name: "RAINBOW PASSPORT 合同会社", url: "https://rpginza.com/", tags: ["会員制", "コンシェルジュ"] },
  { name: "建誠株式会社", url: "https://kensei-jp.vercel.app/", tags: ["内装工事", "リノベーション", "原状回復"] },
  { name: "ORINOVA株式会社", url: "https://orinova.jp/", tags: ["WEB開発", "UI/UXデザイン", "DX支援"] },
  { name: "合同会社琴商事", url: "https://kinshoji.vercel.app/", tags: ["貿易", "卸売", "グローバル"] },
  { name: "TF合同会社", url: "https://tfgoods.jp/", tags: ["グッズ制作", "オリジナル商品", "ECサイト"] },
  { name: "AMAZONE NATURE LODGE", url: "https://amazone-nature-lodge.jp/", tags: ["ロッジ", "自然体験", "観光"] },
  { name: "早興業株式会社", url: "https://hayakougyou.com/", tags: ["建設", "工業", "コーポレート"] },
  { name: "EXIST合同会社", url: "https://exist-reform.jp/", tags: ["リフォーム", "住宅改修", "リノベーション"] },
  { name: "小松株式会社", url: "https://komatsujapan.co.jp/", tags: ["貿易", "グローバル", "設備"] },
  { name: "株式会社初禾", url: "https://chuhechuhe-kappa.vercel.app/", tags: ["コーポレート", "グローバル", "WEB開発"] },
  { name: "COMING SOON", url: "#", tags: ["制作中", "新プロジェクト"] },
];

const BANK_ACCOUNTS = [
  {
    id: "rakuten",
    bankName: "楽天銀行",
    bankCode: "0036",
    branchName: "第二営業支店",
    branchCode: "253",
    type: "普通預金",
    accountNumber: "7662398",
    holderkana: "オニサキ（カ",
    badgeBgLight: "bg-[#fee2e2]/60 text-[#df1e1e] border-[#fca5a5]/40",
    badgeBgDark: "bg-[red]/10 text-red-300 border-[#ef4444]/20",
    dotColor: "bg-[#ef4444]",
    highlightBgLight: "bg-[#fee2e2]/75 text-[#ef4444] border-[#fee2e2]/90",
    highlightBgDark: "bg-[#7f1d1d]/35 text-[#fca5a5] border-[#fca5a5]/20",
    leftBorderColor: "border-[#ef4444]",
    glowColor: "shadow-[0_0_15px_rgba(239,68,68,0.15)]",
  },
  {
    id: "smbc",
    bankName: "三井住友銀行",
    bankCode: "0009",
    branchName: "トランクＮＯＲＴＨ支店",
    branchCode: "403",
    type: "普通預金",
    accountNumber: "0158912",
    holderkana: "オニサキ（カ",
    badgeBgLight: "bg-[#e6fcf2]/80 text-[#047857] border-[#a7f3d0]/50",
    badgeBgDark: "bg-[#10b981]/15 text-emerald-300 border-[#10b981]/20",
    dotColor: "bg-[#10b981]",
    highlightBgLight: "bg-[#d1fae5]/75 text-[#059669] border-[#d1fae5]/90",
    highlightBgDark: "bg-[#064e3b]/35 text-[#a7f3d0] border-[#a7f3d0]/20",
    leftBorderColor: "border-[#10b981]",
    glowColor: "shadow-[0_0_15px_rgba(16,185,129,0.15)]",
  },
  {
    id: "paypay",
    bankName: "PayPay銀行",
    bankCode: "0033",
    branchName: "ビジネス営業部",
    branchCode: "005",
    type: "普通預金",
    accountNumber: "1887352",
    holderkana: "オニサキ（カ",
    badgeBgLight: "bg-[#fffbeb] text-[#d97706] border-[#fde68a]/50",
    badgeBgDark: "bg-[#fbbf24]/10 text-amber-300 border-[#fbbf24]/20",
    dotColor: "bg-[#f59e0b]",
    highlightBgLight: "bg-[#fef3c7]/75 text-[#b45309] border-[#fef3c7]/90",
    highlightBgDark: "bg-[#78350f]/35 text-[#fcd34d] border-[#fcd34d]/20",
    leftBorderColor: "border-[#f59e0b]",
    glowColor: "shadow-[0_0_15px_rgba(245,158,11,0.15)]",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 0.8,
    },
  },
};

export default function PixelSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = SECTIONS_TRANSLATIONS[language];

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [copiedToast, setCopiedToast] = useState<string | null>(null);

  const handleCopy = (value: string, fieldId: string, itemLabel: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(fieldId);
    setCopiedToast(itemLabel);
    
    // Clear micro-indicator
    setTimeout(() => {
      setCopiedKey(null);
    }, 1500);

    // Clear global toast notifier
    setTimeout(() => {
      setCopiedToast(null);
    }, 2000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let cellSize = window.innerWidth > 768 ? 120 : 70;
    let cols = Math.ceil(width / cellSize) + 2;
    let rows = Math.ceil(height / cellSize) + 2;

    // Unified animation velocity
    const getVelocity = () => 0.0015 + Math.random() * 0.0025;

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
      cellSize = window.innerWidth > 768 ? 120 : 70;
      cols = Math.ceil(width / cellSize) + 2;
      rows = Math.ceil(height / cellSize) + 2;
      gridCells = Array.from({ length: cols * rows }, () => ({
        alpha: Math.random(),
        targetAlpha: Math.random(),
        velocity: getVelocity(),
      }));
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    const isDark = theme === "dark";

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

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

        if (isDark) {
          ctx.fillStyle = `rgba(12, 18, 30, ${cell.alpha * 0.85 + 0.1})`;
        } else {
          ctx.fillStyle = `rgba(235, 242, 250, ${cell.alpha * 0.85 + 0.1})`;
        }
        
        ctx.fillRect(col * cellSize, row * cellSize, cellSize + 1, cellSize + 1); 
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
    <section className={`relative w-full transition-colors duration-500 pt-[1px]`}>
      {/* Sticky Background */}
      <div className="sticky top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        {/* Background that shines through the canvas cells */}
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-slate-900 to-indigo-900/80 transition-colors duration-500" />
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[120px] -translate-y-1/2 transition-colors duration-500" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] translate-y-1/3 transition-colors duration-500" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/80 via-slate-100 to-indigo-200/80 transition-colors duration-500" />
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-400/40 rounded-full blur-[120px] -translate-y-1/2 transition-colors duration-500" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[150px] translate-y-1/3 transition-colors duration-500" />
          </>
        )}

        {/* Pixel Mask Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full -mt-[100vh]">
        {/* WORKS SECTION */}
        <div id="works" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-20">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="flex flex-col items-center w-full max-w-6xl px-6 relative z-10"
           >
             <h2 className={`text-3xl md:text-5xl font-black tracking-[0.2em] uppercase mb-4 ${isDark ? "text-white" : "text-black"}`}>
               {t.worksTitle}
             </h2>
             <div className="w-12 h-px bg-cyan-500/50 mb-16" />

             <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full"
             >
               {WORKS_ITEMS.map((work, i) => {
                 const displayName = COMPANY_NAME_TRANSLATIONS[work.name]?.[language] || work.name;
                 return (
                   <motion.a 
                     variants={itemVariants}
                     key={i} 
                     href={work.url}
                     target={work.url === "#" ? "_self" : "_blank"}
                     rel="noreferrer"
                     className={`group flex flex-col p-6 backdrop-blur-sm border transition-all duration-300 relative overflow-hidden ${isDark ? "bg-[#0b101e]/60 border-cyan-900/40 hover:border-cyan-500/60 hover:bg-[#0f172a]/80" : "bg-white/40 hover:border-cyan-500/50 hover:bg-white/80 border-cyan-100"}`}
                   >
                     <div className={`absolute top-0 left-0 w-1 h-full scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 ${isDark ? "bg-cyan-500" : "bg-cyan-400"}`} />

                     <div className={`absolute top-4 right-4 w-6 h-6 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${isDark ? "text-cyan-600 group-hover:text-cyan-400" : "text-cyan-400 group-hover:text-cyan-600"}`}>
                       <ArrowUpRight size={16} strokeWidth={1.5} />
                     </div>

                     <h3 className={`text-sm md:text-base font-bold tracking-[0.1em] transition-colors pr-8 ${isDark ? "text-gray-300 group-hover:text-cyan-100" : "text-gray-700 group-hover:text-black"}`}>
                       {displayName}
                     </h3>

                     <div className="flex flex-wrap gap-1.5 mt-4 pointer-events-none">
                       {work.tags.map((tag) => {
                          const colorClass = isDark ? "text-cyan-300/90 border-cyan-800/60 bg-cyan-950/50" : "text-cyan-700/90 border-cyan-300/40 bg-cyan-50/50";
                          const displayTag = TAG_TRANSLATIONS[tag]?.[language] || tag;
                          return (
                           <span key={tag} className={`text-[10px] font-medium px-2 py-0.5 rounded-sm border tracking-wider flex-shrink-0 whitespace-nowrap ${colorClass}`}>
                             {displayTag}
                           </span>
                          );
                       })}
                     </div>
                   </motion.a>
                 );
               })}
             </motion.div>
           </motion.div>
        </div>

        {/* BANK ACCOUNTS SECTION */}
        <div id="banks" className="relative min-h-[95vh] w-full flex flex-col items-center justify-center pt-24 pb-20">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="flex flex-col items-center w-full max-w-6xl px-6 relative z-10"
           >
             <div className="flex flex-col items-center mb-4">
               <div className="flex items-center gap-3 justify-center mb-3">
                 <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                 <h2 className={`text-2xl md:text-4xl font-black tracking-[0.2em] uppercase text-center ${isDark ? "text-white" : "text-black"}`}>
                   {t.bankTitle}
                 </h2>
               </div>
               <p className={`text-xs md:text-sm tracking-wider font-semibold text-center max-w-2xl px-4 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                 {t.bankSubtitle}
               </p>
             </div>
             <div className="w-12 h-px bg-cyan-500/50 mb-16" />

             {/* Bank Cards Grid */}
             <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
             >
               {BANK_ACCOUNTS.map((bank) => {
                 const fields = [
                   { label: "金融機関名", value: bank.bankName, key: "bankName" },
                   { label: "金融機関コード", value: bank.bankCode, key: "bankCode" },
                   { label: "支店名", value: bank.branchName, key: "branchName" },
                   { label: "支店コード", value: bank.branchCode, key: "branchCode" },
                   { label: "預金種別", value: bank.type, key: "type" },
                   { label: "口座番号", value: bank.accountNumber, key: "accountNumber", isSpecial: true },
                   { label: "口座名義 (カナ)", value: bank.holderkana, key: "holderkana" },
                 ];

                 const borderCol = bank.id === "rakuten" ? "border-l-[#ef4444]" : bank.id === "smbc" ? "border-l-[#10b981]" : "border-l-[#f59e0b]";

                 return (
                   <motion.div
                     variants={itemVariants}
                     key={bank.id}
                     className={`group/card rounded-2xl p-6 md:p-8 border-y border-r border-l-4 backdrop-blur-md transition-all duration-500 relative flex flex-col justify-between ${borderCol} ${bank.glowColor} ${
                       isDark 
                         ? `bg-[#0b101e]/65 border-white/5 hover:border-white/15` 
                         : `bg-white/50 border-black/5 hover:border-black/15 shadow-xl`
                     }`}
                   >
                     {/* Top Row: Bank name / Dot / Badge */}
                     <div className="flex items-center justify-between pb-5 border-b border-dashed border-gray-700/20 dark:border-white/10 mb-5">
                       <div className="flex items-center gap-2.5">
                         <span className={`w-2.5 h-2.5 rounded-full ${bank.dotColor} shadow-[0_0_8px_currentColor]`} />
                         <h3 className={`text-sm md:text-base font-extrabold tracking-wider ${isDark ? "text-white" : "text-black"}`}>
                           {bank.bankName}
                         </h3>
                       </div>
                       <span className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-md ${isDark ? bank.badgeBgDark : bank.badgeBgLight}`}>
                         {bank.bankCode}
                       </span>
                     </div>

                     {/* Fields List */}
                     <div className="space-y-1.5 select-none text-left">
                       {fields.map((field) => {
                         const fieldId = `${bank.id}-${field.key}`;
                         const isCopied = copiedKey === fieldId;

                         return (
                           <div
                             key={field.key}
                             onClick={() => handleCopy(field.value, fieldId, field.label)}
                             className={`group/row flex items-center justify-between py-2 px-3 rounded-xl cursor-pointer transition-all duration-300 border border-transparent ${
                               field.isSpecial
                                 ? (isDark ? bank.highlightBgDark : bank.highlightBgLight)
                                 : (isDark 
                                     ? 'hover:bg-white/[0.04] hover:border-white/5 active:bg-white/[0.06]' 
                                     : 'hover:bg-black/[0.025] hover:border-black/5 active:bg-black/[0.045]')
                             }`}
                           >
                             <span className={`text-[10.5px] font-bold tracking-widest ${
                               field.isSpecial 
                                 ? (isDark ? 'text-red-300' : 'text-red-800')
                                 : (isDark ? 'text-gray-400' : 'text-gray-500')
                             }`}>
                               {field.label}
                             </span>
                             <div className="flex items-center gap-2">
                               <span className={`font-semibold text-xs tracking-wider select-all ${
                                 field.isSpecial
                                   ? (isDark ? 'text-white text-xs font-semibold' : 'text-gray-950 text-xs font-semibold')
                                   : (isDark ? 'text-gray-200' : 'text-gray-900')
                               }`}>
                                 {field.value}
                               </span>
                               <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${
                                 isCopied
                                   ? 'bg-emerald-500/15 text-emerald-500 scale-110'
                                   : 'text-gray-400 group-hover/row:text-cyan-400 opacity-60 group-hover/row:opacity-100'
                                }`}>
                                 {isCopied ? <Check size={11} strokeWidth={3} /> : <Copy size={10} strokeWidth={1.5} />}
                               </div>
                             </div>
                           </div>
                         );
                       })}
                     </div>
                   </motion.div>
                 );
               })}
             </motion.div>
           </motion.div>
        </div>

        {/* CONTACT SECTION */}
        <div id="contact" className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-24 pb-20">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="flex flex-col items-center w-full max-w-6xl px-6 relative z-10"
           >
             <div className="flex flex-col items-center mb-4 text-center">
               <div className="flex items-center gap-3 justify-center mb-3">
                 <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                 <h2 className={`text-2xl md:text-4xl font-black tracking-[0.2em] uppercase ${isDark ? "text-white" : "text-black"}`}>
                   {t.contactTitle}
                 </h2>
               </div>
               <p className={`text-xs md:text-sm tracking-wider font-semibold max-w-2xl px-4 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                 {t.contactSubtitle}
               </p>
             </div>
             <div className="w-12 h-px bg-cyan-500/50 mb-16" />

             {/* Click Buttons Grid */}
             <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
             >
               {/* LINE BUTTON */}
               <motion.a
                 variants={itemVariants}
                 href="https://lin.ee/zy69vhS"
                 target="_blank"
                 rel="noreferrer"
                 className={`group/btn rounded-2xl p-6 md:p-8 border backdrop-blur-md transition-all duration-500 relative flex flex-col gap-5 text-left shadow-lg cursor-pointer ${
                   isDark 
                     ? "bg-[#0b101e]/65 border-white/5 hover:border-green-500/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]" 
                     : "bg-white/50 border-black/5 hover:border-green-600/50 hover:shadow-[0_10px_25px_rgba(34,197,94,0.12)] shadow-slate-200"
                 }`}
               >
                 <div className="flex items-center justify-between">
                   <div className={`p-3 rounded-xl transition-all duration-300 ${isDark ? "bg-[#22c55e]/10 text-[#22c55e]" : "bg-[#22c55e]/15 text-[#16a34a]"}`}>
                     <MessageSquare size={24} strokeWidth={2} />
                   </div>
                   <div className={`p-1.5 rounded-full transition-all flex items-center justify-center opacity-60 group-hover/btn:opacity-100 ${isDark ? "text-gray-400 group-hover/btn:text-white" : "text-gray-500 group-hover/btn:text-black"}`}>
                     <div className="p-1 rounded-full group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all">
                       <ArrowUpRight size={18} />
                     </div>
                   </div>
                 </div>

                 <div className="flex flex-col gap-2 flex-grow">
                   <span className={`text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded bg-[#22c55e]/10 text-[#22c55e] w-fit border border-[#22c55e]/20`}>
                     {t.contactLineTitle}
                   </span>
                   <h3 className={`tracking-wide mt-2 text-base md:text-lg font-extrabold transition-colors ${isDark ? "text-white" : "text-black"}`}>
                     {language === "日本語" ? "LINE 友だち追加" : language === "简体中文" ? "添加 LINE 咨询" : language === "繁體中文" ? "加入 LINE 諮詢" : "Add on LINE"}
                   </h3>
                   <p className={`text-xs leading-relaxed mt-1 font-medium transition-colors ${isDark ? "text-gray-400 group-hover/btn:text-gray-300" : "text-gray-600 group-hover/btn:text-gray-800"}`}>
                     {t.contactLineDesc}
                   </p>
                 </div>
               </motion.a>

               {/* EMAIL BUTTON */}
               <motion.a
                 variants={itemVariants}
                 href="mailto:support@onisaki.com"
                 className={`group/btn rounded-2xl p-6 md:p-8 border backdrop-blur-md transition-all duration-500 relative flex flex-col gap-5 text-left shadow-lg cursor-pointer ${
                   isDark 
                     ? "bg-[#0b101e]/65 border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]" 
                     : "bg-white/50 border-black/5 hover:border-cyan-600/50 hover:shadow-[0_10px_25px_rgba(6,182,212,0.12)] shadow-slate-200"
                 }`}
               >
                 <div className="flex items-center justify-between">
                   <div className={`p-3 rounded-xl transition-all duration-300 ${isDark ? "bg-[#06b6d4]/10 text-[#06b6d4]" : "bg-[#06b6d4]/15 text-[#0891b2]"}`}>
                     <Mail size={24} strokeWidth={2} />
                   </div>
                   <div className={`p-1.5 rounded-full transition-all flex items-center justify-center opacity-60 group-hover/btn:opacity-100 ${isDark ? "text-gray-400 group-hover/btn:text-white" : "text-gray-500 group-hover/btn:text-black"}`}>
                     <div className="p-1 rounded-full group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all">
                       <ArrowUpRight size={18} />
                     </div>
                   </div>
                 </div>

                 <div className="flex flex-col gap-2 flex-grow">
                   <span className={`text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded bg-[#06b6d4]/10 text-[#06b6d4] w-fit border border-[#06b6d4]/20`}>
                     {t.contactEmailTitle}
                   </span>
                   <h3 className={`tracking-wide mt-2 text-base md:text-lg font-extrabold transition-colors ${isDark ? "text-white" : "text-black"}`}>
                     {language === "日本語" ? "メールでお問い合わせ" : language === "简体中文" ? "发送电子邮件" : language === "繁體中文" ? "傳送電子郵件" : "Send an Email"}
                   </h3>
                   <p className={`text-xs leading-relaxed mt-1 font-medium transition-colors ${isDark ? "text-gray-400 group-hover/btn:text-gray-300" : "text-gray-600 group-hover/btn:text-gray-800"}`}>
                     {t.contactEmailSub}
                   </p>
                 </div>
               </motion.a>

               {/* PHONE BUTTON */}
               <motion.a
                 variants={itemVariants}
                 href="tel:050-6864-0984"
                 className={`group/btn rounded-2xl p-6 md:p-8 border backdrop-blur-md transition-all duration-500 relative flex flex-col gap-5 text-left shadow-lg cursor-pointer ${
                   isDark 
                     ? "bg-[#0b101e]/65 border-white/5 hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]" 
                     : "bg-white/50 border-black/5 hover:border-amber-600/50 hover:shadow-[0_10px_25px_rgba(245,158,11,0.12)] shadow-slate-200"
                 }`}
               >
                 <div className="flex items-center justify-between">
                   <div className={`p-3 rounded-xl transition-all duration-300 ${isDark ? "bg-[#f59e0b]/10 text-[#f59e0b]" : "bg-[#f59e0b]/15 text-[#d97706]"}`}>
                     <Phone size={24} strokeWidth={2} />
                   </div>
                   <div className={`p-1.5 rounded-full transition-all flex items-center justify-center opacity-60 group-hover/btn:opacity-100 ${isDark ? "text-gray-400 group-hover/btn:text-white" : "text-gray-500 group-hover/btn:text-black"}`}>
                     <div className="p-1 rounded-full group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all">
                       <ArrowUpRight size={18} />
                     </div>
                   </div>
                 </div>

                 <div className="flex flex-col gap-2 flex-grow">
                   <span className={`text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded bg-[#f59e0b]/10 text-[#f59e0b] w-fit border border-[#f59e0b]/20`}>
                     {t.contactPhoneTitle}
                   </span>
                   <h3 className={`tracking-wide mt-2 text-base md:text-lg font-extrabold transition-colors ${isDark ? "text-white" : "text-black"}`}>
                     {language === "日本語" ? "お電話でお問い合わせ" : language === "简体中文" ? "拨打电话联系" : language === "繁體中文" ? "撥打電話聯繫" : "Call by Phone"}
                   </h3>
                   <p className={`text-xs leading-relaxed mt-1 font-medium transition-colors ${isDark ? "text-gray-400 group-hover/btn:text-gray-300" : "text-gray-600 group-hover/btn:text-gray-800"}`}>
                     {t.contactPhoneSub}
                   </p>
                 </div>
               </motion.a>
             </motion.div>
           </motion.div>
        </div>
      </div>
       {/* Copied Clip Toast Notification */}
       <AnimatePresence>
         {copiedToast && (
           <motion.div
             initial={{ opacity: 0, y: 30, scale: 0.9 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: 20, scale: 0.9 }}
             transition={{ type: "spring", stiffness: 350, damping: 25 }}
             className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full shadow-2xl backdrop-blur-md border text-xs tracking-wider font-semibold ${
               isDark 
                 ? "bg-[#0b101e]/90 border-cyan-500/30 text-white shadow-[#000]/60" 
                 : "bg-white/95 border-cyan-500/20 text-gray-800 shadow-slate-300"
             }`}
           >
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
             <span>{copiedToast}: {t.copiedAlert}</span>
           </motion.div>
         )}
       </AnimatePresence>
    </section>
  );
}
