"use client";

import { useState, useContext } from "react"
import { WordsContext } from "@/utils/context/Words";
import { v4 as uuidv4 } from "uuid"

import useShakeDices from "@/utils/hook/useShakeDices";

import Loader from "./Loader";
import Dice from "./Dice";
import AddWord from "./AddWord";
import ResetWord from "./ResetWord";
import ResetGame from "./ResetGame";

const Board = () => {

  const { updateWords } = useContext( WordsContext )

  const { isLoading, dices, updateDices } = useShakeDices();

  const [ word, setWord ] = useState( "" )

  const handleDiceClick = ( letter: string ) => {
    const newWord = word + letter
    setWord( newWord )
  };

  const handleResetWordClick = () => setWord( "" )

  const handleAddWordClick = () => {
    updateWords( word )
    setWord( "" )
  }

  const handleResetClick = () => updateDices()
  
  if ( isLoading ) return <Loader />
  else return (
    <div className="flex flex-col items-center">
      <div className="mb-4 px-4 h-8 lg:h-12 min-w-40 lg:min-w-60 flex justify-center items-center text-xl leading-6 font-semibold text-slate-800 bg-white">
        { word }
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-2 w-board h-board sm:w-boardSM sm:h-boardSM xl:w-boardXL xl:h-boardXL box-content bg-orange-600 border-4 sm:border-8 border-solid border-orange-600">
        {
          dices.map( dice => (
            <Dice
              key={ uuidv4() }
              letter={ dice }
              handleClick={ handleDiceClick }
            />
          ) )
        }
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <AddWord handleClick={ handleAddWordClick } isActive={ word.length >=2 ? true : false  } />
        <ResetWord handleClick={ handleResetWordClick } isActive={ word.length >=1 ? true : false } />
        <ResetGame handleClick={ handleResetClick } />
      </div>
    </div>
  )
}

export default Board