

const ExerciseItem = ({data}) => {
  return (
    <div className="flex justify-between border-b border-dark-400">
      <div className="flex gap-6">
        <p className="text-light text-[5px] leading-6">●</p>
        <div className="">
          <p className="text-light">{data.task}</p>
          <p className="text-primary-300 font-inter">{data.kcal}kcal</p>
        </div>
      </div>

      <p className="text-lg text-primary-300 font-inter font-normal">{data.time} min</p>
    </div>
  )
}
export default ExerciseItem