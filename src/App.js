import React, { useState, useEffect } from 'react';
import './App.css';

/* =============================================
   DATA
============================================= */
const skills = [
  {
    icon: '📱',
    title: 'Mobile Development',
    tags: [
      { label: 'Mobile App Dev', color: '' },
      { label: 'Flutter', color: '' },
      { label: 'Dart', color: '' },
      { label: 'App Deployment', color: '' },
    ],
  },
  {
    icon: '🌐',
    title: 'Web Development',
    tags: [
      { label: 'HTML', color: 'cyan' },
      { label: 'CSS', color: 'cyan' },
      { label: 'JavaScript', color: 'cyan' },
      { label: 'MySQL', color: 'cyan' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Programming Languages',
    tags: [
      { label: 'Python', color: 'emerald' },
      { label: 'PHP', color: 'emerald' },
      { label: 'JavaScript', color: 'emerald' },
      { label: 'Dart', color: 'emerald' },
    ],
  },
  {
    icon: '🔧',
    title: 'Frameworks & Tools',
    tags: [
      { label: 'React.js', color: 'pink' },
      { label: 'Node.js', color: 'pink' },
      { label: 'CodeIgniter', color: 'pink' },
      { label: 'Django', color: 'pink' },
      { label: 'Flutter', color: 'pink' },
    ],
  },
];

const achievements = [
  { icon: '🏛️', title: 'Hack4Gov', org: 'Butuan City' },
  { icon: '🎤', title: 'Pitching Competition', org: 'National Innovation Day' },
  { icon: '🚀', title: 'Elev8PH 2025 Startup Challenge', org: 'Hack4Smarter Butuan' },
  { icon: '🤖', title: 'The AI Advantage', org: 'AI & Organization Seminar' },
  { icon: '📡', title: 'Omada Network Training', org: 'OCNA Wireless Certification' },
];

// Certificate entries — files go in /public/cerificates/
// type: 'pdf' | 'image'
const certificates = [
  {
    id: 1,
    title: 'The AI Advantage',
    org: 'Understanding AI & Why It Matters',
    file: 'AI_Advantage.pdf',
    type: 'pdf',
  },
  {
    id: 2,
    title: 'Omada Network Training',
    org: 'OCNA Wireless — Armando V. Loro',
    file: 'Omada_Certificate_Template_A4_OCNA Wireless_Armando V. Loro.pdf',
    type: 'pdf',
  },
  {
    id: 3,
    title: 'Hack4Gov',
    org: 'Butuan City',
    file: 'Hack4Gov.jpg',
    type: 'image',
  },
  {
    id: 4,
    title: 'Pitching Competition',
    org: 'National Innovation Day',
    file: 'Pitching.jpg',
    type: 'image',
  },
  {
    id: 5,
    title: 'Elev8PH 2025 Startup Challenge',
    org: 'Hack4Smarter Butuan',
    file: 'Elev8PH.jpg',
    type: 'image',
  },
];

/* =============================================
   COMPONENTS
============================================= */

// Navbar
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none' }}>
      <div className="navbar-inner">
        <a href="#hero" className="nav-logo" id="nav-logo">AVL</a>
        <ul className="nav-links">
          <li><a href="#about" id="nav-about">About</a></li>
          <li><a href="#skills" id="nav-skills">Skills</a></li>
          <li><a href="#experience" id="nav-experience">Experience</a></li>
          <li><a href="#education" id="nav-education">Education</a></li>
          <li><a href="#projects" id="nav-projects">Projects</a></li>
          <li><a href="#certificates" id="nav-certificates">Certificates</a></li>
          <li><a href="#contact" id="nav-contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// Lightbox
function Lightbox({ src, title, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" id="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" id="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
        <img src={src} alt={title} />
      </div>
    </div>
  );
}

/* =============================================
   MAIN APP
============================================= */
function App() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, title) => setLightbox({ src, title });
  const closeLightbox = () => setLightbox(null);

  return (
    <div className="portfolio">
      {/* Animated Background */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <Navbar />

      {/* ============================
          HERO
      ============================ */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            {/* Text */}
            <div className="hero-text">
              <span className="hero-badge">
                <span className="dot" />
                Available for Opportunities
              </span>
              <h1 className="hero-name" id="hero-name">
                Armando V. <span className="gradient-text">Loro Jr.</span>
              </h1>
              <p className="hero-role" id="hero-role">Full Stack Developer & Mobile App Specialist</p>

              <div className="hero-contact" id="hero-contact">
                <span className="contact-chip">
                  <span className="icon">📍</span>
                  Sta. Josefa, Agusan del Sur, Philippines
                </span>
                <span className="contact-chip">
                  <span className="icon">📧</span>
                  armandoloro63@gmail.com
                </span>
                <span className="contact-chip">
                  <span className="icon">📞</span>
                  +63 967 628 8892
                </span>
              </div>

              <p className="hero-description" id="hero-description">
                Enthusiastic Full Stack Developer with expertise in mobile app and web development.
                Passionate about creating innovative solutions that enhance user experience through
                clean code, modern frameworks, and creative problem-solving.
              </p>

              <div className="hero-cta">
                <a href="#projects" className="btn-primary" id="btn-view-projects">
                  View Projects ↗
                </a>
                <a href="#contact" className="btn-secondary" id="btn-contact">
                  Get In Touch
                </a>
              </div>

              <div className="hero-stats" id="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Achievements</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1</div>
                  <div className="stat-label">Live Project</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="hero-image-wrap" id="hero-image">
              <div className="hero-image-ring">
                <div className="hero-image-ring-inner" />
              </div>
              <div className="hero-avatar">
                <img
                  src="/2x2picture/armando.JPG"
                  alt="Armando V. Loro Jr. — Full Stack Developer"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          ABOUT
      ============================ */}
      <section className="about" id="about">
        <div className="container">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">Profile Summary</h2>

          <div className="about-grid">
            <div className="about-text" id="about-text">
              <p>
                I am an enthusiastic Mobile App and Web Development professional experienced in
                driving effective project outcomes through innovative research and creative problem-solving.
                I have developed solutions that enhanced user experience and contributed to project success
                using skills in <strong>Python, PHP,</strong> and <strong>JavaScript</strong>.
              </p>
              <p>
                Driven by a strong foundation in web development and programming languages, I demonstrate
                strong research capabilities and teamwork. I am eager to apply my skills in mobile network
                optimization and app deployment to enhance user experience and deliver impactful results.
              </p>
            </div>

            <div className="about-cards" id="about-cards">
              <div className="about-card">
                <span className="card-icon">📱</span>
                <h4>Mobile Development</h4>
                <p>Building cross-platform mobile apps with Flutter & Dart</p>
              </div>
              <div className="about-card">
                <span className="card-icon">🌐</span>
                <h4>Web Development</h4>
                <p>Full-stack web solutions using modern frameworks</p>
              </div>
              <div className="about-card">
                <span className="card-icon">🔬</span>
                <h4>Research</h4>
                <p>Strong analytical and research capabilities</p>
              </div>
              <div className="about-card">
                <span className="card-icon">🤝</span>
                <h4>Teamwork</h4>
                <p>Collaborative approach to complex problem-solving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          SKILLS
      ============================ */}
      <section id="skills">
        <div className="container">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A versatile skill set spanning mobile, web, and backend development with modern frameworks and languages.
          </p>

          <div className="skills-grid" id="skills-grid">
            {skills.map((cat, i) => (
              <div className="skill-category" key={i} id={`skill-cat-${i}`}>
                <span className="skill-category-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
                <div className="skill-tags">
                  {cat.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`skill-tag ${tag.color}`}
                      id={`skill-tag-${i}-${j}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          EXPERIENCE
      ============================ */}
      <section className="experience" id="experience">
        <div className="container">
          <span className="section-label">Work History</span>
          <h2 className="section-title">Professional Experience</h2>

          <div className="timeline" id="timeline">
            <div className="timeline-item" id="timeline-item-0">
              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-role">Mobile App Development Intern</span>
                  <span className="timeline-date">March 3, 2026 – June 8, 2026</span>
                </div>
                <p className="timeline-org">
                  🏛️ Agusan del Sur State University — Bunawan, Agusan del Sur
                </p>
                <p className="timeline-desc">
                  Attended training sessions to enhance design knowledge and technical skills in mobile
                  application development. Collaborated with the development team to contribute to live
                  project initiatives and improve overall user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          EDUCATION
      ============================ */}
      <section id="education">
        <div className="container">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>

          <div className="education-grid" id="education-grid">
            <div className="education-card" id="edu-card-0">
              <span className="education-year">2026 — Present</span>
              <span className="edu-icon">🎓</span>
              <h3>Bachelor of Science in Information Technology</h3>
              <p>Agusan del Sur State University — Bunawan, Agusan del Sur</p>
            </div>

            <div className="education-card" id="edu-card-1">
              <span className="education-year">2022</span>
              <span className="edu-icon">🏫</span>
              <h3>Senior High School</h3>
              <p>Sta. Josefa National High School</p>
            </div>

            <div className="education-card" id="edu-card-2">
              <span className="education-year">2020</span>
              <span className="edu-icon">📚</span>
              <h3>Secondary Education</h3>
              <p>Sta. Josefa National High School</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          PROJECTS
      ============================ */}
      <section className="projects" id="projects">
        <div className="container">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world solutions built with modern technologies.
          </p>

          <div className="projects-grid" id="projects-grid">
            {/* Scanalyzer */}
            <div className="project-card" id="project-card-0">
              <div className="project-icon-wrap">🔍</div>
              <h3>Scanalyzer</h3>
              <p>
                Smart Document Analysis & Printing Cost Calculator. Automatically analyze your documents,
                calculate precise printing costs, and optimize your printing budget with our intelligent
                document analysis system.
              </p>
              <div className="project-tech">
                <span className="skill-tag">Web App</span>
                <span className="skill-tag cyan">Document Analysis</span>
                <span className="skill-tag emerald">Cost Calculator</span>
              </div>
              <a
                href="https://www.scanalyzer.online"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                id="project-link-scanalyzer"
              >
                Visit Live Site ↗
              </a>
            </div>

            {/* SIKAD */}
            <div className="project-card" id="project-card-1">
              <div className="project-icon-wrap project-icon-img">
                <img
                  src="/logo/SIKAD.png"
                  alt="SIKAD Logo"
                  className="project-logo-circle"
                />
              </div>
              <h3>SIKAD</h3>
              <p>
                Ride Smarter with SIKAD — the first shared ride booking app built for Filipino communities
                using the RE (Rotary Engine), the iconic multi-passenger vehicle of the Philippines.
                Book rides, track your driver in real time, and pay seamlessly — all in one app.
              </p>
              <div className="project-tech">
                <span className="skill-tag">Mobile App</span>
                <span className="skill-tag cyan">Ride Booking</span>
                <span className="skill-tag pink">Flutter</span>
                <span className="skill-tag emerald">Real-Time Tracking</span>
              </div>
              <a
                href="https://sikad-landing-page.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                id="project-link-sikad"
              >
                Visit Landing Page ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          ACHIEVEMENTS
      ============================ */}
      <section id="achievements">
        <div className="container">
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Achievements & Participation</h2>
          <p className="section-subtitle">
            Events, competitions, and seminars that have shaped my growth as a developer.
          </p>

          <div className="achievements-grid" id="achievements-grid">
            {achievements.map((item, i) => (
              <div className="achievement-card" key={i} id={`achievement-${i}`}>
                <div className="achievement-icon-wrap">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          CERTIFICATES
      ============================ */}
      <section className="certificates" id="certificates">
        <div className="container">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">
            Recognitions and certificates earned through training, competitions, and seminars.
          </p>

          {certificates.length > 0 ? (
            <div className="certificates-grid" id="certificates-grid">
              {/* Real certificates */}
              {certificates.map((cert) => {
                const isPdf = cert.type === 'pdf';
                const fileUrl = `/cerificates/${cert.file}`;

                if (isPdf) {
                  return (
                    <a
                      className="certificate-card"
                      key={cert.id}
                      id={`cert-card-${cert.id}`}
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View certificate: ${cert.title}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="certificate-img-wrap">
                        <div className="certificate-placeholder cert-pdf-preview">
                          <span className="cert-icon">📄</span>
                          <span className="cert-pdf-label">PDF Certificate</span>
                          <span className="cert-pdf-hint">Click to open ↗</span>
                        </div>
                      </div>
                      <div className="certificate-info">
                        <h4>{cert.title}</h4>
                        <p>{cert.org}</p>
                        <span className="cert-badge">✅ Verified</span>
                      </div>
                    </a>
                  );
                }

                return (
                  <div
                    className="certificate-card"
                    key={cert.id}
                    id={`cert-card-${cert.id}`}
                    onClick={() => openLightbox(fileUrl, cert.title)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') openLightbox(fileUrl, cert.title);
                    }}
                    aria-label={`View certificate: ${cert.title}`}
                  >
                    <div className="certificate-img-wrap">
                      <img src={fileUrl} alt={cert.title} loading="lazy" />
                    </div>
                    <div className="certificate-info">
                      <h4>{cert.title}</h4>
                      <p>{cert.org}</p>
                      <span className="cert-badge">✅ Verified</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="cert-empty-note">
              <span className="big-icon">🏅</span>
              No certificates uploaded yet. Add files to /public/cerificates/
            </div>
          )}
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          CONTACT
      ============================ */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-inner">
            <span className="section-label" style={{ justifyContent: 'center' }}>
              Let's Connect
            </span>
            <h2 className="section-title" id="contact-title">
              Get In Touch
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              Open to opportunities, collaborations, and freelance projects.
              Feel free to reach out — I'd love to connect!
            </p>

            <div className="contact-links" id="contact-links">
              <a
                href="mailto:armandoloro63@gmail.com"
                className="contact-link"
                id="contact-email"
              >
                📧 armandoloro63@gmail.com
              </a>
              <a
                href="tel:+639676288892"
                className="contact-link"
                id="contact-phone"
              >
                📞 +63 967 628 8892
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61580944106921"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                id="contact-facebook"
              >
                👤 Facebook Profile ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          FOOTER
      ============================ */}
      <footer className="footer" id="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} <strong>Armando V. Loro Jr.</strong> — Full Stack Developer
            &nbsp;·&nbsp; Sta. Josefa, Agusan del Sur, Philippines
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          title={lightbox.title}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

export default App;
