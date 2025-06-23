import {
	ArticleComments,
	ArticleContent,
	ArticleFeatured,
	ArticleHeader,
	ArticleLatest,
	ArticleNavigation,
	ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
	const { slug } = useParams()

	const { data: article } = useGetArticleBySlug(
		slug || ''
	)
	const { data: articles } = useGetArticles()

	if (!article) {
		return (
			<div className='relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden'>
				{/* Error particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-400 transform rotate-45 opacity-20 animate-spin-slow'></div>
					<div className='absolute bottom-1/3 right-1/4 w-2 h-40 bg-gradient-to-t from-red-500 to-transparent opacity-30'></div>
				</div>
				
				<Container>
					<div className='relative z-10 py-20 flex items-center justify-center min-h-screen'>
						<div className='text-center space-y-8'>
							<div className='w-24 h-24 mx-auto bg-red-500 transform rotate-45 flex items-center justify-center'>
								<div className='text-white text-2xl font-bold transform -rotate-45'>404</div>
							</div>
							<div className='space-y-4'>
								<h2 className='text-4xl font-black text-white'>Height Not Found</h2>
								<p className='text-gray-300 text-lg'>This article has disappeared into the clouds</p>
								<a href='/blog' className='inline-block mt-6 px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold hover:scale-105 transform transition-all duration-300'>
									Return to Explorations
								</a>
							</div>
						</div>
					</div>
				</Container>
			</div>
		)
	}

	return (
		<div className='relative bg-gradient-to-br from-white via-gray-50 to-indigo-50 min-h-screen overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-16 left-1/6 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/4 right-1/5 w-28 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/3 left-1/4 w-1 h-52 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
				<div className='absolute bottom-1/4 right-1/3 w-16 h-16 bg-violet-100 transform rotate-45 opacity-30'></div>
			</div>

		<Container>
  <div className="relative z-10 py-12 lg:py-20">
    {/* Hero Section with Blue Geometric Design */}
    <div className="relative mb-16">
      {/* Background geometric accent */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-400/10 transform -skew-y-1 origin-top-left"></div>

      {/* Article Header with blue border */}
      <div
        className="relative bg-white/80 backdrop-blur-sm shadow-xl border-l-8 border-blue-600 p-8 lg:p-12 mb-12 transform hover:scale-[1.02] transition-all duration-500"
        style={{ clipPath: 'polygon(0 0, 97% 0, 100% 15%, 97% 100%, 0 100%)' }}
      >
        <ArticleHeader article={article} />

        {/* Floating blue accent elements */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-700 transform rotate-45 flex items-center justify-center shadow-lg">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
      </div>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
      {/* Left Column - Article Content */}
      <div className="xl:col-span-8 order-2 xl:order-1">
        <div className="space-y-12">
          {/* Article Navigation with Blue Design */}
          <div
            className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 lg:p-8 transform hover:scale-[1.01] transition-all duration-300"
            style={{ clipPath: 'polygon(0 0, 95% 0, 100% 20%, 95% 100%, 0 100%)' }}
          >
            {/* Navigation accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>

            <ArticleNavigation currentArticle={article} articles={articles} />

            {/* Floating decorative blue element */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 transform rotate-45"></div>
          </div>

          {/* Article Content with Blue Border */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-white via-blue-50 to-blue-100 transform rotate-1 opacity-60 shadow-2xl"></div>

            <div className="relative bg-white/90 backdrop-blur-sm p-8 lg:p-12 shadow-xl border-t-4 border-blue-600">
              <ArticleContent article={article} />

              {/* Content decorative blue elements */}
              <div className="absolute top-4 right-4 w-4 h-16 bg-gradient-to-b from-blue-600 to-transparent opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-16 h-4 bg-gradient-to-r from-blue-500 to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Sidebar with Blue Design */}
      <div className="xl:col-span-4 order-1 xl:order-2">
        <div className="sticky top-8 space-y-8">
          {/* Comments Section */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-blue-500/20 transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-60"></div>
            <div
              className="relative bg-white p-6 lg:p-8 shadow-xl border-l-4 border-blue-600 transform group-hover:scale-[1.02] transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 10% 100%, 0 90%)' }}
            >
              <ArticleComments article={article} />

              {/* Section accent */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="text-white text-xs font-bold transform -rotate-45">💬</div>
              </div>
            </div>
          </div>

          {/* Latest Articles */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-blue-400/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-60"></div>
            <div
              className="relative bg-white p-6 lg:p-8 shadow-xl border-l-4 border-blue-600 transform group-hover:scale-[1.02] transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)' }}
            >
              <ArticleLatest articles={articles} />

              {/* Section accent */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="text-white text-xs font-bold transform -rotate-45">🆕</div>
              </div>
            </div>
          </div>

          {/* Popular Articles */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-blue-500/20 transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-60"></div>
            <div
              className="relative bg-white p-6 lg:p-8 shadow-xl border-l-4 border-blue-600 transform group-hover:scale-[1.02] transition-all duration-300"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 0 100%, 0 10%)' }}
            >
              <ArticlePopular articles={articles} />

              {/* Section accent */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="text-white text-xs font-bold transform -rotate-45">🔥</div>
              </div>
            </div>
          </div>

          {/* Featured Articles */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-700/20 to-blue-800/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-60"></div>
            <div
              className="relative bg-white p-6 lg:p-8 shadow-xl border-l-4 border-blue-700 transform group-hover:scale-[1.02] transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }}
            >
              <ArticleFeatured articles={articles} />

              {/* Section accent */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-900 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="text-white text-xs font-bold transform -rotate-45">⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>;

		</div>
	)
}

// Add styles to head if they don't exist yet
if (typeof document !== 'undefined' && !document.getElementById('article-page-styles')) {
	const style = document.createElement('style')
	style.id = 'article-page-styles'
	style.textContent = `
		/* Custom animation for slow spin */
		@keyframes spin-slow {
			from { 
				transform: rotate(0deg); 
			}
			to { 
				transform: rotate(360deg); 
			}
		}

		.animate-spin-slow {
			animation: spin-slow 20s linear infinite;
		}

		/* Enhanced hover effects */
		.group:hover .group-hover:rotate-2 {
			transform: rotate(2deg);
		}

		.group:hover .group-hover:-rotate-2 {
			transform: rotate(-2deg);
		}

		.group:hover .group-hover:scale-[1.02] {
			transform: scale(1.02);
		}

		/* Clip-path utilities for geometric shapes */
		.clip-path-slant-left {
			clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
		}

		.clip-path-slant-right {
			clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
		}

		.clip-path-corner-cut {
			clip-path: polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 15%);
		}

		/* Responsive adjustments */
		@media (max-width: 768px) {
			.clip-path-slant-left,
			.clip-path-slant-right,
			.clip-path-corner-cut {
				clip-path: none;
			}
			
			/* Simplify geometric shapes on mobile */
			[style*="clip-path"] {
				clip-path: none !important;
			}
		}

		/* Smooth scroll behavior */
		html {
			scroll-behavior: smooth;
		}

		/* Enhanced focus states for accessibility */
		.focus-visible:focus {
			outline: 2px solid #8b5cf6;
			outline-offset: 2px;
		}

		/* Performance optimizations */
		.backdrop-blur-sm {
			backdrop-filter: blur(4px);
			-webkit-backdrop-filter: blur(4px);
		}

		/* Sticky sidebar optimization */
		.sticky {
			position: -webkit-sticky;
			position: sticky;
		}

		/* Button hover optimizations */
		a[class*="hover:scale-"] {
			will-change: transform;
		}
	`
	document.head.appendChild(style)
}
