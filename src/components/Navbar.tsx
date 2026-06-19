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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
        setMobileMenuOpen(false); // Close mobile menu on scroll down
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
      animate={{ y: (hidden && !mobileMenuOpen) ? "-100%" : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex flex-col transition-all duration-300 ${
        mobileMenuOpen
          ? (isDark ? "bg-[#02040a]/95 border-b border-white/5 shadow-2xl" : "bg-white/95 border-b border-black/5 shadow-xl")
          : "bg-transparent border-b border-transparent"
      } backdrop-blur-md ${hidden && !mobileMenuOpen ? "pointer-events-none" : ""}`}
    >
      <div className="w-full flex items-center justify-between">
        <div 
          onClick={() => {
            window.location.hash = "/";
            window.location.search = "";
            setMobileMenuOpen(false);
          }}
          className={`font-sans font-black text-2xl tracking-[0.25em] cursor-pointer transition-colors flex items-center ${isDark ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}`}
        >
          ONISAKI
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
            <a href="https://lin.ee/zy69vhS" target="_blank" rel="noreferrer" className={`hover:text-green-500 transition-colors duration-300 flex items-center gap-1.5 border border-current rounded-full px-4 py-1.5 ml-2 text-[10px] font-medium tracking-[0.2em] uppercase`}>
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

            {/* Interactive Mobile Menu Hamburger/Cross button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-6 h-6 flex flex-col justify-center items-end gap-1.5 cursor-pointer ml-1 focus:outline-none relative"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={mobileMenuOpen ? { rotate: 45, y: 5.5, width: "20px" } : { rotate: 0, y: 0, width: "20px" }}
                transition={{ duration: 0.2 }}
                className={`h-0.5 ${isDark ? "bg-white" : "bg-black"} rounded-full`}
                style={{ originX: "left", originY: "center" }}
              />
              <motion.div
                animate={mobileMenuOpen ? { opacity: 0, width: "0px" } : { opacity: 1, width: "12px" }}
                transition={{ duration: 0.2 }}
                className={`h-0.5 ${isDark ? "bg-white" : "bg-black"} rounded-full`}
              />
              <motion.div
                animate={mobileMenuOpen ? { rotate: -45, y: -5.5, width: "20px" } : { rotate: 0, y: 0, width: "16px" }}
                transition={{ duration: 0.2 }}
                className={`h-0.5 ${isDark ? "bg-white" : "bg-black"} rounded-full`}
                style={{ originX: "left", originY: "center" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop down content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden md:hidden"
          >
            <div className="flex flex-col pt-8 pb-4 gap-5 tracking-[0.2em] font-black text-xs uppercase">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`hover:text-cyan-500 transition-colors py-2.5 flex items-center justify-between border-b ${isDark ? "border-white/5 text-gray-300" : "border-black/5 text-gray-700"}`}
                >
                  <span>{item.sub[currentLang as keyof typeof item.sub]}</span>
                  <span className="text-[9px] font-mono font-medium text-cyan-500/50">{item.en}</span>
                </a>
              ))}
              <a 
                href="https://lin.ee/zy69vhS" 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full hover:text-green-400 hover:border-green-400 transition-all duration-300 flex items-center justify-center gap-2 border border-green-500 rounded-xl py-3.5 text-center font-bold text-[11px] tracking-[0.25em] text-green-500 bg-green-500/5"
              >
                <MessageCircle size={16} /> LINE 友だち追加
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
