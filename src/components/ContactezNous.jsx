import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from "./Footer.jsx";
import { Navbar } from "./Navbar.jsx";

const ContactezNous = () => {
    return (
        <div>
            <Navbar />
            <section id="contact" className="py-12 md:py-24 bg-gradient-to-r from-[#f5f5f5] to-[#e2e2e2]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-[#5b3a29]">Contactez Nous</h2>
                        <p className="text-lg text-gray-700 mt-4">Nous serions ravis de vous entendre. Que ce soit pour une réservation, une question ou un commentaire, n'hésitez pas à nous contacter.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-lg shadow-lg p-8"
                            >
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Nom</label>
                                            <input
                                                type="text"
                                                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">Message</label>
                                            <textarea
                                                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                rows="4"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="mt-8 text-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            className="inline-flex items-center justify-center rounded-md bg-[#556b2f] px-8 py-4 text-xl font-bold text-white shadow-lg transition-transform transform hover:-translate-y-1 hover:bg-[#6b8e23] focus:outline-none focus:ring-2 focus:ring-[#556b2f] focus:ring-offset-2"
                                        >
                                            Envoyer
                                        </motion.button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                        <div className="order-1 md:order-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src="/asset/food-2206511_1280.jpg"
                                    alt="Contactez Nous"
                                    className="w-full h-[80vh] object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ContactezNous;
