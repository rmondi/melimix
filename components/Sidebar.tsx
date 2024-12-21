"use client";

import Words from "./Words";
import Score from "./Score";

const Sidebar = () => {
  
  return (
    <aside className="min-h-40 xl:w-80 xl:h-auto bg-slate-200">
      <div className="flex flex-col px-5 sm:px-8 py-4 sm:py-6 h-full">
        <div className="pb-4 mb-4 border-b-2 border-solid border-slate-900">
          <Words />
        </div>
        <div className="flex justify-end items-end">
          <Score />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar