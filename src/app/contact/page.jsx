"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-[#060a18] overflow-hidden">
            <div className="container mx-auto px-6 md:px-24">

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Side: Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 space-y-8"
                    >
                        <div>
                            <h4 className="text-[#3071b6] font-bold tracking-widest uppercase mb-4">Get In Touch</h4>
                            <h2 className="text-4xl font-black dark:text-white mb-6">Let's Talk About Your <span className="text-[#3071b6]">Project</span></h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Our expert team is ready to turn your ideas into reality.
                                Feel free to reach out to us with any inquiries.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Contact Card */}
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm border border-gray-100 dark:border-slate-700 transition-transform hover:translate-x-2">
                                <div className="w-12 h-12 bg-[#3071b6]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Phone className="text-[#3071b6]" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Call Us</p>
                                    <p className="text-lg font-bold dark:text-white">+880 1234 567 890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm border border-gray-100 dark:border-slate-700 transition-transform hover:translate-x-2">
                                <div className="w-12 h-12 bg-[#3071b6]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Mail className="text-[#3071b6]" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Email Us</p>
                                    <p className="text-lg font-bold dark:text-white">info@lumensoft.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm border border-gray-100 dark:border-slate-700 transition-transform hover:translate-x-2">
                                <div className="w-12 h-12 bg-[#3071b6]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="text-[#3071b6]" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold">Our Office</p>
                                    <p className="text-lg font-bold dark:text-white">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Support Box */}
                        <div className="p-6 bg-[#3071b6] rounded-[2rem] text-white shadow-xl shadow-blue-500/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock size={24} />
                                <span className="font-bold">Support Hours</span>
                            </div>
                            <p className="text-blue-100 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p className="text-blue-100 text-sm mt-1">Weekend: Emergency Only</p>
                        </div>
                    </motion.div>

                    {/* Right Side: Modern Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-slate-700">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold dark:text-gray-300 ml-1">Your Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-transparent focus:border-[#3071b6] focus:bg-white outline-none transition-all dark:text-white shadow-inner" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold dark:text-gray-300 ml-1">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-transparent focus:border-[#3071b6] focus:bg-white outline-none transition-all dark:text-white shadow-inner" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold dark:text-gray-300 ml-1">Subject</label>
                                    <input type="text" placeholder="Project Inquiry" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-transparent focus:border-[#3071b6] focus:bg-white outline-none transition-all dark:text-white shadow-inner" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold dark:text-gray-300 ml-1">Your Message</label>
                                    <textarea rows="5" placeholder="Tell us more about your needs..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-transparent focus:border-[#3071b6] focus:bg-white outline-none transition-all dark:text-white shadow-inner resize-none"></textarea>
                                </div>

                                <button className="w-full bg-[#3071b6] text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
                                    Send Your Message
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;