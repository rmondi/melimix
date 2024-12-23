"use client";

import { useState, createContext } from "react";

import { WordType, WordsType, WordsDefault } from "../types";

type WordsContextType = {
  words: WordsType;
  errors: WordsType;
  updateWords: ( word: WordType ) => void;
  updateErrors: ( word: WordType ) => void;
  resetWords: () => void;
}

const WordsContextDefault = {
  words: [],
  errors: [],
  updateWords: () => {},
  updateErrors: () => {},
  resetWords: () => {}
}; 

export const WordsContext = createContext<WordsContextType>( WordsContextDefault )

type WordsProviderType = {
  children: React.ReactNode;
}

export const WordsProvider = ( { children }: WordsProviderType ) => {

  const [ words, setWords ] = useState<WordsType>( WordsDefault )
  const [ errors, setErrors ] = useState<WordsType>( WordsDefault )

  const updateWords = ( word: WordType ) => {
    
    const newWords = [ ...words, word ]
    setWords( newWords )
  }

  const updateErrors = ( word: WordType ) => {

    const newErrors = [ ...errors, word ]
    setErrors( newErrors )
  }

  const resetWords = () => {
    setWords( [] )
    setErrors( [] )
  }

  return (
    <WordsContext.Provider value={ { words, errors, updateWords, updateErrors, resetWords } }>
      { children }
    </WordsContext.Provider>
  )
}