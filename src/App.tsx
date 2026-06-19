/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HexagonSection from "./components/HexagonSection";
import PixelSection from "./components/PixelSection";
import Footer from "./components/Footer";
import TokushohoPage from "./components/TokushohoPage";
import { ThemeContext, Theme, LanguageContext, Language } from "./theme";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("onisaki_user_theme") as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    const hour = new Date().getHours();
    // Daytime is defined as 6:00 AM to 6:00 PM (18:00)
    return hour >= 6 && hour < 18 ? "light" : "dark";
  });
  const [language, setLanguage] = useState<Language>("日本語");
  const [route, setRoute] = useState<"home" | "tokushoho">("home");

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("onisaki_user_theme", next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    document.body.style.backgroundColor = theme === "dark" ? "#000" : "#fff";
  }, [theme]);

  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (
        hash.includes("tokusho") || 
        hash.includes("sota") ||
        search.includes("tokusho") ||
        search.includes("sota") ||
        path.includes("tokusho") ||
        path.includes("sota")
      ) {
        setRoute("tokushoho");
      } else {
        setRoute("home");
      }
    };

    checkRoute();

    window.addEventListener("hashchange", checkRoute);
    window.addEventListener("popstate", checkRoute);

    return () => {
      window.removeEventListener("hashchange", checkRoute);
      window.removeEventListener("popstate", checkRoute);
    };
  }, []);

  // Dynamic SEO multi-language metadata synchronization for Google crawlers
  useEffect(() => {
    const titles = {
      home: {
        "日本語": "ONISAKI株式会社 | 高品質Web開発・システム制作・UIUXデザイン（東京都中央区銀座）",
        "English": "ONISAKI Co., Ltd. | Premium Web Development & UI/UX Design Studio (Tokyo, Ginza)",
        "简体中文": "ONISAKI株式会社 | 高端网页定制开发・系统集成・UIUX设计（日本东京银座）",
        "繁體中文": "ONISAKI株式會社 | 高端網頁定制開發・系統集成・UIUX設計（日本東京銀座）",
      },
      tokushoho: {
        "日本語": "特定商取引法に基づく表記 | ONISAKI株式会社",
        "English": "Act on Specified Commercial Transactions Disclosure | ONISAKI Co., Ltd.",
        "简体中文": "特定商业交易法公示 | ONISAKI株式会社",
        "繁體中文": "特定商業交易法公示 | ONISAKI株式會社",
      }
    };

    const descriptions = {
      home: {
        "日本語": "ONISAKI株式会社は、東京銀座を拠点とするプロフェッショナルなWeb開発・システムデザイン企業です。最先端技術（React/Next.js/Node.js等）を駆使し、コーポレートサイト、大規模WEBアプリ、グローバル多言語開発を支援します。",
        "English": "ONISAKI Co., Ltd. is a professional web development and systems integration agency located in Ginza, Tokyo. We specialize in high-end websites, full-stack applications, and localized design solutions.",
        "简体中文": "ONISAKI株式会社是位于日本东京银座的专业网页、软件开发与系统集成公司。我们深耕移动应用、高防独立服务器技术并交付定制化的跨国系统与企业网站。",
        "繁體中文": "ONISAKI株式會社是位於日本東京銀座的專業網頁、軟體開發與系統集成公司。我們深耕移動應用、高防獨立服務器技術並交付定制化的跨國系統與企業網站。"
      },
      tokushoho: {
        "日本語": "ONISAKI株式会社 の特定商取引法に基づく法定公示ページです。販売価格、必要料金、引き渡し時期、キャンセルなどについて規定しています。",
        "English": "Commercial legal transaction disclosures concerning ONISAKI Co., Ltd.'s custom contract web dev processes, billing policies, and warranty scopes.",
        "简体中文": "ONISAKI株式会社特定商业交易法公示。包括定制系统估价标准、首付付款及中途解约规则说明等法定合规公开事项。",
        "繁體中文": "ONISAKI株式會社特定商業交易法公示。包括定制系統估價標準、首付付款及中途解約規則說明等法定合規公開事項。"
      }
    };

    const langs = {
      "日本語": "ja",
      "English": "en",
      "简体中文": "zh-CN",
      "繁體中文": "zh-TW"
    };

    // Update document language attribute dynamically
    document.documentElement.lang = langs[language] || "ja";

    // Update title
    document.title = titles[route][language] || titles[route]["日本語"];

    // Update meta description safely
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", descriptions[route][language] || descriptions[route]["日本語"]);
    }
  }, [route, language]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <main className="min-h-screen font-sans selection:bg-cyan-500/30 transition-colors duration-500">
          {route === "tokushoho" ? (
            <TokushohoPage />
          ) : (
            <>
              <Navbar />
              <HexagonSection />
              <PixelSection />
              <Footer />
            </>
          )}
        </main>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
