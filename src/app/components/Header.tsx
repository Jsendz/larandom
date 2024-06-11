import Image from "next/image";


export default function Header() {
  return (
    <div className=" h-full w-full">
      <div className="w-[90%]  rounded-xl m-auto ">
      <Image src="/carnival.png" alt="founder's photo" width={1200} height={900} className="hidden lg:block m-auto rounded-xl shadow-lg " />
      <Image src="/tix2.png" alt="founder's photo" width={300} height={900} className=" lg:hidden m-auto rounded-lg " />
      </div>
    
    </div>
  );
}