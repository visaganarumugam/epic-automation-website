import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { InteractiveHoverButton } from "../components/ui_components/interactive-hover-button";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import logo from "/images/logo.png";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-black text-white px-8 py-12 min-h-screen">
        {/* Logo */}
        <div className="w-full flex items-center mb-10">
          <img src={logo} alt="Logo" className="h-10 mr-3" />
          <span className="text-2xl font-bold tracking-wide">Planners</span>
        </div>
        {/* Welcome Text */}
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-2">Welcome</h2>
          <p className="mb-8 text-gray-300">Let's create your new account</p>
          {/* Social Buttons */}
          <button className="flex items-center w-full mb-3 px-4 py-2 rounded bg-[#222] hover:bg-[#333] border border-[#333] transition">
            <FaGoogle className="mr-3 text-lg" /> Continue with Google
          </button>
          <button className="flex items-center w-full mb-6 px-4 py-2 rounded bg-[#222] hover:bg-[#333] border border-[#333] transition">
            <FaFacebookF className="mr-3 text-lg" /> Continue with Facebook
          </button>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-700" />
            <span className="mx-3 text-gray-400 text-sm">Or</span>
            <div className="flex-grow h-px bg-gray-700" />
          </div>
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-3 px-4 py-2 rounded bg-[#18171a] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-[#0feaf5]"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-6 px-4 py-2 rounded bg-[#18171a] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-[#0feaf5]"
          />
          {/* Continue Button */}
          <InteractiveHoverButton className="w-full mb-4 bg-white text-black border-none hover:bg-gray-200">
            Continue
          </InteractiveHoverButton>
          {/* Terms and Policy */}
          <p className="text-xs text-gray-400 mb-4">
            By continuing, you agree to Planners{' '}
            <RouterLink to="#" className="underline hover:text-[#0feaf5]">Terms of Service</RouterLink> and{' '}
            <RouterLink to="#" className="underline hover:text-[#0feaf5]">Privacy Policy</RouterLink>.
          </p>
          {/* Sign In Link */}
          <p className="text-xs text-gray-400">
            Already signed up?{' '}
            <RouterLink to="/signin" className="underline hover:text-[#0feaf5]">Sign in</RouterLink>
          </p>
        </div>
      </div>
      {/* Right: Image */}
      <div className="hidden md:block md:w-1/2 min-h-screen">
        <img
          src="/images/bg.jpg"
          alt="Sign up background"
          className="object-cover w-full h-full min-h-screen"
        />
      </div>
    </div>
  );
} 