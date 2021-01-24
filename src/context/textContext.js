import React, { useState, createContext } from 'react'
// import { Language } from 'styled-icons/entypo'
import languageText from '../data/text-locale'

export const TextContext = createContext()

export const TextProvider = ({ children }) => {
  const [text, setText] = useState(() => {
    const lang = localStorage.getItem('language')
    if (!lang) {
      setText(text.pl)
      localStorage.setItem('language', 'pl')
      return
    } 
    return languageText[lang]
  })

  const changeLanguageText = langId => {
    setText(languageText[langId])
  }
  
  return (
    <TextContext.Provider value={{
      text, changeLanguageText
    }}
    >
      {children}
    </TextContext.Provider>
  )
}