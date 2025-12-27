import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "../translations";

export type Lang = "tr" | "en";

type Leaf = { tr: string; en: string };

function isLeaf(v: unknown): v is Leaf {
  if (typeof v !== "object" || v === null) return false;
  const obj = v as Record<string, unknown>;
  return typeof obj.tr === "string" && typeof obj.en === "string";
}

function getNode(path: string): unknown {
  const keys = path.split(".");
  let cur: unknown = translations;

  for (const key of keys) {
    if (typeof cur !== "object" || cur === null || Array.isArray(cur)) return undefined;
    cur = (cur as Record<string, unknown>)[key];
  }

  return cur;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  const lang: Lang = context.isEnglish ? "en" : "tr";

  // tek string çeviri
  const t = (path: string): string => {
    const node = getNode(path);
    return isLeaf(node) ? node[lang] : "";
  };

  // liste çevirisi (whyUs.items gibi)
  const tl = (path: string): string[] => {
    const node = getNode(path);
    if (!Array.isArray(node)) return [];

    const out: string[] = [];
    for (const item of node) {
      if (isLeaf(item)) out.push(item[lang]);
    }
    return out;
  };

  return { ...context, lang, t, tl };
}
