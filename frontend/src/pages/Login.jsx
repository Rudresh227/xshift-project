import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [loggedEmail, setLoggedEmail] = useState("");
    const [loggedPassword, setLoggedPassword] = useState("");

    const handleLogin = () => {
        if (!loggedEmail || !loggedPassword){
            alert("Please fill in all fields");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users"))

        const alreadyUser = existingUsers.some(user => user.email === loggedEmail);
        if (!alreadyUser) {
            alert("User not found");
            return;
        }

        alert("Already a user")
        navigate("/home")


    }




    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row p-4 md:shadow-md">
            {/* Branding Section (Visible always, but different sizes for mobile and desktop) */}
            <div className="flex md:w-[45%] w-full justify-center items-center md:bg-[#E5EDFD] rounded-md py-6 md:py-0">
                <h1 className="text-[#3C37FF] text-2xl md:text-3xl font-bold">XShift</h1>
            </div>

            {/* Login Form Section */}
            <div className="w-full md:w-[55%] flex justify-center items-center mt-20 md:mt-0">
                <div className="w-96">
                    <h1 className="text-3xl font-bold mb-2">Login</h1>
                    <p className="text-gray-600 mb-6">
                        Please enter your login details to sign in.
                    </p>

                    <input
                        type="text"
                        placeholder="Email Address"
                        value={loggedEmail}
                        onChange={(e) => setLoggedEmail(e.target.value)}
                        className="w-full p-3 border border-gray-600 rounded-lg mb-6 focus:outline-none focus:ring-1 focus:ring-[#3C37FF]"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={loggedPassword}
                        onChange={(e) => setLoggedPassword(e.target.value)}
                        className="w-full p-3 border border-gray-600 rounded-lg mb-2 focus:outline-none focus:ring-1 focus:ring-[#3C37FF]"
                    />

                    <p 
                    className="text-sm text-black font-semibold cursor-pointer hover:underline mb-6 w-full text-right"
                    onClick={handleLogin}
                    >
                        Forgot Password?
                    </p>

                    <button 
                        className="w-full bg-[#3C37FF] text-white py-3 rounded-lg font-semibold text-lg transition"
                        onClick={handleLogin}
                    >
                        Log in
                    </button>

                    <p className="text-center mt-4 text-gray-600">
                        Don't have an account?{" "}
                        <span
                            className="text-[#3C37FF] font-semibold cursor-pointer hover:underline"
                            onClick={() => navigate("/signup")}
                        >
                            Sign up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;