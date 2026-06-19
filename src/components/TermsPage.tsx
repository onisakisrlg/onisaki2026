import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useTheme, useLanguage } from "../theme";
import { 
  FileText, ArrowLeft, Sun, Moon, Scale, ShieldCheck, CheckCircle, HelpCircle
} from "lucide-react";

export default function TermsPage() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const isDark = theme === "dark";

  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const t = {
    "日本語": {
      title: "利用規約",
      backHome: "ホームへ戻る",
      subtitle: "Web開発・ITソリューション受託サービス契約一般規約（ONISAKI株式会社）",
      section1Title: "第1条（規約の適用）",
      section1Desc: "本利用規約（以下、「本規約」）は、ONISAKI株式会社（以下、「当社」）が提供する受託Webサイト制作、システム開発、UI/UX設計、コンサルティング、サーバー保守管理サービス等（以下、「本受託業務」）をご利用いただく際のご注文手続き、納品、権利関係等について合意内容を規定するものです。",
      section2Title: "第2条（契約の成立）",
      section2Desc: "本受託業務にかかる契約は、お客様が注文書、電子メール、または当社指定の方法により受託制作の申し込みを行い、当社が承諾の意思表示をした時点で成立するものとします。事前の要件定義やお見積書のご確認を行ってからの本契約移行を原則とします。",
      section3Title: "第3条（開発費用とお支払い方法）",
      section3Desc: "お客様は、お見積書および個別契約書にて定めた開発・制作費用を、支払期限までに当社の指定口座（またはStripe等の電子決済システム）を通じて支払うものとします。指定口座振込時に発生する手数料はお客様負担とします。別段の合意がない限り、分割支払いの場合は各開発マイルストーンごとの期日に合わせるものとします。",
      section4Title: "第4条（納品および検収完了）",
      section4Desc: "当社は約束した納期内に成果物の制作を完了し、指定のサーバーでの公開、もしくはソースコード譲渡等の形態により納品を行います。お客様は納品後14日以内に成果物の確認および検収テスト（不具合箇所の有無の検証）を行うものとします。この期間内に異議の申し立てがない場合は、検収を完了したものとみなします。",
      section5Title: "第5条（知的財産権の帰属）",
      section5Desc: "納品した受託開発成果物の著作権（著作権法第27条および第28条に規定する権利を含む）は、お客様の開発費用完済をもって、お客様に譲渡されるか、利用が許諾されます。ただし、当社が開発前から保有する独自のフレームワーク、汎用コードモジュール、共通ライブラリ等の知的財産権は当社に留保され、お客様はサービスの利用許諾を得るものとします。",
      section6Title: "第6条（瑕疵担保責任・バグ修正サポート）",
      section6Desc: "検収完了後、別段の保守契約が締結されていない場合であっても、納品後3ヶ月以内に成果物の致命的な動作不具合（要件定義書に定められた機能が稼働しない等）を発見し、通知をいただいた場合は、無償にて修正・修正プログラムの適用を実施します。お客様の自社環境での加工、外部API仕様変更、または他社の既存不具合に起因するものは除外します。",
      section7Title: "第7条（秘密保持およびプライバシ）",
      section7Desc: "双方は、本受託業務の履行を通じて知り得た相手方の営業上その他の技術上または業務上の情報を秘密として保持し、事前に相手方の書面による同意を得ることなく第三者へ開示・漏洩いたしません。個人情報については当社のプライバシーポリシーに則り安全に管理します。",
      section8Title: "第8条（管轄裁判所および準拠法）",
      section8Desc: "本規約および個別契約は日本国法に準拠し、日本法に従って解釈されるものとします。本規約に関連して紛争が発生した場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
      copyright: "© ONISAKI All Rights Reserved. Terms of Service"
    },
    "English": {
      title: "Terms of Service",
      backHome: "Back to Home",
      subtitle: "General Terms & Conditions of Contracted Web Development Services (ONISAKI Co., Ltd.)",
      section1Title: "Article 1 (Applicability)",
      section1Desc: "These general Terms of Service (hereinafter 'Terms') govern the ordering procedures, deliverable criteria, payment schedules, and ownership frameworks for the web programming, portal design, DX consultation, and cloud hosting maintenance services (collectively the 'Services') provided by ONISAKI Co., Ltd. (the 'Company') to the purchasing consumer or business entity.",
      section2Title: "Article 2 (Service Contracts)",
      section2Desc: "A legally binding contract under these Terms is formally executed when a client formally orders Services via our system portals, paper orders, or emails, and the Company subsequently delivers written acceptance. Services are generally preceded by written SOW definition steps and individual quotation checklists.",
      section3Title: "Article 3 (Pricing & Invoicing Schedules)",
      section3Desc: "Clients agree to fulfill fees and expenses delineated in the particular SOW on or before the due dates. Payment options include direct wire transfers or electronic merchant charges (such as secure Stripe checkout processing). Processing fees, bank commissions, or currency conversions must be borne by the client.",
      section4Title: "Article 4 (Delivery and Testing Inspection)",
      section4Desc: "The Company will transfer code assets to the target repository or configure public cloud environments on or before the agreed milestone timelines. The client must systematically inspect, test, and perform code validation reviews within 14 calendar days after delivery. Lacking structured written bug reports during this period, the deliverables shall be deemed Accepted.",
      section5Title: "Article 5 (Intellectual Property Allocation)",
      section5Desc: "Upon full validation and the clearing of all invoice balances, ownership rights and copyright parameters over bespoke customized logic will be assigned and transferred to the client. Pre-existing system widgets, internal utility codes, and general software libraries remain the perpetual property of the Company, granting client usage permissions.",
      section6Title: "Article 6 (Warranty & Ongoing Program Repair)",
      section6Desc: "We provide an automatic 3-month bug warranty coverage beginning from the final Acceptance date. If critical defects are identified within this duration, the Company will repair components at zero charge. We disclaim active warranty responsibilities if system files were altered by third-party modifications, custom adjustments, or external browser updates.",
      section7Title: "Article 7 (Information Secrecy)",
      section7Desc: "Neither party shall expose or utilize private technical layouts, trade keys, or business methodologies discovered during our SOW execution without the direct prior written approval of the opposing party. Personal attributes are protected under the Terms of our designated Privacy Policy.",
      section8Title: "Article 8 (Governing Law & Legal Venue)",
      section8Desc: "These Terms and all separate statements of work shall be construed exclusively under the local laws of Japan. In cases of unresolvable disagreements, the Tokyo District Court shall retain primary, exclusive jurisdiction as the court of first instance.",
      copyright: "© ONISAKI All Rights Reserved. Terms of Service"
    },
    "简体中文": {
      title: "服务条款",
      backHome: "返回首页",
      subtitle: "网页开发、IT系统受托技术服务通用条款契约（ONISAKI株式会社）",
      section1Title: "第一条（条款适用范围）",
      section1Desc: "本受托开发服务条款（以下简称“本条款”）旨在规范和定义采购方向 ONISAKI株式会社（以下简称“我司”）订购包含但不限于 Web网站美术设计、前后端逻辑开发、移动端应用交付、UI/UX系统设计及服务器托管运维等业务（以下统称“受托管业务”）过程中的订购规则、交付标准、知识产权分拨及售后责任划分等合规权属细则。",
      section2Title: "第二条（委托契约之成立）",
      section2Desc: "当客户向我司出具体系订单、电子邮件确认或使用我司设定的在线通道确认定制方案并在我司作出书面/邮件承接意向后，本服务协议正式确立。项目通常遵循“先输出定制要件需求定义并签发估报价单，再订立具体子项合同”的业务规则进行。",
      section3Title: "第三条（服务报价与结算承付）",
      section3Desc: "采购方承诺必须不晚于约定结算期，向我司对账单对应的指定银行网关汇入对应款项，或采用安全的 Stripe 结算单入口以信用卡形式结清里程碑定金或尾款。银行及第三方机构结算涉及的汇款手续费属于采购方自行承担的财务成本。中途变更开发要件若产生增项工时，依据补充契约进行费用追加。",
      section4Title: "第四条（代码交付与验收界限）",
      section4Desc: "我司将在各节点设定的周期内交付特定代码成果（通过公用/私有 Git 仓库推送或写入指定的云生产環境）。自成果推入客户端或生产平台起14日内，采购方需自行调试和进行验收测试（校验各交互组件与功能缺陷）。在此测试窗口内未提交有效书面缺陷整改清单者，视为成果无瑕疵并完成整体验收。",
      section5Title: "第五条（知识产权权属）",
      section5Desc: "定制项目中产生的完全非标定制代码与美术资源的著作权等知识产权，自客户全部款项结清后正式移交。但我司在开发前已经自研并作为基础架构使用的逻辑框架、公共算法组件、标准化基础插件等，其底层知识产权产权依然归属我司，客户获得全球范围免受诉、不限期授权许可使用权。",
      section6Title: "第六条（瑕疵保障与漏洞免费修护）",
      section6Desc: "哪怕未额外订阅本公司的商业维保，验收通过后3个月内，若发现系统存在偏离要件定义规范的重大核心程序漏洞（Bug），本公司承诺免受修护开发费，无偿进行远程修补与技术发布。若故障来源于外部依赖API格式篡改、第三方服务器停服、或者采购团队自行对核心结构进行过非授权改写，不列入质保名胜。",
      section7Title: "第七条（商业机密守护）",
      section7Desc: "供求双方各自承诺，对在委托交往及核心编码研发阶段所接触到的对方保密设计思路、数据库架构、商业逻辑、客户列表等专属涉蜜信息，施以必要合理的保密保护，非依法或未经书面明示授权，不可透露给社会无关非关系人或外部组织。",
      section8Title: "第八条（司法管辖与适用法典）",
      section8Desc: "本服务通用条款及其衍生的一切特定合同文书，一律适用日本国法律解释与执行。若因此产生难于协商的利益分歧或诉讼主张，本条确立东京都东京地方裁判所作为法定的专属第一审管辖法院。",
      copyright: "© ONISAKI 版权所有 | 服务条款"
    },
    "繁體中文": {
      title: "服務條款",
      backHome: "返回首頁",
      subtitle: "網頁開發、IT系統受託技術服務通用條款契約（ONISAKI株式會社）",
      section1Title: "第一條（條款適用範圍）",
      section1Desc: "本受託開發服務條款（以下簡稱“本條款”）旨在規範和定義採購方向 ONISAKI株式會社（以下簡稱“我司”）訂購包含但不限於 Web網站美術設計、前後端邏輯開發、行動端應用交付、UI/UX系統設計及伺服器託管運維等業務（以下統稱“受託管業務”）過程中的訂購規則、交付標準、知識產權分撥及售後責任劃分等合規權屬細則。",
      section2Title: "第二條（委託契約之成立）",
      section2Desc: "當客戶向我司出具體系訂單、電子郵件確認或使用我司設定的線上通道確認定制方案並在我司作出書面／郵件承接意向後，本服務協定正式確立。項目通常遵循“先輸出定制要件需求定義並簽發估報價單，再訂立具體子項合同”的業務規則進行。",
      section3Title: "第三條（服務報價與結算承付）",
      section3Desc: "採購方承諾必須不晚於約定結算期，向我司對帳單對應的指定銀行網關匯入對應款項，或採用安全的 Stripe 結算單入口以信用卡形式結清里程碑定金或尾款。銀行及第三方機構結算涉及的匯款手續費屬於採購方自行承擔的財務成本。中途變更開發要件若產生增項工時，依據補充契約進行費用追加。",
      section4Title: "第四條（代碼交付與驗收界限）",
      section4Desc: "我司將在各節點設定的週期內交付特定代碼成果（通過公用／私有 Git 倉庫推送或寫入指定的雲端生產環境）。自成果推入用戶端或生產平台起14日內，採購方需自行調試和進行驗收測試（校驗各交互組件與功能缺陷）。在此測試窗口內未提交有效書面缺陷整改清單者，視為成果無瑕疵並完成整體驗收。",
      section5Title: "第五條（知識產權权屬）",
      section5Desc: "定制專案中產生的完全非標定制代碼與美術資源的著作權等知識產權，自客戶全部款項結清後正式移交。但我司在開發前已經自研並作為基礎架構使用的邏輯框架、公共演算法組件、標準化基礎外掛等，其底層知識產權產權依然歸屬我司，客戶獲得全球範圍免受訴、不限期授權許可使用權。",
      section6Title: "第六條（瑕疵保障與漏洞免費修護）",
      section6Desc: "哪怕未額外訂閱本公司的商業維保，驗收通過後3個月內，若發現系統存在偏離要件定義規範的重大核心程序漏洞（Bug），本公司承諾免受修護開發費，無償進行遠程修補與技術發布。若故障來源於外部依賴API格式篡改、第三方伺服器停服、或者採購團隊自行對核心結構進行過非授權改寫，不列入質保名勝。",
      section7Title: "第七條（商業機密守護）",
      section7Desc: "供求雙方各自承諾，對在委託交往及核心編碼研發階段所接觸到的對方保密設計思路、資料庫架構、商業邏輯、客戶列表等專屬涉蜜資訊，施以必要合理的保密保護，非依法或未經書面明示授權，不可透露給社會無關非關係人或外部組織。",
      section8Title: "第八條（司法管轄與適用法典）",
      section8Desc: "本服務通用條款及其衍生的一切特定合同文書，一律適用日本國法律解釋與執行。若因此產生難於協商的利益分歧或訴訟主張，本條確立東京都東京地方裁判所作為法定的專屬第一審管轄法院。",
      copyright: "© ONISAKI 版權所有 | 服務條款"
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
              <Scale className="text-cyan-500" size={32} />
              {activeLang.title}
            </h1>
            <p className={`text-xs md:text-sm tracking-wider leading-relaxed ${isDark ? "text-cyan-400/80" : "text-cyan-600/80"}`}>
              {activeLang.subtitle}
            </p>
          </div>

          {/* Articles list */}
          <div className="space-y-10 text-xs md:text-sm leading-relaxed tracking-wider">
            {/* Article 1 */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <CheckCircle size={15} />
                {activeLang.section1Title}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.section1Desc}
              </p>
            </div>

            {/* Article 2 */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <CheckCircle size={15} />
                {activeLang.section2Title}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.section2Desc}
              </p>
            </div>

            {/* Article 3 */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <CheckCircle size={15} />
                {activeLang.section3Title}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.section3Desc}
              </p>
            </div>

            {/* Article 4 */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <CheckCircle size={15} />
                {activeLang.section4Title}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.section4Desc}
              </p>
            </div>

            {/* Article 5 */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <CheckCircle size={15} />
                {activeLang.section5Title}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.section5Desc}
              </p>
            </div>

            {/* Article 6 */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <CheckCircle size={15} />
                {activeLang.section6Title}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.section6Desc}
              </p>
            </div>

            {/* Article 7 */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <CheckCircle size={15} />
                {activeLang.section7Title}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.section7Desc}
              </p>
            </div>

            {/* Article 8 */}
            <div className="space-y-3">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-1.5 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <CheckCircle size={15} />
                {activeLang.section8Title}
              </h2>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {activeLang.section8Desc}
              </p>
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
