import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home',     to: 'hero' },
  { label: 'About',    to: 'about' },
  { label: 'Skills',   to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact',  to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="hero" smooth duration={500} className="nav-logo" onClick={() => setMenuOpen(false)}>
          <Code2 size={22} strokeWidth={2.5} />
          <span>SJ<span className="logo-dot">.</span></span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              spy
              activeClass="active"
              className="nav-link"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="nav-num">0{i + 1}. </span>
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/subrajitjena"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline nav-resume-btn"
          >
            Resume
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              spy
              activeClass="active"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              <span className="nav-num">0{i + 1}. </span>
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/subrajitjena"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ marginTop: '1rem', transitionDelay: menuOpen ? '300ms' : '0ms' }}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
