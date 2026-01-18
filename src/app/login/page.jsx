"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // Demo Credentials
    const DEMO_EMAIL = "admin@lumensoft.com";
    const DEMO_PASSWORD = "password123";

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
            // সফল লগইন হলে ইউজারকে লোকাল স্টোরেজে সেভ করা (সিমুলেশন)
            const userData = { name: "Admin Rifat", email: email, isLoggedIn: true };
            localStorage.setItem("user", JSON.stringify(userData));
            
            alert("Login Successful! Redirecting...");
            router.push("/"); // হোমপেজে পাঠিয়ে দেওয়া
            window.location.reload(); // নেভবার আপডেট করার জন্য
        } else {
            setError("Invalid email or password. Use demo credentials!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#060a18] px-4 py-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-slate-800"
            >
                {/* Logo & Header */}
                <div className="text-center">
                    <Link href="/" className="text-3xl font-black text-[#3071b6]">
                        Lumen<span className="text-cyan-500">Soft</span>
                    </Link>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Please enter your details to sign in
                    </p>
                </div>

                {/* Demo Credentials Alert Box */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-[#3071b6] p-4 rounded-r-xl">
                    <p className="text-xs text-blue-800 dark:text-blue-300 font-bold uppercase tracking-wider">Demo Access:</p>
                    <p className="text-xs text-blue-700 dark:text-blue-400">Email: <span className="font-mono">{DEMO_EMAIL}</span></p>
                    <p className="text-xs text-blue-700 dark:text-blue-400">Pass: <span className="font-mono">{DEMO_PASSWORD}</span></p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-sm font-bold">
                            {error}
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        {/* Email Field */}
                        <div className="relative">
                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 ml-1 uppercase">Email Address</label>
                            <div className="mt-1 relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 border-transparent focus:border-[#3071b6] focus:bg-white dark:focus:bg-slate-700 rounded-2xl outline-none transition-all dark:text-white text-sm"
                                    placeholder="name@company.com"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 ml-1 uppercase">Password</label>
                            <div className="mt-1 relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-12 pr-12 py-4 bg-gray-50 dark:bg-slate-800 border-transparent focus:border-[#3071b6] focus:bg-white dark:focus:bg-slate-700 rounded-2xl outline-none transition-all dark:text-white text-sm"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#3071b6]"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#3071b6] focus:ring-[#3071b6]" />
                            <span className="text-gray-600 dark:text-gray-400">Remember me</span>
                        </label>
                        <a href="#" className="font-bold text-[#3071b6] hover:underline">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-4 px-4 border border-transparent font-black rounded-2xl text-white bg-[#3071b6] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-lg shadow-blue-500/30"
                    >
                        Sign In 
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                </form>

                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-slate-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-slate-900 text-gray-500 uppercase font-bold text-xs tracking-widest">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-3">
                        <button className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 dark:border-slate-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-all font-bold dark:text-white">
                            <Github size={20} />
                            <span>GitHub</span>
                        </button>
                    </div>
                </div>

                <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account? {' '}
                    <Link href="/register" className="font-black text-[#3071b6] hover:underline uppercase tracking-tighter">
                        Create for free
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginPage;