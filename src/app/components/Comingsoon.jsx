"use client"


import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-2 bg-slate-100">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Our website is coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col md:flex-row md:items-center justify-around h-full md:h-screen flex-1 text-center bg-slate-100 rounded-xl">
        <div className='w-full h-full md:h-[60%] flex flex-col justify-evenly pl-3 md:pl-5'>
      
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 text-left pl-4">Arriba un <span className="bg-orange-600 bg-clip-text">nou tipus</span> d'esdeveniment a Andorra</h1>
        <p className="mt-4 text-xl md:text-2xl text-left pl-4 text-red-500">
        La nostra pàgina web segueix en construcció.<br />
         Estigues atent per una sorpresa!
        </p>

        {!submitted ? (
          <div className='w-[90%] md:w-full'>
          <form onSubmit={handleSubmit} className="mt-8 flex items-center">
            <input
              type="email"
              placeholder="Introdueix el teu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 rounded-md border border-gray-300 w-64 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className=" px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700"
            >
              Subscriure
            </button>
          </form>
          </div>
        ) : (
          <p className="mt-8 text-xl text-green-600">
            Thank you for subscribing!
          </p>
        )}
        </div>
        <div className='w-[90%] md:w-full h-full mt-10 md:mt-0 flex items-center justify-center'>
        <Image src="/logo.svg" alt="founder's photo" width={300} height={300} className="block"  />
        </div>
      </main>

     
    </div>
  );
}