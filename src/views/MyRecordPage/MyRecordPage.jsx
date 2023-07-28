import { ListButton, BodyRecord, MyDiary, MyExercise } from "./sections";

const MyRecordPage = ({ data }) => {
  const { bodyRecordDataChart, exerciseData, diaryData } = data;

  return (
    <div className="wrapper">
      <ListButton />
      <BodyRecord data={bodyRecordDataChart} />
      <MyExercise data={exerciseData} />
      <MyDiary data={diaryData} />
    </div>
  );
};
export default MyRecordPage;
