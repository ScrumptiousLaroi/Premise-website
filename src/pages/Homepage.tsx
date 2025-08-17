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
  // Local videos from the videos folder
  const localVideos = [
    {
      id: 'akso',
      src: '/videos/akso.mp4',
      title: 'Akso Maniac',
      description: 'Musical journey of Akso',
      link: 'https://www.instagram.com/reel/DBWXOO8ATEt/'
    },
    {
      id: 'ankit-tiwari',
      src: './videos/ankit tiwari.mp4',
      title: 'Ankur Tewari',
      description: '90 secs of Soulful melodies',
      link: 'https://www.instagram.com/reel/DMXy444xFMx/'
    },
    {
      id: 'faizal',
      src: './videos/Faizal.mp4',
      title: 'Faizal',
      description: 'Faizal confronts his truths',
      link: 'https://www.instagram.com/reel/C_ai1KFyC_q/'
    },
    {
      id: 'green-park',
      src: './videos/green park.mp4',
      title: 'Green Park',
      description: 'Inside an Indie Band',
      link: 'https://www.instagram.com/reel/DCrVrK3znp1/'
    },
    {
      id: 'indian-ocean-music',
      src: './videos/indian ocean music.mp4',
      title: 'Indian Ocean Music',
      description: 'A day with Indian Ocean Music',
      link: 'https://www.instagram.com/reel/DHLsnyETC5P/'
    },
    {
      id: 'karun',
      src: './videos/Karun.mp4',
      title: 'Karun',
      description: 'Karun’s confession about his chehre',
      link: 'https://www.instagram.com/reel/DM0AVz2TRmw/'
    },
    {
      id: 'muzzle',
      src: './videos/muzzle.mp4',
      title: 'Muzzle',
      description: '90 secs of Raw energy',
      link: 'https://www.instagram.com/reel/DKkIxRyzc0H/'
    },
    {
      id: 'shywry',
      src: './videos/shywry.mp4',
      title: 'Shywry',
      description: '90 secs of Unique sounds',
      link: 'https://www.instagram.com/reel/DIBu8OoSU13/'
    },
    {
      id: 'yo-soy-mohito',
      src: './videos/yo soy mohito.mp4',
      title: 'Mohito',
      description: 'Revolutionizing Haryanvi Music',
      link: 'https://www.instagram.com/reel/DLhmc1izBtm/'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black">
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
            <source src="./premise-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center justify-center w-full h-full space-y-6 md:space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#FEBE5D] leading-none w-full flex justify-center items-center">
              <span className="block w-full text-center">PREMISE.</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-light max-w-3xl mx-auto w-full text-center">
              True Face of Indian Music
            </p>
            <div className="pt-6 md:pt-8 flex justify-center w-full">
              <motion.div
                className="flex flex-col items-center cursor-pointer"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <svg className="w-6 h-6 text-[#FEBE5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Videos Section */}
      <motion.section 
  className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white relative z-10">
                Featured{' '}
                <span className="relative">
                  <span className="text-[#FEBE5D]">Artists</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-[#FEBE5D]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </h2>
              <div className="absolute top-0 left-0 text-6xl opacity-10 font-black text-[#FEBE5D] -rotate-12 hidden lg:block">
                ♫
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light italic">
              Discover the authentic voices and talents that define our musical collective
            </p>
          </motion.div>

          {/* Videos Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          >
            {localVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl cursor-pointer"
                style={{ aspectRatio: '16/9' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.03, rotateY: 3 }}
                onClick={() => {
                  if (video.link) {
                    window.open(video.link, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                {/* Video Element */}
                <video
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/80 opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#FEBE5D]">
                    {video.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 opacity-90">
                    {video.description}
                  </p>
                </div>

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    className="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-full border-2 border-[#FEBE5D] flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-8 h-8 text-[#FEBE5D] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FEBE5D]/30 transition-all duration-300" />
                
                {/* Corner Accent */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-[#FEBE5D] rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Artists Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            <motion.a
              href="https://www.instagram.com/premise_in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#FEBE5D] text-[#FEBE5D] rounded-full font-medium hover:bg-[#FEBE5D] hover:text-black transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover All Stories
                <motion.svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
              
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-[#FEBE5D]/10 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
              />
            </motion.a>
            
          </motion.div>
        </div>
      </motion.section>

      {/* Fading Divider */}
      <div className="w-full flex justify-center my-12">
        <span className="block w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FEBE5D] to-transparent opacity-70" />
      </div>

      {/* Newsletter Signup Section */}
      <motion.section 
  className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
      >
        
        <div className="max-w-2xl w-full mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Newsletter Signup
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 font-light italic">
            "Stories worth your time."<br/>
            Monthly updates, exclusive content, first access to Kala Rooms.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-[#FEBE5D] transition-all duration-300 placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#FEBE5D] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg text-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Homepage;
