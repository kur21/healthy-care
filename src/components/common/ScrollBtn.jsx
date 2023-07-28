"use client"
import Image from "next/image"

const ScrollBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button className="fixed z-20 right-24 bottom-14 w-12 h-12 max-lg:right-14" onClick={scrollToTop}>
      <Image src="/assets/icons/scroll.svg" alt="scroll icon" fill className="w-full h-full"/>
    </button>
  )
}
export default ScrollBtn