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

  // Sample Instagram post URLs (replace with actual Instagram post URLs)
  const instagramPosts = {
    recent: [
      'CXample1',
      'CXample2',
      'CXample3',
      'CXample4',
      'CXample5',
      'CXample6',
    ],
    popular: [
      'CPopular1',
      'CPopular2',
      'CPopular3',
      'CPopular4',
      'CPopular5',
      'CPopular6',
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
              <span className="block">PREMISE</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-400 font-light max-w-3xl mx-auto">
              True Face of Indian Music
            </p>
            
            <div className="pt-6 md:pt-8">
              <button className="bg-yellow-400 text-black px-8 py-3 md:px-12 md:py-4 text-lg md:text-xl font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Discover Music
              </button>
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              From The{' '}
              <span className="text-[#FEBE5D]">'Gram</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Stay connected with the latest updates and behind-the-scenes moments from our musical journey
            </p>
          </motion.div>

          {/* Sort Controls */}
          <motion.div 
            className="flex justify-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          >
            <div className="bg-gray-900 rounded-full p-2 flex space-x-2">
              <motion.button
                onClick={() => setFeedSort('recent')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  feedSort === 'recent'
                    ? 'bg-[#FEBE5D] text-black'
                    : 'text-white hover:text-[#FEBE5D]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Most Recent
              </motion.button>
              <motion.button
                onClick={() => setFeedSort('popular')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  feedSort === 'popular'
                    ? 'bg-[#FEBE5D] text-black'
                    : 'text-white hover:text-[#FEBE5D]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Most Popular
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
          >
            {instagramPosts[feedSort].slice(0, isMobile ? 2 : 6).map((postId, index) => (
              <motion.div
                key={`${feedSort}-${index}`}
                className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden group cursor-pointer relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#FEBE5D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#FEBE5D]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {feedSort === 'recent' ? 'Recent Post' : 'Popular Post'} #{index + 1}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Post ID: {postId}
                    </p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#FEBE5D]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-black text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 6.253v13.747l-4.834-6.253 4.834-7.494z"/>
                      <path d="M12 6.253l4.834 7.494-4.834 6.253v-13.747z"/>
                    </svg>
                    <p className="font-medium">View Post</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
          >
            <motion.a
              href="https://www.instagram.com/premise_in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#FEBE5D] text-[#FEBE5D] rounded-full font-medium hover:bg-[#FEBE5D] hover:text-black transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Posts
            </motion.a>
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
