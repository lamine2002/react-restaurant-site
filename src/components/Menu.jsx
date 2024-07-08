import { useState } from 'react';
import { motion } from 'framer-motion';
import {Navbar} from "./Navbar.jsx";
import {Footer} from "./Footer.jsx";

const Menu = () => {
    // eslint-disable-next-line no-unused-vars
    const [categories, setCategories] = useState([
        {
            id: 1,
            title: 'Entrées',
            items: [
                {
                    id: 1,
                    name: 'Bruschetta',
                    description: 'Freshly toasted bread topped with diced tomatoes, basil, garlic, and olive oil.',
                    price: 8.99,
                    image: 'asset/bruschetta.jpg',
                },
                {
                    id: 2,
                    name: 'Calamari Fritti',
                    description: 'Crispy fried calamari rings served with a marinara dipping sauce.',
                    price: 9.99,
                    image: 'asset/calamari-fritti.jpg',
                },
                {
                    id: 3,
                    name: 'Soup of the Day',
                    description: 'A rotating selection of fresh and flavorful soups.',
                    price: 6.99,
                    image: 'asset/tomato-soup.jpg',
                },
            ],
        },
        {
            id: 2,
            title: 'Plats principaux',
            items: [
                {
                    id: 4,
                    name: 'Spaghetti Carbonara',
                    description: 'Classic Italian pasta dish with eggs, pancetta, Parmesan cheese, and black pepper.',
                    price: 14.99,
                    image: 'asset/carbonara.jpg',
                },
                {
                    id: 5,
                    name: 'Grilled Salmon',
                    description: 'Fresh salmon fillet seasoned with herbs and spices, grilled to perfection.',
                    price: 18.99,
                    image: 'asset/grilled-salmon.jpg',
                },
                {
                    id: 6,
                    name: 'Chicken Piccata',
                    description: 'Thinly sliced chicken breasts sautéed in a lemon-caper sauce.',
                    price: 16.99,
                    image: 'asset/Chicken-Piccata.jpg',
                },
            ],
        },
        {
            id: 3,
            title: 'Desserts',
            items: [
                {
                    id: 7,
                    name: 'Tiramisu',
                    description: 'Classic Italian dessert made with espresso-soaked ladyfingers, mascarpone cheese, and cocoa powder.',
                    price: 7.99,
                    image: 'asset/i196570-tiramisu-simple.jpg',
                },
                {
                    id: 8,
                    name: 'Chocolate Lava Cake',
                    description: 'Warm chocolate cake with a molten chocolate center.',
                    price: 8.99,
                    image: 'asset/updated-lava-cakes7.jpg',
                },
                {
                    id: 9,
                    name: 'Gelato',
                    description: 'A variety of flavors of homemade Italian gelato.',
                    price: 5.99,
                    image: 'asset/Chocolate-Gelato-Recipe.jpg',
                },
            ],
        },
    ]);

    const [activeCategory, setActiveCategory] = useState(1);

    const handleCategoryChange = (id) => {
        setActiveCategory(id);
    };

    return (
        <div>

            <Navbar />

            <div className="mx-auto max-w-7xl">
                {/* Restaurant Logo */}


                {/* Menu Categories */}
                <div className="flex flex-wrap justify-center my-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={
                                `ml-4 text-lg font-bold px-4 py-2 rounded-md ${
                                    activeCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white' 
                                }`
                            }

                            onClick={() => handleCategoryChange(category.id)}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Menu Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.find((category) => category.id === activeCategory).items.map(
                        (item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                <img src={item.image} alt={item.name} className="w-full h-72 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                                    <p className="text-gray-600 mb-2">{item.description}</p>
                                    <span className="text-green-500 font-bold">${item.price}</span>
                                </div>
                            </motion.div>
                        )
                    )}
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default Menu;

