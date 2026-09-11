import React, { useState, useEffect } from 'react';
import './App.css';

/* =============================================
   DATA
============================================= */
const skills = [
  {
    icon: '💻',
    title: 'Languages',
    tags: [
      { label: 'Dart', color: 'emerald' },
      { label: 'Python', color: 'emerald' },
      { label: 'PHP', color: 'emerald' },
      { label: 'JavaScript', color: 'emerald' },
    ],
  },
  {
    icon: '🎨',
    title: 'Frontend',
    tags: [
      { label: 'HTML', color: 'cyan' },
      { label: 'CSS', color: 'cyan' },
      { label: 'React.js', color: 'cyan' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    tags: [
      { label: 'Django', color: 'pink' },
      { label: 'Node.js', color: 'pink' },
      { label: 'CodeIgniter', color: 'pink' },
    ],
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    tags: [
      { label: 'Flutter', color: '' },
      { label: 'Dart', color: '' },
      { label: 'App Deployment', color: '' },
    ],
  },
  {
    icon: '🗄️',
    title: 'Database / Services',
    tags: [
      { label: 'MySQL', color: 'cyan' },
      { label: 'Firebase', color: 'emerald' },
      { label: 'Firestore', color: 'emerald' },
    ],
  },
  {
    icon: '🚀',
    title: 'Tools & Deployment',
    tags: [
      { label: 'Git', color: 'pink' },
      { label: 'GitHub', color: 'pink' },
      { label: 'Vercel', color: 'pink' },
      { label: 'Firebase Hosting', color: 'pink' },
      { label: 'Hostinger VPS', color: 'pink' },
    ],
  },
];

// Certificate entries — files in /public/cerificates/
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

// Navbar (clean, no email or call buttons at top)
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
   MAIN APP (1 LAYER AT A TIME)
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
          LAYER 1: HERO
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
              <p className="hero-role" id="hero-role">Junior Full Stack Developer</p>

              <div className="hero-contact" id="hero-contact">
                <span className="contact-chip">
                  <span className="icon">📍</span>
                  Davao City, Philippines
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
                BSIT graduate with internship experience developing mobile and web applications
                using Flutter, Dart, JavaScript, Python, PHP, and SQL. Experienced in working on
                application features, database-driven systems, authentication, and deployment in a
                two-person development team. Interested in building practical web and mobile
                applications and growing as a full-stack developer.
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
                  <div className="stat-number">6</div>
                  <div className="stat-label">Tech Domains</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Flagship Apps</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Certificates</div>
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
                  alt="Armando V. Loro Jr. — Junior Full Stack Developer"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          LAYER 2: ABOUT / PROFILE SUMMARY
      ============================ */}
      <section className="about" id="about">
        <div className="container">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">Profile Summary</h2>

          <div className="about-grid">
            <div className="about-text" id="about-text">
              <p>
                I am a <strong>BSIT graduate</strong> with hands-on internship experience developing
                mobile and web applications using <strong>Flutter, Dart, JavaScript, Python, PHP, and SQL</strong>.
                Based in <strong>Davao City, Philippines</strong>, I bring focused problem-solving and full-cycle development capabilities.
              </p>
              <p>
                Experienced in working on core application features, database-driven systems, authentication, and deployment
                in a <strong>two-person development team</strong>. Dedicated to building practical, reliable web and mobile
                applications and continuously advancing as a full-stack developer.
              </p>
            </div>

            <div className="about-cards" id="about-cards">
              <div className="about-card">
                <span className="card-icon">📱</span>
                <h4>Mobile Development</h4>
                <p>Cross-platform mobile apps with Flutter & Dart for passengers and drivers</p>
              </div>
              <div className="about-card">
                <span className="card-icon">🌐</span>
                <h4>Web Development</h4>
                <p>Interactive web dashboards and applications using React.js and modern CSS</p>
              </div>
              <div className="about-card">
                <span className="card-icon">⚡</span>
                <h4>Backend & APIs</h4>
                <p>Application logic and services with Django, Node.js, and CodeIgniter</p>
              </div>
              <div className="about-card">
                <span className="card-icon">👥</span>
                <h4>Team Engineering</h4>
                <p>Fast-paced 2-person development team handling auth, databases, and deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          LAYER 3: TECHNICAL SKILLS
      ============================ */}
      <section id="skills">
        <div className="container">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A versatile skill set spanning mobile, web, and backend development with modern frameworks, databases, and deployment tools.
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
          LAYER 4: EXPERIENCE
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
                  Collaborated in a two-person development team engineering mobile and web applications.
                  Contributed to live project initiatives, database-driven workflows, Firebase authentication,
                  and mobile application features to deliver enhanced user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          LAYER 5: EDUCATION
      ============================ */}
      <section id="education">
        <div className="container">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>

          <div className="education-grid" id="education-grid">
            <div className="education-card" id="edu-card-0">
              <span className="education-year">BSIT Graduate</span>
              <span className="edu-icon">🎓</span>
              <h3>Bachelor of Science in Information Technology</h3>
              <p>Agusan del Sur State University — Bunawan, Agusan del Sur</p>
            </div>

            <div className="education-card" id="edu-card-1">
              <span className="education-year">2022</span>
              <span className="edu-icon">🏫</span>
              <h3>Senior High School</h3>
              <p>Sta. Josefa National High School</p>
              <div style={{ marginTop: '10px' }}>
                <span className="skill-tag cyan" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                  TVL Track • ICT Strand (Networking)
                </span>
              </div>
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
          LAYER 6: FEATURED PROJECTS
      ============================ */}
      <section className="projects" id="projects">
        <div className="container">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world solutions built with modern technologies.
          </p>

          <div className="projects-grid" id="projects-grid">
            {/* Project 1: Scanalyzer */}
            <div className="project-card" id="project-card-0">
              <div className="project-icon-wrap">🔍</div>
              <h3>Smart Document Analysis & Printing Cost Calculator</h3>
              <p>
                Developed a web-based document analysis and printing cost calculator as a capstone project.
                Implemented document processing and cost calculation features to estimate printing expenses.
                Developed backend functionality using Python and Django for document analysis and application logic,
                integrated with MySQL for persistent database management.
              </p>
              <div className="project-tech">
                <span className="skill-tag emerald">Python</span>
                <span className="skill-tag emerald">Django</span>
                <span className="skill-tag cyan">MySQL</span>
                <span className="skill-tag cyan">HTML</span>
                <span className="skill-tag cyan">CSS</span>
                <span className="skill-tag pink">JavaScript</span>
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

            {/* Project 2: SIKAD */}
            <div className="project-card" id="project-card-1">
              <div className="project-icon-wrap project-icon-img">
                <img
                  src="/logo/SIKAD.png"
                  alt="SIKAD Logo"
                  className="project-logo-circle"
                />
              </div>
              <h3>SIKAD - Ride/Transport Mobile Application</h3>
              <p>
                Developed a mobile ride-booking application for passengers and drivers using Flutter & Dart.
                Implemented Firebase Authentication and Firestore for user accounts, roles, and application data.
                Integrated Google Maps and location-based features for passenger pick up and destination selection.
                Developed web-based dashboards using React.js for administrative and LGU-related functions.
              </p>
              <div className="project-tech">
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">Dart</span>
                <span className="skill-tag emerald">Firebase</span>
                <span className="skill-tag emerald">Firestore</span>
                <span className="skill-tag cyan">React.js</span>
                <span className="skill-tag pink">Google Maps</span>
              </div>
              <div className="project-links-row">
                <a
                  href="https://sikad-landing-page.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  id="project-link-sikad"
                >
                  Visit Landing Page ↗
                </a>
                <a
                  href="https://armandovloro-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  id="project-link-portfolio"
                >
                  Interactive Portfolio ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          LAYER 7: CERTIFICATES
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
              No certificates uploaded yet.
            </div>
          )}
        </div>
      </section>

      <div className="divider" />

      {/* ============================
          LAYER 9: CONTACT
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
              Open to junior full stack developer opportunities, mobile app engineering, and practical web solutions.
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
              <a
                href="https://armandovloro-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                id="contact-portfolio"
              >
                🌐 Interactive Portfolio ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          LAYER 10: FOOTER
      ============================ */}
      <footer className="footer" id="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} <strong>Armando V. Loro Jr.</strong> — Junior Full Stack Developer
            &nbsp;·&nbsp; Davao City, Philippines
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
