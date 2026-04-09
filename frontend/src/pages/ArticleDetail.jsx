import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Eye, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { mockArticles, trendingArticles } from '../mock/articles';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { toast } from 'sonner';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = mockArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SEO 
          title="Article non trouvé - CineStars"
          description="L'article que vous recherchez n'existe pas ou a été déplacé."
        />
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Button onClick={() => navigate('/')}>Retour à l'accueil</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = mockArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = article.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      toast.success('Partage en cours...');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${article.title} | CineStars`}
        description={article.excerpt}
        keywords={`${article.category}, ${article.type}, ${article.title}, cinéma, séries, célébrités`}
        image={article.image}
        url={`https://entertainment-hub-120.preview.emergentagent.com/article/${article.id}`}
        type="article"
        author={article.author}
      />
      <Header />

      {/* Hero Image */}
      <div className="relative w-full h-[500px] bg-gray-900">
        <img
          src={article.image}
          alt={`${article.title} - ${article.category} - Photo illustration pour article ${article.type}`}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="py-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux articles
            </Button>
          </div>

          {/* Article Header */}
          <article className="-mt-32 relative">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-rose-500 hover:bg-rose-600 text-white text-sm px-3 py-1">
                    {article.category}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {article.type}
                  </Badge>
                  <Separator orientation="vertical" className="h-5" />
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Eye className="h-4 w-4" />
                    <span>{article.views.toLocaleString()} vues</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {article.title}
                </h1>

                {/* Author and Date */}
                <div className="flex items-center justify-between mb-8 pb-8 border-b">
                  <div>
                    <p className="text-lg text-gray-700 font-medium">{article.author}</p>
                    <p className="text-sm text-gray-500">
                      Publié le {new Date(article.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 mr-2 hidden sm:block">Partager:</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('facebook')}
                      className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('twitter')}
                      className="hover:bg-sky-50 hover:text-sky-600 hover:border-sky-600 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('linkedin')}
                      className="hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Excerpt */}
                <div className="bg-gray-50 border-l-4 border-rose-500 p-6 mb-8 rounded-r-lg">
                  <p className="text-lg text-gray-700 italic leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  {article.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Share Section at Bottom */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center justify-center gap-4">
                    <Share2 className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700 font-medium">Partagez cet article</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('facebook')}
                      className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShare('twitter')}
                      className="hover:bg-sky-50 hover:text-sky-600 hover:border-sky-600"
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Articles similaires</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Link key={related.id} to={`/article/${related.id}`}>
                      <Card className="group overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={related.image}
                            alt={`${related.title} - ${related.category}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge className="mb-2 bg-rose-500 text-white">
                            {related.category}
                          </Badge>
                          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-rose-500 transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                            {related.excerpt}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
