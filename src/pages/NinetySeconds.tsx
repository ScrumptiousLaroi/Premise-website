import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Eye, Heart } from 'lucide-react';

const NinetySeconds = () => {
  const stories = [
    {
      id: 1,
      title: 'Behind the Mic with Arjun',
      artist: 'Arjun Kanth',
      thumbnail: 'https://images.pexels.com/photos/1464375/pexels-photo-1464375.jpeg',
      views: '12.3K',
      likes: '1.2K',
      description: 'The journey from street performer to studio artist'
    },
    {
      id: 2,
      title: 'Classical Roots, Modern Soul',
      artist: 'Priya Sharma',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      views: '8.7K',
      likes: '892',
      description: 'Blending traditional ragas with contemporary sounds'
    },
    {
      id: 3,
      title: 'The Indie Underground',
      artist: 'Mumbai Collective',
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      views: '15.1K',
      likes: '2.1K',
      description: 'Building a scene from the ground up'
    },
    {
      id: 4,
      title: 'Melodies from the Mountains',
      artist: 'Himalayan Echoes',
      thumbnail: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg',
      views: '9.4K',
      likes: '756',
      description: 'Folk traditions meet modern production'
    },
    {
      id: 5,
      title: 'Urban Poetry Sessions',
      artist: 'Delhi Poets',
      thumbnail: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg',
      views: '11.8K',
      likes: '1.4K',
      description: 'Where spoken word becomes melody'
    },
    {
      id: 6,
      title: 'Electronic Fusion Experiments',
      artist: 'Cyber Ragas',
      thumbnail: 'https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg',
      views: '7.9K',
      likes: '623',
      description: 'Pushing the boundaries of digital sound'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative"
    >
      {/* Dynamic Video Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 pt-20">
        {/* Header */}
        <section className="py-20 px-4 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="text-[#FEBE5D]">90</span> Secs with Premise
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
          >
            Authentic stories from the artist's point of view. 
            Raw, real, and unfiltered moments that define the Indian music scene.
          </motion.p>
        </section>

        {/* Stories Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-gray-900">
                    <img
                      src={story.thumbnail}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="relative">
                        <Play className="text-white group-hover:text-[#FEBE5D] group-hover:scale-110 transition-all duration-300" size={56} />
                        <div className="absolute top-1 left-1 bg-[#FEBE5D] text-black text-xs font-bold px-2 py-1 rounded">
                          90s
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-4 right-4 flex gap-4 text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Eye size={16} />
                        {story.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={16} />
                        {story.likes}
                      </div>
                    </div>
                  </div>

                  {/* Story Info */}
                  <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg group-hover:bg-gray-800/80 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FEBE5D] transition-colors duration-300">
                      {story.title}
                    </h3>
                    <p className="text-[#FEBE5D] font-medium mb-3">{story.artist}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {story.description}
                    </p>
                    <div className="mt-4 flex items-center text-gray-400 text-sm">
                      <Clock size={16} className="mr-2" />
                      90 seconds
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16"
            >
              <button className="bg-[#FEBE5D] text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-300">
                Load More Stories
              </button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/90 backdrop-blur-sm p-12 rounded-lg border border-gray-700"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Share Your Story</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Have a story worth telling? We want to hear from you. 
                Share your journey, struggles, and triumphs in 90 seconds.
              </p>
              <button className="bg-[#FEBE5D] text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-300">
                Submit Your Story
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default NinetySeconds;