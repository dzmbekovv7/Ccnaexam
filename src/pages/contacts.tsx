import { ContactForm } from '../components/shared/contact-form';

export function ContactsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-3 h-48 bg-gradient-to-b from-cyan-400 to-transparent rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-3 bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-24 left-1/4 w-5 h-56 bg-gradient-to-t from-sky-400 to-transparent rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-52 h-52 border-4 border-cyan-500 rounded-full opacity-10 animate-spin-slow"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent animate-fade-slide-up">
            CCNAEXAM
          </h1>
          <p className="max-w-xl mx-auto text-lg font-light text-white/80 animate-fade-slide-up delay-200">
            Have questions about our CCNA preparation program, exam registration, or technical support?
            We're here to help you succeed in your certification journey.
          </p>
          <div className="mt-12 flex justify-center items-center space-x-8 animate-pulse delay-500">
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-white rounded-full shadow-lg"></div>
            <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse shadow-lg"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-white via-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-sky-100 py-24 px-6 sm:px-12 lg:px-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-10 relative animate-fade-slide-left">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-10 w-24 h-24 bg-cyan-400 opacity-15 rounded-full blur-xl animate-pulse"></div>
            <ContactForm />
          </div>

          {/* Text block */}
          <div className="animate-fade-slide-right">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent animate-gradient-move">
              Contact the CCNAEXAM Team
            </h2>
            <p className="text-slate-700 mb-6 text-lg leading-relaxed animate-fade-in">
              Whether you're stuck on a lab setup, unsure about the next step, or just need a nudge forward, our certified experts are one message away.
            </p>
            <p className="text-slate-600 italic mb-10 max-w-md animate-fade-in delay-200">
              “The goal of certification is not the piece of paper — it's the knowledge you gain along the way.”
            </p>
            <div className="flex space-x-5">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-white rounded-full shadow-md animate-pulse"></div>
              <div className="w-24 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl shadow-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-900 py-16 text-center text-white">
        <h3 className="text-3xl font-extrabold mb-5 animate-fade-slide-up bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent">
          READY TO START YOUR CERTIFICATION PATH?
        </h3>
        <p className="max-w-xl mx-auto mb-10 opacity-80 text-lg animate-fade-in delay-200">
          Submit your questions, receive guidance, or schedule a 1-on-1 consultation with our support team.
        </p>
        <div className="flex justify-center space-x-10 animate-pulse delay-500">
          <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-white rounded-full shadow-lg"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="w-28 h-1 bg-gradient-to-r from-white via-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideLeft {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-slide-up { animation: fadeSlideUp 1s ease forwards; }
        .animate-fade-slide-left { animation: fadeSlideLeft 1s ease forwards; }
        .animate-fade-slide-right { animation: fadeSlideRight 1s ease forwards; }
        .animate-fade-in { animation: fadeIn 1.2s ease forwards; }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 4s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
