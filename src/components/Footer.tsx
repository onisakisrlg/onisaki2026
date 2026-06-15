import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme, useLanguage } from "../theme";
import { X, FileText, Phone, Mail, MapPin, Building, ShieldCheck, HelpCircle } from "lucide-react";

export default function Footer() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const isDark = theme === "dark";

  // Label translations for footer
  const footerLabels = {
    "日本語": {
      sotaBtn: "特定商取引法に基づく表記",
      copyright: "© ONISAKI株式会社 All Rights Reserved.",
    },
    "English": {
      sotaBtn: "Act on Specified Commercial Transactions",
      copyright: "© ONISAKI Co., Ltd. All Rights Reserved.",
    },
    "简体中文": {
      sotaBtn: "特定商业交易法公示",
      copyright: "© ONISAKI 株式会社 All Rights Reserved.",
    },
    "繁體中文": {
      sotaBtn: "特定商業交易法公示",
      copyright: "© ONISAKI 株式会社 All Rights Reserved.",
    }
  };

  const currentLabels = footerLabels[language] || footerLabels["日本語"];

  return (
    <>
      <footer className={`relative w-full z-20 py-8 px-6 text-center border-t transition-colors duration-500 flex flex-col md:flex-row items-center justify-between gap-4 ${isDark ? "bg-[#02040a] border-white/5 text-gray-500" : "bg-[#f8fafc] border-black/5 text-gray-600"}`}>
        <div className="text-xs tracking-widest font-medium order-2 md:order-1">
          {currentLabels.copyright}
        </div>
        <div className="flex items-center gap-6 order-1 md:order-2">
          <button
            onClick={() => setIsOpen(true)}
            className={`text-xs tracking-widest font-semibold hover:text-cyan-500 transition-colors duration-300 flex items-center gap-1.5 focus:outline-none`}
          >
            <FileText size={14} />
            {currentLabels.sotaBtn}
          </button>
        </div>
      </footer>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/75 backdrop-blur-md"
          >
            {/* Modal backdrop closer */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative w-full max-w-4xl h-[85vh] md:h-[80vh] rounded-2xl border flex flex-col overflow-hidden shadow-2xl z-10 transition-colors duration-500 ${
                isDark ? "bg-[#0b101e]/95 border-white/10 text-gray-200" : "bg-white/95 border-black/10 text-gray-800"
              }`}
            >
              {/* Header */}
              <div className={`p-6 px-8 flex items-center justify-between border-b ${isDark ? "border-white/5 bg-white/5" : "border-black/5 bg-black/5"}`}>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-cyan-500" size={22} />
                  <h3 className={`text-lg md:text-xl font-bold tracking-widest ${isDark ? "text-white" : "text-black"}`}>
                    特定商取引法に基づく表記
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-1.5 rounded-lg transition-colors ${isDark ? "hover:bg-white/10 text-gray-400 hover:text-white" : "hover:bg-black/10 text-gray-600 hover:text-black"}`}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 select-text">
                
                {/* 1. 販売主体 */}
                <div className="space-y-4">
                  <h4 className={`text-sm tracking-widest font-bold uppercase flex items-center gap-2 border-b pb-2 ${isDark ? "text-cyan-400 border-white/10" : "text-cyan-600 border-black/10"}`}>
                    <Building size={16} />
                    1. 販売主体 (Seller / Operator)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs tracking-wider">
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>販売業者</span>
                      <span className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>ONISAKI株式会社</span>
                    </div>
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>運営責任者</span>
                      <span className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>ソウニチラクガク</span>
                    </div>
                    <div className={`p-4 rounded-xl border md:col-span-2 ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-1.5 flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}><MapPin size={12} />所在地</span>
                      <span className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>東京都中央区銀座１丁目２２番１１号 銀座大竹ビジデンス２Ｆ</span>
                    </div>
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-1.5 flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}><Phone size={12} />電話番号</span>
                      <span className={`font-mono font-semibold ${isDark ? "text-white" : "text-black"}`}>050-6864-0984</span>
                    </div>
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-1.5 flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}><Mail size={12} />メールアドレス</span>
                      <a href="mailto:support@onisaki.com" className="font-mono font-semibold text-cyan-500 hover:underline">support@onisaki.com</a>
                    </div>
                  </div>
                </div>

                {/* 2. 営業時間 */}
                <div className="space-y-4">
                  <h4 className={`text-sm tracking-widest font-bold uppercase flex items-center gap-2 border-b pb-2 ${isDark ? "text-cyan-400 border-white/10" : "text-cyan-600 border-black/10"}`}>
                    <HelpCircle size={16} />
                    2. 営業時間について (Business Hours)
                  </h4>
                  <div className={`p-5 rounded-xl border text-xs tracking-wider leading-relaxed ${isDark ? "bg-white/[0.02] border-white/5 text-gray-300" : "bg-black/[0.02] border-black/5 text-gray-700"}`}>
                    <p className="font-semibold mb-2">平日 10:00 - 18:00（土日祝日・年末年始を除く）</p>
                    <p className={`text-[11px] ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      メールでのお問い合わせは24時間受け付けておりますが、返信・対応は営業時間内となります。
                    </p>
                  </div>
                </div>

                {/* 3. 価格・送料・必要料金 */}
                <div className="space-y-4">
                  <h4 className={`text-sm tracking-widest font-bold uppercase flex items-center gap-2 border-b pb-2 ${isDark ? "text-cyan-400 border-white/10" : "text-cyan-600 border-black/10"}`}>
                    <ShieldCheck size={16} />
                    3. 販売価格・送料・必要料金 (Pricing, Shipping & Fees)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs tracking-wider">
                    <div className={`p-4 rounded-xl border flex flex-col justify-between ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <div>
                        <span className={`block font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>販売価格</span>
                        <span className={`font-semibold leading-relaxed ${isDark ? "text-white" : "text-black"}`}>価格：500円〜2,000,000円</span>
                      </div>
                      <p className={`text-[10px] mt-2 block ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        商品・サービスごとに表示（全て税込価格）。詳細は各サービスページをご確認ください。
                      </p>
                    </div>
                    
                    <div className={`p-4 rounded-xl border flex flex-col justify-between ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <div>
                        <span className={`block font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>送料</span>
                        <span className={`font-semibold leading-relaxed ${isDark ? "text-white" : "text-black"}`}>全国一律 500円（税込）</span>
                      </div>
                      <p className={`text-[10px] mt-2 block ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
                        ※合計 10,000円（税込）以上のご購入で【送料無料】となります。
                      </p>
                    </div>

                    <div className={`p-4 rounded-xl border flex flex-col justify-between md:col-span-1 ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <div>
                        <span className={`block font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>商品代金以外の必要料金</span>
                        <span className={`font-semibold leading-relaxed block ${isDark ? "text-white" : "text-black"}`}>消費税、その他各種手数料</span>
                      </div>
                      <p className={`text-[10px] mt-2 block ${isDark ? "text-gray-405" : "text-gray-500"}`}>
                        消費税、配送料のほか、お支払い方法に応じた振込手数料（銀行振込）や代引手数料（代金引換）等。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. お支払い詳細 */}
                <div className="space-y-4">
                  <h4 className={`text-sm tracking-widest font-bold uppercase flex items-center gap-2 border-b pb-2 ${isDark ? "text-cyan-400 border-white/10" : "text-cyan-600 border-black/10"}`}>
                    <ShieldCheck size={16} />
                    4. お支払い方法・期限 (Payment Methods & Deadlines)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs tracking-wider">
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>お支払い方法</span>
                      <p className={`font-semibold leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
                        クレジットカード、銀行振込、コンビニ決済、代金引換、WeChat Pay（微信支付）、Alipay（支付宝）
                      </p>
                    </div>
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>お支払い期限</span>
                      <p className={`font-semibold leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
                        ご注文後7日以内にお支払いください。期限を過ぎた場合はキャンセル扱いとなる場合がございます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. 注文フロー */}
                <div className="space-y-4">
                  <h4 className={`text-sm tracking-widest font-bold uppercase flex items-center gap-2 border-b pb-2 ${isDark ? "text-cyan-400 border-white/10" : "text-cyan-600 border-black/10"}`}>
                    <ShieldCheck size={16} />
                    5. お申込み・購入の流れ (Order Flow)
                  </h4>
                  <div className={`p-5 rounded-xl border space-y-3 text-xs tracking-wider leading-relaxed ${isDark ? "bg-white/[0.02] border-white/5 text-gray-300" : "bg-black/[0.02] border-black/5 text-gray-700"}`}>
                    <div className="flex gap-2">
                      <span className="font-bold text-cyan-500">1.</span>
                      <p>ご希望のサービスまたは商品を選択し、「お問い合わせ」または「購入」ボタンをクリックしてください。</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-cyan-500">2.</span>
                      <p>必要事項（お名前、ご連絡先、お支払い方法等）を入力してください。</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-cyan-500">3.</span>
                      <p>入力内容を確認し、注文を確定してください。</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-cyan-500">4.</span>
                      <p>弊社より自動返信メールまたは担当者より確認メールを送信いたします。</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-cyan-500">5.</span>
                      <p>お支払い完了の確認後、サービス提供または商品発送の手続きを開始いたします。</p>
                    </div>
                  </div>
                </div>

                {/* 6. デジタルコンテンツ・納品 */}
                <div className="space-y-4">
                  <h4 className={`text-sm tracking-widest font-bold uppercase flex items-center gap-2 border-b pb-2 ${isDark ? "text-cyan-400 border-white/10" : "text-cyan-600 border-black/10"}`}>
                    <ShieldCheck size={16} />
                    6. デジタルコンテンツ・商品お届けについて (Delivery Methods)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs tracking-wider">
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>デジタルコンテンツについて</span>
                      <ul className="space-y-1.5 list-disc pl-4 text-[11px] leading-relaxed text-gray-400">
                        <li><strong className={isDark ? "text-gray-200" : "text-gray-600"}>商品内容:</strong> Webサイト制作、デザインデータ、ECシステムライセンス、マーケティング資料等。</li>
                        <li><strong className={isDark ? "text-gray-200" : "text-gray-600"}>使用目的:</strong> お客様の事業促進、広報活動、オンラインビジネス等。</li>
                        <li><strong className={isDark ? "text-gray-200" : "text-gray-600"}>提供方法:</strong> メール添付、専用サーバーからのDL、またはオンラインアクセス提供。</li>
                        <li><strong className={isDark ? "text-gray-200" : "text-gray-600"}>推奨環境:</strong> 各種WEBブラウザ（Chrome、Safari等）の最新バージョンを推奨。</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-xl border flex flex-col justify-between ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <div>
                        <span className={`block font-bold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>引き渡し時期</span>
                        <ul className="space-y-1 text-[11px] leading-relaxed">
                          <li>・<strong className={isDark ? "text-gray-200" : "text-gray-600"}>デジタルコンテンツ:</strong> お支払い確認後、即時または3営業日以内。</li>
                          <li>・<strong className={isDark ? "text-gray-200" : "text-gray-600"}>WEB制作サービス:</strong> 契約締結後、別途合意したスケジュールによる。</li>
                          <li>・<strong className={isDark ? "text-gray-200" : "text-gray-600"}>有形商品:</strong> 通常お支払い確認後、3営業日以内に発送。</li>
                        </ul>
                      </div>
                      <div className="mt-3 pt-2 border-t border-dashed border-white/5">
                        <span className={`block font-bold text-[11px] ${isDark ? "text-gray-400" : "text-gray-600"}`}>配送方法</span>
                        <span className="text-[10px] text-gray-400">クリックポスト、ゆうパック、ゆうパケット、レターパック等（商品・地域で異なる）。</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. 返品・交換・キャンセル */}
                <div className="space-y-4">
                  <h4 className={`text-sm tracking-widest font-bold uppercase flex items-center gap-2 border-b pb-2 ${isDark ? "text-cyan-400 border-white/10" : "text-cyan-600 border-black/10"}`}>
                    <ShieldCheck size={16} />
                    7. 返品・交換・キャンセルに関して (Returns & Cancellations)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs tracking-wider">
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>返品・交換について</span>
                      <p className={`text-[11px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        品質には万全を期しておりますが、万一不良・誤送品があった場合は、到着後7日以内にご連絡ください。当社負担にて良品との交換または返金対応をいたします。お客様のご都合による返品はお受けできません。
                      </p>
                    </div>
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>キャンセルについて</span>
                      <p className={`text-[11px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        発送手配・制作開始前であれば無料でのキャンセルが可能です。発送または開発等の着手完了後のキャンセルにつきましてはお受けしかねますので、何卒ご了承の上お買い求めください。
                      </p>
                    </div>
                    <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-black/[0.02] border-black/5"}`}>
                      <span className={`block font-bold mb-1.5 ${isDark ? "text-gray-400" : "text-gray-600"}`}>販売数量の制限等</span>
                      <p className={`text-[11px] leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        一部の数量限定・カスタムパッケージ商品等については、販売数量を制限させていただく場合がございます。あらかじめ各商品・サービスの特設ページにてご確認ください。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 8. その他 */}
                <div className="space-y-4">
                  <h4 className={`text-sm tracking-widest font-bold uppercase flex items-center gap-2 border-b pb-2 ${isDark ? "text-cyan-400 border-white/10" : "text-cyan-600 border-black/10"}`}>
                    <HelpCircle size={16} />
                    8. その他 (Other Notes)
                  </h4>
                  <div className={`p-5 rounded-xl border text-xs tracking-wider leading-relaxed ${isDark ? "bg-white/[0.02] border-white/5 text-gray-300" : "bg-black/[0.02] border-black/5 text-gray-700"}`}>
                    <p>
                      当社は関係法令（特定商取引に関する法律、および関連省令・ガイドライン等）を遵守し、お客様に対して適切・迅速かつ誠実な情報開示と顧客相談対応、アフターサポートを行っております。利用に関しご不明な点等がございましたら、上記のメールアドレスまたはお問い合わせフッターよりいつでもお気軽にお寄せください。
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer inside modal */}
              <div className={`p-5 text-center text-[10px] tracking-widest ${isDark ? "bg-[#0b101e]/80 border-t border-white/5 text-gray-500" : "bg-gray-50 border-t border-black/5 text-gray-500"}`}>
                ONISAKI Co., Ltd. Specified Commercial Transactions Act Disclosure
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
