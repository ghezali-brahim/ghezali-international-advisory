import React from 'react';
import SEO from '../components/SEO';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag } from 'lucide-react';
import { getSEOConfig, structuredData } from '../config/seo';
import { BlogRelatedLinks } from '../components/InternalLinks';

interface BlogArticleProps {
  articleId: string;
}

const BlogArticle = ({ articleId }: BlogArticleProps) => {
  // En réalité, vous récupéreriez l'article depuis une API ou un CMS
  const article = {
    id: articleId,
    title: "Comment valoriser votre ETI avant une cession : Guide complet 2024",
    content: `
      <h2>Introduction</h2>
      <p>La valorisation d'une ETI avant cession est un enjeu crucial qui peut faire la différence entre une sortie réussie et une opportunité manquée. Dans ce guide complet, nous vous révélons les méthodes exclusives utilisées par les plus grands cabinets de conseil pour maximiser la valeur de votre entreprise.</p>
      
      <h2>1. Comprendre les multiples de valorisation</h2>
      <p>Les multiples de valorisation varient considérablement selon les secteurs et la qualité de l'entreprise. Voici les multiples moyens observés en 2024 :</p>
      
      <ul>
        <li><strong>Secteur industriel :</strong> 8-12x EBITDA</li>
        <li><strong>Services B2B :</strong> 6-10x EBITDA</li>
        <li><strong>Technologie :</strong> 10-20x EBITDA</li>
        <li><strong>Distribution :</strong> 4-8x EBITDA</li>
      </ul>
      
      <h2>2. Les 5 leviers de valorisation</h2>
      
      <h3>2.1 Optimisation opérationnelle</h3>
      <p>L'amélioration de la performance opérationnelle peut augmenter votre EBITDA de 15 à 30%. Les axes d'optimisation incluent :</p>
      <ul>
        <li>Rationalisation des processus</li>
        <li>Optimisation de la supply chain</li>
        <li>Digitalisation des outils</li>
        <li>Amélioration de la productivité</li>
      </ul>
      
      <h3>2.2 Développement commercial</h3>
      <p>Une stratégie commerciale structurée peut générer 20 à 40% de croissance supplémentaire. Focus sur :</p>
      <ul>
        <li>Segmentation client optimisée</li>
        <li>Nouveaux canaux de distribution</li>
        <li>Expansion géographique</li>
        <li>Innovation produits/services</li>
      </ul>
      
      <h2>3. Préparation financière</h2>
      <p>Une préparation financière rigoureuse est essentielle pour rassurer les acquéreurs :</p>
      
      <h3>3.1 Reporting financier</h3>
      <ul>
        <li>Comptabilité aux normes IFRS</li>
        <li>Audit externe récent</li>
        <li>Due diligence préparée</li>
        <li>Projections fiables</li>
      </ul>
      
      <h3>3.2 Optimisation fiscale</h3>
      <p>Une optimisation fiscale légale peut réduire la dette nette et augmenter la valorisation de 10 à 15%.</p>
      
      <h2>4. Stratégie de mise en marché</h2>
      <p>Le processus de cession doit être orchestré avec précision :</p>
      
      <h3>4.1 Timing optimal</h3>
      <ul>
        <li>Cycle économique favorable</li>
        <li>Marché sectoriel porteur</li>
        <li>Performances financières au top</li>
        <li>Équipe dirigeante stable</li>
      </ul>
      
      <h3>4.2 Ciblage des acquéreurs</h3>
      <p>Une approche ciblée permet d'optimiser le processus et maximiser le prix :</p>
      <ul>
        <li>Acquéreurs stratégiques (synergies)</li>
        <li>Fonds de Private Equity</li>
        <li>Concurrents internationaux</li>
        <li>Family Offices</li>
      </ul>
      
      <h2>5. Étude de cas : ETI Industrielle</h2>
      <p><strong>Situation initiale :</strong> ETI de 80M€ CA, 8M€ EBITDA</p>
      <p><strong>Objectif :</strong> Valorisation optimale avant cession</p>
      
      <h3>Actions menées :</h3>
      <ol>
        <li>Audit opérationnel complet</li>
        <li>Restructuration des processus</li>
        <li>Développement commercial accéléré</li>
        <li>Optimisation financière</li>
      </ol>
      
      <p><strong>Résultats :</strong> EBITDA passé de 8M€ à 12M€ (+50%), multiple de 8x à 10x</p>
      <p><strong>Valorisation finale :</strong> 120M€ (+50% vs valorisation initiale)</p>
      
      <h2>6. Erreurs à éviter</h2>
      <p>Voici les principales erreurs qui peuvent faire chuter votre valorisation :</p>
      
      <ul>
        <li><strong>Préparation insuffisante :</strong> Données financières non fiables</li>
        <li><strong>Timing inapproprié :</strong> Cession en période de difficultés</li>
        <li><strong>Processus non structuré :</strong> Approche non professionnelle</li>
        <li><strong>Négociation mal préparée :</strong> Manque de leverage</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>La valorisation optimale d'une ETI avant cession nécessite une approche méthodique et une préparation rigoureuse. En appliquant les techniques exposées dans ce guide, vous pouvez augmenter significativement la valeur de votre entreprise et maximiser le prix de cession.</p>
      
      <p><strong>Prochaine étape :</strong> Contactez nos experts pour une évaluation personnalisée de votre entreprise et découvrez votre potentiel de valorisation.</p>
    `,
    excerpt: "Découvrez les méthodes exclusives pour maximiser la valeur de votre entreprise avant une cession. Multiples optimisés, valorisation augmentée de +40%.",
    author: "Ghezali",
    date: "2024-10-01",
    readTime: "12 min",
    category: "Valorisation",
    tags: ["valorisation entreprise", "cession", "M&A", "ETI", "multiples", "due diligence"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    wordCount: 2200
  };

  const seoConfig = {
    title: `${article.title} | GHEZALI Business Mastery`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
    canonical: `https://www.ghezali-business.com/blog/${articleId}`,
    ogImage: article.image
  };

  const breadcrumbData = structuredData.breadcrumb([
    { name: 'Accueil', url: 'https://www.ghezali-business.com/' },
    { name: 'Blog', url: 'https://www.ghezali-business.com/blog' },
    { name: article.title, url: `https://www.ghezali-business.com/blog/${articleId}` }
  ]);

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": "https://www.ghezali-business.com/team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GHEZALI Business Mastery",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ghezali-business.com/logo.png"
      }
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.ghezali-business.com/blog/${articleId}`
    },
    "wordCount": article.wordCount,
    "timeRequired": `PT${article.readTime.replace(' min', 'M')}`,
    "articleSection": article.category,
    "keywords": article.tags.join(', ')
  };

  return (
    <div className="pt-16">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        canonical={seoConfig.canonical}
        ogImage={seoConfig.ogImage}
        structuredData={[breadcrumbData, articleStructuredData]}
      />

      {/* Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center mb-8 text-gray-600">
            <User className="h-5 w-5 mr-2" />
            <span className="mr-6 font-medium">{article.author}</span>
            <Calendar className="h-5 w-5 mr-2" />
            <span className="mr-6">{new Date(article.date).toLocaleDateString('fr-FR')}</span>
            <Clock className="h-5 w-5 mr-2" />
            <span className="mr-6">{article.readTime}</span>
            <span className="text-sm">{article.wordCount} mots</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <span className="text-gray-600 font-medium">Partager :</span>
            <button className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="h-4 w-4 mr-1" />
              LinkedIn
            </button>
            <button className="inline-flex items-center text-gray-600 hover:text-blue-400 transition-colors">
              <Share2 className="h-4 w-4 mr-1" />
              Twitter
            </button>
            <button className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors">
              <Share2 className="h-4 w-4 mr-1" />
              Email
            </button>
            <button className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors">
              <Bookmark className="h-4 w-4 mr-1" />
              Sauvegarder
            </button>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={article.image}
            alt={`Illustration de l'article: ${article.title}`}
            className="w-full h-96 object-cover rounded-xl"
            loading="eager"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: '1.7',
              fontSize: '18px',
              color: '#374151'
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Prêt à valoriser votre entreprise ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent pour maximiser la valeur de votre ETI 
            et réussir votre opération de cession.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Demander une évaluation gratuite
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Télécharger notre guide M&A
            </button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogRelatedLinks />
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
