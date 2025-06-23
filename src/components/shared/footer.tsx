import { Link } from "react-router";
export function Footer() {
  return (
    <footer className="relative bg-blue-900 text-white overflow-hidden py-16 px-6">
      {/* Анимированные круги */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-4 border-blue-500 opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-16 right-20 w-32 h-32 rounded-full border-2 border-blue-400 opacity-20 animate-spin-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border-4 border-blue-600 opacity-25 animate-ping-slow"></div>

      {/* Анимированные линии */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 animate-line-move"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 animate-line-move-reverse"></div>

      {/* Контент футера */}
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-widest mb-6">
          CCNAEXAM
        </h1>
        <p className="max-w-xl mx-auto text-blue-200 font-light leading-relaxed">
          Your trusted source for CCNA exam preparation — mastering networks with confidence and clarity.
        </p>
        <div className="mt-10 flex justify-center space-x-8">
          <Link to="/" className="text-blue-300 hover:text-white transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-blue-300 hover:text-white transition-colors duration-300">About</Link>
          <Link to="/contacts" className="text-blue-300 hover:text-white transition-colors duration-300">Contacts</Link>
          <Link to="/blog" className="text-blue-300 hover:text-white transition-colors duration-300">Blog</Link>
        </div>
      </div>

    </footer>
  );
}
