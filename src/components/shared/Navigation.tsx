'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Home, Users, UserCheck, GraduationCap, Camera, Calendar, Phone, User, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'about', label: 'About', icon: Users, href: '/about' },
    { id: 'admissions', label: 'Admissions', icon: UserCheck, href: '/admissions' },
    { id: 'academics', label: 'Academics', icon: GraduationCap, href: '/academics' },
    { id: 'gallery', label: 'Gallery', icon: Camera, href: '/gallery' },
    { id: 'events', label: 'Events', icon: Calendar, href: '/events' },
    { id: 'contact', label: 'Contact', icon: Phone, href: '/contact' }
  ];

  // Add preloading for routes
  useEffect(() => {
    navItems.forEach(item => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = item.href;
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-lg border-b border-pink-100 h-16"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center cursor-pointer -mt-2"
            >
              <div className="relative w-44 aspect-[3/2]">
                <Image
                  src="/rainbowschoollogo.png"
                  alt="Rainbow School Logo"
                  fill
                  sizes="(max-width: 176px) 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  prefetch={true}
                  className={cn(
                    "flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                    pathname === item.href
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                  )}
                  >
                  <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                </Link>
              );
            })}
          </div>

            {/* Portal Links */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-300/50">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 rounded-full border-pink-200 hover:bg-pink-100 hover:text-pink-700 hover:border-pink-300"
                  >
                    <User className="w-4 h-4" />
                    Portals
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm">
                  <Link href="/student-portal">
                    <DropdownMenuItem className="hover:bg-pink-50 focus:bg-pink-50 cursor-pointer">
                      <User className="w-4 h-4 mr-2 text-pink-500" />
                      Student Portal
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/teacher-portal">
                    <DropdownMenuItem className="hover:bg-pink-50 focus:bg-pink-50 cursor-pointer">
                      <GraduationCap className="w-4 h-4 mr-2 text-purple-500" />
                      Teacher Portal
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-pink-100 hover:text-pink-700"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white/95 backdrop-blur-md border-pink-100">
                <div className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link key={item.id} href={item.href}>
                        <Button
                          variant={isActive ? "default" : "ghost"}
                          className={`
                            w-full justify-start rounded-full
                            ${isActive 
                              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600' 
                              : 'hover:bg-pink-50 hover:text-pink-700'
                            }
                          `}
                          size="sm"
                        >
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.label}
                        </Button>
                      </Link>
                    );
                  })}
                  
                  <div className="border-t border-pink-100 pt-4 mt-4">
                    <p className="text-sm font-medium mb-2 text-gray-600">Portals</p>
                    <div className="space-y-2">
                      <Link href="/student-portal">
                        <Button
                          variant="outline"
                          className="w-full justify-start rounded-full hover:bg-pink-50 hover:text-pink-700 hover:border-pink-300"
                          size="sm"
                        >
                          <User className="w-4 h-4 mr-2 text-pink-500" />
                          Student Portal
                        </Button>
                      </Link>
                      <Link href="/teacher-portal">
                        <Button
                          variant="outline"
                          className="w-full justify-start rounded-full hover:bg-pink-50 hover:text-pink-700 hover:border-pink-300"
                          size="sm"
                        >
                          <GraduationCap className="w-4 h-4 mr-2 text-purple-500" />
                          Teacher Portal
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 