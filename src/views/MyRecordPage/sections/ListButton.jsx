import { RecordButton } from "@/components"
import { recordButtons } from "@/constants"

const ListButton = () => {
  return (
    <div className="grid grid-cols-3 gap-12 pt-14 max-lg:gap-6 max-md:pt-4 max-md:gap-4 max-md:grid-cols-1">
      {recordButtons.map(btn => (
        <RecordButton key={btn.id} data={btn}/>
      ))}
    </div>
  )
}
export default ListButton