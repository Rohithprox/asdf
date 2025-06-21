'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HandDrawnStar, HandDrawnCircle, WavyLine } from '../ui/svg-components';
import Footer from '../shared/Footer';

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
    {/* Hero Section */}
    <div className="relative overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 pt-32 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center relative">
          <motion.div
            className="absolute -top-10 left-1/4 text-yellow-400 opacity-60"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <HandDrawnStar className="w-12 h-12" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-6"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Rainbow School
          </motion.h1>
          
          <div className="relative h-24 mb-8">
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 w-[200%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <WavyLine className="w-full h-24 text-pink-400" />
            </motion.div>
          </div>
          
          <motion.p 
            className="text-2xl text-gray-700 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Where creativity meets learning in a world of endless possibilities!
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Our World
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-purple-400 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300">
              Watch Our Story
            </button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 text-blue-400 opacity-40"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <HandDrawnCircle className="w-16 h-16" />
      </motion.div>
    </div>

    {/* Features Section */}
    <div className="bg-white py-24">
      <div className="container mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-gray-800"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose Rainbow School?
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "✨", title: "Creative Learning", desc: "Innovative teaching methods that spark imagination", color: "purple" },
            { icon: "❤️", title: "Caring Community", desc: "A nurturing environment where every child thrives", color: "pink" },
            { icon: "🏆", title: "Excellence", desc: "Award-winning programs and outstanding results", color: "orange" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-${item.color}-400`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default HomePage; 