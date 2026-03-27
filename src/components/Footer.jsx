import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <Code2 size={18} />
          <span>Subrajit Jena</span>
        </div>

        <p className="footer-tagline">
          Full Stack Developer · Building the web, one component at a time.
        </p>

        <div className="footer-links">
          <a href="https://github.com/subrajitjena" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-link">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/subrajitjena" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-link">
            <Linkedin size={20} />
          </a>
          <a href="mailto:subrajitjena@email.com" aria-label="Email" className="footer-link">
            <Mail size={20} />
          </a>
        </div>

        <p className="footer-copy">
          Designed &amp; Built with <Heart size={13} className="heart" /> by Subrajit Jena · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
