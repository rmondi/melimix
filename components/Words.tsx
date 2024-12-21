"use client";

import { useContext } from "react";
import { WordsContext } from "@/utils/context/Words";
import { v4 as uuidv4 } from "uuid";
import Word from "./Word";

const Words = () => {

  const { words } = useContext( WordsContext )
  
  return (
    <>
      <h2 className="text-xl font-medium text-slate-800">Mes mots :</h2>
      <div className="flex flex-wrap gap-1 mt-4">
        {
          words && words.map( word => <Word key={ uuidv4() } word={ word } /> )
        }
      </div>
    </>
  )
}

export default Words