import Image from "next/image";

Image

export default function Home() {
    return (

<div className="w-[90%] mx-auto mb-48">
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image src="/FLYER.webp" alt="founder's photo" width={200} height={500} className="m-auto rounded-lg " /></figure>
  <div className="card-body">
    <h2 className="card-title">American Dream</h2>
    <p>Larandom</p>
    <span>35$</span>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Comprar Entrada</button>
    </div>
  </div>
</div>
</div>
    );

    }