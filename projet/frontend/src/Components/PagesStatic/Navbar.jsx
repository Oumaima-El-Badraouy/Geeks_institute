import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-extrabold"> GitCheck</h1>
            </div>

            {/* Desktop Menu */}
           <div className="hidden md:flex items-center space-x-4">
  <Link to="/" className="font-bold hover:text-gray-300">Home</Link>
  <Link to="/about" className="font-bold hover:text-gray-300">About</Link>
  <Link to="/contact" className="font-bold hover:text-gray-300">Contact</Link>

  {/* Login Button on same line */}
  <Link
    to="/user/login"
    className="bg-white text-blue-800 font-bold py-1 px-3 rounded-lg hover:bg-gray-300 transition text-sm"
  >
    Login
  </Link>
  <Link
    to="/user/signup"
    className="bg-white text-blue-800 font-bold py-1 px-3 rounded-lg hover:bg-gray-300 transition text-sm"
  >
    Signup
  </Link>
</div>


            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white text-blue-800">
            <Link to="/" className="block px-4 py-2 font-bold hover:bg-blue-100">Home</Link>
            <Link to="/about" className="block px-4 py-2 font-bold hover:bg-blue-100">About</Link>

            <Link to="/contact" className="block px-4 py-2 font-bold hover:bg-blue-100">Contact</Link>
            <Link to="/user/login" className="block px-4 py-2 font-bold hover:bg-blue-100">Login</Link>
            <Link to="/user/signup" className="block px-4 py-2 font-bold hover:bg-blue-100">Signup</Link>
          </div>
        )}
      </nav>

      <nav className="min-h-screen p-0 m-0 top-0 ">
      <Outlet />
      </nav>
    </>
  );
};

export default Navbar;

