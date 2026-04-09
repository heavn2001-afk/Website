import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Film, Sparkles } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Film className="h-8 w-8 text-rose-500 transition-transform group-hover:scale-110" />
              <Sparkles className="h-4 w-4 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500">
              CineStars
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher des articles, célébrités, films..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full transition-shadow focus:shadow-md"
              />
            </div>
          </form>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-rose-500 transition-colors">
              Accueil
            </Link>
            <Link to="/?filter=Célébrités" className="text-sm font-medium text-gray-700 hover:text-rose-500 transition-colors">
              Célébrités
            </Link>
            <Link to="/?filter=Séries" className="text-sm font-medium text-gray-700 hover:text-rose-500 transition-colors">
              Séries
            </Link>
            <Link to="/?filter=Films" className="text-sm font-medium text-gray-700 hover:text-rose-500 transition-colors">
              Films
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
