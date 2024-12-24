"use client";

import { useState, createContext } from "react";

import {
  WordType,
  WordsType,
  WordsDefault,
  SelectedLettersType,
  SelectedLettersDefault,
  PreviousLetterType,
  PreviousLetterDefault } from "../types";

type MelimixContextType = {
  words: WordsType;
  errors: WordsType;
  selectedLetters: SelectedLettersType;
  previousLetter: PreviousLetterType;
  updateWords: ( word: WordType ) => void;
  updateErrors: ( word: WordType ) => void;
  updateSelectedLetters: ( letter: number ) => void;
  resetSelectedLetters: () => void;
  updatePreviousLetter: ( letter: number ) => void;
  resetGame: () => void;
}

const MelimixContextDefault = {
  words: [],
  errors: [],
  selectedLetters: [],
  previousLetter: null,
  updateWords: () => {},
  updateErrors: () => {},
  updateSelectedLetters: () => {},
  updatePreviousLetter: () => {},
  resetSelectedLetters: () => {},
  resetGame: () => {}
}; 

export const MelimixContext = createContext<MelimixContextType>( MelimixContextDefault )

type MelimixProviderType = {
  children: React.ReactNode;
}

export const MelimixProvider = ( { children }: MelimixProviderType ) => {

  const [ words, setWords ] = useState<WordsType>( WordsDefault )
  const [ errors, setErrors ] = useState<WordsType>( WordsDefault )
  const [ selectedLetters, setSelectedLetters ] = useState<SelectedLettersType>( SelectedLettersDefault )
  const [ previousLetter, setPreviousLetter ] = useState<PreviousLetterType>( PreviousLetterDefault )

  const updateWords = ( word: WordType ) => {
    const newWords = [ ...words, word ]
    setWords( newWords )
  }

  const updateErrors = ( word: WordType ) => {
    const newErrors = [ ...errors, word ]
    setErrors( newErrors )
  }

  const updateSelectedLetters = ( letter: number ) => {
    const newSelectedLetters = [ ...selectedLetters, letter ]
    setSelectedLetters( newSelectedLetters )
  }

  const updatePreviousLetter = ( letter: number ) => setPreviousLetter( letter )

  const resetSelectedLetters = () => {
    setSelectedLetters( [] )
    setPreviousLetter( null )
  }

  const resetGame = () => {
    setWords( [] )
    setErrors( [] )
    resetSelectedLetters()
  }

  return (
    <MelimixContext.Provider value={
      {
        words,
        errors,
        selectedLetters,
        previousLetter,
        updateWords,
        updateErrors,
        updateSelectedLetters,
        updatePreviousLetter,
        resetSelectedLetters,
        resetGame
      } 
    }>
      { children }
    </MelimixContext.Provider>
  )
}