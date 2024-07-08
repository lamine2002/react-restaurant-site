import React from 'react';
import { motion } from 'framer-motion';
import {Footer} from "./Footer.jsx";
import {Navbar} from "./Navbar.jsx";

const Reservation = () => {
    return (
        <div>
            <Navbar />
            <section className="py-12 md:py-24 bg-gradient-to-r from-[#f7f7f7] to-[#e2e2e2] bg-cover" style={{
                backgroundImage: "url('/asset/coffee-5495609_640.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
               height: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-4xl font-extrabold text-center mb-12 text-[#fff]">Réservez Votre Table</h2>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="p-8"
                        >
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nom</label>
                                        <input
                                            type="text"
                                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Prénom</label>
                                        <input
                                            type="text"
                                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                                        <input
                                            type="tel"
                                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">Date et Heure</label>
                                        <input
                                            type="datetime-local"
                                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                        Réserver Maintenant
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Reservation;
