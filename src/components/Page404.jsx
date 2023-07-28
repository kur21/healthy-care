import Link from 'next/link'
import Image from 'next/image'

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <Image
        src="/assets/illustrations/404.svg"
        alt="error 404 image"
        width="0"
        height="0"
        className="w-full h-auto max-w-[320px] object-contain"
      />

      <div className="text-center">
        <h2 className="font-inter text-2xl font-medium">Not Found</h2>
        <p className="mb-4 font-inter">Could not find requested resource</p>
        <Link href="/" className="inline-block px-6 py-2 bg-primary-400 text-light font-inter font-normal rounded-lg hover:bg-primary-400/80">
          Back Home
        </Link>
      </div>
    </div>
  )
}
export default Page404