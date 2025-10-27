import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PakagesLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("⚠️ Please enter both username and password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Using allorigins to bypass CORS
      const res = await fetch(
        "https://api.allorigins.win/raw?url=https://demandonsale.com/trav-chap/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await res.json();
      console.log("Login API Response:", data);

      if (data.status === "success" || data.status === true) {
        alert("✅ Login successful!");
        localStorage.setItem("travchap_user", JSON.stringify(data.data)); // store user info
        navigate("/pakages"); // redirect after success
      } else {
        setError(data.message || "❌ Invalid username or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* Banner */}
      <div
        className="w-full h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWmiqweNJs456ZNquPcFecIqR8Z4iPS80KQ&s)`,
        }}
      >
        <h2 className="text-center text-white font-semibold text-4xl px-6 py-2 rounded-lg bg-black/40">
          LOGIN
        </h2>
      </div>

      {/* Form */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
        <form
          onSubmit={handleLogin}
          className="bg-[#0a2c53] w-full max-w-md p-8 rounded-lg shadow-lg"
        >
          <div className="text-white py-2 mb-4 text-center">
            <p className="text-sm opacity-70">
              Use your registered credentials to log in
            </p>
          </div>

         
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
          )}

          {/* Remember me */}
          <div className="flex items-center mb-6">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-white text-sm">
              Remember Me
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md text-white font-medium transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Links */}
          <div className="mt-6 text-center">
            <a
              onClick={() => navigate("/register")}
              className="text-blue-300 cursor-pointer hover:underline block"
            >
              Register
            </a>
            <a href="#" className="text-blue-300 hover:underline block mt-2">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default PakagesLogin;
