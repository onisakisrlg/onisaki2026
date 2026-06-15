/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HexagonSection from "./components/HexagonSection";
import PixelSection from "./components/PixelSection";
import Footer from "./components/Footer";
import { ThemeContext, Theme, LanguageContext, Language } from "./theme";

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [language, setLanguage] = useState<Language>("日本語");

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    document.body.style.backgroundColor = theme === "dark" ? "#000" : "#fff";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <main className="min-h-screen font-sans selection:bg-cyan-500/30 transition-colors duration-500">
          <Navbar />
          <HexagonSection />
          <PixelSection />
          <Footer />
        </main>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
