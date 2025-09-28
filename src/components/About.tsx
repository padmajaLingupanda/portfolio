import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-full p-1">
              <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-300">P</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Hi there! I'm Padmaja
            </h3>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
              “Passionate web developer with a strong drive to create user-friendly, responsive, and innovative                websites. Dedicated to continuous learning and staying updated with modern web technologies.”
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Code className="text-blue-400" size={24} />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Palette className="text-green-400" size={24} />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Zap className="text-purple-400" size={24} />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <Heart className="text-pink-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Passion</h4>
                  <p className="text-sm text-gray-400">Love What I Do</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;