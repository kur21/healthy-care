import Image from "next/image";

const PageLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <Image src="/assets/icons/logo.svg"  alt="healthy logo" width={144} height={64} className="object-contain"/>
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-primary-500 border-t-transparent mt-3"></div>
    </div>
  );
};

export default PageLoading;
