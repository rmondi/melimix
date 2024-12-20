"use client";

type WordType = {
  word: string;
};

const Word = ( { word }: WordType ) => {
  
  return (
    <div className="inline-flex items-center h-6 px-2 font-light text-sm text-slate-700 bg-slate-300 rounded">
      { word }
    </div>
  )
}

export default Word