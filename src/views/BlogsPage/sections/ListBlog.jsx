import { Button, BlogCard } from "@/components";

const ListBlog = ({ data = [] }) => {
  return (
    <div className="pt-14 mb-16">
      <div className="grid grid-cols-4 gap-x-2 gap-y-5 max-lg:grid-cols-3 max-md:grid-cols-2">
        {data.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <Button title="コラムをもっと見る" />
      </div>
    </div>
  );
};
export default ListBlog;
