type ResetWordType = {
  isActive?: boolean;
  handleClick: () => void;
}

const ResetWord = ( { isActive = false, handleClick }: ResetWordType ) => {
  
  return (
    <button
    onClick={ handleClick }
      className={ `inline-flex items-center px-6 h-10 text-md font-semibold ${ isActive ? "text-white bg-red-700" : "text-slate-400 bg-slate-300" } rounded cursor-pointer` }
    >
      { "Effacer" }
    </button>
  )
}

export default ResetWord