import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
// import logo from "/images/logo.png";

export default function SignUp() {
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative font-gilroy">
      {/* Background image */}
      <img src="/images/signup_bg1.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      {/* Overlay for darkening the background (optional, can adjust opacity) */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="w-full max-w-2xl h-[90vh] right-60 mx-auto p-8 rounded-2xl flex flex-col items-center absolute z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
        {isLogin ? (
          <>
            <h1 className="text-white text-3xl font-bold mb-2 text-center">Log In</h1>
            <p className="text-gray-300 mb-8 text-center">Enter your credentials to access your account.</p>
          {/* Social Login */}
          <div className="flex gap-4 mb-6 w-full">
              <button className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-black text-white rounded-lg py-3 font-medium transition hover:bg-white/10">
              <svg width="20" height="20" viewBox="0 0 48 48" className="inline-block"><g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.972 32.833 29.418 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.803 0 5.377.99 7.413 2.626l6.293-6.293C34.583 6.527 29.583 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20c11.045 0 19.818-8.955 19.818-20 0-1.341-.138-2.651-.407-3.917z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.104 19.001 13 24 13c2.803 0 5.377.99 7.413 2.626l6.293-6.293C34.583 6.527 29.583 4 24 4c-7.732 0-14.41 4.41-17.694 10.691z"/><path fill="#FBBC05" d="M24 44c5.356 0 10.207-1.797 13.994-4.889l-6.481-5.307C29.418 36 24 36 24 36c-5.418 0-9.972-3.167-11.303-8.083l-6.57 5.073C9.59 39.59 16.268 44 24 44z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303C34.627 32.833 30.073 36 24 36c-5.418 0-9.972-3.167-11.303-8.083l-6.57 5.073C9.59 39.59 16.268 44 24 44c11.045 0 19.818-8.955 19.818-20 0-1.341-.138-2.651-.407-3.917z"/></g></svg>
              Google
            </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-black text-white rounded-lg py-3 font-medium transition hover:bg-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" className="inline-block"><path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
              Apple
            </button>
          </div>
          {/* Divider */}
          <div className="flex items-center my-6 w-full">
              <div className="flex-1 h-px bg-white/20" />
              <span className="mx-4 text-gray-400 text-sm">Or</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>
            {/* Email Field */}
            <div className="w-full mb-4">
              <label className="block text-white text-sm mb-1" htmlFor="login-email">Email</label>
              <input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full rounded-lg bg-[#18181b] border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/40 text-base"
              />
          </div>
            {/* Password Field */}
            <div className="w-full mb-2">
              <label className="block text-white text-sm mb-1" htmlFor="login-password">Password</label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full rounded-lg bg-[#18181b] border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/40 text-base"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white focus:outline-none"
                  onClick={() => setShowPassword(v => !v)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="w-full flex justify-end mb-6">
              <button className="text-white/70 text-sm hover:underline" type="button">Forgot password?</button>
            </div>
            {/* Log In Button */}
            <button className="w-full bg-white text-black font-bold py-3 rounded-lg text-base transition mb-4 shadow-lg hover:bg-gray-100">Log In</button>
            {/* Toggle to Sign Up */}
            <div className="w-full flex justify-center mt-2">
              <span className="text-white/80 text-sm">
                Don&apos;t have an account?{' '}
                <button className="text-white underline font-semibold hover:text-gray-300 transition" type="button" onClick={() => setIsLogin(false)}>
                  Sign up
                </button>
              </span>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-white text-3xl font-bold mb-2 text-center">Sign Up Account</h1>
            <p className="text-gray-300 mb-8 text-center">Enter your personal data to create your account.</p>
            {/* Social Login */}
            <div className="flex gap-4 mb-6 w-full">
              <button className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-black text-white rounded-lg py-3 font-medium transition hover:bg-white/10">
                <svg width="20" height="20" viewBox="0 0 48 48" className="inline-block"><g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.972 32.833 29.418 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.803 0 5.377.99 7.413 2.626l6.293-6.293C34.583 6.527 29.583 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20c11.045 0 19.818-8.955 19.818-20 0-1.341-.138-2.651-.407-3.917z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.104 19.001 13 24 13c2.803 0 5.377.99 7.413 2.626l6.293-6.293C34.583 6.527 29.583 4 24 4c-7.732 0-14.41 4.41-17.694 10.691z"/><path fill="#FBBC05" d="M24 44c5.356 0 10.207-1.797 13.994-4.889l-6.481-5.307C29.418 36 24 36 24 36c-5.418 0-9.972-3.167-11.303-8.083l-6.57 5.073C9.59 39.59 16.268 44 24 44z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303C34.627 32.833 30.073 36 24 36c-5.418 0-9.972-3.167-11.303-8.083l-6.57 5.073C9.59 39.59 16.268 44 24 44c11.045 0 19.818-8.955 19.818-20 0-1.341-.138-2.651-.407-3.917z"/></g></svg>
                Google
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-black text-white rounded-lg py-3 font-medium transition hover:bg-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" className="inline-block"><path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                Apple
              </button>
            </div>
            {/* Divider */}
            <div className="flex items-center my-6 w-full">
              <div className="flex-1 h-px bg-white/20" />
              <span className="mx-4 text-gray-400 text-sm">Or</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>
            {/* Name Fields */}
            <div className="flex gap-4 w-full mb-4">
              <div className="flex-1">
                <label className="block text-white text-sm mb-1" htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="eg. John"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="w-full rounded-lg bg-[#18181b] border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/40 text-base"
                />
              </div>
              <div className="flex-1">
                <label className="block text-white text-sm mb-1" htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="eg. Francisco"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  className="w-full rounded-lg bg-[#18181b] border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/40 text-base"
                />
              </div>
            </div>
            {/* Email Field */}
            <div className="w-full mb-4">
              <label className="block text-white text-sm mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="eg. johnfrans@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full rounded-lg bg-[#18181b] border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/40 text-base"
              />
            </div>
            {/* Password Field */}
            <div className="w-full mb-2">
              <label className="block text-white text-sm mb-1" htmlFor="password">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                  className="w-full rounded-lg bg-[#18181b] border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/40 text-base"
              />
              <button
                type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white focus:outline-none"
                onClick={() => setShowPassword(v => !v)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
            <div className="w-full mb-6">
              <span className="text-gray-400 text-xs">Must be at least 8 characters.</span>
            </div>
            {/* Sign Up Button */}
            <button className="w-full bg-white text-black font-bold py-3 rounded-lg text-base transition mb-4 shadow-lg hover:bg-gray-100">Sign Up</button>
            {/* Toggle to Log In */}
            <div className="w-full flex justify-center mt-2">
              <span className="text-white/80 text-sm">
                Already have an account?{' '}
                <button className="text-white underline font-semibold hover:text-gray-300 transition" type="button" onClick={() => setIsLogin(true)}>
                  Log in
                </button>
              </span>
            </div>
          </>
            )}
      </div>
    </div>
  );
} 