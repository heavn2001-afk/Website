import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Sparkles, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative">
                <Film className="h-8 w-8 text-rose-500 transition-transform group-hover:scale-110" />
                <Sparkles className="h-4 w-4 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold text-white">
                CineStars
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Votre source d'actualités pour tout ce qui concerne le cinéma, les séries et les célébrités. 
              Interviews exclusives, critiques et analyses approfondies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-rose-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/?filter=Célébrités" className="hover:text-rose-500 transition-colors">
                  Célébrités
                </Link>
              </li>
              <li>
                <Link to="/?filter=Séries" className="hover:text-rose-500 transition-colors">
                  Séries
                </Link>
              </li>
              <li>
                <Link to="/?filter=Films" className="hover:text-rose-500 transition-colors">
                  Films
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Types d'articles</h3>
            <ul className="space-y-2">
              <li className="hover:text-rose-500 transition-colors cursor-pointer">
                Actualités
              </li>
              <li className="hover:text-rose-500 transition-colors cursor-pointer">
                Interviews
              </li>
              <li className="hover:text-rose-500 transition-colors cursor-pointer">
                Critiques
              </li>
              <li className="hover:text-rose-500 transition-colors cursor-pointer">
                Analyses
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 CineStars. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-rose-500 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-rose-500 transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-rose-500 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
