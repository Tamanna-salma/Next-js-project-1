"use client";
import React from 'react';
import Link from 'next/link';
// import { 
//     Facebook, Twitter, Linkedin, Github, 
//     Mail, Phone, MapPin, ArrowRight 
// } from 'lucide-react';
import { Facebook, X, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#060a18] text-white pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 md:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-black text-[#4b99ec]">
                            Lumen<span className="text-[#0dc4d4]">Soft</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Empowering businesses with cutting-edge software solutions. From web apps to enterprise systems, we build the future today.
                        </p>
                        <div className="flex gap-4">
    {[
        { 
            Icon: Facebook, 
            link: "https://web.facebook.com/?_rdc=1&_rdr#", 
            color: "hover:bg-blue-600" 
        },
        { 
            Icon: X, 
            link: "https://x.com/", 
            color: "hover:bg-black" 
        },
        { 
            Icon: Linkedin, 
            link: "https://www.linkedin.com/in/ummeysalma912a31317/", 
            color: "hover:bg-blue-700" 
        },
        { 
            Icon: Instagram, 
            link: "https://www.instagram.com/", 
            color: "hover:bg-pink-600" 
        }
    ].map((item, i) => (
        <a 
            key={i} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`p-2 bg-slate-800 rounded-lg ${item.color} transition-all text-gray-300 hover:text-white shadow-lg`}
        >
            <item.Icon size={20} />
        </a>
    ))}
</div>
                    </div>

                    {/* Quick Links */}
                    <div>
    <h4 className="text-lg font-bold mb-6 border-b-2 border-[#3071b6] inline-block">Quick Links</h4>
    <ul className="space-y-4">
        {[
            { name: 'About Us', path: '/about' },
            { name: 'Our Services', path: '/services' },
            { name: 'Recent Projects', path: '/portfolio' },
            { name: 'Contact Support', path: '/contact' }
        ].map((link) => (
            <li key={link.name}>
                <Link 
                    href={link.path} 
                    className="text-gray-400 hover:text-[#0dc4d4] transition-colors flex items-center gap-2 group text-sm"
                >
                    <ArrowRight 
                        size={14} 
                        className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" 
                    />
                    {link.name}
                </Link>
            </li>
        ))}
    </ul>
</div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b-2 border-[#3071b6] inline-block">Our Expertise</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'UI/UX Design', 'Cloud Solutions', 'Digital Marketing'].map((service) => (
                                <li key={service} className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b-2 border-[#3071b6] inline-block">Contact Us</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-[#0dc4d4] shrink-0" size={18} />
                                <span className="text-gray-400">Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-[#0dc4d4] shrink-0" size={18} />
                                <span className="text-gray-400">+880 1895 73184</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-[#0dc4d4] shrink-0" size={18} />
                                <span className="text-gray-400">contact@lumensoft.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {currentYear} <span className="text-white font-bold">LumenSoft Technology</span>. All Rights Reserved.
                    </p>
                    <div className="flex gap-8 text-xs text-gray-500">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;