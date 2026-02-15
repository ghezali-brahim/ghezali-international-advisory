import { LocaleLink } from '../components/LocaleLink';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag } from 'lucide-react';
import { BlogRelatedLinks } from '../components/InternalLinks';
import type { BlogPost } from '../lib/blog';

interface BlogArticleProps {
  post: BlogPost;
}

const BlogArticle = ({ post }: BlogArticleProps) => {
  const wordCount = post.content ? post.content.split(/\s+/).filter(Boolean).length : 0;
  const tags = post.tags ?? [];

  return (
    <div className="pt-16">
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocaleLink href="/blog" className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </LocaleLink>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center mb-8 text-gray-600">
            <User className="h-5 w-5 mr-2" />
            <span className="mr-6 font-medium">{post.author}</span>
            <Calendar className="h-5 w-5 mr-2" />
            <span className="mr-6">{post.date ? new Date(post.date).toLocaleDateString('fr-FR') : ''}</span>
            <Clock className="h-5 w-5 mr-2" />
            <span className="mr-6">{post.readTime ?? ''}</span>
            {wordCount > 0 && <span className="text-sm">{wordCount} mots</span>}
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span key={tag} className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <span className="text-gray-600 font-medium">Partager :</span>
            <button type="button" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="h-4 w-4 mr-1" />
              LinkedIn
            </button>
            <button type="button" className="inline-flex items-center text-gray-600 hover:text-blue-400 transition-colors">
              <Share2 className="h-4 w-4 mr-1" />
              Twitter
            </button>
            <button type="button" className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors">
              <Bookmark className="h-4 w-4 mr-1" />
              Sauvegarder
            </button>
          </div>
        </div>
      </section>

      {post.image && (
        <section className="py-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={post.image}
              alt=""
              className="w-full h-96 object-cover rounded-xl"
              loading="eager"
            />
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{ lineHeight: '1.7', fontSize: '18px', color: '#374151' }}
          />
        </div>
      </section>

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
            <LocaleLink href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-block">
              Demander une évaluation gratuite
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogRelatedLinks />
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
