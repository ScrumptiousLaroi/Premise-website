import { useState } from 'react';
import { motion } from 'framer-motion';

interface PasswordProtectionProps {
  onUnlock: () => void;
}

const PasswordProtection = ({ onUnlock }: PasswordProtectionProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'bossman@96') {
      onUnlock();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <img 
            src="./Final Logo.png" 
            alt="Premise Logo" 
            className="h-16 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-white mb-4">
            Access <span className="text-[#FEBE5D]">Required</span>
          </h1>
          <p className="text-gray-300">
            This website is currently in development.<br/>
            Please enter the access code to continue.
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Enter access code"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FEBE5D] focus:ring-1 focus:ring-[#FEBE5D] transition-colors"
              autoFocus
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                {error}
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#FEBE5D] text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300 hover:scale-105 transform"
          >
            Access Website
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Premise. Development Build.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PasswordProtection;
