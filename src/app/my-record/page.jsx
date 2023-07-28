import dynamic from "next/dynamic"
import { PAGE_NAVIGATION, BASE_URL } from "@/configs";
import { getMyRecord } from "@/core/services";

const MyRecordPage = dynamic(() => import("@/views/MyRecordPage"))

export const metadata = {
  title: 'My Record',
  description: "Healthy Application for everyone",
  openGraph: {
    title: 'My Record | Healthy App',
    url: BASE_URL + PAGE_NAVIGATION.MY_RECORD,
    siteName: 'My Record | Healthy App',
    images: [
      {
        url: '/assets/images/logo/healthy-logo.png',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
};

const MyRecord = async () => {
  const data = await getMyRecord()
  
  return (
    <section className="my_record_page">
      <MyRecordPage data={data}/>
    </section>
  )
}
export default MyRecord