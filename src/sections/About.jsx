import { useEffect, useRef } from 'react';
import { MapPin, GraduationCap, Code2 } from 'lucide-react';
import './About.css';

function useScrollReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

export default function About() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section id="about" className="about-section">
      <div className="container" ref={sectionRef}>
        <div className="section-title">
          <h2><span className="line-num">01.</span> About Me</h2>
        </div>

        <div className="about-grid">
          {/* Text */}
          <div className="about-text reveal-left">
            <p>
              Hello! I&apos;m <strong className="text-teal">Subrajit Jena</strong>, a passionate Full Stack Developer
              currently pursuing my B.Tech .I thrive at the intersection of
              design and engineering — building experiences that are not only functional but feel great to use.
            </p>
            <p>
              My journey in development started with curiosity about &quot;how websites work,&quot; and it quickly
              grew into a deep passion for writing clean code and solving real-world problems. I work
              comfortably across the entire stack — from pixel-perfect <strong className="text-teal">React UIs</strong> to
              robust <strong className="text-teal">Node.js + PostgreSQL</strong> backends.
            </p>
            <p>
              I am actively developing production-ready applications, contributing to open-source, and
              continuously leveling up my engineering skills. I believe great software is about
              empathy — understanding the user&apos;s needs and crafting solutions around them.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <MapPin size={16} className="detail-icon" />
                <span>Bhubaneswar, Odisha</span>
              </div>
              <div className="detail-item">
                <GraduationCap size={16} className="detail-icon" />
                <span>B.Tech — 8th Semester</span>
              </div>
              <div className="detail-item">
                <Code2 size={16} className="detail-icon" />
                <span>Open to Work &amp; Collaboration</span>
              </div>
            </div>
          </div>

          {/* Photo / Card */}
          <div className="about-visual reveal-right">
            <div className="about-card">
              <div className="about-avatar">
                <span>SJ</span>
              </div>
              <div className="about-card-info">
                <h3>Subrajit Jena</h3>
                <p>Full Stack Developer</p>
                <div className="about-stats">
                  <div className="stat">
                    <span className="stat-num text-teal">7+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  {/* <div className="stat">
                    <span className="stat-num text-teal">7th</span>
                    <span className="stat-label">Semester</span>
                  </div> */}
                  <div className="stat">
                    <span className="stat-num text-teal">∞</span>
                    <span className="stat-label">Curiosity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
