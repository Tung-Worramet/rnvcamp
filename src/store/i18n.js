import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// โหลดไฟล์ภาษาแบบกำหนดตายตัว (ปลอดภัยกับ Vite)
const loaders = {
  en: () => import("@/locales/en.json"),
  th: () => import("@/locales/th.json"),
};

// ดึงค่าแบบ path "a.b.c"
const getKey = (obj, path) =>
  path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);

// แทนที่ {name} ด้วยตัวแปร
const interpolate = (str, vars) =>
  typeof str === "string"
    ? str.replace(/\{(\w+)\}/g, (_, k) => (vars && k in vars ? vars[k] : ""))
    : str;

export const useI18n = create(
  persist(
    (set, get) => ({
      lang: "th",
      dict: {},
      fallbackDict: {},
      ready: false,

      init: async () => {
        const langFromStorage =
          get().lang || (navigator.language || "").startsWith("th")
            ? "th"
            : "en";
        await get().setLang(langFromStorage);
      },

      setLang: async (lng) => {
        const mod = await loaders[lng]();
        const dict = mod.default || mod;

        let fallback = get().fallbackDict;
        if (!fallback || Object.keys(fallback).length === 0) {
          const fm = await loaders["en"]();
          fallback = fm.default || fm;
        }

        document.documentElement.lang = lng;
        set({ lang: lng, dict, fallbackDict: fallback, ready: true });
      },

      t: (key, vars) => {
        const { dict, fallbackDict } = get();
        const val = getKey(dict, key) ?? getKey(fallbackDict, key) ?? key;
        return interpolate(val, vars);
      },
    }),
    {
      name: "rvncamp_lang",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ lang: s.lang }), // เก็บแค่ภาษาลง localStorage
    }
  )
);
