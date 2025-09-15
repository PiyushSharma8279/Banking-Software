import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PakagesLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Hardcoded credentials
    const validUser = {
        username: "username",
        password: "12345",
    };

    const handleLogin = () => {
        if (username === validUser.username && password === validUser.password) {
            setError("");
            navigate("/pakages"); // Redirect to dashboard page
        } else {
            setError("Invalid username or password. Please try again!");
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

            {/* Login Form */}
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
                <div className="bg-[#0a2c53] w-full max-w-md p-8 rounded-lg shadow-lg">
                    <div className=" text-white py-2">
                        For now
                        <br /> Usename= username<br />
                        password = 12345
                    </div>
                    {/* Username */}
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

                    {/* Password */}
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

                    {/* Error Message */}
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

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                    {/* Links */}
                    <div className="mt-6 text-center">
                        <a href="#" className="text-blue-300 hover:underline block">
                            Register
                        </a>
                        <a href="#" className="text-blue-300 hover:underline block mt-2">
                            Stop forgetting your password
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PakagesLogin;
