"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";
import {
    Mail, Phone, Menu, X, Sun, Moon,
    UserCircle, ChevronDown, LogOut, Settings
} from 'lucide-react';

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const [user, setUser] = useState({ name: "Rifat", isLoggedIn: true });

    // Hydration error 
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <header className="w-full sticky top-0 z-50 shadow-sm">
            {/* Top Header - Info */}
            <div className="bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-300 py-2 px-4 md:px-24 flex justify-between items-center text-xs md:text-sm transition-colors border-b dark:border-slate-800">
                <div className="flex gap-4 lg:gap-10">
                    <div className="flex items-center gap-1">
                        <Phone className='text-green-600' size={14} />
                        <span>+8801676-347987</span>
                    </div>
                    <div className="hidden md:flex items-center gap-1">
                        <Mail className='text-orange-500' size={14} />
                        <span>contactus@lumensofttech.com</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 border rounded-md"
                    >
                        {mounted && (theme === "dark" ? "☀️ Light" : "🌙 Dark")}
                    </button>

                    {/* User Section (Login/Register or Profile Dropdown) */}
                    <div className="relative">
                        {user.isLoggedIn ? (
                            <div
                                className="flex items-center gap-1 cursor-pointer font-medium text-blue-600 dark:text-blue-400 hover:opacity-80 transition-all"
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                            >
                                <UserCircle size={20} />
                                <span className="hidden sm:inline">{user.name}</span>
                                <ChevronDown size={14} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                            </div>
                        ) : (
                            <div className="flex gap-3 items-center">
                                <Link href="/login" className="hover:text-white hover:bg-gray-900 border border-blue-700  px-3 py-2 rounded-md btn font-semibold">Login</Link>
                            
                                <Link href="/register" className="hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md btn border border-blue-700 font-semibold">Register</Link>
                            </div>
                        )}

                        {/* Profile Dropdown Menu */}
                        {isProfileOpen && user.isLoggedIn && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-md shadow-lg py-2 z-50">
                                <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white">
                                    <UserCircle size={16} /> Profile
                                </Link>
                                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white">
                                    <Settings size={16} /> Settings
                                </Link>
                                <hr className="my-1 border-gray-200 dark:border-slate-700" />
                                <button
                                    onClick={() => setUser({ ...user, isLoggedIn: false })}
                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-slate-700 text-left"
                                >
                                    <LogOut size={16} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-[#060a18] px-4 md:px-24 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-[#4b99ec]">
                    Lumen<span className="text-[#0dc4d4]">Soft</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-8 font-medium text-white">
                    <li><Link href="/" className="hover:text-[#0dc4d4] transition">Home</Link></li>
                    <li><Link href="/about" className="hover:text-[#0dc4d4] transition">About us</Link></li>
                    <li><Link href="/services" className="hover:text-[#0dc4d4] transition">Services</Link></li>
                    <li><Link href="/items" className="text-blue-400 font-bold hover:text-blue-300">Items/List</Link></li>
                    <li><Link href="/blog" className="hover:text-[#0dc4d4] transition">Blog</Link></li>
                    <li><Link href="/contact" className="hover:text-[#0dc4d4] transition">Contact us</Link></li>
                </ul>

                {/* CTA Button */}
                <Link href="/contact" className="hidden lg:block bg-[#7f8996] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
                    Free Consultation
                </Link>

                {/* Mobile Menu Button */}
                <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Sidebar/Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl flex flex-col p-6 space-y-4 lg:hidden z-[60] border-t dark:border-slate-800">
                        <Link href="/" className="dark:text-white" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/about" className="dark:text-white" onClick={() => setIsOpen(false)}>About us</Link>
                        <Link href="/services" className="dark:text-white" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/items" className="text-blue-600 font-bold" onClick={() => setIsOpen(false)}>Items</Link>
                        <Link href="/contact" className="bg-[#3071b6] text-white p-3 rounded-lg text-center font-bold" onClick={() => setIsOpen(false)}>Get Consultation</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navber;