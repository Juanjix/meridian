'use client'

import { createContext, useContext, useState } from 'react'
import { translations, type Language } from '@/lib/i18n'

type LanguageContextValue = {
  lang: Language
  setLang: (l: Language) => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en as (typeof translations)[Language],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
