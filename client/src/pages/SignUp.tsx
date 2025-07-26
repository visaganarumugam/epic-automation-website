import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signUpWithEmail, signInWithEmail, signInWithGoogle, onAuthStateChange } from "../lib/firebase";
// import logo from "/images/logo.png";

export default function SignUp() {
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [authChecking, setAuthChecking] = useState(true);
  const navigate = useNavigate();

  // Check if user is already authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setAuthChecking(false);
      if (user && user.emailVerified) {
        // Only redirect if user is verified
        navigate('/home');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    const result = await signUpWithEmail(email, password);
    
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess("Account created successfully! Please check your email for verification.");
      // Clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
    
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const result = await signInWithEmail(email, password);
    
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess("Login successful!");
      // Clear form
      setEmail("");
      setPassword("");
    }
    
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    const result = await signInWithGoogle();
    
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess("Google sign-in successful!");
    }
    
    setLoading(false);
  };

  // Show loading screen while checking authentication
  if (authChecking) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center relative font-gilroy">
        <img src="/images/signup_bg1.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="w-full max-w-[600px] mx-auto p-8 py-12 rounded-2xl flex flex-col items-center absolute z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative font-gilroy">
      {/* Background image */}
      <img src="/images/signup_bg1.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      {/* Overlay for darkening the background (optional, can adjust opacity) */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="w-full max-w-[600px]  mx-auto p-8 py-12 rounded-2xl flex flex-col items-center absolute z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <h1 className="text-white text-4xl font-bold mb-2 text-center">Login to Epic Automations</h1>
            <p className="text-gray-300 mb-6 text-lg text-center">Enter your credentials to access your account.</p>
          {/* Error/Success Messages */}
          {error && (
            <div className="w-full mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="w-full mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
              {success}
            </div>
          )}
          
          {/* Social Login */}
          <div className="flex gap-4 mb-6 w-full">
              <button 
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-black text-white rounded-lg py-3 font-semibold text-xl transition hover:bg-black/60 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FcGoogle size={25} />
                Google
              </button> 
              <button 
                type="button"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-black text-white rounded-lg py-3 font-semibold text-xl transition hover:bg-black/60 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaApple size={25} />
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
                required
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
                  required
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
            <div className="w-full flex justify-center mt-2 mb-4">
              <button className="text-white/70 text-md hover:underline" type="button">Forgot password?</button>
            </div>
            {/* Log In Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-bold py-3 rounded-lg text-xl transition mb-4 shadow-lg hover:bg-gray-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
            {/* Toggle to Sign Up */}
            <div className="w-full flex justify-center mt-2">
              <span className="text-white/80 text-lg">
                Don&apos;t have an account?{' '}
                <button className="text-white cursor-pointer underline font-semibold hover:text-gray-300 transition" type="button" onClick={() => setIsLogin(false)}>
                  Sign up
                </button>
              </span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignUp}>
            <h1 className="text-white text-4xl font-bold mb-2 text-center">Sign Up to Epic Automations</h1>
            <p className="text-gray-300 mb-6 text-lg text-center">Enter your personal data to create your account.</p>
            
            {/* Error/Success Messages */}
            {error && (
              <div className="w-full mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="w-full mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
                {success}
              </div>
            )}
            
            {/* Social Login */}
            <div className="flex gap-4 mb-6 w-full">
              <button 
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="flex-1 flex cursor-pointer items-center justify-center gap-2 border border-white/20 bg-black text-white rounded-lg py-3 font-semibold text-xl transition hover:bg-black/60 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FcGoogle size={25} />
                Google
              </button>
              <button 
                type="button"
                disabled={loading}
                className="flex-1 flex cursor-pointer items-center justify-center gap-2 border border-white/20 bg-black text-white rounded-lg py-3 font-semibold text-xl transition hover:bg-black/60 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaApple size={25} />
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
                  required
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
                  required
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
                required
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
                required
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
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-bold py-3 rounded-lg text-xl transition mb-4 cursor-pointer shadow-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
            {/* Toggle to Log In */}
            <div className="w-full flex justify-center mt-2">
              <span className="text-white/80 text-lg">
                Already have an account?{' '}
                <button className="text-white underline font-semibold cursor-pointer hover:text-gray-300 transition" type="button" onClick={() => setIsLogin(true)}>
                  Log in
                </button>
              </span>
            </div>
          </form>
            )}
      </div>
    </div>
  );
} 