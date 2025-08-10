import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Extend Window interface for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const Homepage = () => {
  const [feedSort, setFeedSort] = useState<'recent' | 'popular'>('recent');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Sample Instagram reels data (replace with actual reels from your Instagram)
  const instagramReels = {
    recent: [
      {
        id: 'C9XExample1',
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Recent+Reel+1',
        caption: 'Behind the scenes magic ✨',
        likes: 245,
        timestamp: '2 days ago'
      },
      {
        id: 'C9XExample2', 
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Recent+Reel+2',
        caption: 'Raw studio vibes 🎵',
        likes: 189,
        timestamp: '4 days ago'
      },
      {
        id: 'C9XExample3',
        type: 'video', 
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Recent+Reel+3',
        caption: 'Midnight creative sessions',
        likes: 312,
        timestamp: '1 week ago'
      },
      {
        id: 'C9XExample4',
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Recent+Reel+4',
        caption: 'Street sounds inspiration',
        likes: 156,
        timestamp: '1 week ago'
      },
      {
        id: 'C9XExample5',
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Recent+Reel+5',
        caption: 'Collaborative energy 🔥',
        likes: 278,
        timestamp: '2 weeks ago'
      },
      {
        id: 'C9XExample6',
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Recent+Reel+6',
        caption: 'Pure artistic expression',
        likes: 203,
        timestamp: '2 weeks ago'
      }
    ],
    popular: [
      {
        id: 'C9Popular1',
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Popular+Reel+1',
        caption: 'Viral moment that defined us 🌟',
        likes: 1240,
        timestamp: '3 weeks ago'
      },
      {
        id: 'C9Popular2',
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Popular+Reel+2',
        caption: 'The track that changed everything',
        likes: 987,
        timestamp: '1 month ago'
      },
      {
        id: 'C9Popular3',
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Popular+Reel+3',
        caption: 'Cultural fusion at its finest',
        likes: 856,
        timestamp: '3 weeks ago'
      },
      {
        id: 'C9Popular4',
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Popular+Reel+4',
        caption: 'Unexpected collaboration magic',
        likes: 743,
        timestamp: '2 months ago'
      },
      {
        id: 'C9Popular5',
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Popular+Reel+5',
        caption: 'Authentic street performance',
        likes: 692,
        timestamp: '1 month ago'
      },
      {
        id: 'C9Popular6',
        type: 'video',
        thumbnail: 'https://via.placeholder.com/400x600/1a1a1a/FEBE5D?text=Popular+Reel+6',
        caption: 'Breaking conventional boundaries',
        likes: 634,
        timestamp: '6 weeks ago'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23000000'/%3E%3C/svg%3E"
          >
            <source src="/premise-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#FEBE5D] leading-none">
              <span className="block">PREMISE</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-light max-w-3xl mx-auto">
              True Face of Indian Music
            </p>
            
            <div className="pt-6 md:pt-8">
              <motion.div
                className="flex flex-col items-center cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <div className="w-6 h-10 border-2 border-[#FEBE5D] rounded-full flex justify-center">
                  <motion.div
                    className="w-1 h-3 bg-[#FEBE5D] rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <motion.div
                  className="mt-3"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  <svg className="w-6 h-6 text-[#FEBE5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          >
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white relative z-10">
                Raw{' '}
                <span className="relative">
                  <span className="text-[#FEBE5D]">Moments</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FEBE5D] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </span>
              </h2>
              <div className="absolute top-0 right-0 text-6xl opacity-10 font-black text-[#FEBE5D] rotate-12 hidden lg:block">
                ♪
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light italic">
              Unfiltered creativity, authentic vibes, real stories from our musical journey
            </p>
          </motion.div>


          {/* Creative Reels Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
          >
            {instagramReels[feedSort].slice(0, isMobile ? 2 : 6).map((reel, index) => (
              <motion.div
                key={`${feedSort}-${reel.id}`}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${index === 1 ? 'lg:row-span-2' : ''}`}
                style={{ aspectRatio: index === 1 ? '9/16' : '4/5' }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Background Image/Thumbnail */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${reel.thumbnail})` }}
                />
                
                {/* Artistic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Play Button with Creative Design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full border-2 border-[#FEBE5D] flex items-center justify-center group-hover:bg-[#FEBE5D]/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                  >
                    <svg className="w-8 h-8 text-[#FEBE5D] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#FEBE5D] rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-[#FEBE5D] uppercase tracking-wider">
                      {feedSort === 'recent' ? 'Fresh' : 'Viral'}
                    </span>
                  </div>
                  
                  <p className="text-sm font-medium line-clamp-2 mb-2">
                    {reel.caption}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span>{reel.likes.toLocaleString()}</span>
                    </div>
                    <span>{reel.timestamp}</span>
                  </div>
                </div>

                {/* Creative Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FEBE5D]/30 transition-all duration-300" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#FEBE5D]/10 to-transparent" />
              </motion.div>
            ))}
          </motion.div>

          {/* Artistic Load More Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
          >
            <div className="relative inline-block">
              <motion.a
                href="https://www.instagram.com/premise_in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#FEBE5D] text-[#FEBE5D] rounded-full font-medium hover:bg-[#FEBE5D] hover:text-black transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.05, rotateZ: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Dive Deeper
                  <motion.svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
                
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FEBE5D]/0 via-[#FEBE5D]/20 to-[#FEBE5D]/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
                  initial={{ translateX: '-200%' }}
                />
              </motion.a>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#FEBE5D] rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.7 }}
          >
            Ready to Experience the{' '}
            <span className="text-[#FEBE5D]">True Face</span>{' '}
            of Indian Music?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.9 }}
          >
            Join us on a journey through the authentic sounds and stories that define India's musical landscape.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-[#FEBE5D] text-black rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Artists
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Homepage;
