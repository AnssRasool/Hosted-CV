import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Phone, MapPin, Briefcase, 
  GraduationCap, Terminal, Search, Play, CheckCircle, 
  AlertCircle, RefreshCw, Cpu, Award, Heart, Sparkles, Send
} from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Resume = ({ data }) => {
  // 1. Theme Configuration & Hooks
  const [theme, setTheme] = useState('nebula');
  const [activeTab, setActiveTab] = useState('overview');
  const [skillFilter, setSkillFilter] = useState('all');
  const [skillSearch, setSkillSearch] = useState('');
  
  // Interactive Simulator States (Automation Pipeline)
  const [isPlayingPipeline, setIsPlayingPipeline] = useState(false);
  const [pipelineStep, setPipelineStep] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([
    'System ready. Waiting to run automation pipeline...'
  ]);
  const terminalEndRef = useRef(null);

  // Interactive Simulator States (Bug Triage)
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Zapier Webhook Timeout', desc: 'Webhook payloads timing out on heavy lead syncs.', severity: 'high', status: 'unresolved' },
    { id: 2, title: 'Chrome Extension CSS Glitch', desc: 'Floating action panel misaligned in Chrome V120.', severity: 'medium', status: 'unresolved' },
    { id: 3, title: 'Missing API Swagger Docs', desc: 'Integrators complaining about undocumented endpoint parameters.', severity: 'low', status: 'unresolved' }
  ]);
  const [stabilityScore, setStabilityScore] = useState(65);

  // Contact Form Mocking
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Effect to apply body theme class
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  // Scroll terminal logs to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  if (!data) {
    return (
      <div className="center-loading">
        <div className="spinner"></div>
        <p>Loading premium portfolio data...</p>
      </div>
    );
  }

  const { personal, summary, skills, experience, education } = data;

  // Compute initials for profile badge
  const initials = personal.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  // Handle running the pipeline automation simulation
  const startAutomationPipeline = () => {
    if (isPlayingPipeline) return;
    setIsPlayingPipeline(true);
    setPipelineStep(1);
    setTerminalLogs([
      '🚀 Initializing automation trigger...',
      '🔗 Webhook listener active on /api/webhooks/v1/zapier'
    ]);

    // Step 1: Trigger fires
    setTimeout(() => {
      setPipelineStep(2);
      setTerminalLogs(prev => [
        ...prev,
        '⚡ [TRIGGER] New User Signup detected: user_id_9901',
        '📦 Extracting payload: { email: "partner@example.com", plan: "Enterprise" }',
        '🔄 Sending data to action node: PostHog Analytics'
      ]);
    }, 2000);

    // Step 2: PostHog log
    setTimeout(() => {
      setPipelineStep(3);
      setTerminalLogs(prev => [
        ...prev,
        '📊 [ACTION 1] Logging event "User Signup" to PostHog',
        '✓ PostHog returned HTTP 200 OK',
        '📨 Triggering next action: Intercom Welcome Email'
      ]);
    }, 4500);

    // Step 3: Intercom message
    setTimeout(() => {
      setPipelineStep(4);
      setTerminalLogs(prev => [
        ...prev,
        '✉️ [ACTION 2] dispatching welcome sequence via Intercom API',
        '✓ Message delivery scheduled, recipient ID: contact_8817b',
        '🎉 Pipeline execution finished successfully!'
      ]);
      setIsPlayingPipeline(false);
    }, 7000);
  };

  const resetPipeline = () => {
    setPipelineStep(0);
    setTerminalLogs(['Console cleared. Ready to run automation pipeline.']);
    setIsPlayingPipeline(false);
  };

  // Squash bug simulator
  const resolveBug = (id) => {
    const updatedBugs = bugs.map(bug => {
      if (bug.id === id && bug.status !== 'resolved') {
        // Increase stability score based on bug severity
        let bonus = 10;
        if (bug.severity === 'high') bonus = 20;
        if (bug.severity === 'medium') bonus = 15;
        setStabilityScore(prev => Math.min(100, prev + bonus));
        return { ...bug, status: 'resolved' };
      }
      return bug;
    });
    setBugs(updatedBugs);
  };

  const resetBugs = () => {
    setBugs([
      { id: 1, title: 'Zapier Webhook Timeout', desc: 'Webhook payloads timing out on heavy lead syncs.', severity: 'high', status: 'unresolved' },
      { id: 2, title: 'Chrome Extension CSS Glitch', desc: 'Floating action panel misaligned in Chrome V120.', severity: 'medium', status: 'unresolved' },
      { id: 3, title: 'Missing API Swagger Docs', desc: 'Integrators complaining about undocumented endpoint parameters.', severity: 'low', status: 'unresolved' }
    ]);
    setStabilityScore(65);
  };

  // Filter skills
  const getAllSkills = () => {
    const list = [];
    if (skillFilter === 'all' || skillFilter === 'programming') {
      skills.programming.forEach(s => list.push({ name: s, cat: 'programming' }));
    }
    if (skillFilter === 'all' || skillFilter === 'frameworks') {
      skills.frameworks.forEach(s => list.push({ name: s, cat: 'frameworks' }));
    }
    if (skillFilter === 'all' || skillFilter === 'tools') {
      skills.tools.forEach(s => list.push({ name: s, cat: 'tools' }));
    }
    return list.filter(s => s.name.toLowerCase().includes(skillSearch.toLowerCase()));
  };

  // Handle Contact Form Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="portfolio-layout">
      {/* Sidebar Section */}
      <aside className="sidebar-panel">
        <div className="sticky-sidebar">
          {/* Profile Details Card */}
          <div className="glass-card profile-card">
            <div className="profile-avatar-container">
              <div className="profile-avatar-glow"></div>
              <div className="profile-avatar">{initials}</div>
            </div>
            <h1 className="profile-name">{personal.name}</h1>
            <div className="profile-title-badge">Jr. Fullstack Developer</div>
            
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Available for QA & Dev Projects</span>
            </div>

            <div className="contact-list">
              <div className="contact-item">
                <MapPin />
                <span>{personal.location}</span>
              </div>
              <a href={`tel:${personal.contact}`} className="contact-item">
                <Phone />
                <span>{personal.contact}</span>
              </a>
              <a href={`mailto:${personal.email}`} className="contact-item">
                <Mail />
                <span>{personal.email}</span>
              </a>
              <a href={`https://github.com/${personal.github}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                <Github />
                <span>github.com/{personal.github}</span>
              </a>
              <a href={`https://linkedin.com/in/${personal.linkedin.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                <Linkedin />
                <span>linkedin.com/in/{personal.linkedin}</span>
              </a>
            </div>
          </div>

          {/* Theme Selector Widget */}
          <div className="glass-card theme-switcher-card">
            <div className="theme-switcher-title">Select Atmosphere</div>
            <div className="theme-buttons-container">
              <button 
                className={`theme-btn ${theme === 'nebula' ? 'active' : ''}`}
                onClick={() => setTheme('nebula')}
              >
                <span className="theme-preview-dot" style={{ backgroundColor: '#6366f1' }}></span>
                Nebula
              </button>
              <button 
                className={`theme-btn ${theme === 'cyberpunk' ? 'active' : ''}`}
                onClick={() => setTheme('cyberpunk')}
              >
                <span className="theme-preview-dot" style={{ backgroundColor: '#10b981' }}></span>
                Cyber
              </button>
              <button 
                className={`theme-btn ${theme === 'obsidian' ? 'active' : ''}`}
                onClick={() => setTheme('obsidian')}
              >
                <span className="theme-preview-dot" style={{ backgroundColor: '#f4f4f5' }}></span>
                Obsidian
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="main-panel">
        {/* Navigation Tabs */}
        <nav className="main-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Briefcase />
            Overview & Work
          </button>
          <button 
            className={`nav-item ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <Cpu />
            Skills Matrix
          </button>
          <button 
            className={`nav-item ${activeTab === 'simulator' ? 'active' : ''}`}
            onClick={() => setActiveTab('simulator')}
          >
            <Terminal />
            QA Playground
          </button>
          <button 
            className={`nav-item ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap />
            Education & Contact
          </button>
        </nav>

        {/* Quick Stats Banner */}
        <div className="glass-card stats-grid">
          <div className="stat-card">
            <span className="stat-number">1+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">15+</span>
            <span className="stat-label">Tech Stack Mastered</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">QA stability target</span>
          </div>
        </div>

        {/* Dynamic Tab Content rendering */}
        {activeTab === 'overview' && (
          <div className="overview-section">
            {/* Professional Summary */}
            <section className="glass-card section-card">
              <div className="section-header">
                <Sparkles />
                <h2>Profile Summary</h2>
              </div>
              <p className="summary-text">{summary}</p>
            </section>

            {/* Work Experience Timeline */}
            <section className="glass-card section-card">
              <div className="section-header">
                <Briefcase />
                <h2>Work Experience</h2>
              </div>
              
              <div className="timeline-container">
                <div className="timeline-line"></div>
                {experience.map((job, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-node"></div>
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-job-title">{job.title}</h3>
                        <span className="timeline-company">{job.company}</span>
                      </div>
                      <span className="timeline-date">{job.dates}</span>
                    </div>
                    <ul className="timeline-highlights">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="skills-tab-container">
            {/* Filter and Search controls */}
            <div className="glass-card skills-filter-bar">
              <div className="search-input-wrapper">
                <Search />
                <input 
                  type="text" 
                  placeholder="Search skills (e.g. Python, Git)..." 
                  className="skills-search-input"
                  value={skillSearch}
                  onChange={(e) => setSkillSearch(e.target.value)}
                />
              </div>
              
              <div className="filter-btn-group">
                <button 
                  className={`filter-btn ${skillFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSkillFilter('all')}
                >
                  All
                </button>
                <button 
                  className={`filter-btn ${skillFilter === 'programming' ? 'active' : ''}`}
                  onClick={() => setSkillFilter('programming')}
                >
                  Languages
                </button>
                <button 
                  className={`filter-btn ${skillFilter === 'frameworks' ? 'active' : ''}`}
                  onClick={() => setSkillFilter('frameworks')}
                >
                  Frameworks
                </button>
                <button 
                  className={`filter-btn ${skillFilter === 'tools' ? 'active' : ''}`}
                  onClick={() => setSkillFilter('tools')}
                >
                  Tools
                </button>
              </div>
            </div>

            {/* Filtered Skills Grid */}
            <div className="glass-card">
              <div className="section-header">
                <Cpu />
                <h2>Skills Inventory</h2>
              </div>
              
              <div className="skills-list-flex">
                {getAllSkills().map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill.cat === 'programming' && <Terminal size={14} />}
                    {skill.cat === 'frameworks' && <Cpu size={14} />}
                    {skill.cat === 'tools' && <Award size={14} />}
                    {skill.name}
                  </span>
                ))}
                {getAllSkills().length === 0 && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>No skills match your search terms.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'simulator' && (
          <div className="playground-container">
            {/* Description card */}
            <div className="glass-card">
              <div className="section-header">
                <Terminal />
                <h2>QA & Automation Sandbox</h2>
              </div>
              <p className="playground-desc">
                In my role at <strong>Ertiqah LLC</strong>, I build workflows on Zapier/n8n, triage production bugs, and document APIs.
                Use the simulations below to interactively test my main areas of expertise.
              </p>
            </div>

            {/* Automation Pipeline Canvas */}
            <div className="glass-card automation-canvas">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Scenario: Sync User Signup to PostHog & Intercom</h3>
              
              <div className="automation-row">
                <div className={`automation-node ${pipelineStep >= 1 ? 'active' : ''}`}>
                  <Play />
                  <span className="automation-node-title">Webhook Trigger</span>
                  <span className="automation-node-status">
                    {pipelineStep === 0 && 'Ready'}
                    {pipelineStep === 1 && 'Initializing...'}
                    {pipelineStep > 1 && 'Fired'}
                  </span>
                </div>
                
                <div className={`automation-node ${pipelineStep >= 3 ? 'active' : ''}`}>
                  <Cpu />
                  <span className="automation-node-title">PostHog Analytics</span>
                  <span className="automation-node-status">
                    {pipelineStep < 3 && 'Pending'}
                    {pipelineStep === 3 && 'Syncing event...'}
                    {pipelineStep > 3 && 'Logged'}
                  </span>
                </div>

                <div className={`automation-node ${pipelineStep >= 4 ? 'active' : ''}`}>
                  <Mail />
                  <span className="automation-node-title">Intercom Email</span>
                  <span className="automation-node-status">
                    {pipelineStep < 4 && 'Pending'}
                    {pipelineStep === 4 && 'Delivered'}
                  </span>
                </div>
              </div>

              {/* SVG Connecting Paths with dynamic animations */}
              <svg className="pipeline-connectors">
                <path d="M 150 50 L 350 50" className={`pipeline-path ${pipelineStep >= 2 ? 'active' : ''}`} />
                <path d="M 350 50 L 550 50" className={`pipeline-path ${pipelineStep >= 4 ? 'active' : ''}`} />
                {isPlayingPipeline && (
                  <circle r="6" className="pipeline-pulse">
                    <animateMotion 
                      dur="5s" 
                      repeatCount="indefinite" 
                      path="M 120 55 L 350 55 L 580 55"
                    />
                  </circle>
                )}
              </svg>

              <div className="automation-controls">
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Status: <strong>{isPlayingPipeline ? 'Running Workflow...' : 'Idle'}</strong>
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    className="run-btn"
                    onClick={startAutomationPipeline}
                    disabled={isPlayingPipeline}
                  >
                    <Play size={16} /> Run Pipeline
                  </button>
                  <button 
                    className="run-btn"
                    style={{ backgroundColor: 'var(--card-border)', color: 'var(--text-primary)' }}
                    onClick={resetPipeline}
                  >
                    <RefreshCw size={16} /> Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Terminal output */}
            <div className="playground-terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot red"></span>
                  <span className="terminal-dot yellow"></span>
                  <span className="terminal-dot green"></span>
                </div>
                <span>integration_stdout.log</span>
              </div>
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="terminal-line">
                  <span className="terminal-prompt">$</span> {log}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Bug Triage simulator */}
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>Triage Dashboard (Bug Tracker)</h3>
                <button 
                  className="theme-btn" 
                  style={{ padding: '0.4rem 0.8rem', borderRadius: '8px' }}
                  onClick={resetBugs}
                >
                  <RefreshCw size={12} /> Reload Bugs
                </button>
              </div>

              <div className="triage-stats" style={{ marginBottom: '1.5rem' }}>
                <span className="triage-score-title">Product Stability Index:</span>
                <span className="triage-score-value" style={{ color: stabilityScore === 100 ? 'var(--accent)' : '#ff5f56' }}>
                  {stabilityScore}% {stabilityScore === 100 ? ' (STABLE)' : ' (ISSUES DETECTED)'}
                </span>
              </div>

              <div className="bug-triage-grid">
                {bugs.map(bug => (
                  <div key={bug.id} className={`bug-card ${bug.status === 'resolved' ? 'resolved' : ''}`}>
                    <div className="bug-header">
                      <span className={`bug-badge ${bug.status === 'resolved' ? 'fixed' : 'unresolved'}`}>
                        {bug.status === 'resolved' ? 'fixed' : bug.severity}
                      </span>
                      {bug.status === 'resolved' ? <CheckCircle size={16} color="var(--accent)" /> : <AlertCircle size={16} color="#ff5f56" />}
                    </div>
                    <span className="bug-title">{bug.title}</span>
                    <p className="bug-desc">{bug.desc}</p>
                    
                    {bug.status !== 'resolved' && (
                      <button 
                        className="bug-btn"
                        onClick={() => resolveBug(bug.id)}
                      >
                        Squash Bug
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="overview-section">
            {/* Education details */}
            <section className="glass-card section-card">
              <div className="section-header">
                <GraduationCap />
                <h2>Education</h2>
              </div>
              
              <div className="edu-grid">
                {education.map((edu, index) => (
                  <div key={index} className="edu-card">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <span className="edu-school">{edu.institution}</span>
                    <span className="edu-date">{edu.dates}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Contact Form */}
            <section className="glass-card section-card">
              <div className="section-header">
                <Mail />
                <h2>Contact Me Directly</h2>
              </div>
              
              {formSubmitted ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '2rem', 
                  background: 'rgba(16, 185, 129, 0.05)', 
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                  borderRadius: '12px',
                  animation: 'fadeIn 0.5s ease-out'
                }}>
                  <CheckCircle size={40} color="var(--accent)" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ marginBottom: '0.5rem' }}>Message Dispatched!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Thanks for reaching out! In the simulation, your message was successfully logged.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Jane Doe" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      placeholder="jane@example.com" 
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea 
                      className="form-input" 
                      rows="4" 
                      placeholder="Hi Anss, love your interactive CV! Let's schedule a call." 
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="form-submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </section>
          </div>
        )}
        
        {/* Footer */}
        <footer style={{ 
          textAlign: 'center', 
          fontSize: '0.8rem', 
          color: 'var(--text-muted)', 
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <span>Made with</span>
          <Heart size={10} color="#ff5f56" style={{ fill: '#ff5f56' }} />
          <span>and premium engineering by Anss Rasool. All rights reserved.</span>
        </footer>
      </main>
    </div>
  );
};

export default Resume;
