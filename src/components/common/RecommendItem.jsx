import Link from "next/link"

const RecommendItem = ({data}) => {
  return (
    <Link href={data.url} className="bg-dark-600 px-2 py-6">
      <p className="text-center text-primary-300 text-xl uppercase font-inter font-normal">{data.title}</p>
      <div className="h-[1px] w-14 bg-light mx-auto my-2"/>
      <p className="text-light text-lg text-center">{data.desc}</p>
    </Link>
  )
}
export default RecommendItem