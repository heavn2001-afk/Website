import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`}>
      <Card className="group overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-gray-200">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Trending Badge */}
          {article.trending && (
            <div className="absolute top-3 right-3 bg-amber-400 text-black px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold shadow-lg">
              <TrendingUp className="h-3 w-3" />
              Tendance
            </div>
          )}

          {/* Category Badge */}
          <Badge 
            className="absolute top-3 left-3 bg-white/95 text-gray-900 hover:bg-white font-semibold shadow-md"
          >
            {article.category}
          </Badge>
        </div>

        <CardHeader className="pb-3">
          {/* Type tag */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-rose-500 uppercase tracking-wide">
              {article.type}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-rose-500 transition-colors duration-200">
            {article.title}
          </h3>
        </CardHeader>

        <CardContent className="pb-3">
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </CardContent>

        <CardFooter className="pt-0 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              <span>{article.views.toLocaleString()} vues</span>
            </div>
          </div>
          <span className="text-gray-400">{article.author}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ArticleCard;
