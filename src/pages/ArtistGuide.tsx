import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Music, Users, Lightbulb } from 'lucide-react';

const ArtistGuide = () => {
  const guides = [
    {
      id: 1,
      title: 'The Power of Storytelling in Music',
      description: 'Learn how to weave compelling narratives into your musical compositions and connect deeper with your audience.',
      icon: <BookOpen className="text-[#FEBE5D]" size={24} />,
      readTime: '8 min read',
      category: 'Composition'
    },
    {
      id: 2,
      title: 'Building Your Authentic Sound',
      description: 'Discover techniques to develop your unique musical identity while staying true to your cultural roots.',
      icon: <Music className="text-[#FEBE5D]" size={24} />,
      readTime: '12 min read',
      category: 'Identity'
    },
    {
      id: 3,
      title: 'Connecting with Your Audience',
      description: 'Strategies for building meaningful relationships with listeners and growing your fanbase organically.',
      icon: <Users className="text-[#FEBE5D]" size={24} />,
      readTime: '10 min read',
      category: 'Marketing'
    },
    {
      id: 4,
      title: 'Creative Collaboration Tips',
      description: 'How to work effectively with other artists, producers, and industry professionals.',
      icon: <Lightbulb className="text-[#FEBE5D]" size={24} />,
      readTime: '6 min read',
      category: 'Collaboration'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Artist Guide</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Resources we've learned till date which can help artists out. 
            From composition to collaboration, discover the insights that can elevate your musical journey.
          </p>
        </motion.div>

        {/* Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-all duration-300 group cursor-pointer border border-gray-800 hover:border-[#FEBE5D]/30"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {guide.icon}
                  <span className="text-[#FEBE5D] text-sm font-medium uppercase tracking-wider">
                    {guide.category}
                  </span>
                </div>
                <ChevronRight className="text-gray-400 group-hover:text-[#FEBE5D] transition-colors duration-300" size={20} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FEBE5D] transition-colors duration-300">
                {guide.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {guide.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{guide.readTime}</span>
                <span className="text-[#FEBE5D] text-sm font-medium group-hover:underline">
                  Read More
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg border border-gray-700"
        >
          <h2 className="text-3xl font-bold text-white mb-4">More Guides Coming Soon</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're constantly learning and growing. Stay tuned for more insights, tips, and resources 
            to help you on your musical journey.
          </p>
          <button className="bg-[#FEBE5D] text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors duration-300">
            Get Notified
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ArtistGuide;