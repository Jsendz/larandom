"use client"



import Image from 'next/image';



export default function ComingSoon() {


  return (
    <div className="w-full h-full">
      <Image src="/ordena.jpeg" alt="founder's photo" width={1280} height={900} className="hidden lg:block" />
      <Image src="/movil.jpeg" alt="founder's photo" width={390} height={900} className=" lg:hidden " />

     
    </div>
  );
}