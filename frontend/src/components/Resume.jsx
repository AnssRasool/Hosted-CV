import React from 'react';

const Resume = ({ data }) => {
  if (!data) return <div className="loading">Loading beautiful resume...</div>;

  const { personal, summary, skills, experience, education } = data;

  return (
    <div className="resume-container">
      <header className="header section">
        <h1>{personal.name}</h1>
        <div className="contact-info">
          <span>📍 {personal.location}</span>
          <span>📞 {personal.contact}</span>
          <span>✉️ <a href={`mailto:${personal.email}`}>{personal.email}</a></span>
          <span>🐙 <a href={`https://github.com/${personal.github}`} target="_blank" rel="noopener noreferrer">{personal.github}</a></span>
          <span>💼 <a href={`https://linkedin.com/in/${personal.linkedin.replace(' ', '')}`} target="_blank" rel="noopener noreferrer">{personal.linkedin}</a></span>
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">Professional Summary</h2>
        <p className="summary-text">{summary}</p>
      </section>

      <section className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skill-list">
              {skills.programming.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Technologies/Frameworks</h4>
            <div className="skill-list">
              {skills.frameworks.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <div className="skill-list">
              {skills.tools.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-list">
          {experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>{job.title}</h3>
                  <div className="company">{job.company}</div>
                </div>
                <div className="dates">{job.dates}</div>
              </div>
              <ul className="highlights-list">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <div>
                  <h3>{edu.degree}</h3>
                  <div className="institution">{edu.institution}</div>
                </div>
                <div className="dates">{edu.dates}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
