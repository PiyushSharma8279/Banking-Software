import React, { useState } from "react";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Application submitted!");
  };

  return (
    <div className="bg-[#246e73] h-[300px] text-white p-4  flex flex-col justify-center ">
      <h2 className="text-xl font-bold mb-4">Application Form</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded-md text-black outline-none"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded-md text-black outline-none"
          required
        />

        {/* Upload */}
        <input
          type="file"
          name="document"
          onChange={handleChange}
          className="w-full p-2 rounded-md text-black bg-white cursor-pointer"
          accept=".pdf,.jpg,.png"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-white text-[#246e73] font-semibold py-2 rounded-md hover:bg-gray-100 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;

