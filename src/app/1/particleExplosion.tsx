'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ParticleExplosion = ({ particleDistance = 100, particleCount =12 }) => {
  const [isExploded, setIsExploded] = useState(false);
  const [distance, setDistance] = useState(particleDistance);
  const [count, setParticleCount] = useState(particleCount);


  const generateParticles = () => {
    return [...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-yellow-400 rounded-full"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: (i) => ({
            opacity: 1,
            scale: 1,
            x: Math.cos(i / count * Math.PI * 2) * distance,
            y: Math.sin(i / count * Math.PI * 2) * distance,
            transition: {
              type: 'spring',
              damping: 10,
              stiffness: 100,
              delay: i * 0.02,
            },
          }),
          exit: (i) => ({
            opacity: 0,
            scale: 0,
            x: Math.cos(i / count * Math.PI * 2) * (distance / 2),
            y: Math.sin(i / count * Math.PI * 2) * (distance / 2),
            transition: { duration: 0.5, delay: i * 0.01 },
          }),
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={i}
      />
    ));
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-900">
      <motion.div
        className="relative w-40 h-40 bg-blue-500 rounded-full cursor-pointer flex items-center justify-center text-white font-bold text-xl mb-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExploded(!isExploded)}
      >
        Click Me!
        <AnimatePresence>
          {isExploded && generateParticles()}
        </AnimatePresence>
      </motion.div>
      <div className='fixed top-4 right-4'>
      <input 
        type="range" 
        min="50" 
        max="300" 
        value={distance} 
        onChange={(e) => setDistance(Number(e.target.value))}
        className="w-64 mb-2"
      />
      <p className="text-white">Particle Distance: {distance}px</p>
      <input 
        type="range" 
        min="12" 
        max="24" 
        value={count} 
        onChange={(e) => setParticleCount(Number(e.target.value))}
        className="w-64 mb-2"
      />
      <p className="text-white">Particle count: {count}</p>
      </div>
    </div>
  );
};

export default ParticleExplosion;