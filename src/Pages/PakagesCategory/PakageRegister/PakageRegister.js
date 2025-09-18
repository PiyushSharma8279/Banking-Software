import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PackageRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.username || !formData.password) {
      setError("⚠️ Please fill all required fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("⚠️ Passwords do not match.");
      return;
    }
    if (!formData.agree) {
      setError("⚠️ Please accept terms and conditions.");
      return;
    }
    setError("");
    navigate("/login"); 
  };

  return (
    <>
      
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
        }}
      >
        <h2 className="text-white text-4xl font-bold px-6 py-2 rounded-lg bg-black/50">
          Register
        </h2>
      </div>

      
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16">
        <form
          onSubmit={handleRegister}
          className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Create Your Account
          </h3>

          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          {/* Terms */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2 w-4 h-4 accent-blue-600"
            />
            <label className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-[1.02] shadow-md"
          >
            Register
          </button>

          {/* Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a onClick={()=> navigate('/login')} className="text-blue-600 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default PackageRegister;
