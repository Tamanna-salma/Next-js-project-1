"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast'; 

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // Demo Credentials
    const DEMO_EMAIL = "admin@lumensoft.com";
    const DEMO_PASSWORD = "password123";

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
          
            const userData = { name: "Admin ", email: email, isLoggedIn: true };
            localStorage.setItem("user", JSON.stringify(userData));
            
          
            toast.success(`Welcome back, ${userData.name}!`, {
                duration: 4000,
                style: {
                    borderRadius: '15px',
                    background: '#333',
                    color: '#fff',
                },
            });

          
            setTimeout(() => {
                router.push("/");
                
                router.refresh(); 
            }, 1000); 

        } else {
           
            toast.error("Invalid credentials! Please use the demo info.", {
                style: {
                    borderRadius: '15px',
                    background: '#ef4444',
                    color: '#fff',
                },
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#060a18] px-4 py-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
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
                </div>

                {/* Demo Credentials Alert Box */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-[#3071b6] p-4 rounded-r-xl mb-6">
                    <p className="text-xs text-blue-800 dark:text-blue-300 font-bold uppercase tracking-wider">Demo Access:</p>
                    <p className="text-xs text-blue-700 dark:text-blue-400 font-mono">User: {DEMO_EMAIL}</p>
                    <p className="text-xs text-blue-700 dark:text-blue-400 font-mono">Pass: {DEMO_PASSWORD}</p>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
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
                                    placeholder="admin@lumensoft.com"
                                />
                            </div>
                        </div>

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
                                    placeholder="password123"
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

                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-4 px-4 border border-transparent font-black rounded-2xl text-white bg-[#3071b6] hover:bg-blue-700 focus:outline-none transition-all shadow-lg shadow-blue-500/30"
                    >
                        Sign In 
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    New here? {' '}
                    <Link href="/register" className="font-black text-[#3071b6] hover:underline uppercase tracking-tighter">
                        Register Now
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginPage;