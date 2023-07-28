import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const { title, createAt, url, thumb, tags } = blog;

  return (
    <div>
      <div className="relative w-full h-[145px] overflow-hidden group">
        <Image
          src={thumb}
          alt="thumb image"
          fill
          sizes="100%"
          className="object-cover object-center group-hover:scale-110 transition duration-500"
        />
        <div className="bg-primary-300 px-2 min-w-2/4 w-fit absolute bottom-0 left-0">
          <span className="font-inter capitalize font-normal text-light">
            {createAt}
          </span>
        </div>
      </div>
      <div className="mt-2">
        <Link href={url} className="text-dark-500 text-[15px] leading-[22px] line-clamp-2 hover:text-primary-300 transition duration-300">
          {title}
        </Link>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag.id} href={tag.url} className="text-xs text-primary-400">
              {tag.tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
