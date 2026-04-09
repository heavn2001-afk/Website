import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "CineStars - Actualités Cinéma, Séries & Célébrités",
  description = "Découvrez les dernières actualités du monde du cinéma, des séries et des célébrités. Interviews exclusives, critiques de films et analyses approfondies.",
  keywords = "cinéma, films, séries, célébrités, actualités entertainment, critiques films, interviews, Hollywood",
  image = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  url = "https://entertainment-hub-120.preview.emergentagent.com",
  type = "website",
  author = "CineStars"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="CineStars" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
