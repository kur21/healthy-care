import { ListBlog, ListRecommended } from "./sections";

const BlogPages = ({ data }) => {
  return (
    <div className="wrapper">
      <ListRecommended />
      <ListBlog data={data} />
    </div>
  );
};
export default BlogPages;
