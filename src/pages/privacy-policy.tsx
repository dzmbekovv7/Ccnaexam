import { Container } from '../components/shared/container';

export const PrivacyPolicyPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-16 left-1/3 w-32 h-32 bg-cyan-500 opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-1/4 w-24 h-24 bg-blue-600 opacity-10 rounded-full blur-xl animate-bounce" />
        <div className="absolute top-1/2 left-1/5 w-1 h-64 bg-gradient-to-b from-cyan-400 to-transparent rotate-45 opacity-20" />
        <div className="absolute top-1/3 right-0 w-2 h-64 bg-gradient-to-t from-blue-500 to-transparent rotate-12 opacity-10" />
      </div>

      <Container className="relative z-10 py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-white bg-clip-text text-transparent drop-shadow">
              CCNAEXAM
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-blue-100 max-w-md leading-relaxed">
              Prepare smarter. Learn deeper. Secure your future in networking.
            </p>
          </div>

          <div className="text-right">
            <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
            <p className="mt-2 text-sm text-blue-200 max-w-xs">
              Learn how your data is collected, used, and protected during your exam preparation journey.
            </p>
          </div>
        </div>

        {/* Decorative Separator */}
        <div className="mt-14 flex justify-center items-center space-x-4">
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
          <div className="w-4 h-4 bg-blue-400 rotate-45" />
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
        </div>

        {/* Main Content Blocks */}
        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          {/* Item 1 */}
          <div className="relative border-l-4 border-cyan-400 pl-6 py-6 bg-slate-800/50 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
            <h4 className="text-2xl font-semibold text-white mb-2">1. What We Collect</h4>
            <p className="text-blue-100">
              We collect data like visit duration, browser info, and course progress to enhance your learning experience.
            </p>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-500 rotate-45"></div>
          </div>

          {/* Item 2 */}
          <div className="relative border-r-4 border-blue-500 pr-6 py-6 bg-slate-900/50 rounded-xl shadow-md text-right hover:scale-[1.02] transition-transform">
            <h4 className="text-2xl font-semibold text-white mb-2">2. Use of Information</h4>
            <p className="text-blue-100">
              We use your data to personalize study content, track progress, and improve the platform.
            </p>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-500 rotate-45"></div>
          </div>

          {/* Item 3 */}
          <div className="relative border-l-4 border-sky-400 pl-6 py-6 bg-slate-800/50 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
            <h4 className="text-2xl font-semibold text-white mb-2">3. Your Rights</h4>
            <p className="text-blue-100">
              You have full control over your data. You may request access, updates, or removal at any time.
            </p>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-sky-400 rotate-45"></div>
          </div>

          {/* Item 4 */}
          <div className="relative border-r-4 border-indigo-400 pr-6 py-6 bg-slate-900/50 rounded-xl shadow-md text-right hover:scale-[1.02] transition-transform">
            <h4 className="text-2xl font-semibold text-white mb-2">4. Policy Updates</h4>
            <p className="text-blue-100">
              Privacy policies evolve. Please revisit this page regularly for updates that may affect you.
            </p>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-indigo-400 rotate-45"></div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white">
            Still have questions?
          </h3>
          <p className="text-blue-200 text-lg mt-4 max-w-xl mx-auto">
            Reach out to our support team for more info on your data and privacy options.
          </p>
          <a
            href="/contacts"
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 transform transition"
          >
            Contact Support
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col lg:flex-row justify-between items-center text-sm text-blue-300 gap-4">
          <p>© 2025 CCNAEXAM — Smarter Learning for Network Engineers.</p>
          <p>Last updated: June 2025</p>
        </div>
      </Container>

      {/* Custom styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
