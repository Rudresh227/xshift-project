import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleSignup = () => {
        if(!fullName || !email || !password){
            alert("Please fill all required fields")
            return;
        }

        if(!isChecked){
            alert("Please accept terms and conditions");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        
        const alreadyExist = existingUsers.some(user => user.email === email);
        if(alreadyExist){
            alert("Email already exist");
            return;
        }

        const newUser = {
            fullName,
            email,
            password
        }

        existingUsers.push(newUser)


        localStorage.setItem("users",JSON.stringify(existingUsers))

        alert("Account created successfully!");
        navigate("/login");
    };

    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row p-4 md:shadow-md">
            {/* Branding Section */}
            <div className="flex md:w-[45%] w-full justify-center items-center md:bg-[#E5EDFD] rounded-md py-6 md:py-0">
                <h1 className="text-[#3C37FF] text-2xl md:text-3xl font-bold">XShift</h1>
            </div>

            {/* Signup Form Section */}
            <div className="w-full md:w-[55%] flex justify-center items-center mt-15 md:mt-0">
                <div className="w-96">
                    <h1 className="text-3xl font-bold mb-2">Sign up</h1>
                    <p className="text-gray-600 mb-6">Create your account in seconds.</p>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full p-3 border border-gray-600 rounded-lg mb-6 focus:outline-none focus:ring-1 focus:ring-[#3C37FF]"
                    />

                    <input
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-600 rounded-lg mb-6 focus:outline-none focus:ring-1 focus:ring-[#3C37FF]"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-600 rounded-lg mb-2 focus:outline-none focus:ring-1 focus:ring-[#3C37FF]"
                    />

                    <div className="flex items-center space-x-2 mb-6 mt-2">
                        <input 
                            type="checkbox" 
                            checked={isChecked} 
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className="w-4 h-4 accent-[#3C37FF]" 
                        />
                        <p className="text-sm text-black font-semibold cursor-pointer">
                            I agree to the Terms and Service and Privacy Policy
                        </p>
                    </div>

                    <button 
                        onClick={handleSignup}
                        className="w-full bg-[#3C37FF] text-white py-3 rounded-lg font-semibold text-lg transition cursor-pointer"
                    >
                        Create an account
                    </button>

                    <p className="text-center mt-4 text-gray-600">
                        Already a member?{" "}
                        <span
                            className="text-[#3C37FF] font-semibold cursor-pointer hover:underline"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
