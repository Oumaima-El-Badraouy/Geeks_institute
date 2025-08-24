import React from 'react';
import { Link } from 'react-router-dom';
import homeimg1 from '../../assets/images/homeimg2.jpg';

export default function Home() {
  return (
    <section
      className="h-screen bg-center bg-no-repeat bg-gray-700 bg-blend-multiply pt-10 "
      style={{ backgroundImage: `url(${homeimg1})` }}
    >
      <div className="px-2 mx-auto max-w-screen-xl text-center py-24 lg:py-32">
        <h1 className="mb-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Easily check your students' exercises!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
          Save time and simplify the correction process with our smart platform.
        </p>
        <div className="p-9 sm:justify-center sm:space-y-0">
          <Link
            type="button"
            to="/user/login"
            className="text-white bg-blue-600 hover:bg-gradient-to-br focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start now
          </Link>
        </div>
      </div>
    </section>
  );
}
