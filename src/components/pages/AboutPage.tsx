'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Users, GraduationCap, Heart, Trophy, Target, Lightbulb, Sparkles, Clock, Star, ChevronRight, Quote, Eye, User } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const images = [
  {
    src: "/about/about-school-2.jpg",
    alt: "Rainbow School Modern Building"
  },
  {
    src: "/about/school-campus-2.jpg",
    alt: "Rainbow School Campus View"
  },
  {
    src: "/about/school-garden.jpg",
    alt: "Rainbow School Garden"
  }
];

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section with Building Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 font-patrick text-center">
            About Us
          </h1>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[30%] right-[20%] w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl"
              >
                <motion.p 
                  className="text-xl text-white/90 font-architect leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.7,
                  }}
                >
                  Building tomorrow's leaders through holistic education in a modern learning environment surrounded by nature, designed to inspire creativity and foster growth.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* School History and Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-patrick">Our Legacy</h2>
                <p className="text-gray-700 leading-relaxed mb-6 font-architect text-lg">
                  Rainbow School is a recognized landmark in its pursuit of excellence in education, holistic growth of children and human excellence. The sole aim of the school is to give children a proper sense of identity, built on intellectual curiosity, independence and inclusivity.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Vision and Approach Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/95 backdrop-blur-sm border-green-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-green-50">
                    <Eye className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-patrick">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed font-architect">
                      Rainbow School was established with a vision to provide holistic education that nurtures both academic excellence and character development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-50">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-patrick">Our Approach</h3>
                    <p className="text-gray-600 leading-relaxed font-architect">
                      Our school combines traditional educational values with innovative teaching methods, ensuring our students are well-prepared for the future.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* School Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-patrick">School Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Nurturing Environment",
                description: "Creating a safe and supportive space for learning and growth"
              },
              {
                icon: Lightbulb,
                title: "Creative Learning",
                description: "Fostering innovation and creative thinking in every subject"
              },
              {
                icon: Target,
                title: "Holistic Development",
                description: "Focusing on academic, social, and emotional growth"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-patrick">{item.title}</h3>
                <p className="text-gray-600 font-architect">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-patrick">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Mrs. Padma Subrahmanyam",
                role: "Director",
                image: "/about/director.jpg",
                description: "Leading with vision and dedication to transform education and nurture young minds."
              },
              {
                name: "Mr. Subrahmanyam",
                role: "Correspondent",
                image: "/about/correspondent.jpg",
                description: "Ensuring excellence in education through experienced administration and guidance."
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto w-full"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-[4/5] relative w-full max-h-[320px]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 font-patrick">{leader.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3 text-sm">{leader.role}</p>
                  <p className="text-gray-600 text-center font-architect text-sm">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-8 text-center font-architect max-w-3xl mx-auto">
            The school is completely under their purview and follows the tried and tested methodology of the teaching – learning process.
          </p>
        </motion.div>

        {/* Student Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-patrick">Student Profile</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">What Makes a Rainbow Student?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Curious Learner</p>
                      <p className="text-gray-600">Eager to explore and discover new knowledge</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Creative Thinker</p>
                      <p className="text-gray-600">Approaches problems with innovation and creativity</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Community Member</p>
                      <p className="text-gray-600">Contributes positively to the school community</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/about/students.jpg"
                  alt="Rainbow School Students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Parents as Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-patrick">Parents as Partners</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Parent Involvement</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-500 mr-2" />
                  <span>Parent-Teacher Association (PTA)</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-500 mr-2" />
                  <span>Regular Parent-Teacher Meetings</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-500 mr-2" />
                  <span>School Events and Celebrations</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-500 mr-2" />
                  <span>Volunteer Opportunities</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Communication Channels</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-500 mr-2" />
                  <span>Parent Portal</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-500 mr-2" />
                  <span>Weekly Newsletters</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-500 mr-2" />
                  <span>Mobile App Updates</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-purple-500 mr-2" />
                  <span>Direct Teacher Communication</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-patrick">Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Excellence",
                stat: "95%",
                description: "Students achieve above-average scores"
              },
              {
                title: "Student-Teacher Ratio",
                stat: "12:1",
                description: "Ensuring personal attention"
              },
              {
                title: "Extra-Curricular",
                stat: "30+",
                description: "Activities and clubs"
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{highlight.title}</h3>
                <p className="text-4xl font-bold text-purple-600 mb-2">{highlight.stat}</p>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-patrick">
            Join Our School Community
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards giving your child an exceptional education experience.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Schedule a Visit
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 