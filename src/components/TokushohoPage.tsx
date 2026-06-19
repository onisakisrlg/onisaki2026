import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useTheme, useLanguage } from "../theme";
import { 
  Building, MapPin, Phone, Mail, HelpCircle, ShieldCheck, ArrowLeft, Sun, Moon, Code, Cpu, Layers 
} from "lucide-react";

export default function TokushohoPage() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const isDark = theme === "dark";

  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const t = {
    "日本語": {
      title: "特定商取引法に基づく表記",
      backHome: "ホームへ戻る",
      subtitle: "Act on Specified Commercial Transactions Disclosure (Web Development Service)",
      seller: "販売業者",
      manager: "運営責任者",
      location: "所在地",
      phone: "電話番号",
      email: "メールアドレス",
      hoursTitle: "営業時間について",
      hoursDesc: "平日 10:00 - 18:00（土日祝日・年末年始を除く）",
      hoursSub: "メール・お問い合わせ窓口は24時間受け付けておりますが、返信およびテクニカルサポート対応は営業時間内となります。",
      pricingTitle: "販売価格・送料・必要料金",
      pricingName: "開発および提供価格",
      pricingVal: "個別見積もり（目安：100,000円〜2,000,000円 / 案件規模により決定）",
      pricingSub: "Webサイト制作、システム開発、UI/UX設計、システム保守等、事前の要件定義に基づき個別にお見積もりをいたします。",
      shippingName: "送料・配送費用",
      shippingVal: "デジタル納品のため「送料無料 / 配送不要」",
      shippingSub: "※有形物の配送が発生する場合は、事前協議または実費請求の形に基づきます。",
      feesName: "商品代金以外の必要料金",
      feesVal: "消費税、ドメイン・サーバー実費、サードパーティAPI費用、決済手数料等",
      feesSub: "消費税の他、インフラ利用料（VPS/AWS等）、外部ライセンス費用、銀行振込時の振込手数料はお客様負担となります。",
      paymentTitle: "お支払い方法・期限",
      paymentMethodName: "お支払い方法",
      paymentMethodVal: "銀行振込、クレジットカード決済（Stripe等）、銀行口座自動振替、分割請求（案件別合意）",
      paymentDeadlineName: "お支払い期限",
      paymentDeadlineVal: "個別契約（着手金／検収完了後の残金時払い）の通り。請求書発行期限、または注文後14日以内。",
      flowTitle: "お申込み・購入の流れ",
      flow1: "ご希望のWeb開発内容についてヒアリングを行い、要件定義およびお見積書をご提示します。",
      flow2: "お見積り仕様および利用規約にご同意いただき、個別契約（またはご注文確認）を締結します。",
      flow3: "必要に応じて着手金をご入金いただき、ワイヤーフレーム・デザイン設計を検証します。",
      flow4: "アプリケーション開発、社内テスト、お客様による確認・テスト環境での検収を行います。",
      flow5: "検収完了後、ご指定のパブリックサーバーまたは本番環境へ公開・納品、残金のお支払い手続きを行います。",
      deliveryTitle: "開発成果物（デジタルコンテンツ）の納品およびお届け",
      digitalTitle: "提供するデジタル成果物",
      digitalVal1: "商品内容: Webサイト、Webシステム、モバイルアプリ、デザインテンプレート、API連携システム等。",
      digitalVal2: "目的: お客様のオンラインビジネス促進、業務システム効率化。知的財産権の譲渡は契約に準じます。",
      digitalVal3: "提供方法: GitHub/GitLabなどによるソースコード連携、Zipファイル送信、または本番サーバーへの直接デプロイ。",
      digitalVal4: "推奨環境: Chrome, Safari, Microsoft Edge の最新安定版ブラウザ等での動作保証を基本とします。",
      periodTitle: "引き渡し時期および納期",
      periodVal1: "Web制作: 要件定義および基本設計の確定後、通常3週間〜2ヶ月（案件ごとの契約納期による）。",
      periodVal2: "小規模・既存プログラムパッケージライセンス: お支払い確認後、3営業日以内。",
      periodVal3: "保守・テクニカルサポート: 契約締結後、別途合意した保守期間において継続的に提供。",
      shippingMethodTitle: "配送方法",
      shippingMethodVal: "電子メール送信、セキュアなDLリンク発行、またはサーバー移転・デプロイ作業による電子納品。",
      returnTitle: "返品・交換・キャンセルに関して",
      returnName: "返品・成果物のやり直し",
      returnDesc: "受託Web開発・カスタムデザインの性質上、開発着手以降の自己都合によるキャンセルや返品、返金は原則お受けできません。お客様のご要望により発生した追加・変更は追加お見積もりとなります。瑕疵・不具合（バグ）については、検収後または保守契約期間内において無償でバグ修正を対応いたします。",
      cancelName: "契約キャンセルおよび中途解約",
      cancelDesc: "システム開発着手前（デザイン作成前）の段階であればキャンセル可能です。開発工程着手後の中途解約につきましては、着手済みの工数ならびに進捗状況に応じた開発費用（実費）をご請求させていただきますのであらかじめご了承ください。",
      limitName: "対応上限および開発数量制限について",
      limitDesc: "専属開発ラインの確保状況や開発サーバーのキャパシティにより、同時期にお引き受けできる開発・制作案件の件数を制限させていただく場合がございます。",
      otherTitle: "信頼性とアフターサポート",
      otherDesc: "当社は関係法令（特定商取引に関する法律、および個人情報保護法、関連ガイドライン等）を遵守します。Webシステム納品後も、安心してお使いいただけるよう保守メンテナンスメニューやアクセス分析などの伴走支援サポートを用意しております。ご不明点等がございましたら、上記のサポート窓口までいつでもお気軽にお問い合わせください。",
      copyright: "© ONISAKI All Rights Reserved. Specified Commercial Transactions Act Disclosure"
    },
    "English": {
      title: "Act on Specified Commercial Transactions",
      backHome: "Back to Home",
      subtitle: "Legal Disclosure under the Act on Specified Commercial Transactions (Web Development Service)",
      seller: "Seller / Provider",
      manager: "Representative",
      location: "Address",
      phone: "Phone Number",
      email: "Email Address",
      hoursTitle: "Business Hours & Support",
      hoursDesc: "Weekdays 10:00 - 18:00 JST (Excluding weekends, holidays, and New Year holidays)",
      hoursSub: "Inquiries via our submission forms are received 24/7, while replies and tech support run during business hours.",
      pricingTitle: "Pricing, Deliverables & Fees",
      pricingName: "Product Prices",
      pricingVal: "Individual estimates per project scope (Reference: 100,000 to 2,000,000 JPY)",
      pricingSub: "Web design, custom app creation, backend integrations, and server optimizations are specifically quoted based on custom scopes of work (SOW).",
      shippingName: "Shipping & Freight",
      shippingVal: "No delivery fees applicable (Digital Electronic Delivery / Electronic Deployment)",
      shippingSub: "*Physical shipments are not needed unless explicit media hard drives are ordered with custom SOW.",
      feesName: "Additional Client Expenses",
      feesVal: "Consumption tax, server hosting fees, domain purchases, third-party API keys, payment fees",
      feesSub: "Local consumption tax, VPS/Cloud instances (AWS/Heroku), domain registrations, and bank transfer fees are borne by the purchaser.",
      paymentTitle: "Payment Methods & Milestones",
      paymentMethodName: "Payment Methods",
      paymentMethodVal: "Bank Transfer, Credit Card (Stripe), Automated Clearing House (ACH), staged milestone schedules",
      paymentDeadlineName: "Payment Timelines",
      paymentDeadlineVal: "As documented in individual written contracts (e.g., retainer + final delivery). Net 14 from invoice issue.",
      flowTitle: "Commercial Order Process Flow",
      flow1: "Conduct consultation meetings to analyze targets and yield complete SOW documentation and cost breakdown sheets.",
      flow2: "Review specifications, agree with terms, and execute the web development service contract.",
      flow3: "Verify custom wireframes and UI designs. Settle kickoff payments if stipulated in milestones.",
      flow4: "Backend programming, frontend UI integration, quality assurances, and sandbox testing staging.",
      flow5: "Review feedback, proceed with final server migrations/deployment, export git resources, and invoice the remaining totals.",
      deliveryTitle: "Delivery of Digital Web Code & Assets",
      digitalTitle: "Digital Deliverables Details",
      digitalVal1: "Artifacts: Production websites, custom web services, cloud software, repository source codes, UI designs.",
      digitalVal2: "Intended Purpose: Enterprise promotion, CRM optimization, and e-commerce portal functions.",
      digitalVal3: "Transmission Methods: Git repository sharing (GitHub/GitLab), security zipped downloads, or live server deployments.",
      digitalVal4: "Target Runtime: Standard, modern desktop browsers including current Google Chrome and Apple Safari updates.",
      periodTitle: "Delivery / Project Term",
      periodVal1: "Custom Web Builds: Typically 3 weeks to 3 months depending on overall code and API complexity (as per contract specifications).",
      periodVal2: "Standard Licenses: Provided within 3 business days of payment receipt verification.",
      periodVal3: "Technical Maintenance: Ongoing deliverables through the specific terms of written maintenance retainers.",
      shippingMethodTitle: "Carrier Services",
      shippingMethodVal: "Secure code commits, digital links transmission, or direct public domain web environment deployment.",
      returnTitle: "Returns, Replacements & Cancellations",
      returnName: "Returns / Bug Repairs",
      returnDesc: "Due to the custom-made nature of bespoke systems development and user design works, custom orders are non-refundable and non-returnable once coding starts. Post-delivery bugs are rectified free of charge during the warranty or active support timeframe specified in our contract.",
      cancelName: "Order Cancellations",
      cancelDesc: "Before coding work starts, clients may cancel with zero penalty. If cancelled mid-project, completed design assets and accrued human hours/milestones will be calculated and invoiced at actual developer cost.",
      limitName: "Capacity Bounds",
      limitDesc: "We restrict the count of active web projects accepted concurrently to enforce premium quality and support.",
      otherTitle: "After-sales Core & Compliance",
      otherDesc: "We comply fully with Japanese commercial regulations and privacy laws. We provide optional digital marketing retainers, maintenance updates, and analysis post-delivery. Reach out dynamically.",
      copyright: "© ONISAKI All Rights Reserved. Specified Commercial Transactions Act Disclosure"
    },
    "简体中文": {
      title: "特定商业交易法公示",
      backHome: "返回首页",
      subtitle: "基于日本《特定商业交易法》的法定公示内容（网页与系统定制开发业务）",
      seller: "销售企业",
      manager: "运营负责人",
      location: "住所地",
      phone: "联系电话",
      email: "电子邮箱",
      hoursTitle: "关于营业时间与技术支持",
      hoursDesc: "工作日 10:00 - 18:05（周末节假日、元旦假期除外）",
      hoursSub: "邮件及建站咨询窗口24小时接收，客服答疑与故障排查将于营业时间内依次回复。",
      pricingTitle: "开发价格、运费及其他必要费用",
      pricingName: "网页及系统开发价格",
      pricingVal: "根据项目需求定制估算报价（参考案值：100,000日元〜2,000,000日元）",
      pricingSub: "根据Web网站设计、应用端重构、UI/UX原型、API系统集成及后期运维所需工时进行个性化定制报价。",
      shippingName: "运费与寄送费用",
      shippingVal: "属数字化产品及电子成果交付，“免收运费 / 无需实物配送”",
      shippingSub: "※原则上均属于纯数字化软件部署；若确需邮寄硬盘等物理载体，将采用到付或根据实际资费结算。",
      feesName: "除服务开发费外的额外费用",
      feesVal: "日本消费税、服务器/云服务商实报实销实费、域名购买费、第三方接口授权费、转账手续费",
      feesSub: "消费税外，如需采购云服务器（AWS/阿里云/VPS）、独占域名、收费中继API等，其注册及续费属于客户运营成本。",
      paymentTitle: "支付方式、签约与期限",
      paymentMethodName: "付款方式",
      paymentMethodVal: "银行转账、信用卡（Stripe/PayPal）、企业电汇、分期款项结算（根据各项目进度备忘录约定）",
      paymentDeadlineName: "付款期限",
      paymentDeadlineVal: "遵循项目合同设定的里程碑阶段付款（如首付款 + 完工验收尾款）。在收到账单14日内完成汇款。",
      flowTitle: "项目订购与交付流程",
      flow1: "在了解您的业务场景、定制需求后，制定相应的网页设计逻辑及后台配置要件，并出具详细报价单。",
      flow2: "双方确认报价清单无误，并就交付标准与技术保障条款达成共识后，签订开发合同。",
      flow3: "客户支付首付款或首期开发款。我们启动首页原型、UI/UX界面设计并开展核验。",
      flow4: "完成整站前端切片编写、后台API与数据库搭建，在测试服务器部署以供客户实时测试回馈。",
      flow5: "通过预定测试指标检收。向您的生产服务器（正式环境）迁移、移交源代码，客户结清全部尾款并完成结项。",
      deliveryTitle: "网站及数字交付物的寄送与部署方式",
      digitalTitle: "交付物范畴",
      digitalVal1: "内容描述: 网站前端、交互系统、响应式业务平台、管理后台、定制数据库结构等。",
      digitalVal2: "合理用途: 提升企业线上宣传质效、辅助电商销售行为、优化业务管理数据中枢。",
      digitalVal3: "提供形式: 开通 Git 仓库访问权限、源码包压缩文件、以及发布至指定的云托管实例。",
      digitalVal4: "推荐系统: 保证成果在 Google Chrome, Safari, Edge 的最新现代客户端浏览器下完美展示运行。",
      periodTitle: "项目实施交付周期",
      periodVal1: "定制网页建站: 经过原型及功能确立后，正常耗时3周至3个月不等（根据合同说明的起迄日期执行）。",
      periodVal2: "模板化授权或标准化组件: 确认款项到账后，3个工作日内。 ",
      periodVal3: "日常运维与改版支持: 根据日常运维合同确立的包年/包月周期提供不间断运维监控。",
      shippingMethodTitle: "运输承运方式",
      shippingMethodVal: "Git 在线拉取（Push/Pull）或提供高度加密的数字存储直链，或工程师执行远程主机环境部署服务。",
      returnTitle: "关于退款、中途解约与售后保障",
      returnName: "定制代码不适用无理由退货",
      returnDesc: "基于受托开发及定制设计合同的特殊非标性，自本公司启动系统原型设计或编码起，不支持无理由中途退换。项目生命周期中产生的任何变动，应签订补充协议并可能增加工时费。项目交付后，如在约定期限内发现程序逻辑漏洞（Bug），我们提供无条件漏洞修复支持。",
      cancelName: "项目解约条款",
      cancelDesc: "在双方正式生效合同、我们还未匹配项目经理或未着手原型创设前，支持免费解约撤回。开始设计与开发后，若因客户单方原因中途叫停，需根据当前已交付的进度工时，结算已发生的服务开发实费并办理结项。",
      limitName: "并发案件吞吐限制",
      limitDesc: "为保障每一套企业网站与核心应用的系统安全与开发细节质量，我司各设计开发小组同一阶段将严格控制并发接单数量上限。",
      otherTitle: "售后运维与合规责任保证",
      otherDesc: "我司长久遵守特定商业交易法并提供企业级网站运维售后。交付只是起点，我们还配套提供长期技术升级、流量监控和数字营销等多样化一站式解决方案，随时期待您的垂询。",
      copyright: "© ONISAKI 版权所有 | 基于特定商业交易法公示"
    },
    "繁體中文": {
      title: "特定商業交易法公示",
      backHome: "返回首頁",
      subtitle: "基於日本《特定商業交易法》的法定公示內容（網頁及系統定制開發業務）",
      seller: "銷售企業",
      manager: "運營負責人",
      location: "住所地",
      phone: "聯絡電話",
      email: "電子郵件",
      hoursTitle: "關於營業時間與技術支援",
      hoursDesc: "工作日 10:00 - 18:00（週末例假日、元旦假期除外）",
      hoursSub: "郵件及建站諮詢窗口24小時接收，客服答疑與故障排查將會於營業時間內依序回覆。",
      pricingTitle: "開發價格、運費及其他必要費用",
      pricingName: "網頁及系統開發價格",
      pricingVal: "根據專案需求定制估算報價（參考案值：100,000日圓〜2,000,000日圓）",
      pricingSub: "根據Web網站設計、應用端重構、UI/UX原型、API系統集成及後期運維所需工時進行個性化定制報價。",
      shippingName: "運費與寄送費用",
      shippingVal: "屬數位化產品及電子成果交付，“免收運費 / 無需實物配送”",
      shippingSub: "※原則上均屬於純數位化軟體部署；若確需郵寄硬碟等物理載體，將採用到付或根據實際資費結算。",
      feesName: "除商品外的額外費用",
      feesVal: "日本國內消費稅、各類結算通道手續費",
      feesSub: "消費稅和基礎遞送費之外，因銀行匯款或代收手續等產生的手續費歸屬客戶承擔。",
      paymentTitle: "支付方式及期限",
      paymentMethodName: "付款方式",
      paymentMethodVal: "銀行轉帳、信用卡（Stripe/PayPal）、企業電匯、分期款項結算（根據各專案進度備忘錄約定）",
      paymentDeadlineName: "付款期限",
      paymentDeadlineVal: "遵循專案合同設定的里程碑階段付款（如首付款 + 完工驗收尾款）。在收到帳單14日內完成匯款。",
      flowTitle: "專案訂購與交付流程",
      flow1: "在了解您的業務場景、定制需求後，制定相應的網頁設計邏輯及後台配置要件，並出具詳細報價單。",
      flow2: "雙方確認報價清單無誤，並就交付標準與技術保障條款達成共識後，簽訂開發合約。",
      flow3: "客戶支付首付款或首期開發款。我們啟動首頁原型、UI/UX介面設計並開展核驗。",
      flow4: "完成整站前端切片編寫、後台API與資料庫搭建，在測試伺服器部署以供客戶即時測試回饋。",
      flow5: "通過預定測試指標檢收。向您的生產伺服器（正式環境）遷移、移交原始碼，客戶結清全部尾款並完成結項。",
      deliveryTitle: "網站及數位交付物的寄送與部署方式",
      digitalTitle: "交付物範疇",
      digitalVal1: "內容描述: 網站前端、交互系統、響應式業務平台、管理後台、定制資料庫結構等。",
      digitalVal2: "合理目的: 提升企業線上宣傳質效、輔助電商銷售行為、優化業務管理數據中樞。",
      digitalVal3: "提供形式: 開通 Git 倉庫訪問權限、原始碼包壓縮文件、以及發布至指定的雲端代管實例。",
      digitalVal4: "推薦系統: 保證成果在 Google Chrome, Safari, Edge 的最新現代用戶端瀏覽器下完美展示運行。",
      periodTitle: "專案實施交付週期",
      periodVal1: "定制網頁建站: 經過原型及功能確立後，正常耗時3周至3個月不等（根據合同說明的起迄日期执行）。",
      periodVal2: "模板化授權或標準化組件: 確認款项到帳後，3個工作日內。 ",
      periodVal3: "日常運維與改版支持: 根據日常運維合同確立的包年/包月週期提供不間斷運維監控。",
      shippingMethodTitle: "運輸承運方式",
      shippingMethodVal: "Git 線上拉取（Push/Pull）或提供高度加密的數位存儲直鏈，或工程師執行遠端主機環境部署服務。",
      returnTitle: "關於退款、中途解約與售後保障",
      returnName: "定制程式碼不適用無理由退貨",
      returnDesc: "基於受託開發及定制設計合同的特殊非標性，自本公司啟動系統原型設計或編碼起，不支持無理由中途退換。專案生命週期中產生的任何變動，應簽訂補充協議並可能增加工時費。專案交付後，如在約定期限內發現程式邏輯漏洞（Bug），我們提供無條件漏洞修復支持。",
      cancelName: "專案解約條款",
      cancelDesc: "在雙方正式生效合約、我們尚未匹配專案經理或未著手原型創設前，支持免費解約撤回。開始設計與開發後，若因客戶單方原因中途叫停，需根據當前已交付的進度工時，結算已發生的服務開發實費並辦理解項。",
      limitName: "併發案件吞吐限制",
      limitDesc: "為保障每一套企業網站與核心應用的系統安全與開發細節品質，我司各設計開發小組同一階段將嚴格控制併發接單數量上限。",
      otherTitle: "售後運維與合規責任保證",
      otherDesc: "我司長久遵守特定商業交易法並提供企業級網站運維售後。交付只是起點，我們還配套提供長期技術升級、流量監控和數位營銷等多樣化一站式解決方案，隨時期待您的垂詢。",
      copyright: "© ONISAKI 版權所有 | 基於特定商業交易法公示"
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
              // Direct navigation to top route
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
          {/* Language Localizer bar inside subheader */}
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

          {/* Theme switcher */}
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
          {/* Page Heading banner */}
          <div className="space-y-3 pb-8 border-b border-cyan-500/25">
            <h1 className={`text-2xl sm:text-4xl font-black tracking-widest flex items-center gap-3 ${isDark ? "text-white" : "text-black"}`}>
              <Code className="text-cyan-500" size={32} />
              {activeLang.title}
            </h1>
            <p className={`text-xs md:text-sm tracking-wider leading-relaxed ${isDark ? "text-cyan-400/80" : "text-cyan-600/80"}`}>
              {activeLang.subtitle}
            </p>
          </div>

          <div className="space-y-10">
            {/* 1. 販売主体 */}
            <div className="space-y-4">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-2 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <Building size={16} />
                1. {activeLang.seller} / {activeLang.manager}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs tracking-wider">
                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.seller}</span>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>ONISAKI株式会社</span>
                </div>
                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.manager}</span>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>ソウニチラクガク</span>
                </div>
                <div className={`p-4 rounded-xl border md:col-span-2 ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-1.5 flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}><MapPin size={12} />{activeLang.location}</span>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>〒104-0061 東京都中央区銀座１丁目２２番１１号 銀座大竹ビジデンス２Ｆ</span>
                </div>
                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-1.5 flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}><Phone size={12} />{activeLang.phone}</span>
                  <span className={`font-mono font-semibold ${isDark ? "text-white" : "text-black"}`}>050-6864-0984</span>
                </div>
                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-1.5 flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}><Mail size={12} />{activeLang.email}</span>
                  <a href="mailto:support@onisaki.com" className="font-mono font-semibold text-cyan-500 hover:underline">support@onisaki.com</a>
                </div>
              </div>
            </div>

            {/* 2. 営業時間 */}
            <div className="space-y-4">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-2 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <HelpCircle size={16} />
                2. {activeLang.hoursTitle}
              </h2>
              <div className={`p-5 rounded-xl border text-xs tracking-wider leading-relaxed ${isDark ? "bg-white/[0.02] border-white/5 text-gray-300" : "bg-black/[0.02] border-black/5 text-gray-700"}`}>
                <p className="font-semibold mb-2">{activeLang.hoursDesc}</p>
                <p className={`text-[11px] ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {activeLang.hoursSub}
                </p>
              </div>
            </div>

            {/* 3. 価格・送料・必要料金 */}
            <div className="space-y-4">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-2 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <Layers size={16} />
                3. {activeLang.pricingTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs tracking-wider">
                <div className={`p-4 rounded-xl border flex flex-col justify-between ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <div>
                    <span className={`block font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.pricingName}</span>
                    <span className={`font-semibold leading-relaxed ${isDark ? "text-white" : "text-black"}`}>{activeLang.pricingVal}</span>
                  </div>
                  <p className={`text-[10px] mt-2 block ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    {activeLang.pricingSub}
                  </p>
                </div>
                
                <div className={`p-4 rounded-xl border flex flex-col justify-between ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <div>
                    <span className={`block font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.shippingName}</span>
                    <span className={`font-semibold leading-relaxed ${isDark ? "text-white" : "text-black"}`}>{activeLang.shippingVal}</span>
                  </div>
                  <p className={`text-[10px] mt-2 block ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                    {activeLang.shippingSub}
                  </p>
                </div>

                <div className={`p-4 rounded-xl border flex flex-col justify-between ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <div>
                    <span className={`block font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.feesName}</span>
                    <span className={`font-semibold leading-relaxed block ${isDark ? "text-white" : "text-black"}`}>{activeLang.feesVal}</span>
                  </div>
                  <p className={`text-[10px] mt-2 block ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    {activeLang.feesSub}
                  </p>
                </div>
              </div>
            </div>

            {/* 4. お支払い詳細 */}
            <div className="space-y-4">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-2 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <ShieldCheck size={16} />
                4. {activeLang.paymentTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs tracking-wider">
                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.paymentMethodName}</span>
                  <p className={`font-semibold leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
                    {activeLang.paymentMethodVal}
                  </p>
                </div>
                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.paymentDeadlineName}</span>
                  <p className={`font-semibold leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
                    {activeLang.paymentDeadlineVal}
                  </p>
                </div>
              </div>
            </div>

            {/* 5. 注文フロー */}
            <div className="space-y-4">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-2 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <Cpu size={16} />
                5. {activeLang.flowTitle}
              </h2>
              <div className={`p-5 rounded-xl border space-y-3 text-xs tracking-wider leading-relaxed ${isDark ? "bg-white/[0.02] border-white/5 text-gray-300" : "bg-black/[0.02] border-black/5 text-gray-700"}`}>
                <div className="flex gap-2">
                  <span className="font-bold text-cyan-500">1.</span>
                  <p>{activeLang.flow1}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-cyan-500">2.</span>
                  <p>{activeLang.flow2}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-cyan-500">3.</span>
                  <p>{activeLang.flow3}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-cyan-500">4.</span>
                  <p>{activeLang.flow4}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-cyan-500">5.</span>
                  <p>{activeLang.flow5}</p>
                </div>
              </div>
            </div>

            {/* 6. デジタルコンテンツ・納品 */}
            <div className="space-y-4">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-2 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <Code size={16} />
                6. {activeLang.deliveryTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs tracking-wider">
                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.digitalTitle}</span>
                  <ul className="space-y-1.5 list-disc pl-4 text-[11px] leading-relaxed text-gray-400">
                    <li>{activeLang.digitalVal1}</li>
                    <li>{activeLang.digitalVal2}</li>
                    <li>{activeLang.digitalVal3}</li>
                    <li>{activeLang.digitalVal4}</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-xl border flex flex-col justify-between ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <div>
                    <span className={`block font-bold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.periodTitle}</span>
                    <ul className="space-y-1 text-[11px] leading-relaxed">
                      <li>・{activeLang.periodVal1}</li>
                      <li>・{activeLang.periodVal2}</li>
                      <li>・{activeLang.periodVal3}</li>
                    </ul>
                  </div>
                  <div className="mt-3 pt-2 border-t border-dashed border-white/5">
                    <span className={`block font-bold text-[11px] ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.shippingMethodTitle}</span>
                    <span className="text-[10px] text-gray-400">{activeLang.shippingMethodVal}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. 返品・交換・キャンセル */}
            <div className="space-y-4">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-2 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <ShieldCheck size={16} />
                7. {activeLang.returnTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs tracking-wider">
                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.returnName}</span>
                  <p className={`text-[11px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {activeLang.returnDesc}
                  </p>
                </div>
                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.cancelName}</span>
                  <p className={`text-[11px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {activeLang.cancelDesc}
                  </p>
                </div>
                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                  <span className={`block font-bold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeLang.limitName}</span>
                  <p className={`text-[11px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {activeLang.limitDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* 8. その他 */}
            <div className="space-y-4">
              <h2 className={`text-sm tracking-widest font-black uppercase flex items-center gap-2 border-l-2 pl-3 border-cyan-500 pb-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                <HelpCircle size={16} />
                8. {activeLang.otherTitle}
              </h2>
              <div className={`p-5 rounded-xl border text-xs tracking-wider leading-relaxed ${isDark ? "bg-white/[0.02] border-white/5 text-gray-300" : "bg-black/[0.02] border-black/5 text-gray-700"}`}>
                <p>
                  {activeLang.otherDesc}
                </p>
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
