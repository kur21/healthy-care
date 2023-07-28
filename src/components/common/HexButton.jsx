import Image from "next/image";

const HexButton = ({ data, handleClick }) => {
  return (
    <div className="relative cursor-pointer hover:opacity-80" onClick={handleClick}>
      <Image src="/assets/icons/shape.svg" alt="hex shape" width={116} height={134} className="relative" />
      <div className="flex flex-col items-center justify-center absolute inset-0">
        <Image src={data.icon} alt={data.name} width={56} height={56}/>
        <p className="font-inter text-xl text-light font-normal max-sm:text-base">{data.name}</p>
      </div>
    </div>
  );
};
export default HexButton;
