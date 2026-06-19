import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useTheme, useLanguage } from "../theme";
import { 
  ShieldCheck, Eye, Lock, Database, FileText, ArrowLeft, Sun, Moon 
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const isDark = theme === "dark";

  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const t = {
    "日本語": {
      title: "プライバシーポリシー",
      backHome: "ホームへ戻る",
      subtitle: "個人情報の取り扱いおよび保護に関する基本方針（ONISAKI株式会社）",
      introTitle: "1. はじめに",
      introDesc: "ONISAKI株式会社（以下、「当社」）は、本ウェブサイトおよび当社が提供するサービス（以下、「本サービス」）において、お客様の個人情報の保護を極めて重要な義務と位置づけております。当社は、個人情報保護に関する法令、ガイドライン等を遵守し、以下に従って適切に取り扱います。",
      collectTitle: "2. 収集する個人情報",
      collectDesc: "当社は、本サービスの提供・改善にあたり、必要最小限の個人情報を適法かつ公正な手段により収集・取得します。これには、氏名、会社名、メールアドレス、電話番号、開発要件のお問い合わせ内容、およびネットワーク接続、クッキー、アクセス解析情報などが含まれます。",
      purposeTitle: "3. 個人情報の利用目的",
      purposeDesc: "取得した個人情報は、以下の目的のみで利用し、お客様の事前の同意なしに目的外利用は行いません。",
      purposeItem1: "Web開発・システム開発サービスのご提供、仕様決定、ご連絡のため",
      purposeItem2: "お問い合わせへの対応、アフターサポート、および不具合修正などの対応のため",
      purposeItem3: "お見積り、請求書発行、および決済手続き（Stripe等によるクレジットカード決済等）のため",
      purposeItem4: "本サービスの不正利用防止、セキュリティ保護、および信頼性向上のため",
      securityTitle: "4. 安全管理措置",
      securityDesc: "当社は、取り扱う個人情報の漏洩、滅失、または毀損の防止その他の個人情報の安全管理のため、技術的・組織的に必要かつ適切な安全対策を講じます。これには、データの暗号化（SSL、TLS）、アクセス制限の導入、セキュリティ教育の実施などが含まれます。",
      thirdPartyTitle: "5. 第三者提供の制限",
      thirdPartyDesc: "当社は、以下のいずれかに該当する場合を除き、お客様の個人情報を第三者（国内外を問わず）に開示または提供いたしません。",
      thirdPartyItem1: "お客様ご本人の事前の明確なご同意がある場合",
      thirdPartyItem2: "法令（特定商取引法、刑事訴訟法等）に基づく開示要請がある場合",
      thirdPartyItem3: "決済代行会社（Stripe等）に、お支払いの審査や不正対策に必要な情報を提供する場合",
      thirdPartyItem4: "人の生命、身体または財産の保護のために必要であって、本人の同意を得ることが困難な場合",
      rightsTitle: "6. お客様の権利（開示・訂正・削除等）",
      rightsDesc: "お客様は、ご登録されたご自身の個人情報について、開示、訂正、追加、削除、利用停止などの請求を行う権利を有します。ご希望される場合は、下記お問い合わせ窓口までご連絡ください。ご本人確認を行った上で、合理的な期間内に迅速に対応いたします。",
      cookieTitle: "7. Cookie（クッキー）およびアクセス解析",
      cookieDesc: "本ウェブサイトは、利便性向上や利用状況把握のため、Cookieおよび分析ツールを使用する場合があります。取得するデータは匿名化されており、個人を特定する目的には利用しません。お客様はブラウザの設定によりCookieの受け入れを受け入れるか拒否するかを選択することができます。",
      contactTitle: "8. お問い合わせ窓口",
      contactDesc: "当社の個人情報の取り扱いに関するご意見、ご質問、また開示等のご請求は、以下の窓口までご連絡ください。",
      contactCompany: "ONISAKI株式会社 個人情報相談窓口",
      contactAddr: "東京都中央区銀座１丁目２２番１１号 銀座大竹ビジデンス２Ｆ",
      contactEmail: "support@onisaki.com",
      copyright: "© ONISAKI All Rights Reserved. Privacy Policy"
    },
    "English": {
      title: "Privacy Policy",
      backHome: "Back to Home",
      subtitle: "Basic Policy on the Handling and Protection of Personal Information (ONISAKI Co., Ltd.)",
      introTitle: "1. Introduction",
      introDesc: "ONISAKI Co., Ltd. (hereinafter referred to as 'the Company') considers the protection of our customers' personal information to be an extremely important obligation on this website and in the services we provide (hereinafter referred to as the 'Services'). We comply with laws, regulations, and guidelines concerning the protection of personal information, and handle such information appropriately in accordance with the following terms.",
      collectTitle: "2. Personal Information Collected",
      collectDesc: "To provide and improve our Services, the Company collects minimal required personal information using lawful and fair means. This includes names, company names, email addresses, phone numbers, contact details regarding development scope, and network connection parameters, cookies, and traffic log data.",
      purposeTitle: "3. Purpose of Use",
      purposeDesc: "The collected personal information will only be used for the following target purposes, and will never be utilized beyond this scope without your explicit prior consent:",
      purposeItem1: "To provide custom Web UI and systems development services, specification determination, and critical communications.",
      purposeItem2: "To respond to client inquiries, perform after-sales technical maintenance, and rectify system bugs.",
      purposeItem3: "To issue estimates, process invoices, and manage payment milestones (via secure merchants like Stripe).",
      purposeItem4: "To prevent unauthorized usage, enforce site security systems, and optimize service reliability.",
      securityTitle: "4. Security Control Measures",
      securityDesc: "To prevent the leakage, loss, or damage of personal data and to manage it safely, the Company implements necessary and appropriate technical and organizational countermeasures. These encompass data encryption (SSL, TLS), multi-factor authorization systems, and strict internal information security education.",
      thirdPartyTitle: "5. Limitations on Disclosure to Third Parties",
      thirdPartyDesc: "The Company will not open, disclose, or sell personal information to any third party (domestic or international) except in the following situations:",
      thirdPartyItem1: "With the prior, clear, and written consent of the customer.",
      thirdPartyItem2: "When required by judicial, governmental, or administrative legal process (under Specified Commercial Transactions Act or criminal procedure codes).",
      thirdPartyItem3: "When transmitting details to certified financial gateways (such as Stripe) for card authentication and fraud risk assessments.",
      thirdPartyItem4: "When urgently needed to protect human life, limb, or property, and obtaining direct consent is unfeasible.",
      rightsTitle: "6. Your Legal Rights (Access, Correction, & Deletion)",
      rightsDesc: "Customers have the legal right to request the disclosure, correction, addition, deletion, or suspension of use of their registered personal information. To initiate a request, please contact our support team below. We will verify your identity and handle the matter swiftly within a reasonable timeframe.",
      cookieTitle: "7. Cookies & Analytics Platforms",
      cookieDesc: "This website may utilize temporary Cookies and behavioral analytics platforms to elevate customer experience and study platform performance. All parsed server logs are strictly anonymized. You can comfortably opt out of Cookies by configuring your web browser's setting preferences.",
      contactTitle: "8. Support Desk Contacts",
      contactDesc: "For feed feedback, suggestions, questions, or privacy concern consultations, please reach out directly to our dedicated secure address below:",
      contactCompany: "ONISAKI Co., Ltd. Privacy Support Center",
      contactAddr: "Ginza Otake Bldg 2F, 1-22-11 Ginza, Chuo-ku, Tokyo, 104-0061, Japan",
      contactEmail: "support@onisaki.com",
      copyright: "© ONISAKI All Rights Reserved. Privacy Policy"
    },
    "简体中文": {
      title: "隐私政策",
      backHome: "返回首页",
      subtitle: "个人信息收集、处理与安全保护基本方针（ONISAKI株式会社）",
      introTitle: "1. 前言",
      introDesc: "ONISAKI株式会社（以下简称“我司”）将本网站及我司提供的相关定制化开发与技术咨询服务（以下简称“本服务”）中的客户个人隐私保护视为核心法定义务。我司严格遵守关于个人信息保护的各项法律法规、自律指南和规范性文件，并依循本隐私保护章程对信息进行合规处理。",
      collectTitle: "2. 个人信息的收集范围",
      collectDesc: "为保障并改进本服务，我司通过合法、正当、诚实的形式收集必要的最少化关联信息。具体包括：姓名、公司名称、邮箱地址、手机号码、定制项目的咨询描述、网络诊断、Cookie凭据、以及经过脱敏的分析工具统计信息等。",
      purposeTitle: "3. 个人信息的使用目的",
      purposeDesc: "收集的信息始终且仅用于以下预定场景。若超出此范围，将依法重新向客户寻求明示授权：",
      purposeItem1: "向您交付定制化网页、业务系统、UI/UX原型及执行契约沟通",
      purposeItem2: "对于您的提问提供客户支持、排除应用运行故障、修补程序安全漏洞",
      purposeItem3: "签发询价单、发送账单，以及利用安全的第三方结算平台（如 Stripe）处理定金及尾款付讫",
      purposeItem4: "辨识异常滥用、保障我司云计算架构和客户端的底层抗风险防范",
      securityTitle: "4. 安全保障与防护体系",
      securityDesc: "我司搭建起一套科学合理、完备的技术和组织管理防护机制，严防发生个人信息泄露、意外灭失、违规损毁等极端场景。保护性举措包含了在网络传输中强制实施高级加密（如 SSL/TLS 传输层加密协议）、执行最小管理权限过滤机制、以及定期开展信息合规意识培训。",
      thirdPartyTitle: "5. 向第三方提供或披露的限制",
      thirdPartyDesc: "除以下免责和法定范畴之外，我司承诺绝不在未经事先授权时向外部任何第三方（包括跨国实体）散布或提供客户个人资料：",
      thirdPartyItem1: "已取得您本人的明确明示或追认同意",
      thirdPartyItem2: "基于相关法律条规（如《特定商业交易法》、司法传唤）执行披露义务时",
      thirdPartyItem3: "在必要的限度内，将支付流转参数交予权威交易合规网关（如 Stripe）以完成反欺诈审查",
      thirdPartyItem4: "为捍卫重大公共生命、财产、及突发身体安全且不具备即时求证条件的特殊紧急状况",
      rightsTitle: "6. 客户的隐私权利（查询、更新、注销等）",
      rightsDesc: "客户对于留存在我司体系中的其本人个人信息，依法享有核对、更正、添补、删除、或限制性流转的完整主张权利。若需行使前述申诉，请向我司提交申请。我们在核实申诉主体一致性后，会在合理的技术实施期内迅速答复结案。",
      cookieTitle: "7. 关于 Cookie 及同类数据分析",
      cookieDesc: "我司官网为完善浏览品质、统计流量特征，会在客户端写入少量的本地小型文本标签（Cookie）。这些标签产生的系统日志均为脱敏、零指向性标识，不构成个人实体定位。您随时能在浏览器设置面板关闭 Cookie 缓存加载功能。",
      contactTitle: "8. 个人隐私垂询信箱",
      contactDesc: "如果您对本隐私条例有任何异议、改良建议或需要主张客户隐私权利，敬请发信至以下联络地址：",
      contactCompany: "ONISAKI株式会社 个人信息保护部",
      contactAddr: "东京都中央区银座1丁目22番11号 银座大竹大厦2F",
      contactEmail: "support@onisaki.com",
      copyright: "© ONISAKI 版权所有 | 隐私政策"
    },
    "繁體中文": {
      title: "隱私政策",
      backHome: "返回首頁",
      subtitle: "個人資訊收集、處理與安全保護基本方針（ONISAKI株式會社）",
      introTitle: "1. 前言",
      introDesc: "ONISAKI株式會社（以下簡稱“我司”）將本網站及我司提供的相關定制化開發與技術諮詢服務（以下簡稱“本服務”）中的客戶個人隱私保護視為核心法定義務。我司嚴格遵守關於個人資訊保護的各項法律法規、自律指南和規範性文件，並依循本隱私保護章程對資訊進行合規處理。",
      collectTitle: "2. 個人資訊的收集範圍",
      collectDesc: "為保障並改進本服務，我司通過合法、正當、誠實的形式收集必要的最少化關聯資訊。具體包括：姓名、公司名稱、郵箱地址、手機號碼、定制項目的諮詢描述、網路診斷、Cookie憑據、以及經過脫敏的分析工具統計資訊等。",
      purposeTitle: "3. 個人資訊的使用目的",
      purposeDesc: "收集的資訊始終且僅用於以下預定場景。若超出此範圍，將依法重新向客戶尋求明示授權：",
      purposeItem1: "向您交付定制化網頁、業務系統、UI/UX原型及執行契約溝通",
      purposeItem2: "對於您的提問提供客戶支援、排除應用運行故障、修補程序安全漏洞",
      purposeItem3: "簽發詢價單、發送帳單，以及利用安全的第三方結算平台（如 Stripe）處理定金及尾款付訖",
      purposeItem4: "辨識異常濫用、保障我司雲端運算架構和用戶端的底層抗風險防範",
      securityTitle: "4. 安全保障與防護體系",
      securityDesc: "我司搭建起一套科學合理、完備的技术和組織管理防護機制，嚴防發生個人資訊洩露、意外滅失、違規損毀等極端場景。保護性舉措包含了在網路傳輸中強制實施高級加密（如 SSL/TLS 傳輸層加密協定）、執行最小管理權限過濾機制、以及定期開展資訊合規意識培訓。",
      thirdPartyTitle: "5. 向第三方提供或披露的限制",
      thirdPartyDesc: "除以下免責和法定範疇之外，我司承諾絕不在未經事先授權時向外部任何第三方（包括跨國實體）散佈或提供客戶個人資料：",
      thirdPartyItem1: "已取得您本人的明確明示或追認同意",
      thirdPartyItem2: "基於相關法律條規（如《特定商業交易法》、司法傳喚）執行披露義務時",
      thirdPartyItem3: "在必要的限度內，將支付流轉參數交予權威交易合規網關（如 Stripe）以完成反欺詐審查",
      thirdPartyItem4: "為捍衛重大公共生命、財產、及突發身體安全且不具備即時求證條件的特殊緊急狀況",
      rightsTitle: "6. 客戶的隱私權利（查詢、更新、註銷等）",
      rightsDesc: "客戶對於留存在我司體系中的其本人個人資訊，依法享有核對、更正、添補、刪除、或限制性流轉的完整主張權利。若需行使前述申訴，請向我司提交申請。我們在核實申訴主體一致性後，會在合理的技术實施期內迅速答覆結案。",
      cookieTitle: "7. 關於 Cookie 及同類數據分析",
      cookieDesc: "我司官網為完善瀏覽品質、統計流量特徵，會在用戶端寫入少量的本地小型文本標籤（Cookie）。這些標籤產生的系統日誌均為脫敏、零指向性標識，不構成個人實體定位。您隨時能在瀏覽器設定面板關閉 Cookie 緩存加載功能。",
      contactTitle: "8. 個人隱私垂詢信箱",
      contactDesc: "如果您對本隱私條例有任何異議、改良建議或需要主張客戶隱私權利，敬請發信至以下聯絡地址：",
      contactCompany: "ONISAKI株式會社 個人資訊保護部",
      contactAddr: "東京都中央區銀座1丁目22番11號 銀座大竹大廈2F",
      contactEmail: "support@onisaki.com",
      copyright: "© ONISAKI 版權所有 | 隱私政策"
    }
  };

  const activeLang = t[language] || t["日本語"];

  const languages: { name: typeof language; label: string }[] = [
    { name: "日本語", label: "JP" },
    { name: "English", label: "EN" },
    { name: "简体中文", label: "简体" },
    { name: "繁體中文", label: "繁體" }
  ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 pb-20 p-1 select-text ${
      isDark ? "bg-[#02040a] text-gray-200" : "bg-[#f8fafc] text-gray-800"
    }`}>
      {/* Navbar for standalone page */}
      <header className={`sticky top-0 left-0 w-full z-40 px-6 py-4 flex items-center justify-between border-b backdrop-blur-md transition-colors duration-500 ${
        isDark ? "bg-[#02040a]/80 border-white/5" : "bg-[#f8fafc]/80 border-black/5"
      }`}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              window.location.hash = "/";
              window.location.search = "";
            }}
            className={`flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase py-2 px-4 rounded-xl border transition-all duration-300 ${
              isDark 
                ? "border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 text-white" 
                : "border-black/5 bg-black/5 hover:bg-black/10 hover:border-cyan-500 text-black"
            }`}
          >
            <ArrowLeft size={14} />
            <span>{activeLang.backHome}</span>
          </button>
          
          <div className={`hidden md:block font-sans font-black text-xl tracking-[0.25em] ${isDark ? "text-white" : "text-black"}`}>
            ONISAKI
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <div className="flex bg-black/[0.08] dark:bg-white/[0.08] p-1 rounded-lg">
            {languages.map((l) => (
              <button
                key={l.name}
                onClick={() => setLanguage(l.name)}
                className={`text-[10px] font-bold tracking-wider px-2 py-1 rounded transition-all duration-300 ${
                  language === l.name
                    ? (isDark ? "bg-white/15 text-white" : "bg-white text-black shadow-sm")
                    : (isDark ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-700")
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border hover:scale-105 transition-all ${
              isDark 
                ? "border-white/10 text-yellow-400 hover:bg-white/5" 
                : "border-black/5 text-[#d97706] hover:bg-black/5"
            }`}
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header Banner */}
          <div className="space-y-3 pb-8 border-b border-cyan-500/25">
            <h1 className={`text-2xl sm:text-4xl font-black tracking-widest flex items-center gap-3 ${isDark ? "text-white" : "text-black"}`}>
              <ShieldCheck className="text-cyan-500" size={32} />
              {activeLang.title}
            </h1>
            <p className={`text-xs md:text-sm tracking-wider leading-relaxed ${isDark ? "text-cyan-400/80" : "text-cyan-600/80"}`}>
              {activeLang.subtitle}
            </p>
          </div>

          {/* Core Body Sections */}
          <div className="space-y-10 text-xs md:text-sm leading-relaxed tracking-wider">
            {/* 1. Intro */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <FileText size={16} />
                {activeLang.introTitle}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.introDesc}
              </p>
            </div>

            {/* 2. Collection */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <Database size={16} />
                {activeLang.collectTitle}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.collectDesc}
              </p>
            </div>

            {/* 3. Purpose */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <Eye size={16} />
                {activeLang.purposeTitle}
              </h2>
              <p className={`mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{activeLang.purposeDesc}</p>
              <ul className={`space-y-1.5 list-disc pl-5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                <li>{activeLang.purposeItem1}</li>
                <li>{activeLang.purposeItem2}</li>
                <li>{activeLang.purposeItem3}</li>
                <li>{activeLang.purposeItem4}</li>
              </ul>
            </div>

            {/* 4. Security */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <Lock size={16} />
                {activeLang.securityTitle}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.securityDesc}
              </p>
            </div>

            {/* 5. Third Party */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <ShieldCheck size={16} />
                {activeLang.thirdPartyTitle}
              </h2>
              <p className={`mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{activeLang.thirdPartyDesc}</p>
              <ul className={`space-y-1.5 list-disc pl-5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                <li>{activeLang.thirdPartyItem1}</li>
                <li>{activeLang.thirdPartyItem2}</li>
                <li>{activeLang.thirdPartyItem3}</li>
                <li>{activeLang.thirdPartyItem4}</li>
              </ul>
            </div>

            {/* 6. Rights */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <FileText size={16} />
                {activeLang.rightsTitle}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.rightsDesc}
              </p>
            </div>

            {/* 7. Cookies */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <Database size={16} />
                {activeLang.cookieTitle}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.cookieDesc}
              </p>
            </div>

            {/* 8. Contact Contacts */}
            <div className="space-y-4">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <ShieldCheck size={16} />
                {activeLang.contactTitle}
              </h2>
              <div className={`p-4 rounded-xl border ${isDark ? "bg-[#0c121e]/40 border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                <p className={`font-bold text-xs mb-1 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>{activeLang.contactCompany}</p>
                <p className="mb-1">{activeLang.contactAddr}</p>
                <p>Email: <a href={`mailto:${activeLang.contactEmail}`} className="text-cyan-500 hover:underline">{activeLang.contactEmail}</a></p>
              </div>
            </div>
          </div>

          {/* Standalone footer */}
          <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500">
            {activeLang.copyright}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
