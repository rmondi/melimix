"use client";

import { useState, useEffect, useContext } from "react";
import { MelimixContext } from "@/utils/context/Melimix";

const Score = () => {

  const { words } = useContext( MelimixContext )

  const [ total, setTotal ] = useState( 0 )

  const getWordScore = ( word: string ) => {
    let score: number = 0

    const wordLength = word.length

    switch( true ) {
      case wordLength === 3:
      case wordLength === 4:
        score = 1
        break
      case wordLength === 5:
        score = 2
        break
      case wordLength === 6:
        score = 3
        break
      case wordLength === 7:
        score = 5
        break
      case wordLength >= 8:
        score = 11
        break
      default:
        score = 3
    }

    return score
  }

  const getTotalScore = () => {
    let newTotal: number = 0;

    words.forEach( word => newTotal += getWordScore( word ) )

    setTotal( newTotal ) 
  }

  useEffect( () => { getTotalScore() }, [ words ] )
  
  return (
    <h3 className="text-md text-right text-slate-800">
      Score : <span className="text-2xl">{ total }</span>
    </h3>
  )
}

export default Score