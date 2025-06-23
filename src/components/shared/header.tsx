import { useLocation, Link } from 'react-router';
import { Container } from './container';
import { useMemo, useState } from 'react';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contacts' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy', href: '/privacy-policy' },
];

export function Header() {
  const location = useLocation();
  const isDark = useMemo(() =>
    ['/','/blog','/resources'].includes(location.pathname), [location.pathname]
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const headerBg = isDark
    ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700'
    : 'bg-white';

  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const linkHoverColor = isDark ? 'hover:text-cyan-400' : 'hover:text-blue-600';

  return (
    <header className={`relative overflow-hidden transition-colors duration-500 shadow-md ${headerBg}`}>
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-400 opacity-10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-indigo-500 opacity-10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-10 left-1/2 w-2 h-32 bg-gradient-to-b from-blue-500 to-transparent rotate-45 opacity-10"></div>
      </div>

      <Container>
        <div className="relative z-10 flex items-center justify-between py-6 lg:py-8">
          {/* Left Nav */}
              {/* Logo */}
          <div className="flex flex-col items-center">
            <div className={`text-2xl lg:text-3xl font-extrabold ${textColor}`}>CCNAEXAM</div>
            <div className="text-xs font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Master Your Network
            </div>
          </div>



          {/* Right Nav */}
          <nav className="hidden md:flex gap-6">
            {LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium px-4 py-2 rounded-full transition ${textColor} ${linkHoverColor}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-8 h-8 flex flex-col justify-center items-center z-50 ${textColor}`}
          >
            <span className={`w-6 h-0.5 bg-current transition ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current my-1 transition ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-slate-900 z-40 transform ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 md:hidden`}>
        <Container>
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-white">
            {LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold hover:text-cyan-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
