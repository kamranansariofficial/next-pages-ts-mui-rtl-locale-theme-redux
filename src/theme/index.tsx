import React from "react";
import { useMemo } from "react";
// material
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import palette from "./palette";
import { CacheProvider } from "@emotion/react";
import { useRouter } from "next/router";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import * as locales from "@mui/material/locale";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Roboto } from "next/font/google";
const Localization = (lang: string) => {
  switch (lang) {
    case "ar":
      return "arEG";
    case "fr":
      return "frFR";
    case "en":
      return "enUS";
    default:
      return "frFR";
  }
};

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

function ThemeConfig({ children }: { children: React.ReactChild }) {
  const router = useRouter();
  const lang = router.locale;
  const locale = Localization(lang as string);

  const dir = lang === "ar" ? "rtl" : "ltr";
  const theme = useSelector((state: RootState) => state.theme);
  const isDark = theme.mode === "dark";

  // Create style cache
  const styleCache = createCache({
    key: dir === "rtl" ? "muirtl" : "css",
    stylisPlugins: dir === "rtl" ? [prefixer, rtlPlugin] : [],
  });

  const themeWithLocale = useMemo(
    () =>
      createTheme(
        {
          palette: isDark
            ? { ...palette.dark, mode: "dark" }
            : { ...palette.light, mode: "light" },
          direction: dir,
          // customShadows: isDark ? customShadows.light : customShadows.dark,
        },
        locales[locale]
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale, isDark]
  );

  return (
    <CacheProvider value={styleCache}>
      <ThemeProvider theme={themeWithLocale}>
        <CssBaseline />
        <main dir={dir}>{children}</main>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default ThemeConfig;
