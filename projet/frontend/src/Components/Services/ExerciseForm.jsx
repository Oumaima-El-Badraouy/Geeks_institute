import React, { useState } from "react";

export default function ExerciseForm() {
  const [description, setDescription] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    const newErrors = {};
    if (!description) newErrors.description = "Description is required!";
    if (!githubUrl) newErrors.githubUrl = "GitHub URL is required!";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Ici tu peux envoyer les données au backend
      console.log("Description:", description);
      console.log("GitHub URL:", githubUrl);

      // Reset inputs
      setDescription("");
      setGithubUrl("");
      alert("Exercise submitted!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Submit Exercise
        </h2>

        {/* Description input */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Exercise Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter exercise description"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* GitHub URL input */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            GitHub URL
          </label>
          <input
            type="text"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="Enter GitHub repository URL"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.githubUrl ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.githubUrl && (
            <p className="text-red-500 text-sm mt-1">{errors.githubUrl}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
