import React from 'react';

export default function ContactUsForm() {
  
  function onSubmit(){
    
  }
  return (
    <div>
      <h2 className="text-5xl font-light text-center">Get in touch</h2>
      <div className='grid grid-cols-1 gap-6 my-6 md:grid-cols-2'>
      <input type="text" placeholder="Your Name*" className="w-full input input-bordered drop-shadow-lg" />
      <input type="text" placeholder="Your Email*" className="w-full input input-bordered drop-shadow-lg" />
      <input type="text" placeholder="Your Number*" className="w-full input input-bordered drop-shadow-lg" />
      <input type="text" placeholder="Subject*" className="w-full input input-bordered drop-shadow-lg" />
      <textarea rows={4} cols={20} className="w-full col-span-1 textarea textarea-bordered md:col-span-2 drop-shadow-lg" placeholder="Message*"></textarea>
      </div>
      <div className='text-center'>
      <button className="mt-3 btn btn-wide btn-neutral ">Send Message</button>
      </div>
    </div>
  );
}
