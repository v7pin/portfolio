import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 text-black p-4">
      <div>
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">Contact</p>
          <p className="py-6 text-xl mt-3">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center text-black">
          <form action="https://getform.io/f/13a36658-67e4-4237-b8a5-2858ae8a035a" method="post" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-black font-bold focus:outline-none border-black placeholder-gray-600 text-xl" />
            <input type="text" name="email" placeholder="Enter your email" className="my-2 p-2 bg-transparent border-2 rounded-md text-black font-bold focus:outline-none border-black placeholder-gray-600 text-xl" />
            <textarea name="message" cols="30" rows="10" className="p-2 bg-transparent border-2 rounded-md text-black font-bold focus:outline-none border-black placeholder-gray-600 text-xl" placeholder="Enter your message"></textarea>
            <button className="text-black bg-gradient-to-b from-cyan-500 to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md font-bold hover:scale-110 duration-300 text-xl">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
