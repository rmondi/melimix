"use client";

import { useContext } from "react";
import { MelimixContext } from "@/utils/context/Melimix";
import { v4 as uuidv4 } from "uuid";
import Word from "./Word";
import Error from "./Error";

const Words = () => {

  const { words, errors } = useContext( MelimixContext )
  
  return (
    <>
      <h2 className="text-xl font-medium text-slate-800">Mes mots :</h2>
      <div className="flex flex-wrap gap-1 mt-4">
        {
          words && words.map( word => <Word key={ uuidv4() } word={ word } /> )
        }
      </div>
      <div className="flex flex-wrap gap-1 mt-4">
        {
          errors && errors.map( error => <Error key={ uuidv4() } word={ error } /> )
        }
      </div>
    </>
  )
}

export default Words