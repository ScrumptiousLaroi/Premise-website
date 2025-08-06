import React from 'react';
import { motion } from 'framer-motion';
import { Music, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Founder & CEO',
      role: 'Visionary Leader',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      description: 'Passionate about discovering authentic Indian talent'
    },
    {
      name: 'Head of A&R',
      role: 'Talent Scout',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      description: 'Finding the next generation of musical storytellers'
    },
    {
      name: 'Creative Director',
      role: 'Visual Storyteller',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      description: 'Bringing music to life through visual narratives'
    },
    {
      name: 'Community Manager',
      role: 'Artist Relations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      description: 'Building bridges between artists and audiences'
    }
  ];

  const stats = [
    { icon: <Music size={32} />, number: '500+', label: 'Artists Supported' },
    { icon: <Users size={32} />, number: '1M+', label: 'Music Lovers Reached' },
    { icon: <Heart size={32} />, number: '50+', label: 'Kala Room Sessions' },
    { icon: <Award size={32} />, number: '25+', label: 'Awards & Recognition' }
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
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            About <span className="text-[#FEBE5D]">Premise</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We believe in the power of authentic music to connect hearts, 
            tell stories, and preserve the rich cultural heritage of India.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-2xl text-[#FEBE5D] font-light max-w-4xl mx-auto leading-relaxed">
              To discover, nurture, and showcase the true face of Indian music – 
              raw, authentic, and deeply rooted in our cultural soul.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-[#FEBE5D] mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Premise was born from a simple belief: that India's musical landscape 
                  is incredibly rich and diverse, yet many authentic voices remain unheard 
                  in the mainstream.
                </p>
                <p>
                  We started as a small collective of music enthusiasts who were tired 
                  of the commercialized, formulaic approach to Indian music. We wanted 
                  to create a platform that celebrates the raw, unfiltered essence of 
                  musical expression.
                </p>
                <p>
                  From street corners to recording studios, from classical traditions 
                  to experimental fusion – we seek out artists who have something real 
                  to say and help them find their audience.
                </p>
                <p>
                  Today, Premise has grown into a movement. We're not just a music 
                  company; we're custodians of authentic Indian musical heritage, 
                  bridging the gap between traditional artistry and modern platforms.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
                alt="Music recording"
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">The Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the passionate individuals working behind the scenes to bring you 
              the most authentic musical experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#FEBE5D] font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Join Our Journey</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Whether you're an artist looking for a platform or a music lover seeking 
              authentic experiences, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FEBE5D] text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-300">
                Get In Touch
              </button>
              <button className="border-2 border-[#FEBE5D] text-[#FEBE5D] px-8 py-4 rounded-full font-bold hover:bg-[#FEBE5D] hover:text-black transition-colors duration-300">
                Follow Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;