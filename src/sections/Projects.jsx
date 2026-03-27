import { useRef, useEffect } from 'react';
import { Github, ExternalLink, ShoppingBag, Shield, MessageSquare } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    icon: <ShoppingBag size={28} />,
    featured: true,
    title: 'Baba Brand Fashion',
    subtitle: 'E-commerce Web Application',
    description:
      'A full-featured e-commerce platform for fashion retail. Browse products, add to cart, and enjoy a seamless shopping experience with a clean, responsive UI.',
    tags: ['React.js', 'Node.js', 'CSS3', 'REST API'],
    features: ['Product Listing & Search', 'Shopping Cart', 'Responsive UI', 'Clean Design'],
    github: 'https://github.com/subrajitjena',
    live: null,
  },
  {
    icon: <Shield size={28} />,
    featured: false,
    title: 'Digital Gatepass Management',
    subtitle: 'Entry/Exit Tracking System',
    description:
      'A digital system to manage and track entry and exit of individuals in an organization. Features an admin dashboard with user management and real-time logging.',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'HTML/CSS'],
    features: ['Entry/Exit Tracking', 'Admin Dashboard', 'User Management', 'Audit Logs'],
    github: 'https://github.com/subrajitjena',
    live: null,
  },
  {
    icon: <MessageSquare size={28} />,
    featured: false,
    title: 'Feedback Management System',
    subtitle: 'Data Collection & Analysis',
    description:
      'A platform that streamlines feedback collection and analysis. Users can submit structured feedback while admins manage, view, and respond through a clean panel.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'PostgreSQL'],
    features: ['Feedback Submission', 'Admin Panel', 'Data Handling', 'Validation'],
    github: 'https://github.com/subrajitjena',
    live: null,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container" ref={sectionRef}>
        <div className="section-title">
          <h2><span className="line-num">03.</span> Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`project-card ${p.featured ? 'featured' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {p.featured && <div className="featured-badge">⭐ Featured</div>}

              <div className="project-top">
                <div className="project-icon">{p.icon}</div>
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live Demo" className="project-link">
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="project-link">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-desc">{p.description}</p>

              <ul className="project-features">
                {p.features.map(f => (
                  <li key={f}><span className="feat-dot">▸</span>{f}</li>
                ))}
              </ul>

              <div className="project-tags">
                {p.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline project-btn">
                <Github size={16} /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
