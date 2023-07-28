"use client"

import Image from "next/image"

const RecordButton = ({data}) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if(element) element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="p-6 bg-primary-300 max-md:p-3 cursor-pointer" onClick={() => scrollTo(data.sectionId)}>
      <div className="w-full h-[240px] relative overflow-hidden max-md:h-[100px]">
        <Image src={data.image} alt="record" fill className="object-cover object-center grayscale brightness-50"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="text-2xl text-primary-300 font-inter font-normal uppercase">{data.title}</h3>
          <p className="text-sm text-light bg-primary-400 text-center min-w-[160px]">{data.desc}</p>
        </div>
      </div>
    </div>
  )
}
export default RecordButton