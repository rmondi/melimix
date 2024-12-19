"use client";

type SectionType = {
  children: React.ReactNode;
}

const Section = ( { children }: SectionType ) => {
  
  return (
    <section className="my-4 sm:my-8 xl:my-12 2xl:my-16">
      <div className="px-5 sm:px-8 xl:px-0 xl:m-auto xl:max-w-5xl 2xl:max-w-7xl">
        { children }
      </div>
    </section>
  )
}

export default Section