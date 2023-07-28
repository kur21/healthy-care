import dynamic from "next/dynamic";
import { PAGE_NAVIGATION, BASE_URL } from "@/configs";
import { getBlogs } from "@/core/services";

const BlogsPage = dynamic(() => import("@/views/BlogsPage"));

export const metadata = {
  title: "Blogs",
  description: "Healthy Application for everyone",
  openGraph: {
    title: "Blogs | Healthy App",
    url: BASE_URL + PAGE_NAVIGATION.BLOGS,
    siteName: "Blogs | Healthy App",
    images: [
      {
        url: "/assets/images/logo/healthy-logo.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

const Blogs = async () => {
  const data = await getBlogs();

  return (
    <section className="blogs_page">
      <BlogsPage data={data} />
    </section>
  );
};
export default Blogs;
