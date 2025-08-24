import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to our platform .
          Our goal is to facilitate the process of submitting exercises, automatically testing code,
          and correcting it using artificial intelligence. This way, students can quickly identify
          mistakes and improve their skills.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The platform also makes it easier for teachers to monitor students' exercises,
          providing them with accurate results and saving time to focus more on teaching
          and training.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We believe that education and technology should go hand in hand .
        </p>
      </div>
    </div>
  );
}
