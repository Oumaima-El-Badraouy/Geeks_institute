import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (field, value) => {
    setErrors((prev) => ({
      ...prev,
      [field]: value ? '' : field === 'email' ? 'Email is required!' : 'Password is required!',
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrors({
        email: email ? '' : 'Email is required!',
        password: password ? '' : 'Password is required!',
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      const token = localStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }

      if (response.data.id) {
        localStorage.setItem('userId', response.data.id);
      }

      if (response.data.redirect) {
        navigate(response.data.redirect, { state: response.data.userData });
      } else {
        setErrors((prev) => ({
          ...prev,
          form: 'Redirect path missing in server response.',
        }));
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        form: error.response?.data.message || error.message || 'Login failed. Please try again.',
      }));
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#ffff ] via-[#0f0c29] to-[#ffff] px-2 sm:px-8 py-8 font-[Press_Start_2P] text-white pt-0">
      <div className="w-full max-w-lg p-6 md:p-12 animate-fade-in-up">
        <form
          onSubmit={handleLoginSubmit}
          className="w-full backdrop-blur-md bg-black/70 p-5 rounded-2xl border border-blue-600 shadow-2xl"
        >
          {/* Title with custom colored letters: G (white), C (blue) */}
          <h2 className="text-3xl text-center mb-3 drop-shadow-lg font-extrabold">
         GitCheck
            <span className="text-blue-300"> Login</span>
          </h2>

          <p className="text-center text-xs sm:text-sm text-gray-300 mb-8">
            Enter your credentials to join the arena
          </p>

          {/* Email */}
          <div className="mb-6">
            <input
              type="email"
              placeholder="📧 Email"
              className={`w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              value={email}
              onBlur={() => validateField('email', email)}
              onChange={(e) => {
                setEmail(e.target.value);
                validateField('email', e.target.value);
              }}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="🔒 Password"
              className={`w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              value={password}
              onBlur={() => validateField('password', password)}
              onChange={(e) => {
                setPassword(e.target.value);
                validateField('password', e.target.value);
              }}
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
          </div>

          {errors.form && <p className="text-red-400 text-xs mb-4">{errors.form}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition duration-300 transform hover:scale-105 shadow-xl"
          >
            Start
          </button>

          <div className="text-center mt-4">
            <NavLink to="/user/signup" className="text-xs text-white hover:underline">
              create an account
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
