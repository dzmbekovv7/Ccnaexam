export function AboutSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-24">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-36 h-36 bg-blue-400 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-1/4 w-28 h-28 bg-cyan-400 rounded-full blur-2xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Верхний заголовок */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Success in Your <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              CCNA Exams
            </span> Starts Here
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Unlock your potential with expert tips, hands-on labs, and proven strategies tailored for the toughest networking certification.
          </p>
        </div>

        {/* Картинки и центральный текст */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-14">
          {/* Левая картинка */}
          <div className="md:w-1/3">
            <img
              src="https://cdn.prod.website-files.com/6593ab1e4ad7e8ac71652264/6593ab1e4ad7e8ac71652c83_pexels-andrea-piacquadio-3768172.jpeg"
              alt="Studying for exams"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Текст в центре */}
          <div className="md:w-1/3 text-left">
            <h3 className="text-3xl font-bold text-blue-700 mb-5">
              Prepare Smart, Pass Fast
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our platform combines comprehensive theory with real-world scenarios, ensuring you not only learn but understand.
            </p>
            <p className="mt-4 text-gray-600">
              Join thousands who’ve passed with flying colors by studying smarter, not harder.
            </p>
          </div>

          {/* Правая картинка */}
          <div className="md:w-1/3">
            <img
              src="https://seofiles.s3.amazonaws.com/seo/media/uploads/2018/03/19/nebosh-examination-techniques.jpg"
              alt="Exam success"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Нижняя часть — блок про подготовку */}
        <div className="mt-24 bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-10 py-14 rounded-3xl shadow-2xl">
          <h3 className="text-4xl font-extrabold mb-6 leading-tight">
            🎓 Your Pathway to Certification Success
          </h3>
          <p className="text-xl max-w-3xl mx-auto font-light">
            Comprehensive guides, interactive quizzes, and expert advice all designed to boost your confidence and exam readiness.
          </p>

          <a
            href="/blog"
            className="inline-block mt-10 px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-full hover:bg-gray-100 transition"
          >
            Explore Study Resources
          </a>
        </div>
      </div>
    </section>
  )
}
