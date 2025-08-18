import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

const sections = [
  { name: 'Home', path: '/' },
  { name: 'Artist Guide', path: '/artist-guide' },
  { name: 'Kala Rooms', path: '/kala-rooms' },
  { name: 'Content', path: '/content' },
  { name: 'About', path: '/about' },
];

const Footer = () => (
  <footer className="bg-black text-gray-300 pt-12 pb-6 px-4 border-t border-gray-800 mt-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8">
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <h2 className="text-2xl font-bold text-[#FEDE5B] tracking-wide mb-2">PREMISE.</h2>
        <p className="text-base mb-2">Documenting the true face of Indian music, one story at a time.</p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-4">
        <nav className="flex flex-wrap gap-4 justify-center md:justify-end">
          {sections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="hover:text-[#FEDE5B] transition-colors duration-200 text-base font-medium"
            >
              {section.name}
            </Link>
          ))}
        </nav>
        <div className="mt-4 text-sm text-gray-500">Follow the Journey:</div>
        <div className="flex gap-4 justify-center md:justify-end mt-2">
          <a href="https://www.instagram.com/premise_in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-6 h-6 hover:text-[#FEDE5B] transition-colors duration-200" />
          </a>
          <a href="https://www.youtube.com/@PREMISE.-IN" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="w-6 h-6 hover:text-[#FEDE5B] transition-colors duration-200" />
          </a>
          <a href="https://open.spotify.com/user/31pyqwwbubajmug2vqrtsffo2liy" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
            <FaSpotify className="w-6 h-6 hover:text-[#FEDE5B] transition-colors duration-200" />
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-xs text-gray-600">
      © 2025 PREMISE. All Stories Reserved.
    </div>
  </footer>
);

export default Footer;
