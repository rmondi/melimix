"use client";

type MainType = {
  children: React.ReactNode;
}

const Main = ( { children }: MainType ) => {
  
  return (
    <main className="flex-grow">
      { children }
    </main>
  )
}

export default Main;