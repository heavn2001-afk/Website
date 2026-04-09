import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
          alt="Cinema Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white space-y-6">
          <div className="flex items-center gap-2 text-amber-400">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              À la une
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Actualités, Critiques & Interviews
          </h1>
          
          <p className="text-xl text-gray-200 leading-relaxed">
            Découvrez les dernières actualités du monde du cinéma, des séries et des célébrités. 
            Des interviews exclusives, des analyses approfondies et toute l'actualité entertainment.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Clock className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium">Mis à jour quotidiennement</span>
            </div>
            <div className="px-4 py-2 bg-rose-500/90 backdrop-blur-sm rounded-full">
              <span className="text-sm font-semibold">12+ Articles exclusifs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
