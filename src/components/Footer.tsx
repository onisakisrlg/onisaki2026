import React from "react";
import { useTheme, useLanguage } from "../theme";
import { FileText, Shield, Scale } from "lucide-react";

export default function Footer() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const isDark = theme === "dark";

  // Label translations for footer
  const footerLabels = {
    "日本語": {
      sotaBtn: "特定商取引法に基づく表記",
      privacyBtn: "プライバシーポリシー",
      termsBtn: "利用規約",
      copyright: "© ONISAKI株式会社 All Rights Reserved.",
    },
    "English": {
      sotaBtn: "Act on Specified Commercial Transactions",
      privacyBtn: "Privacy Policy",
      termsBtn: "Terms of Service",
      copyright: "© ONISAKI Co., Ltd. All Rights Reserved.",
    },
    "简体中文": {
      sotaBtn: "特定商业交易法公示",
      privacyBtn: "隐私政策",
      termsBtn: "服务条款",
      copyright: "© ONISAKI 株式会社 All Rights Reserved.",
    },
    "繁體中文": {
      sotaBtn: "特定商業交易法公示",
      privacyBtn: "隱私政策",
      termsBtn: "服務條款",
      copyright: "© ONISAKI 株式会社 All Rights Reserved.",
    }
  };

  const currentLabels = footerLabels[language] || footerLabels["日本語"];

  return (
    <footer className={`relative w-full z-20 py-8 px-6 text-center border-t transition-colors duration-500 flex flex-col md:flex-row items-center justify-between gap-4 ${isDark ? "bg-[#02040a] border-white/5 text-gray-500" : "bg-[#f8fafc] border-black/5 text-gray-600"}`}>
      <div className="text-xs tracking-widest font-medium order-2 md:order-1">
        {currentLabels.copyright}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 order-1 md:order-2">
        <a
          href="#/terms-of-service"
          className={`text-xs tracking-widest font-semibold hover:text-cyan-500 transition-colors duration-300 flex items-center gap-1.5 focus:outline-none`}
        >
          <Scale size={14} />
          {currentLabels.termsBtn}
        </a>
        <a
          href="#/privacy-policy"
          className={`text-xs tracking-widest font-semibold hover:text-cyan-500 transition-colors duration-300 flex items-center gap-1.5 focus:outline-none`}
        >
          <Shield size={14} />
          {currentLabels.privacyBtn}
        </a>
        <a
          href="#/legal"
          className={`text-xs tracking-widest font-semibold hover:text-cyan-500 transition-colors duration-300 flex items-center gap-1.5 focus:outline-none`}
        >
          <FileText size={14} />
          {currentLabels.sotaBtn}
        </a>
      </div>
    </footer>
  );
}
