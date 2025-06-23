import { getArticleLink } from '@/lib/utils';
import type { IArticle } from '@/types/interfaces';

interface ArticleCardMediumProps {
  article: IArticle;
}

const ArticleCardMedium: React.FC<ArticleCardMediumProps> = ({ article }) => {
  return (
    <a
      href={getArticleLink(article)}
      className="block group overflow-hidden border border-blue-300 hover:shadow-lg transition-shadow duration-500 bg-white rounded-xl"
      aria-label={`Читать статью: ${article.title}`}
    >
      {/* Картинка сверху */}
      <div className="relative w-full h-60 overflow-hidden rounded-t-xl">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* Бейдж типа */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs font-semibold px-3 py-1 rounded shadow-md select-none">
          {article.type}
        </div>
      </div>

      {/* Текст под картинкой */}
      <div className="p-5 flex flex-col h-full">
        <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>

        <p className="mt-2 text-blue-700 text-base line-clamp-3 leading-relaxed flex-grow">
          {article.summary}
        </p>

        <p className="mt-4 text-sm text-blue-400 select-none">
          {new Date(article.published_date ?? '').toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      {/* Нижняя полоса при ховере */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl"></div>
    </a>
  );
};

export default ArticleCardMedium;
