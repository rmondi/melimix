"use client";

import { useContext } from "react";
import { MelimixContext } from "@/utils/context/Melimix";

import { LetterType } from "@/utils/types";

type DiceType = {
  letter: LetterType;
  index: number;
  handleClick: ( arg0: string, arg1: number ) => void;
};

const Dice = ( { letter, index, handleClick }: DiceType ) => {

  const {
    selectedLetters,
    previousLetter,
    updateSelectedLetters,
    updatePreviousLetter } = useContext( MelimixContext )

  const { value, direction } = letter;

  const isSelected = selectedLetters.includes( index as never )

  const isUnderscored = ( letter: string ) => {
    
    let underscored = false;

    switch( letter ) {

      case 'M':
      case 'N':
      case 'W':
      case 'Z':
        underscored = true
      break
      default:
        underscored = false
    }

    return underscored
  }

  const isSelectable = ( index: number, previousLetter: number | null ) => {
    
    let isAdjacent

    if ( previousLetter !== null ) {
      isAdjacent = false
      const row = 4
  
      if ( ( previousLetter - 1 ) === index && previousLetter % row !== 0 ) {
        isAdjacent = true
      } else if ( ( previousLetter + 1 ) === index && index % row !== 0 ) {
        isAdjacent = true
      } else if ( ( previousLetter - row ) === index ) {
        isAdjacent = true
      } else if ( ( previousLetter + row ) === index ) {
        isAdjacent = true
      } else if ( ( previousLetter - ( row + 1 ) ) === index && previousLetter % row !== 0 ) {
        isAdjacent = true
      } else if ( ( previousLetter - ( row - 1 ) ) === index && index % row !== 0 ) {
        isAdjacent = true
      } else if ( ( previousLetter + ( row + 1 ) ) === index && index % row !== 0 ) {
        isAdjacent = true
      } else if ( ( previousLetter + ( row - 1 ) ) === index && previousLetter % row !== 0 ) {
        isAdjacent = true
      }
    } else ( isAdjacent = true )

    return ( !selectedLetters.includes( index as never ) && isAdjacent ? true : false )
  }

  const onClick = () => {
    if ( isSelectable( index, previousLetter ) ) {
      updateSelectedLetters( index )
      updatePreviousLetter( index )
      handleClick( value as string, index as number )
    }
  }
  
  return (
    <div
      onClick={ onClick }
      className={ `flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 cursor-pointer transition hover:bg-slate-100` }
      style={ { backgroundColor: isSelected ? "#84cc16" : "#fff" } }
    >
      <span
        className={ `relative block text-xl sm:text-2xl xl:text-4xl font-bold` }
        style={
          {
            transform: `rotate(${ direction }deg)`,
            color: isSelected ? "#fff" : "#0f172a"
          }
        }
      >
        { value }
        {
          isUnderscored( value as string ) &&
          <span
            className="absolute -bottom-1 left-0 right-0 h-1 bg-slate-900"
            style={ { backgroundColor: isSelected ? "#fff" : "#0f172a" } }
          >
          </span>
        }
      </span>
    </div>
  )
}

export default Dice