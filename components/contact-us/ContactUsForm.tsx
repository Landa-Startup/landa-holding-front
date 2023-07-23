'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}
console.log('form running');

export default function ContactUsForm() {
  const initialFormData: FormData = {
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  }

  return (
    <div>
      <h2 className="text-5xl font-light text-center">Get in touch</h2>
      <div className="grid grid-cols-1 gap-6 my-6 md:grid-cols-2">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name*"
          className="w-full input input-bordered drop-shadow-lg"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email*"
          className="w-full input input-bordered drop-shadow-lg"
        />
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Your Number*"
          className="w-full input input-bordered drop-shadow-lg"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject*"
          className="w-full input input-bordered drop-shadow-lg"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          cols={20}
          className="w-full col-span-1 textarea textarea-bordered md:col-span-2 drop-shadow-lg"
          placeholder="Message*"
        ></textarea>
      </div>
      <div className="text-center">
        <form className="mt-3 btn btn-wide btn-neutral" onClick={handleSubmit}>
          Send Message
        </form>
      </div>
    </div>
  );
}
