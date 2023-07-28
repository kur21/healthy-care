import Image from "next/image";

const PageError = ({ reset }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <Image
        src="/assets/illustrations/error.svg"
        alt="error image"
        width="0"
        height="0"
        className="w-full h-auto max-w-[280px] object-contain"
      />

      <div className="text-center">
        <h2 className="font-inter text-2xl font-medium mb-3">
          Something went wrong!
        </h2>
        <button
          type="button"
          className="px-6 py-2 bg-primary-400 text-light font-inter font-normal rounded-lg hover:bg-primary-400/80"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
};
export default PageError;
