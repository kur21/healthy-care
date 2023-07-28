import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className="relative w-full h-[234px] overflow-hidden group">
      <Image
        src={data.image}
        alt="thumb image"
        fill
        sizes="100%"
        className="object-cover object-center group-hover:scale-110 transition duration-500"
      />
      <div className="bg-primary-300 p-2 min-w-2/4 w-fit absolute bottom-0 left-0">
        <span className="font-inter capitalize font-normal text-light">{data.date}.{data.type}</span>
      </div>
    </div>
  );
};
export default Card;
