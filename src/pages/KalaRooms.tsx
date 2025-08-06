import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Users, Camera } from 'lucide-react';

const KalaRooms = () => {
  const sessions = [
    {
      id: 1,
      title: 'Acoustic Evenings',
      artist: 'Various Artists',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg',
      date: 'Every Friday',
      viewers: '2.5K'
    },
    {
      id: 2,
      title: 'Classical Fusion Sessions',
      artist: 'Raghav & Collective',
      image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
      date: 'Monthly',
      viewers: '4.1K'
    },
    {
      id: 3,
      title: 'Underground Indie',
      artist: 'Delhi Underground',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      date: 'Bi-weekly',
      viewers: '3.2K'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Kala <span className="text-[#FEBE5D]">Rooms</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Exclusive sessions, unique collaborations, and raw performances. 
            Step into our intimate spaces where music comes alive in its purest form.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">What Makes Kala Rooms Special</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-black rounded-lg"
            >
              <Camera className="text-[#FEBE5D] mx-auto mb-6" size={48} />
              <h3 className="text-xl font-bold text-white mb-4">Intimate Sessions</h3>
              <p className="text-gray-400">
                Small, carefully curated performances that capture the raw essence of each artist's creativity.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-black rounded-lg"
            >
              <Users className="text-[#FEBE5D] mx-auto mb-6" size={48} />
              <h3 className="text-xl font-bold text-white mb-4">Unique Collaborations</h3>
              <p className="text-gray-400">
                Witness unexpected musical partnerships and cross-genre experiments that push boundaries.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-black rounded-lg"
            >
              <Play className="text-[#FEBE5D] mx-auto mb-6" size={48} />
              <h3 className="text-xl font-bold text-white mb-4">Raw Performances</h3>
              <p className="text-gray-400">
                Unfiltered, authentic moments where artists express their true musical identity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sessions Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-16 text-center"
          >
            Recent Sessions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={session.image}
                    alt={session.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Play className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" size={48} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FEBE5D] transition-colors duration-300">
                    {session.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{session.artist}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {session.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {session.viewers}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="bg-[#FEBE5D] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors duration-300">
              Request a Session
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default KalaRooms;