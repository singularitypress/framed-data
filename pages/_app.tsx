import React, { useEffect, useState } from "react";
import { ThemeContext } from "../context";

import "../styles/globals.css";
import "../styles/theme.scss";

interface IProps {
  Component: any;
  pageProps: any
}

const App = ({ Component, pageProps }: IProps) => {
  const [theme, setTheme] = useState("light");

  const handleTheme = (e: MediaQueryListEvent) => {
    setTheme(e.matches ? "dark" : "light");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      }

      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleTheme);

      return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleTheme);
    }
  }, []);

  return <ThemeContext.Provider value={theme}><Component {...pageProps} /></ThemeContext.Provider>;
};

export default App;
