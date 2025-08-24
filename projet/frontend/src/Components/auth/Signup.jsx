import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const validateField = (field, value) => {
    setErrors(prev => ({
      ...prev,
      [field]: value ? "" : `${field.charAt(0).toUpperCase() + field.slice(1)} is required!`
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fieldChecks = { name, email, password,passwordConfirmation };
    const newErrors = {};
    Object.entries(fieldChecks).forEach(([key, value]) => {
      if (!value) newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required!`;
    });
    if (password !== passwordConfirmation) {
      setErrors(prev => ({
        ...prev,
        passwordConfirmation: "Passwords do not match"
      }));
      return;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        name, email, password, fullNumber: phone, passwordConfirmation
      });
     
      navigate('/user/login');
    } catch (err) {
      console.error('Signup error:', err);
      setErrors(prev => ({
        ...prev,
        form: err.response?.data.message || "Signup failed. Try again."
      }));
    }
  };

  return (
    <div className="w-full min-h-[50vh] flex justify-center items-center px-4 mt-20 mb-0 pb-0  pt-0">
      <div className="w-full max-w-md px-4 py-8 font-[Press_Start_2P] text-white">
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-3 bg-black bg-opacity-70 backdrop-blur-md p-5 rounded-2xl border border-blue-600 shadow-2xl animate-fade-in-up"
        >
          <h2 className="text-2xl text-center font-extrabold mb-4 text-white drop-shadow-lg"> <span className='text-blue-400'>Join</span>  GitCheck</h2>
          <p className="text-center text-xs text-gray-300 mb-6">Create your compte and enter the arena</p>

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className={`w-full px-3 py-2 bg-white text-white border ${
                errors.name ? 'border-red-500' : 'border-blue-500'
              } rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateField("name", e.target.value);
              }}
              onBlur={() => validateField("name", name)}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className={`w-full px-3 py-2 bg-white text-black border ${
                errors.email ? 'border-red-500' : 'border-blue-500'
              } rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateField("email", e.target.value);
              }}
              onBlur={() => validateField("email", email)}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className={`w-full px-3 py-2 bg-white text-black border ${
                errors.password ? 'border-red-500' : 'border-blue-500'
              } rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validateField("password", e.target.value);
              }}
              onBlur={() => validateField("password", password)}
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className={`w-full px-3 py-2 bg-white text-black border ${
                errors.passwordConfirmation ? 'border-red-500' : 'border-blue-500'
              } rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm`}
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            {errors.passwordConfirmation && (
              <p className="text-red-400 text-xs mt-1">{errors.passwordConfirmation}</p>
            )}
          </div>

         

          {errors.form && <p className="text-red-400 text-xs mb-4">{errors.form}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-400 text-white font-bold rounded-md transition duration-300 transform hover:scale-105 shadow-xl text-sm"
          >
             Start now
          </button>

          <div className="text-center mt-4 text-xs text-gray-300">
            Already have an account?{' '}
            <NavLink to="/user/login" className="text-white hover:underline">
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
