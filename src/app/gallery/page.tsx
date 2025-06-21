'use client';

import { useState, useRef, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Gallery data structure with size variations
const galleryItems = [
  {
    category: "Academic Life",
    items: [
      {
        id: 1,
        title: "Science Exhibition",
        description: "Students showcasing their innovative science projects during the annual science exhibition. Projects ranged from renewable energy solutions to biotechnology innovations.",
        image: "/images/gallery/science-exhibition.jpg",
        date: "March 2024",
        size: "large" // large item
      },
      {
        id: 2,
        title: "Library Session",
        description: "Students engaging in our well-equipped library, fostering a love for reading and research.",
        image: "/images/gallery/library.jpg",
        date: "February 2024",
        size: "small" // small item
      }
    ]
  },
  {
    category: "Sports",
    items: [
      {
        id: 3,
        title: "Annual Sports Meet",
        description: "Students participating in various athletic events during our annual sports meet. The event showcased incredible talent and sportsmanship.",
        image: "/images/gallery/sports-meet.jpg",
        date: "January 2024",
        size: "medium" // medium item
      },
      {
        id: 4,
        title: "Basketball Championship",
        description: "Our school basketball team competing in the inter-school championship finals.",
        image: "/images/gallery/basketball.jpg",
        date: "December 2023",
        size: "large" // large item
      }
    ]
  },
  {
    category: "Cultural Events",
    items: [
      {
        id: 5,
        title: "Annual Day Celebration",
        description: "Students performing traditional dances during the annual day celebrations, showcasing India's rich cultural heritage.",
        image: "/images/gallery/annual-day.jpg",
        date: "November 2023",
        size: "large" // large item
      },
      {
        id: 6,
        title: "Music Concert",
        description: "Our school orchestra performing at the winter music concert, demonstrating exceptional musical talent.",
        image: "/images/gallery/music-concert.jpg",
        date: "December 2023",
        size: "small" // small item
      }
    ]
  },
  {
    category: "School Life",
    items: [
      {
        id: 7,
        title: "Campus Life",
        description: "Students enjoying their break time in our beautiful campus grounds.",
        image: "/images/gallery/campus-life.jpg",
        date: "February 2024",
        size: "medium" // medium item
      },
      {
        id: 8,
        title: "Art Exhibition",
        description: "Showcasing creative artworks by our talented students during the art exhibition.",
        image: "/images/gallery/art-exhibition.jpg",
        date: "March 2024",
        size: "large" // large item
      }
    ]
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [imageOrientation, setImageOrientation] = useState<'landscape' | 'portrait' | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isSwiping = useRef(false);

  const allImages = galleryItems.flatMap(category => category.items);
  const currentImage = allImages.find(img => img.id === selectedImage);

  const handleImageLoad = (image: HTMLImageElement) => {
    if (image.naturalWidth > image.naturalHeight) {
      setImageOrientation('landscape');
    } else {
      setImageOrientation('portrait');
    }
  };

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = allImages.findIndex(img => img.id === selectedImage);
    const previousIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[previousIndex].id);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = allImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % allImages.length;
    setSelectedImage(allImages[nextIndex].id);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isSwiping.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!isSwiping.current) return;
    
    isSwiping.current = false;
    
    if (touchStartX.current === null || touchEndX.current === null) return;

    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50; // Minimum distance for swipe to register

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handlePrevious(); // Swipe right for previous
      } else {
        handleNext(); // Swipe left for next
      }
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-patrick">
            School Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto architect">
            Capturing moments and memories from our vibrant school life
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <Button
            variant={currentCategory === null ? "default" : "outline"}
            onClick={() => setCurrentCategory(null)}
            className="rounded-full"
          >
            All
          </Button>
          {galleryItems.map(category => (
            <Button
              key={category.category}
              variant={currentCategory === category.category ? "default" : "outline"}
              onClick={() => setCurrentCategory(category.category)}
              className="rounded-full"
            >
              {category.category}
            </Button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryItems
            .filter(category => currentCategory === null || category.category === currentCategory)
            .flatMap(category => category.items)
            .map(item => (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                className={cn(
                  "cursor-pointer group relative rounded-xl overflow-hidden",
                  {
                    'row-span-2 col-span-2': item.size === 'large',
                    'row-span-1 col-span-1': item.size === 'small',
                    'row-span-2 col-span-1': item.size === 'medium'
                  }
                )}
                onClick={() => setSelectedImage(item.id)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={item.size === 'large' ? '(max-width: 640px) 100vw, 50vw' : '(max-width: 640px) 100vw, 25vw'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Updated Full Screen Image View with touch handlers */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 z-50 bg-white/80 hover:bg-white rounded-full p-2 backdrop-blur-sm transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6 text-gray-800" />
                </button>

                {/* Navigation Buttons - Only visible on desktop */}
                <div className="hidden md:block">
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white rounded-full p-2 backdrop-blur-sm transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevious();
                    }}
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white rounded-full p-2 backdrop-blur-sm transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </div>

                {/* Mobile Swipe Indicator - Only visible when starting to swipe */}
                {isSwiping.current && (
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none md:hidden">
                    <div className="w-12 h-12 bg-white/20 rounded-full ml-4 flex items-center justify-center">
                      <ChevronLeft className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full mr-4 flex items-center justify-center">
                      <ChevronRight className="h-8 w-8 text-white" />
                    </div>
                  </div>
                )}

                {currentImage && (
                  <div className={cn(
                    "flex flex-col lg:flex",
                    {
                      'lg:flex-col': imageOrientation === 'landscape',
                      'lg:flex-row': imageOrientation === 'portrait'
                    },
                    'h-full max-h-[85vh]'
                  )}>
                    {/* Image Container */}
                    <div className={cn(
                      "relative",
                      {
                        'h-[40vh] lg:h-[50vh]': imageOrientation === 'landscape',
                        'h-[45vh] lg:w-1/2 lg:h-[85vh]': imageOrientation === 'portrait'
                      }
                    )}>
                      <Image
                        src={currentImage.image}
                        alt={currentImage.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        onLoadingComplete={handleImageLoad}
                        priority
                      />
                    </div>

                    {/* Content Container */}
                    <div className={cn(
                      "flex flex-col p-4 md:p-6",
                      {
                        'flex-1': imageOrientation === 'landscape',
                        'lg:w-1/2': imageOrientation === 'portrait'
                      },
                      'overflow-y-auto'
                    )}>
                      <div className="space-y-4">
                        {/* Category Tag */}
                        <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {galleryItems.find(cat => 
                            cat.items.some(item => item.id === currentImage.id)
                          )?.category}
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-patrick">
                          {currentImage.title}
                        </h2>

                        {/* Date */}
                        <p className="text-sm text-gray-500 font-medium">
                          {currentImage.date}
                        </p>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed architect text-sm md:text-base">
                          {currentImage.description}
                        </p>

                        {/* Additional Details or Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs md:text-sm">
                            School Life
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs md:text-sm">
                            Memories
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default GalleryPage; 