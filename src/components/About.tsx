import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const skillsData = [
    { name: "UI/UX", level: "85%" },
    { name: "Web Development", level: "95%" },
    { name: "App Development", level: "80%" },
  ];

  return (
    <div id="about">
      <div className="container">
        <div className="about-glass-card">
          <div className="row">
            <div className="about-colum-1">
              <div className="img-container">
                <img src="/IMG/a.image.png" alt="About Me Image" />
              </div>
            </div>
            <div className="about-colum-2">
              <h1 className="sub-title">About Me</h1>
              <p className="about-desc">
                I’m a software developer passionate about building clean,
                efficient, and user-friendly applications that solve real-world
                problems. With a focus on modern web technologies, I strive to
                create digital experiences that are both functional and visually
                compelling.
              </p>

              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                  onClick={() => openTab("skills")}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                  onClick={() => openTab("experience")}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                  onClick={() => openTab("education")}
                >
                  Education
                </p>
              </div>

              {/* Skills Tab */}
              <div
                className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`}
              >
                <div className="skills-list-enhanced">
                  {skillsData.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <ul className="tech-stack-dots">
                    <li>
                      <span>JavaScript (ES6+)</span>
                    </li>
                    <li>
                      <span>React & TypeScript</span>
                    </li>
                    <li>
                      <span>Node.js & Express</span>
                    </li>
                    <li>
                      <span>MongoDB & SQL</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience Tab */}
              <div
                className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`}
              >
                <ul className="timeline-list">
                  <li>
                    <span>2024 - Current</span>
                    <br />
                    <strong>Freelance Full Stack Developer</strong>
                    <br />
                    Delivering custom web solutions for diverse clients.
                  </li>
                  <li>
                    <span>2023 - 2024</span>
                    <br />
                    <strong>Junior Web Developer</strong>
                    <br />
                    Developed and maintained responsive user interfaces.
                  </li>
                </ul>
              </div>

              {/* Education Tab */}
              <div
                className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`}
              >
                <ul className="timeline-list">
                  <li>
                    <span>2025 - 2026</span>
                    <br />
                    <strong>Institue.Of.Software.Technologies</strong>
                    <br />
                    Focusing on Software Development and Algorithms.
                  </li>
                  <li>
                    <span>2022 - 2023</span>
                    <br />
                    <strong>Web Development Certification</strong>
                    <br />
                    Intensive training in modern frontend frameworks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
