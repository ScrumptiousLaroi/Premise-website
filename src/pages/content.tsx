import { motion } from 'framer-motion';
import { Mic, History, Music, Users } from 'lucide-react';

const Content = () => {
  const contentVerticals = [
    {
      id: 1,
      title: '90 Sec with the Artist',
      tagline: 'Their story. Their words. Their truth.',
      quote: 'Because the best stories don\'t need long introductions.',
      description: 'Raw, unfiltered intimacy. A confession.',
      backgroundImage: './content/90_sec_ankur_tewari.jpg',
      icon: Mic,
      aesthetic: 'Extreme close-up on lips, about to speak'
    },
    {
      id: 2,
      title: 'Unheard Stories',
      tagline: 'The legends they never told you about.',
      quote: 'History isn\'t just facts. It\'s feelings.',
      description: 'Historical reverence. Uncovering forgotten legends.',
      backgroundImage: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg',
      icon: History,
      aesthetic: 'Vintage microphone, dust motes, sepia memories'
    },
    {
      id: 3,
      title: 'Add Them to Your Playlist',
      tagline: 'Your next musical obsession, curated.',
      quote: 'Great music doesn\'t need permission to move you.',
      description: 'Modern discovery. The thrill of the new and unknown.',
      backgroundImage: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      icon: Music,
      aesthetic: 'Rainy window, neon lights, earbuds dangling'
    },
    {
      id: 4,
      title: 'Kala Rooms',
      tagline: 'Where music meets magic.',
      quote: 'Some moments can\'t be streamed. They have to be lived.',
      description: 'Sacred space. The magic of live, intimate connection.',
      backgroundImage: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      icon: Users,
      aesthetic: 'Guitar neck, fingertips on strings, candlelight'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black"
    >
      <div className="pt-20">
        {/* Header */}
        <section className="py-20 px-4 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Content <span className="text-[#FEBE5D]">Series</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light"
            style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
          >
            Showcasing the True Face of Indian Music through different perspectives.<br/>
          </motion.p>
        </section>
        </div>

        {/* Fading line divider */}
      <div className="w-full flex justify-center my-12">
        <span className="block w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FEBE5D] to-transparent opacity-70" />
      </div>

        {/* Content Verticals */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* First Row: 90 Sec with Artist + Unheard Stories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {contentVerticals.slice(0, 2).map((vertical, index) => (
                <motion.div
                  key={vertical.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group cursor-pointer relative overflow-hidden rounded-lg w-full h-[600px]"
                >
                  {/* Background Image with Faded Black Film Filter */}
                  <div className="absolute inset-0">
                    <img
                      src={vertical.backgroundImage}
                      alt={vertical.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'contrast(0.8) brightness(0.7) saturate(0.5) sepia(0.1)',
                      }}
                    />
                    {/* Faded Black Film Filter Overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(40,40,40,0.6) 50%, rgba(15,15,15,0.9) 100%)',
                        mixBlendMode: 'multiply'
                      }}
                    />
                    {/* Film Grain Texture */}
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        mixBlendMode: 'screen'
                      }}
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-8 group-hover:p-10 transition-all duration-500">
                    {/* Icon */}
                    <div className="flex justify-center">
                      <vertical.icon 
                        className="text-[#F5F5F5] group-hover:text-[#FEBE5D] transition-colors duration-300" 
                        size={48} 
                      />
                    </div>

                    {/* Main Content */}
                    <div className="text-center space-y-4">
                      <h2 
                        className="text-3xl md:text-4xl font-bold text-[#FEBE5D] leading-tight group-hover:scale-105 transition-transform duration-300"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {vertical.title}
                      </h2>
                      
                      <p 
                        className="text-lg text-[#F5F5F5] opacity-80 font-light"
                        style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
                      >
                        {vertical.tagline}
                      </p>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-3">
                        <p 
                          className="text-sm text-[#F5F5F5] opacity-70 italic font-light"
                          style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
                        >
                          {vertical.quote}
                        </p>
                        <p 
                          className="text-sm text-gray-400 font-light"
                          style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
                        >
                          {vertical.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="flex justify-center">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#FEBE5D] to-transparent opacity-70 group-hover:w-24 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Second Row: Add Them to Your Playlist + Kala Rooms */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {contentVerticals.slice(2, 4).map((vertical, index) => (
                <motion.div
                  key={vertical.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: (index + 2) * 0.2 }}
                  className="group cursor-pointer relative overflow-hidden rounded-lg w-full h-[600px]"
                >
                  {/* Background Image with Faded Black Film Filter */}
                  <div className="absolute inset-0">
                    <img
                      src={vertical.backgroundImage}
                      alt={vertical.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'contrast(0.8) brightness(0.7) saturate(0.5) sepia(0.1)',
                      }}
                    />
                    {/* Faded Black Film Filter Overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(40,40,40,0.6) 50%, rgba(15,15,15,0.9) 100%)',
                        mixBlendMode: 'multiply'
                      }}
                    />
                    {/* Film Grain Texture */}
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        mixBlendMode: 'screen'
                      }}
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-8 group-hover:p-10 transition-all duration-500">
                    {/* Icon */}
                    <div className="flex justify-center">
                      <vertical.icon 
                        className="text-[#F5F5F5] group-hover:text-[#FEBE5D] transition-colors duration-300" 
                        size={48} 
                      />
                    </div>

                    {/* Main Content */}
                    <div className="text-center space-y-4">
                      <h2 
                        className="text-3xl md:text-4xl font-bold text-[#FEBE5D] leading-tight group-hover:scale-105 transition-transform duration-300"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {vertical.title}
                      </h2>
                      
                      <p 
                        className="text-lg text-[#F5F5F5] opacity-80 font-light"
                        style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
                      >
                        {vertical.tagline}
                      </p>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-3">
                        <p 
                          className="text-sm text-[#F5F5F5] opacity-70 italic font-light"
                          style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
                        >
                          {vertical.quote}
                        </p>
                        <p 
                          className="text-sm text-gray-400 font-light"
                          style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
                        >
                          {vertical.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="flex justify-center">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#FEBE5D] to-transparent opacity-70 group-hover:w-24 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fading line divider */}
      <div className="w-full flex justify-center my-12">
        <span className="block w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FEBE5D] to-transparent opacity-70" />
      </div>
    </motion.div>
  );
}

export default Content;