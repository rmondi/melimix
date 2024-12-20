"use client";

import { useContext } from "react";
import { WordsContext } from "@/utils/context/Words";
import { v4 as uuidv4 } from "uuid";
import Word from "./Word";

const Sidebar = () => {

  const { words } = useContext( WordsContext )
  
  return (
    <aside className="h-40 xl:w-80 xl:h-auto bg-slate-200">
      <div className="flex flex-col px-5 sm:px-8 py-4 sm:py-6 h-full">
        <div className="flex-grow">
          <h2 className="text-xl font-medium text-slate-800">Mes mots :</h2>
          <div className="flex gap-1 mt-2">
            {
              words && words.map( word => <Word key={ uuidv4() } word={ word } /> )
            }
          </div>
        </div>
        <div className="flex justify-end items-end">
          <h3 className="text-md text-right text-slate-800">
            Score : 0
          </h3>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar