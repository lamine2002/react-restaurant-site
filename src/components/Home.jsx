import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { motion } from 'framer-motion';

function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f5f5dc] text-[#5b3a29]">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat h-[60vh] md:h-[95vh] flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: "url('/asset/image_section_principal.jpg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative z-10 text-center text-white space-y-4"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold">Plongez dans notre Cuisine Exquise</h1>
                        <p className="text-lg md:text-xl">
                            Découvrez des saveurs raffinées et un service impeccable dans notre restaurant renommé.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="#reservation"
                                className="inline-flex items-center justify-center rounded-md bg-[#556b2f] px-6 py-3 text-lg font-medium text-white shadow-sm transition-colors hover:bg-[#6b8e23] focus:outline-none focus:ring-2 focus:ring-[#556b2f] focus:ring-offset-2"
                            >
                                Réservez une Expérience Culinaire
                            </a>
                            <a
                                href="#menu"
                                className="inline-flex items-center justify-center rounded-md border border-[#556b2f] px-6 py-3 text-lg font-medium text-[#556b2f] transition-colors hover:bg-[#556b2f] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#556b2f] focus:ring-offset-2"
                            >
                                Découvrir le Menu
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* Section des plats les plus populaires */}
                <section className="py-12 md:py-24 bg-gradient-to-r from-[#f7f7f7] to-[#e2e2e2]">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#5b3a29]">Nos Plats les Plus Populaires</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[1, 2, 3].map((num) => (
                                <motion.div
                                    key={num}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.09 }}
                                    className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition-all duration-300"
                                >
                                    <img
                                        src={`/asset/plat${num}.jpg`}
                                        alt={`Plat ${num}`}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                                    <div className="absolute bottom-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold">Plat {num}</h3>
                                        <p className="mt-2">Description du plat {num}.</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <a
                                href="#menu"
                                className="inline-flex items-center justify-center rounded-md bg-[#556b2f] px-8 py-4 text-xl font-bold text-white shadow-lg transition-transform transform hover:-translate-y-1 hover:bg-[#6b8e23] focus:outline-none focus:ring-2 focus:ring-[#556b2f] focus:ring-offset-2"
                            >
                                Voir Nos Différents Menus
                            </a>
                        </div>
                    </div>
                </section>


                {/* Section des chefs cuisiniers */}
                <section className="py-12 md:py-24 bg-gradient-to-l from-[#f1f1f1] to-[#d9d9d9]">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#5b3a29]">Nos Chefs Cuisiniers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[1, 2, 3, 4].map((num) => (
                                <motion.div
                                    key={num}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.1 }}
                                    className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition-all duration-300"
                                >
                                    <img
                                        src={`/asset/chef${num}.jpg`}
                                        alt={`Chef ${num}`}
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                                    <div className="absolute bottom-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold">Chef {num}</h3>
                                        <p className="mt-2">Description du chef {num}.</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Section du menu et des réservations */}
                <section id="menu" className="py-12 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <div>
                                    <h2 className="text-3xl font-bold">Découvrez Notre Menu</h2>
                                    <p className="mt-4">
                                        Plongez dans une variété de plats préparés avec les ingrédients les plus frais et les techniques culinaires les plus fines. Chaque plat est une œuvre d'art créée pour satisfaire les papilles les plus exigeantes.
                                    </p>
                                    <a
                                        href="#reservation"
                                        className="inline-flex items-center justify-center rounded-md bg-[#556b2f] px-6 py-3 text-lg font-medium text-white mt-6 transition-colors hover:bg-[#6b8e23] focus:outline-none focus:ring-2 focus:ring-[#556b2f] focus:ring-offset-2"
                                    >
                                        Réservez Maintenant
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src="/asset/restaurant-5521372_1280.jpg"
                                    alt="Menu Image"
                                    className="rounded-lg shadow-md w-full"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section des avis */}
                <section className="py-12 md:py-24 bg-[#f7f7f7]">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl font-bold text-center mb-8">Ce Que Disent Nos Clients</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <p className="text-lg italic">
                                    "Le meilleur restaurant en ville! La nourriture est délicieuse et le service est impeccable."
                                </p>
                                <p className="mt-4 font-bold">- Client 1</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <p className="text-lg italic">
                                    "Une expérience culinaire incroyable. Chaque plat était une œuvre d'art."
                                </p>
                                <p className="mt-4 font-bold">- Client 2</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section des contacts */}
                <section id="reservation" className="py-12 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold">Réservez une Table</h2>
                            <p className="mt-4">
                                Contactez-nous pour réserver une table et vivre une expérience culinaire exceptionnelle.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-md bg-[#556b2f] px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-[#6b8e23] focus:outline-none focus:ring-2 focus:ring-[#556b2f] focus:ring-offset-2"
                                >
                                    Réserver Maintenant
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
