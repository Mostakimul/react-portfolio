import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CommonHeader from './CommonHeader';
import TheSpinner from './TheSpinner';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post('https://getform.io/f/508edbd4-7e0e-4e2e-ae2c-09a27cdf6abd', {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then((response) => {
        setIsSubmitted(true);
        setIsLoading(false);
        reset({});
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };
  return (
    <div className="p-5">
      <CommonHeader
        title="Contact Me"
        iconShape="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
      {/* contact body */}
      <div className="pt-5">
        <h2 className="text-center text-xl sm:text-2xl font-semibold font-ubu py-5">Lets Talk</h2>
        {isLoading && <TheSpinner />}
        {isSubmitted && (
          <p className="text-xs font-ral py-1.5 my-2 text-center font-semibold text-gray-50 bg-green-600 px-1.5 rounded-lg shadow-lg w-2/4 mx-auto">
            Message sent successfully!!!
          </p>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:w-4/5 md:w-3/4 lg:w-2/4 mx-auto text-center font-ral">
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Your Name *"
            className="py-2.5 px-2.5 w-full bg-gray-700 focus:bg-gray-600 duration-300 transition rounded-lg shadow-lg outline-none border-0"
          />
          <p className="text-xs font-semibold text-red-600">
            {errors.name && <span>This field is required</span>}
          </p>
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Your Email *"
            className="py-2.5 px-2.5 my-5 w-full bg-gray-700 focus:bg-gray-600 duration-300 transition rounded-lg shadow-lg outline-none border-0"
          />
          <p className="text-xs font-semibold text-red-600">
            {errors.email && <span>This field is required</span>}
          </p>
          <textarea
            name="message"
            {...register('message', { required: true })}
            id=""
            cols="30"
            rows="10"
            className="py-2.5 px-2.5 w-full bg-gray-700 focus:bg-gray-600 duration-300 transition rounded-lg shadow-lg outline-none border-0"
            placeholder="Your Message..."></textarea>
          <p className="text-xs font-semibold text-red-600">
            {errors.message && <span>This field is required</span>}
          </p>

          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-700 duration-300 transition py-2.5 w-full rounded-lg shadow-lg my-5">
            Send message
          </button>
          {isError && (
            <p className="text-xs py-1.5 font-semibold text-red-600">Something went wrong!!!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
