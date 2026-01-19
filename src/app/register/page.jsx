"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();
        setError("");

        // Validation 
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        
        const newUser = { 
            name: formData.name, 
            email: formData.email, 
            isLoggedIn: true 
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        
        alert("Account created successfully!");
        router.push("/"); 
        window.location.reload(); 
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#060a18] px-4 py-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-lg w-full space-y-8 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-slate-800"
            >
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl mb-4 text-[#3071b6]">
                        <ShieldCheck size={32} />
                    </div>
                    <h2 className="text-3xl font-black dark:text-white">Create Account</h2>
                    <p className="text-gray-500 mt-2">Join LumenSoft and start your journey today</p>
                </div>

                <form className="mt-8 space-y-5" onSubmit={handleRegister}>
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-bold text-center">
                            {error}
                        </div>
                    )}
                    
                    <div className="grid grid-cols-1 gap-5">
                        {/* Full Name */}
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 border-transparent focus:border-[#3071b6] focus:bg-white dark:focus:bg-slate-700 rounded-2xl outline-none transition-all dark:text-white"
                                    placeholder="John Doe"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 border-transparent focus:border-[#3071b6] focus:bg-white dark:focus:bg-slate-700 rounded-2xl outline-none transition-all dark:text-white"
                                    placeholder="john@example.com"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>

                        {/* Password Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 border-transparent focus:border-[#3071b6] focus:bg-white dark:focus:bg-slate-700 rounded-2xl outline-none transition-all dark:text-white"
                                        placeholder="••••••••"
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Confirm</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="password"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 border-transparent focus:border-[#3071b6] focus:bg-white dark:focus:bg-slate-700 rounded-2xl outline-none transition-all dark:text-white"
                                        placeholder="••••••••"
                                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 py-2">
                        <input type="checkbox" required className="w-4 h-4 rounded border-gray-300 text-[#3071b6]" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            I agree to the <button type="button" className="text-[#3071b6] font-bold">Terms & Conditions</button>
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 py-4 bg-[#3071b6] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-500/20 group"
                    >
                        Create My Account
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                </form>

                <p className="text-center text-gray-600 dark:text-gray-400">
                    Already have an account? {' '}
                    <Link href="/login" className="font-black text-[#3071b6] hover:underline uppercase tracking-tighter">
                        Sign In
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default RegisterPage;