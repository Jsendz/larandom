import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Form () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8at6y6g', 'template_64a25ux', form.current, {
        publicKey: 'F1yw8uNF0aRUD-tCI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="email" id="email" className="p-3 rounded-md border border-gray-300 w-64 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
      <input type="submit" value="Send" className=" px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700"/>
      
    </form>
  );
};