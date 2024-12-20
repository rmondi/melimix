"use client";

import { LetterType } from "@/utils/types";

type DiceType = {
  letter: LetterType;
  handleClick: ( e: React.MouseEvent<HTMLDivElement> ) => void;
};

const Dice = ( { letter, handleClick }: DiceType ) => {

  const { value, direction, isSelected } = letter;
  
  return (
    <div
      onClick={ ( e ) => handleClick( e ) }
      className={ `flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 bg-white cursor-pointer transition hover:bg-slate-100 ${ isSelected ? " bg-green-600 text-white": "" }` }
    >
      <span className={ `text-xl sm:text-2xl xl:text-4xl font-bold rotate-${ direction }` }>
        { value }
      </span>
    </div>
  )
}

export default Dice