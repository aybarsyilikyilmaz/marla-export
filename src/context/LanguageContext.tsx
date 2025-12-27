import { createContext } from "react";

export type LanguageContextType = {
  isEnglish: boolean;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  isEnglish: false,
  toggleLanguage: () => {},
});
