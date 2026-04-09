import React, { useState, useMemo } from 'react';
import { Filter, X } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { mockArticles, trendingArticles, categories } from '../mock/articles';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Separator } from '../components/ui/separator';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    let filtered = mockArticles;

    // Filter by category
    if (selectedCategory !== 'Tous') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        article =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query) ||
          article.type.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <SEO 
        title="CineStars - Actualités Cinéma, Séries & Célébrités"
        description="Découvrez les dernières actualités du monde du cinéma, des séries et des célébrités. Interviews exclusives, critiques de films et analyses approfondies. 12+ articles sur Hollywood, Netflix, et plus."
        keywords="cinéma, films, séries, célébrités, actualités entertainment, critiques films, interviews, Hollywood, Netflix, Disney+, HBO"
        url="https://entertainment-hub-120.preview.emergentagent.com"
      />
      <Header onSearch={handleSearch} />
      <Hero />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-gray-700">
                <Filter className="h-5 w-5" />
                <span className="font-semibold">Catégories:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-md'
                      : 'hover:border-rose-500 hover:text-rose-500'
                  }`}
                >
                  {category}
                </Button>
              ))}
              {(searchQuery || selectedCategory !== 'Tous') && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Tous');
                  }}
                  className="text-gray-500 hover:text-rose-500"
                >
                  <X className="h-4 w-4 mr-1" />
                  Réinitialiser
                </Button>
              )}
            </div>

            {/* Search Results Info */}
            {searchQuery && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">{filteredArticles.length}</span> résultat(s) pour "{searchQuery}"
                </p>
              </div>
            )}

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Filter className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Aucun article trouvé
                </h3>
                <p className="text-gray-500">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Trending Articles */}
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-700">
                    <div className="h-8 w-8 bg-amber-400 rounded-full flex items-center justify-center">
                      🔥
                    </div>
                    Tendances
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trendingArticles.map((article, index) => (
                      <div key={article.id}>
                        <Link
                          to={`/article/${article.id}`}
                          className="group block"
                        >
                          <div className="flex gap-3">
                            <span className="text-2xl font-bold text-amber-400 group-hover:text-amber-500 transition-colors">
                              {index + 1}
                            </span>
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-rose-500 transition-colors mb-1">
                                {article.title}
                              </h4>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Badge variant="outline" className="text-xs">
                                  {article.category}
                                </Badge>
                                <span>{article.views.toLocaleString()} vues</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        {index < trendingArticles.length - 1 && (
                          <Separator className="my-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Card */}
              <Card className="bg-gradient-to-br from-rose-500 to-purple-600 text-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white">Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/90 mb-4">
                    Recevez les dernières actualités directement dans votre boîte mail
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <Button className="w-full bg-white text-rose-500 hover:bg-gray-100 font-semibold">
                      S'abonner
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
