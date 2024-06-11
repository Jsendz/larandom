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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-no-repeat bg-fondo">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Our website is coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center w-[80%] bg-slate-100 rounded-xl">
      <Image src="/logo.svg" alt="founder's photo" width={200} height={200} className="  " />
        <h1 className="text-6xl font-bold text-gray-800">Proximament</h1>
        <p className="mt-4 text-2xl text-gray-600">
        El nostre lloc web està en construcció. Estigueu atents a alguna cosa sorprenent!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 rounded-md border border-gray-300 w-64 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className=" px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="mt-8 text-xl text-green-600">
            Thank you for subscribing!
          </p>
        )}
      </main>

      <footer className="flex items-center justify-center w-full h-24  text-white">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}