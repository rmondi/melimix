"use client";

import { useState, useEffect, useContext } from "react";
import { WordsContext } from "../context/Words";

import {
  LetterType,
  LettersType,
  LettersDefault } from "@/utils/types";

const useShakeDices = () => {

  const { resetWords } = useContext( WordsContext )

  const [ isLoading, setIsLoading ] = useState( true )
  const [ dices, setDices ] = useState<LettersType>( LettersDefault )

  const diceDirection = () => {
    
    const randomDirection = Math.floor( Math.random() * 3 )
    let direction = ""

    if ( randomDirection === 0 ) {
      direction = "0"
    } else if ( randomDirection === 1 ) {
      direction = "90"
    } else if ( randomDirection === 2 ) {
      direction = "180"
    } else if ( randomDirection === 3 ) {
      direction = "270"
    }

    return direction
  }

  const shakeDices = () => {
    
    /* Simulating the 16 dices of the game */
    const defaultDices = [
      [ 'E', 'T', 'U', 'K', 'N', 'O' ],
      [ 'E', 'V', 'G', 'T', 'I', 'N' ],
      [ 'D', 'E', 'C', 'A', 'M', 'P' ],
      [ 'I', 'E', 'L', 'R', 'U', 'W' ],
      [ 'E', 'H', 'I', 'F', 'S', 'E' ],
      [ 'R', 'E', 'C', 'A', 'L', 'S' ],
      [ 'E', 'N', 'T', 'D', 'O', 'S' ],
      [ 'O', 'F', 'X', 'R', 'I', 'A' ],
      [ 'N', 'A', 'V', 'E', 'D', 'Z' ],
      [ 'E', 'I', 'O', 'A', 'T', 'A' ],
      [ 'G', 'L', 'E', 'N', 'Y', 'U' ],
      [ 'B', 'M', 'A', 'Q', 'J', 'O' ],
      [ 'T', 'L', 'I', 'B', 'R', 'A' ],
      [ 'S', 'P', 'U', 'L', 'T', 'E' ],
      [ 'A', 'I', 'M', 'S', 'O', 'R' ],
      [ 'E', 'N', 'H', 'R', 'I', 'S' ]
    ]

    /* Array to store generatedDices */
    const generatedLetters: LettersType = []

    /* Generating the 16 dices */
    for ( let i = 0; i <= 15; i++ ) {
      
      const letter: LetterType = {};
      
      /* Selecting a number between 0 and 5 */
      const randomNumber = Math.floor( Math.random() * 5 )
      
      /* Selecting the letter of each dice according to the random generated number */
      letter.value = defaultDices[ i ][ randomNumber ]
      letter.direction = diceDirection()
      letter.isSelected = false

      generatedLetters.push( letter )
    }

    return generatedLetters
  }

  const updateDices = () => {
    resetWords();

    const dices = shakeDices()
    setDices( dices )
    setIsLoading( false )
  }

  useEffect( () => { updateDices() }, [] )
  
  return { isLoading, dices, updateDices }
}

export default useShakeDices