import { Container } from '@/components/shared/container'
import { useState } from 'react'


export function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700  text-white overflow-hidden">
      {/* Background floating circles */}
      <div className="absolute top-20 left-1/4 w-40 h-40 rounded-full bg-blue-700 opacity-30 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-1/4 w-56 h-56 rounded-full border-4 border-blue-600 opacity-20 animate-spin-slow"></div>
      <div className="absolute top-1/2 right-20 w-28 h-28 rounded-full bg-blue-600 opacity-25 animate-ping-slow"></div>

      <Container className="relative z-10 py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        {/* Left text content */}
        <div className="lg:w-3/5 space-y-12">
          <h1 className="text-6xl font-extrabold leading-tight max-w-4xl">
            Master Your <span className="text-cyan-400">CCNA Exams</span> with Confidence
          </h1>
          <p className="text-xl max-w-3xl text-blue-200 leading-relaxed">
            Prepare for success with expert guidance, interactive lessons, and comprehensive resources designed to ensure you pass the CCNA certification on your first try.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-100">
            <div className="bg-blue-800 bg-opacity-30 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="font-bold text-2xl mb-2">Comprehensive Study Materials</h3>
              <p>
                Dive deep into networking concepts, practical labs, and exam-focused content to build solid knowledge.
              </p>
            </div>
            <div className="bg-blue-800 bg-opacity-30 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="font-bold text-2xl mb-2">Realistic Practice Exams</h3>
              <p>
                Test yourself with up-to-date practice questions that mimic the real CCNA exam format and difficulty.
              </p>
            </div>
            <div className="bg-blue-800 bg-opacity-30 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="font-bold text-2xl mb-2">Expert Video Tutorials</h3>
              <p>
                Learn from industry experts through clear, engaging video lessons that explain complex topics simply.
              </p>
            </div>
            <div className="bg-blue-800 bg-opacity-30 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="font-bold text-2xl mb-2">Community Support</h3>
              <p>
                Join a thriving community of learners to discuss questions, share tips, and stay motivated.
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:w-2/5 relative flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Network exam preparation"
            onLoad={() => setLoaded(true)}
            className={`rounded-3xl shadow-2xl transform transition-transform duration-1000 ${
              loaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
            loading="eager"
            decoding="async"
          />
        </div>
      </Container>
    </section>
  )
}
