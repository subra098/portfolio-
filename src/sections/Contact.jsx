import { useState, useRef, useEffect } from 'react';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) errs.message = 'Message is required.';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
    return errs;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    // Simulated submission
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container" ref={sectionRef}>
        <div className="section-title">
          <h2><span className="line-num">04.</span> Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Info Panel */}
          <div className="contact-info reveal-left">
            <h3>Let&apos;s work together</h3>
            <p>
              I&apos;m currently open to full-time roles, freelance projects, and exciting collaborations.
              Whether you have a project in mind or just want to say hi — my inbox is always open!
            </p>

            <div className="info-items">
              <a href="mailto:subrajjitj44@gmail.com" className="info-item">
                <div className="info-icon"><Mail size={18} /></div>
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-val">subrajjitj44@gmail.com</span>
                </div>
              </a>
              <div className="info-item">
                <div className="info-icon"><MapPin size={18} /></div>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-val">Bhubaneswar, Odisha</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://github.com/subrajitjena" target="_blank" rel="noreferrer" className="social-btn">
                <Github size={20} /> GitHub
              </a>
              <a href="https://linkedin.com/in/subrajitjena" target="_blank" rel="noreferrer" className="social-btn">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal-right">
            {status === 'success' ? (
              <div className="success-msg">
                <div className="success-icon">✓</div>
                <h4>Message Sent!</h4>
                <p>Thanks for reaching out, Subrajit will get back to you soon.</p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate id="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary submit-btn" id="submit-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <span className="btn-loading">Sending…</span>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
