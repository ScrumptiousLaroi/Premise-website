import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const KalaRooms = () => {
  // Gallery images from kalarooms folder
  const galleryImages = [
    {
      id: 1,
      src: '/kalarooms/1.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 2,
      src: '/kalarooms/2.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 3,
      src: '/kalarooms/3.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 4,
      src: '/kalarooms/4.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 5,
      src: '/kalarooms/5.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 6,
      src: '/kalarooms/6.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 7,
      src: '/kalarooms/7.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 8,
      src: '/kalarooms/8.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 9,
      src: '/kalarooms/9.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 10,
      src: '/kalarooms/10.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 11,
      src: '/kalarooms/11.jpg',
      alt: 'Kala Rooms'
    },
    {
      id: 12,
      src: '/kalarooms/12.jpg',
      alt: 'Kala Rooms'
    }
  ];

  // Featured YouTube videos
  const featuredVideos = [
    {
      id: 1,
      title: 'Arjun Rana Kala Rooms, Episode - 01',
      thumbnail: './kalarooms/arjun_yt.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=FkMMbtJCWO0'
    },
    {
      id: 2,
      title: 'Rashim Anand Kala Rooms, Episode - 02',
      thumbnail: './kalarooms/Rashim_yt.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=3CtI3BUSAJc'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white overflow-x-hidden"
    >
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="./premise-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6"
          >
            <span className="text-white">कला</span>{' '}
            <span className="text-red-600">Rooms</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light max-w-3xl mx-auto"
          >
            Where music meets magic in intimate spaces
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-black">
        
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="text-white">Gallery</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-red-600 transition-all duration-300 rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 px-4 bg-black">
        {/* Fading Divider */}
        <div className="w-full flex justify-center my-12">
          <span className="block w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FEDE5B] to-transparent opacity-70" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="text-white">More Episodes</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-black"
                onClick={() => window.open(video.youtubeUrl, '_blank')}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white ml-1" size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        {/* Fading Divider */}
        <div className="w-full flex justify-center my-12">
          <span className="block w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FEDE5B] to-transparent opacity-70" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Request a personalized कला <span className="text-red-600">Rooms</span> session and showcase your art
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Share your music with the world in our intimate studio setting. Let us capture your authentic sound and story.
          </motion.p>
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Session
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default KalaRooms;