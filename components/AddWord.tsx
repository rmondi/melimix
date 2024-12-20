type AddWordType = {
  isActive?: boolean;
  handleClick: () => void;
}

const AddWord = ( { isActive = false, handleClick }: AddWordType ) => {
  
  return (
    <button
    onClick={ handleClick }
      className={ `inline-flex items-center px-6 h-10 text-md font-semibold ${ isActive ? "text-white bg-cyan-600" : "text-slate-400 bg-slate-300" } rounded cursor-pointer` }
    >
      { "Ajouter" }
    </button>
  )
}

export default AddWord