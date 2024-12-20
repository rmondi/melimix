"use client";

import { useState, createContext } from "react";

import { WordType, WordsType, WordsDefault } from "../types";

type WordsContextType = {
  words: WordsType;
  updateWords: ( word: WordType ) => void;
  resetWords: () => void;
}

const WordsContextDefault = {
  words: [],
  updateWords: () => {},
  resetWords: () => {}
}; 

export const WordsContext = createContext<WordsContextType>( WordsContextDefault )

type WordsProviderType = {
  children: React.ReactNode;
}

export const WordsProvider = ( { children }: WordsProviderType ) => {

  const [ words, setWords ] = useState<WordsType>( WordsDefault );

  const updateWords = ( word: WordType ) => {

    if ( !words.includes( word as never ) ) {
      const newWords = [ ...words, word ]
      setWords( newWords )
    }
  }

  const resetWords = () => setWords( [] )

  return (
    <WordsContext.Provider value={ { words, updateWords, resetWords } }>
      { children }
    </WordsContext.Provider>
  )
}