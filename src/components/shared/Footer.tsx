'use client';

import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Rainbow', href: '/about' },
    { label: 'Beyond Academics', href: '/academics' },
    { label: 'News & Articles', href: '/news' },
    { label: 'Contact Us', href: '/contact' },
    { label: "FAQ's", href: '/faqs' },
    { label: 'OASIS', href: '/oasis' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Contact Information - Left column on desktop */}
          <div className="space-y-4 pt-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-patrick border-b-2 border-pink-200 pb-2 inline-block">Have a Question?</h3>
            <div className="space-y-3">
              <motion.div 
                className="flex items-start gap-2 text-gray-600"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <p className="text-base">
                  Activity Village<br />
                  Kalivelapalem Road<br />
                  Dhanalakshmipuram Via<br />
                  Nellore Rural, S.P.S.R Nellore District<br />
                  Andhra Pradesh - PIN 524346
                </p>
              </motion.div>
              
              <motion.a 
                href="mailto:mail@rainbowschoolnellore.com"
                className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-pink-500" />
                <span className="text-base">mail@rainbowschoolnellore.com</span>
              </motion.a>

              {['+91 9492400555', '+91 9490716961'].map((phone, index) => (
                <motion.a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-pink-500" />
                  <span className="text-base">{phone}</span>
                </motion.a>
              ))}
            </div>
          </div>

           {/* Quick Links - Center column on desktop, side by side on mobile */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
            {/* Quick Links - Maintain 2 columns on mobile, single column on desktop */}
            <div className="pt-1">
              <div className="block">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-patrick border-b-2 border-pink-200 pb-2 inline-block">Quick Links</h3>
              </div>
              <ul className="space-y-2 lg:flex lg:flex-col">
                {quickLinks.map((link) => (
                  <motion.li key={link.label} whileHover={{ x: 5 }}>
                    <Link 
                      href={link.href}
                      className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors text-base group"
                    >
                      <ChevronRight className="w-4 h-4 text-pink-400 group-hover:text-pink-500" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Connect With Us - Right side on mobile, but will move to separate column on desktop */}
            <div className="lg:hidden">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-patrick border-b-2 border-pink-200 pb-2 inline-block">Connect With Us</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook', color: 'bg-blue-500' },
                  { icon: Twitter, href: '#', label: 'Twitter', color: 'bg-sky-500' },
                  { icon: Instagram, href: '#', label: 'Instagram', color: 'bg-pink-500' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'bg-blue-700' }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`flex items-center gap-2 p-2 rounded-lg ${social.color} text-white hover:opacity-90 transition-opacity`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Connect With Us - Right column on desktop */}
          <div className="hidden lg:flex lg:flex-col lg:items-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-patrick border-b-2 border-pink-200 pb-2 inline-block">Connect With Us</h3>
            <div className="grid grid-cols-1 gap-3 w-full lg:px-4 lg:gap-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook', color: 'bg-blue-500' },
                { icon: Twitter, href: '#', label: 'Twitter', color: 'bg-sky-500' },
                { icon: Instagram, href: '#', label: 'Instagram', color: 'bg-pink-500' },
                { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'bg-blue-700' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`flex items-center justify-center gap-2 p-2 rounded-lg ${social.color} text-white hover:opacity-90 transition-opacity lg:w-56 lg:mx-auto lg:text-base`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <social.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-base flex items-center justify-center gap-1">
            © {currentYear} Rainbow School All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
