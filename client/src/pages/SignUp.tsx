import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import logo from "/images/logo.png";

export default function SignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative font-gilroy overflow-hidden">
      {/* Background image */}
      <img src="/images/bg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* Centered Form */}
      <div className="relative z-10 w-full max-w-md px-6 py-12 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
        {/* Branding & Heading */}
        <img src={logo} alt="Logo" className="h-10 mb-8" />
        <h1 className="text-white text-3xl font-bold mb-2 text-center">
          {isLogin ? 'Welcome Back' : 'Create Your Account'}
        </h1>
        <p className="text-gray-200 text-xl mb-8 text-center">
          {isLogin ? 'Log in to Gudanta Metrics Engine' : 'Sign up for Gudanta Metrics Engine'}
        </p>

        {/* Social Login */}
        <div className="flex gap-4 mb-6 w-full">
          <button className="flex-1 flex items-center justify-center gap-2 border border-white/10 bg-[#18181b] bg-opacity-70 hover:bg-[#232329] text-white rounded-lg py-3 font-medium transition">
            <svg width="20" height="20" viewBox="0 0 48 48" className="inline-block"><g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.972 32.833 29.418 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.803 0 5.377.99 7.413 2.626l6.293-6.293C34.583 6.527 29.583 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20c11.045 0 19.818-8.955 19.818-20 0-1.341-.138-2.651-.407-3.917z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.104 19.001 13 24 13c2.803 0 5.377.99 7.413 2.626l6.293-6.293C34.583 6.527 29.583 4 24 4c-7.732 0-14.41 4.41-17.694 10.691z"/><path fill="#FBBC05" d="M24 44c5.356 0 10.207-1.797 13.994-4.889l-6.481-5.307C29.418 36 24 36 24 36c-5.418 0-9.972-3.167-11.303-8.083l-6.57 5.073C9.59 39.59 16.268 44 24 44z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303C34.627 32.833 30.073 36 24 36c-5.418 0-9.972-3.167-11.303-8.083l-6.57 5.073C9.59 39.59 16.268 44 24 44c11.045 0 19.818-8.955 19.818-20 0-1.341-.138-2.651-.407-3.917z"/></g></svg>
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-white/10 bg-[#18181b] bg-opacity-70 hover:bg-[#232329] text-white rounded-lg py-3 font-medium transition">
            <svg width="20" height="20" viewBox="0 0 24 24" className="inline-block"><path fill="white" d="M16.365 1.43c-.94.07-2.07.65-2.74 1.41-.6.67-1.18 1.8-1.01 2.7.98.04 2.13-.6 2.78-1.37.62-.7 1.14-1.8 0-2.74zm-4.36 2.13c-1.48-.04-2.73.85-3.44.85-.72 0-1.82-.82-3-.8-1.54.02-2.97.89-3.77 2.26-1.6 2.77-.41 6.86 1.14 9.1.76 1.1 1.67 2.33 2.87 2.29 1.16-.05 1.6-.74 3-0.74 1.39 0 1.79.74 3 .72 1.25-.02 2.04-1.12 2.8-2.23.53-.77.75-1.17 1.18-2.05-3.1-1.19-2.98-4.32.57-4.5-.11-.44-.18-.89-.18-1.36 0-2.36 2.01-4.29 4.5-4.29.33 0 .65.04.96.1-.01-.02-.02-.03-.03-.05-.85-1.01-2.36-1.44-3.62-1.36z"/></svg>
            Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6 w-full">
          <div className="flex-1 h-px bg-white/10" />
          <span className="mx-4 text-gray-300 text-sm">Or</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Form Fields */}
        {!isLogin && (
          <div className="mb-4 w-full">
            <label className="block text-white text-sm mb-2" htmlFor="fullname">Full Name</label>
            <div className="relative">
              <input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="w-full rounded-lg bg-[#18181b] bg-opacity-60 border border-white/10 text-white px-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#A084E8] placeholder-white/60 text-base"
                style={{ fontFamily: 'Gilroy, sans-serif' }}
              />
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
            </div>
          </div>
        )}
        <div className="mb-4 w-full">
          <label className="block text-white text-sm mb-2" htmlFor="email">Email</label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-lg bg-[#18181b] bg-opacity-60 border border-white/10 text-white px-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#A084E8] placeholder-white/60 text-base"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            />
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
          </div>
        </div>
        <div className="mb-4 w-full">
          <label className="block text-white text-sm mb-2" htmlFor="password">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full rounded-lg bg-[#18181b] bg-opacity-60 border border-white/10 text-white px-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#A084E8] placeholder-white/60 text-base"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            />
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white focus:outline-none"
              onClick={() => setShowPassword(v => !v)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* Terms Checkbox (only for sign up) */}
        {!isLogin && (
          <div className="flex items-center mb-6 w-full">
            <input
              id="terms"
              type="checkbox"
              checked={agree}
              onChange={e => setAgree(e.target.checked)}
              className="accent-[#A084E8] w-4 h-4 rounded mr-2"
            />
            <label htmlFor="terms" className="text-white/80 text-sm select-none">
              I agree to the <span className="underline cursor-pointer">Terms & Privacy</span>
            </label>
          </div>
        )}
        {/* Continue/Login/Sign Up Button */}
        <button
          className="w-full bg-[#232329] bg-opacity-80 hover:bg-[#2a2a31] text-white font-bold py-3 rounded-lg text-base transition mb-2 shadow-lg disabled:opacity-50"
          disabled={!isLogin && (!agree || !fullName)}
        >
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
        {/* Toggle between Login and Sign Up */}
        <div className="w-full flex justify-center mt-6">
          {isLogin ? (
            <span className="text-white/80 text-sm">
              Don&apos;t have an account?{' '}
              <button
                className="text-[#A084E8] font-semibold hover:underline transition"
                onClick={() => setIsLogin(false)}
                type="button"
              >
                Sign up
              </button>
            </span>
          ) : (
            <span className="text-white/80 text-sm">
              Already have an account?{' '}
              <button
                className="text-[#A084E8] font-semibold hover:underline transition"
                onClick={() => setIsLogin(true)}
                type="button"
              >
                Log in
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
} 