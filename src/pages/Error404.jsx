import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/error.jpg'

const Error404 = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="mb-8">
        <img
          src={error} // Replace with your image
          alt="Lost Astronaut"
          className="w-full rounded-lg shadow-md mx-auto max-w-md"
        />
      </div>
      <p className="text-xl text-center text-gray-600 mt-4">
        Oops! The page you're looking for is lost in the digital void.
      </p>
      <Link to="/" className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
