type ResetType = {
  handleClick: () => void
}

const ResetGame = ( { handleClick }: ResetType ) => {
  
  return (
    <button
      onClick={ handleClick }
      className={ `inline-flex items-center px-6 h-10 text-md font-semibold text-white bg-slate-500 rounded cursor-pointer` }
    >
      { "Nouvelle partie" }
    </button>
  )
}

export default ResetGame