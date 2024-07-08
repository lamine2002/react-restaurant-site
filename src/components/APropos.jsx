import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from "./Footer.jsx";
import { Navbar } from "./Navbar.jsx";

const APropos = () => {
    return (
        <div>
            <Navbar />
            <section id="about" className="py-12 md:py-24 bg-gradient-to-r from-[#f7f7f7] to-[#e2e2e2]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-4xl font-extrabold text-[#5b3a29]">À Propos de Notre Restaurant</h2>
                            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                                Bienvenue chez [Nom de votre restaurant], où la passion culinaire rencontre l'art de recevoir. Nous sommes fiers de vous offrir une expérience gastronomique inoubliable, inspirée par des ingrédients locaux de première qualité et une créativité sans limite.
                            </p>
                            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                                Notre équipe de chefs talentueux et passionnés crée des plats qui captivent les sens et éveillent les papilles. Chaque repas chez [Nom de votre restaurant] est une célébration de la cuisine raffinée, servie dans une ambiance chaleureuse et accueillante.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-6 bg-[#556b2f] hover:bg-[#6b8e23] focus:outline-none focus:ring-2 focus:ring-[#556b2f] focus:ring-offset-2 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
                            >
                                Découvrez Notre Menu
                            </a>
                        </div>
                        <div className="order-1 md:order-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src="/asset/image_apropos.jpg"
                                    alt="À Propos de Notre Restaurant"
                                    className="w-full h-auto object-cover"
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

export default APropos;
