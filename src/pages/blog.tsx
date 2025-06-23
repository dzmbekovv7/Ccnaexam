import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { XIcon } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type') || ''
	const { data: articles = []} = useGetArticles()
	const filteredArticles = type
		? articles?.filter(article => article.type === type)
		: articles

	return (
<div className='relative min-h-screen  overflow-hidden'>

			<Container>
<section className='relative z-10 py-16 lg:py-24 '>
					
				  {/* Title */}
<div className='text-center mb-16'>
  <div className='relative inline-block'>


    {/* Main Title */}
    <div className='relative overflow-hidden'>
      <h1 className='text-5xl sm:text-6xl lg:text-7xl font-black leading-none text-blue-900'>
        <span className='block transform hover:-translate-y-1 transition-transform duration-500'>EXAM</span>
        <span className='block text-blue-900 transform hover:translate-y-1 transition-transform duration-500 -mt-3'>
          BLOG
        </span>
      </h1>

      {/* Divider */}
      <div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent transform -translate-y-1/2 opacity-50'></div>
    </div>
  </div>

  {/* Subtitle */}
  <div className='mt-8 space-y-4 px-4'>
<p className='text-xl lg:text-2xl text-blue-800 font-medium leading-relaxed max-w-4xl mx-auto'>
  Step into the world of networking excellence. <br className='hidden sm:block' />
  Your journey to becoming a <span className='text-blue-900 font-bold px-2 py-1 rounded-lg inline-block'>
    certified CCNA expert
  </span> starts here.
</p>

  </div>
</div>

			

		{/* Articles grid or empty state */}
{filteredArticles && filteredArticles.length > 0 ? (
  <div className="relative">
    {/* Soft glowing backdrop */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
      <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-600 opacity-20 blur-3xl animate-pulse"></div>
    </div>

    {/* Articles grid */}
    <div className="relative z-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
      {filteredArticles.map((article, index) => (
        <div
          key={article.id}
          className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
          style={{ minHeight: '420px' }}
        >
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-indigo-700 via-blue-700 to-transparent opacity-70 pointer-events-none"></div>

          <div className="relative p-6 flex flex-col h-full">
            <ArticleCardMedium article={article} />

            <button
              className="mt-auto self-start px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-full font-semibold text-sm shadow-md hover:from-indigo-600 hover:to-blue-700 transition-colors duration-300"
              aria-label={`Читать подробнее: ${article.title}`}
            >
              More →
            </button>
          </div>

          {/* Floating badge with index */}
          <div className="absolute top-4 left-4 bg-indigo-600 text-white font-bold px-3 py-1 rounded-full text-sm select-none shadow-md transform group-hover:scale-110 transition-transform duration-300">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
  /* Empty state */
  <div className="flex flex-col items-center justify-center py-28 px-6 text-center space-y-8">
    {/* Icon */}
    <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center shadow-inner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-3-3v6m9-6a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>

  </div>
)}


					{/* Bottom decorative line */}
					<div className='mt-20 flex justify-center space-x-8'>
						<div className='w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
						<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
						<div className='w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
					</div>
				</section>
			</Container>
		</div>
	)
}