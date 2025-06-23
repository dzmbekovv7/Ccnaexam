import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardSmall from '../shared/article-card/article-card-small'
import ArticleCardSmallSkeleton from '../shared/article-card/article-card-small-skeleton'

export function FeaturedArticlesSection() {
  const { data: articles, isLoading } = useGetArticles()

  return (
    <section className="relative bg-gradient-to-br from-[#001f3f] via-[#004a70] to-[#002b4d] py-20 lg:py-32 overflow-hidden text-white">
      {/* Плавающие геометрические частицы - синие и оранжевые */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/4 w-2 h-44 bg-gradient-to-b from-cyan-400 to-transparent transform rotate-12 opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-2 bg-gradient-to-r from-orange-400 to-transparent transform -rotate-45 opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/6 w-1 h-52 bg-gradient-to-t from-blue-500 to-transparent transform rotate-45 opacity-35"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-cyan-300 transform rotate-45 opacity-25 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Заголовок с акцентами и линиями */}
        <div className="text-center mb-20 relative px-6 max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-tr from-orange-500/30 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/40 to-blue-700/30 rounded-full animate-spin-slow"></div>
          <div className="absolute top-4 right-1/3 w-12 h-12 border-4 border-orange-400 rounded-full opacity-80 animate-bounce"></div>

          <h2 className="relative text-6xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-400 select-none">
            <span className="block mb-2 cursor-default">
              CERTIFICATION
            </span>
            <span className="block text-orange-400 drop-shadow-lg hover:-translate-x-4 transition-transform duration-500 cursor-default">
              PREP INSIGHTS
            </span>
          </h2>

          {/* Имитация динамической линии под заголовком */}
          <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-70 rounded-full animate-pulse-slow"></div>

          {/* Подзаголовок */}
          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            <p className="text-xl sm:text-2xl font-semibold text-cyan-200">
              Unlock the secrets behind <span className="font-bold text-orange-400">CCNA, CompTIA</span> and other top certifications.
            </p>
            <p className="text-lg text-blue-200 italic">
              Stay ahead with expert articles, study tips, and exam strategies tailored for IT professionals.
            </p>
          </div>

          {/* Разделитель */}
          <div className="mt-10 flex justify-center items-center space-x-8">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-6 h-6 bg-orange-400 rounded-full shadow-lg animate-bounce"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Сетка статей */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
            <div className="w-32 h-32 border-4 border-cyan-300 transform rotate-45 opacity-15 animate-spin-slow"></div>
            <div className="absolute inset-0 w-20 h-20 border-2 border-orange-400 rounded-full opacity-25 animate-ping"></div>
          </div>

          <div className="relative z-10 grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`
                      relative bg-gradient-to-br from-blue-900 to-cyan-900 animate-pulse shadow-xl transform hover:scale-105 transition-all duration-500
                      ${index % 3 === 0
                        ? 'clip-path-slant-left'
                        : index % 3 === 1
                        ? 'clip-path-corner-cut'
                        : 'clip-path-slant-right'}
                    `}
                  >
                    <ArticleCardSmallSkeleton />
                  </div>

                  <div
                    className={`
                      absolute -top-3 -right-3 w-8 h-8 rounded-full animate-pulse
                      ${index % 2 === 0 ? 'bg-blue-700' : 'bg-cyan-600'}
                      shadow-lg
                    `}
                  ></div>
                </div>
              ))
            ) : (
              articles?.slice(0, 3).map((article, index) => (
                <div key={article.id} className="group relative">
                  <div
                    className="
                      relative overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 min-h-[400px] flex flex-col
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent group-hover:from-white/60 transition-all duration-500"></div>
                    <div className="relative z-10 p-3 flex-1 flex flex-col">
                      <ArticleCardSmall article={article} />
                    </div>

                    <div className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity duration-500">
                      <div className="absolute top-4 left-4 w-6 h-6 border-2 border-cyan-400 transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                      <div className="absolute bottom-4 right-4 w-4 h-4 bg-orange-400 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-cyan-500 group-hover:w-16 transition-all duration-500"></div>
                    </div>
                  </div>

                  <div
                    className={`
                      absolute -top-3 -right-3 w-10 h-10 rounded-full shadow-lg transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center
                      ${index % 4 === 0 ? 'bg-gradient-to-br from-orange-400 to-red-500' : ''}
                      ${index % 4 === 1 ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : ''}
                      ${index % 4 === 2 ? 'bg-gradient-to-br from-blue-400 to-indigo-600' : ''}
                      ${index % 4 === 3 ? 'bg-gradient-to-br from-purple-400 to-pink-500' : ''}
                    `}
                  >
                    <div className="w-3 h-3 bg-white rounded-full group-hover:bg-gray-900 transition-colors duration-300"></div>
                  </div>

                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gray-900 text-white font-bold text-sm flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Кнопка «Посмотреть все статьи» */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-orange-400 transform rotate-1 opacity-70 rounded-lg"></div>

            <a
              href="/blog"
              className="relative group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white font-bold text-lg lg:text-xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-lg"
              style={{ clipPath: 'polygon(0 0, 90% 0, 100% 30%, 90% 100%, 0 100%)' }}
            >
              <span className="flex items-center">
                VIEW ALL CERTIFICATION ARTICLES
                <div className="ml-4 w-8 h-8 bg-white/20 flex items-center justify-center transform group-hover:translate-x-3 group-hover:rotate-12 transition-all duration-300 rounded-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </span>
            </a>

            <div className="absolute -top-4 -right-4 w-6 h-6 bg-orange-400 transform rotate-45 animate-bounce rounded-md"></div>
            <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Нижняя декоративная линия */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
          <div className="w-2 h-2 bg-cyan-400 transform rotate-45 rounded-sm"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
