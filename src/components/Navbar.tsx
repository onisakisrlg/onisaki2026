import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Globe, MessageCircle } from "lucide-react";
import { useTheme, useLanguage, Language } from "../theme";
import { useState, useEffect } from "react";

const MENU_ITEMS = [
  {
    id: "home",
    href: "#home",
    en: "HOME",
    sub: {
      "日本語": "ホーム",
      "English": "Home",
      "简体中文": "首页",
      "繁體中文": "首頁",
    }
  },
  {
    id: "pricing",
    href: "#pricing",
    en: "PRICING",
    sub: {
      "日本語": "制作プラン",
      "English": "Pricing Plans",
      "简体中文": "制作方案",
      "繁體中文": "製作方案",
    }
  },
  {
    id: "works",
    href: "#works",
    en: "WORKS",
    sub: {
      "日本語": "制作実績",
      "English": "Our Works",
      "简体中文": "制作案例",
      "繁體中文": "製作案例",
    }
  },
  {
    id: "contact",
    href: "#contact",
    en: "CONTACT",
    sub: {
      "日本語": "お問い合わせ",
      "English": "Contact Us",
      "简体中文": "联系我们",
      "繁體中文": "聯絡我們",
    }
  }
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language: currentLang, setLanguage: setCurrentLang } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  const isDark = theme === "dark";

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) < 10) {
        ticking = false;
        return;
      }
      setHidden(scrollY > lastScrollY && scrollY > 50);
      if (scrollY > lastScrollY && scrollY > 50) {
        setLangMenuOpen(false); // Close menu on scroll down
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between bg-transparent transition-colors ${hidden ? "pointer-events-none" : ""}`}
    >
      <div className={`font-sans font-black text-2xl tracking-[0.25em] cursor-pointer transition-colors flex items-center ${isDark ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}`}>
        ONISAKI<span className="text-sm ml-2 tracking-widest font-black">株式会社</span>
      </div>

      <div className="flex items-center gap-8 ml-auto">
        <div className={`hidden md:flex items-center gap-8 text-[11px] tracking-[0.25em] font-medium uppercase ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {MENU_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="hover:text-cyan-500 transition-colors duration-300"
            >
              {item.sub[currentLang as keyof typeof item.sub]}
            </a>
          ))}
          <a href="https://line.me/R/ti/p/@220pvxsl?oat_content=url&ts=06131119" target="_blank" rel="noreferrer" className={`hover:text-green-500 transition-colors duration-300 flex items-center gap-1.5 border border-current rounded-full px-4 py-1.5 ml-2 text-[10px] font-medium tracking-[0.2em] uppercase`}>
            <MessageCircle size={14} /> LINE
          </a>
        </div>
        
        <div className="flex items-center gap-5 relative">
          <div>
            <button onClick={() => setLangMenuOpen(!langMenuOpen)} className={`focus:outline-none transition-colors flex items-center ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}>
              <Globe size={18} />
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute right-0 mt-6 py-2 w-32 rounded border ${isDark ? "bg-black/90 border-white/10 text-gray-300" : "bg-white/90 border-black/10 text-gray-700"} backdrop-blur-md shadow-xl flex flex-col text-[11px] tracking-wider`}
                >
                  {["日本語", "English", "简体中文", "繁體中文"].map(lang => (
                    <button
                      key={lang}
                      onClick={() => { setCurrentLang(lang as Language); setLangMenuOpen(false); }}
                      className={`px-4 py-2.5 text-left hover:bg-cyan-500/10 ${isDark ? "hover:text-white" : "hover:text-black"} ${currentLang === lang ? "text-cyan-500" : ""}`}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={toggleTheme} className={`focus:outline-none transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Icon Placeholder */}
          <div className="md:hidden w-6 h-6 flex flex-col justify-center items-end gap-1.5 cursor-pointer ml-1">
            <div className={`w-5 h-px ${isDark ? "bg-white" : "bg-black"} transition-colors`}></div>
            <div className={`w-3 h-px ${isDark ? "bg-white" : "bg-black"} transition-colors`}></div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
