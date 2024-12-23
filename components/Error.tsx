"use client";

import { WordType } from "@/utils/types";

type ErrorType = {
  word: WordType;
}

const Error = ( { word }: ErrorType ) => {
  
  return (
    <div className="inline-flex items-center h-6 px-2 font-light text-sm text-red-700 bg-red-300 line-through rounded">
      { word }
    </div>
  )
}

export default Error