
import { motion } from 'framer-motion';
import { Music, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Raghav Kaushal',
      role: 'Creative Director & Founder',
      image: './raghav_pfp.jpeg',
      description: 'Makes the editors go mad',
      href: 'https://www.linkedin.com/in/raghav-kaushal-003008232/'
    },
    {
      name: 'Os Goyal',
      role: 'Business Head and Founder',
      image: './os_pfp.jpeg',
      description: 'In a relationship with Google Meet',
      href: 'https://www.linkedin.com/in/os-goyal/'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 bg-black"
    >
      {/* WHY PREMISE. */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-12">
            WHY <span className="text-[#FEDE5B] font-impact">PREMISE.</span>?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* For Music Lovers */}
            <div className="bg-black border border-[#FEDE5B] rounded-3xl shadow-xl flex flex-col items-center px-8 py-10 text-center">
              <h3 className="text-2xl font-bold text-[#FEDE5B] mb-4 uppercase tracking-wide">For Music Lovers</h3>
              <p className="text-lg text-white font-light text-justify">
                Stop consuming. Start connecting.<br />
                We show you the story behind every song.
              </p>
            </div>
            {/* For Artists */}
            <div className="bg-black border border-[#FEDE5B] rounded-3xl shadow-xl flex flex-col items-center px-8 py-10 text-center">
              <h3 className="text-2xl font-bold text-[#FEDE5B] mb-4 uppercase tracking-wide">For Artists</h3>
              <p className="text-lg text-white font-light text-justify">
                <br></br>Stop being just another name in a playlist.<br />
                We make sure your story gets told.
              </p>
            </div>
            {/* For the Culture */}
            <div className="bg-black border border-[#FEDE5B] rounded-3xl shadow-xl flex flex-col items-center px-8 py-10 text-center">
              <h3 className="text-2xl font-bold text-[#FEDE5B] mb-4 uppercase tracking-wide">For the Culture</h3>
              <p className="text-lg text-white font-light text-justify">
                Stop letting history disappear.<br />
                We're preserving it for the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Fading line divider */}
      <div className="w-full flex justify-center my-12">
        <span className="block w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FEDE5B] to-transparent opacity-70" />
      </div>
      {/* Who We Are (restored below WHY PREMISE.) */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            <span className="font-bold text-[#FEDE5B] font-impact">PREMISE.</span> is a music media brand with a simple belief:<br/>
            The person behind the music is just as powerful as the music itself.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            We're building a time capsule for Indian music, documenting its past, celebrating its present, and shaping its future. One story at a time.
          </p>
        </div>
      </section>
      {/* Fading line divider */}
      <div className="w-full flex justify-center my-12">
        <span className="block w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FEDE5B] to-transparent opacity-70" />
      </div>

      {/* What We Do */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Do</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            We turn casual listeners into superfans by showing them the human behind the art.<br/>
            Not just what they create. But who they are.
          </p>
        </div>
      </section>
      {/* Fading line divider */}
      <div className="w-full flex justify-center my-12">
        <span className="block w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FEDE5B] to-transparent opacity-70" />
      </div>

      {/* Our Mission */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            To create deeper connections between artists and fans through authentic storytelling that honors the journey, not just the destination.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <div className="text-[#FEDE5B] mb-4 flex justify-center">
                <Music size={32} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-gray-400">
                Artists Supported
              </div>
            </div>
            <div className="text-center">
              <div className="text-[#FEDE5B] mb-4 flex justify-center">
                <Users size={32} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                4M+
              </div>
              <div className="text-gray-400">
                Music Lovers Reached
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fading line divider */}
      <div className="w-full flex justify-center my-12">
        <span className="block w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FEDE5B] to-transparent opacity-70" />
      </div>

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
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-white">The </span>
              <span className="text-[#FEDE5B]">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the passionate individuals working behind the scenes to bring you 
              the most authentic musical experiences.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group w-64"
              >
                <a href={member.href} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
                  <div className="relative overflow-hidden rounded-lg mb-6 aspect-square w-64 h-64 cursor-pointer">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-64 h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#FEDE5B] font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOIN THE JOURNEY Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight uppercase text-center flex flex-col items-center">
          <span className="text-white">Join the <span className="text-[#FEDE5B]">Journey</span></span>
          <span className="block w-32 h-1 mt-3 rounded-full bg-gradient-to-r from-transparent via-[#FEDE5B] to-transparent opacity-70" />
        </h2>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* For Artists */}
          <div className="bg-black border border-[#FEDE5B] rounded-3xl shadow-xl flex flex-col items-center px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-[#FEDE5B] mb-4 uppercase tracking-wide">For Artists</h3>
            <p className="text-lg text-gray-300 mb-8 font-light">
              Ready to share your story?<br/>
              We're looking for artists who have something real to say. Not perfect stories, authentic ones.
            </p>
            <button className="px-8 py-3 bg-[#FEDE5B] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg text-lg">
              <a href="https://forms.gle/f8snyubTitjMS8pS6" target="_blank" rel="noopener noreferrer">Get Featured</a>
            </button>
          </div>
          {/* For Fans */}
          <div className="bg-black border border-[#FEDE5B] rounded-3xl shadow-xl flex flex-col items-center px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-[#FEDE5B] mb-4 uppercase tracking-wide">For Fans</h3>
            <p className="text-lg text-gray-300 mb-8 font-light">
              Want deeper connections with music?<br/>
              Join a community that values the journey as much as the destination.
            </p>
            <button className="px-8 py-3 bg-[#FEDE5B] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg text-lg">
              <a href="https://www.instagram.com/premise_in/" target="_blank" rel="noopener noreferrer">Follow Our Stories</a>
            </button>
          </div>
          {/* For Collaborators */}
          <div className="bg-black border border-[#FEDE5B] rounded-3xl shadow-xl flex flex-col items-center px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-[#FEDE5B] mb-4 uppercase tracking-wide">For Collaborators</h3>
            <p className="text-lg text-gray-300 mb-8 font-light">
              Believe in authentic storytelling?<br/>
              Let's build something meaningful together.
            </p>
            <a href="mailto:hello@premise.co.in" className="px-8 py-3 bg-[#FEDE5B] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg text-lg">
              Work With Us
            </a>
          </div>
        </div>
      </section>

      {/* Add fading line between all main sections */}
      <div className="w-full flex justify-center my-12">
        <span className="block w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-[#FEDE5B] to-transparent opacity-70" />
      </div>
    </motion.div>
  );
};

export default About;