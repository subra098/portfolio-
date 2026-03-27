import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-social">
        <a href="https://github.com/subrajitjena" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
        <a href="https://linkedin.com/in/subrajitjena" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
        <a href="mailto:subrajitj44@gmail.com" aria-label="Email"><Mail size={20} /></a>
        <div className="social-line" />
      </div>

      <div className="container hero-content">
        <div className="hero-grid">
          {/* Text Left */}
          <div className="hero-text">
            <p className="hero-greeting">Hey,I’m Subrajit Jena</p>
            <h1 className="hero-name">Subrajit Jena.</h1>
            <h2 className="hero-tagline">I build things for the web.</h2>
            <p className="hero-desc">
              I&apos;m a <span className="text-teal">Full Stack Developer</span> and B.Tech student 
            , I focus on building scalable and user-friendly web applications with clean design and strong backend architecture.
              I work across the stack using <span className="text-teal">React.js</span> for intuitive interfaces and  
              <span className="text-teal"> Node.js &amp; PostgreSQL</span> for efficient, data-driven systems. I enjoy turning ideas into practical products that are fast, responsive, and reliable.
              I’m always looking to improve my skills and take on projects that challenge me to build better and think deeper about real-world solutions. 
            </p>

            <div className="hero-ctas">
              <Link to="projects" smooth duration={600} offset={-70} className="btn btn-primary" id="view-projects-btn">
                View My Work <ChevronRight size={18} />
              </Link>
              <Link to="contact" smooth duration={600} offset={-70} className="btn btn-outline" id="contact-me-btn">
                Contact Me
              </Link>
            </div>
          </div>

          {/* Photo Right */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-frame">
              {/* Uses profile.jpg if it exists in public folder */}
              <img src="/profile.jpg" alt="Subrajit Jena" className="hero-photo" onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Subrajit+Jena&background=0a192f&color=64ffda&size=400'; }} />
              <div className="hero-photo-border"></div>
            </div>
          </div>
        </div>
      </div>

      <Link to="about" smooth duration={600} offset={-70} className="hero-scroll-down">
        <span>Scroll</span>
        <ArrowDown size={16} />
      </Link>
    </section>
  );
}
