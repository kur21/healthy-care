const DiaryItem = ({data}) => {
  return (
    <div className="p-4 pb-7 border-2 border-[#707070] text-dark-500">
      <p className="text-lg font-inter font-normal mb-2">{data.date}<br/>{data.at}</p>
      <p className="text-xs leading-[17px] line-clamp-[7]">{data.content}</p>
    </div>
  )
}
export default DiaryItem