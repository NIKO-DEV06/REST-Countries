import earthGif from "../assets/earth.gif";
import Image from "next/image";

const loading = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Image
        className="animate-bounce w-auto h-auto"
        src={earthGif}
        alt="earth-loader"
        width={100}
        height={100}
        priority
      />
      <p className="text-center font-bold dark:text-white">Hang On...</p>
    </div>
  );
};

export default loading;
