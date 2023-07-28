import { ExerciseItem } from "@/components"

const MyExercise = ({ data }) => {
  const { date, exercises } = data
  return (
    <div id="my_exercise" className="pt-14">
      <div className="bg-dark-500 py-4 px-6">
        <div className="flex gap-8 items-start text-light font-normal font-inter">
          <p className="text-[15px] leading-[1.2]">MY<br/>EXERCISE</p>
          <p className="tex-2xl">{date}</p>
        </div>

        <div className="h-[190px] grid grid-cols-2 gap-x-10 gap-y-2 overflow-auto pr-6 scrollbar_primary max-md:grid-cols-1">
          {exercises.map(item => (
            <ExerciseItem key={item.id} data={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}
export default MyExercise