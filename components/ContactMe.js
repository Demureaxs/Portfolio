import React from 'react';
import { HiPhone, HiEnvelope, HiLocationMarker } from 'react-icons/hi';
import { BsEnvelopeOpen } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';
import { stringify } from 'postcss';

function ContactMe() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = formData => {
    window.location.href = `mailto:martyntclarke1912@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-4 mt-24  md:space-y-10">
        <h4 className=" text-2xl sm:text-4xl font-semibold text-center">
          I can help bring your ideas to life,{' '}
          <span className="decoration-[#f7ab0a]/50 underline">Lets Talk</span>
        </h4>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <FaEnvelope className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="sm:text-2xl">martyntclarke1912@gmail.com</p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <HiPhone className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="sm:text-2xl">+62 821 4768 6532</p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <HiLocationMarker className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="sm:text-2xl">Bali, Indonesia</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-80 space-y-2 md:w-fit mx-auto"
        >
          <div className="flex justify-center w-full space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput flex-1 w-full"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput flex-1 w-full"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-2 px-4 md:py-5 md:px-10 rounded-md text-black text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
