import { useRef, useEffect } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'HTML5',             level: 92 },
      { name: 'CSS3',              level: 88 },
      { name: 'JavaScript',        level: 85 },
      { name: 'React.js',          level: 82 },
      { name: 'Responsive Design', level: 88 },
    ],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Node.js',    level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'REST APIs',  level: 82 },
    ],
  },
  {
    title: 'Tools',
    emoji: '🛠️',
    skills: [
      { name: 'Git & GitHub',         level: 85 },
      { name: 'UI/UX Principles',     level: 78 },
      { name: 'VS Code',              level: 90 },
      { name: 'Responsive Testing',   level: 82 },
    ],
  },
];

function SkillBar({ name, level }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${level}%`;
        }
      },
      { threshold: 0.4 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-row">
      <div className="skill-label">
        <span>{name}</span>
        <span className="skill-pct text-teal">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-bar" ref={barRef} style={{ width: '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" className="skills-section">
      <div className="container" ref={sectionRef}>
        <div className="section-title">
          <h2><span className="line-num">02.</span> Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="skill-card"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="skill-card-header">
                <span className="skill-emoji">{cat.emoji}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map(s => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
