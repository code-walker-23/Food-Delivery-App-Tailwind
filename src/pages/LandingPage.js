import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4 md:px-8">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 70 }}
        >
          Welcome to{" "}
          <span className="text-orange-300">Suman Food and Beverages</span>
        </motion.h1>
        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 70 }}
        >
          Discover the finest selection of food and drinks, crafted to
          perfection. Your culinary adventure starts here!
        </motion.p>
        {/* Button */}
        <Link to="/main">
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-110"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            Explore
          </motion.button>
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-orange-300/20 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-orange-300/20 to-transparent opacity-80"></div>
        {/* Add subtle, animated elements */}
        <motion.div
          className="absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-transparent via-orange-300 to-transparent blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-gradient-to-l from-transparent via-orange-300 to-transparent blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
