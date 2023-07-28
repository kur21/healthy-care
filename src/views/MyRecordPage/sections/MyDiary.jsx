import { Button, DiaryItem } from "@/components"

const MyDiary = ({ data }) => {
  const diaryData = data

  return (
    <div id="my_diary" className="pt-14 mb-16">
      <p className="uppercase font-normal font-inter text-[22px]">my diary</p>

      <div className="grid grid-cols-4 gap-3 max-md:grid-cols-3 max-sm:grid-cols-2">
        {diaryData.map(dairy => (
          <DiaryItem key={dairy.id} data={dairy}/>
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <Button title="自分の日記をもっと見る" />
      </div>
    </div>
  )
}
export default MyDiary