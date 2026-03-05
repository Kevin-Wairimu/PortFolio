const Portfolio = () => {
  const works = [
    {
      img: "/IMG/work-1.png",
      title: "Social Media App",
      desc: "A full-stack social platform featuring real-time messaging and post sharing.",
      tech: ["React", "Firebase", "CSS3"],
      liveLink: "https://text-arcade-africa.pages.dev/",
      // githubLink: '#'
    },
    {
      img: "/IMG/work-2.png",
      title: "Music Streaming App",
      desc: "An interactive music player with playlist management and artist discovery.",
      tech: ["JavaScript", "Web Audio API", "Node.js"],
      liveLink: "#",
      // githubLink: '#'
    },
    {
      img: "/IMG/work-3.png",
      title: "E-Commerce Platform",
      desc: "A robust online shopping experience with secure checkout and inventory tracking.",
      tech: ["React", "Stripe API", "MongoDB"],
      liveLink: "#",
      // githubLink: '#'
    },
  ];

  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          {works.map((work, index) => (
            <div className="work" key={index}>
              <img src={work.img} alt={work.title} />
              <div className="layer">
                <h3>
                  <a
                    href={work.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {work.title}
                  </a>
                </h3>
                <p>{work.desc}</p>
                <div className="work-tech">
                  {work.tech.map((t, i) => (
                    <span key={i} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="work-links">
                  <a
                    href={work.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    aria-label={`View Live Demo of ${work.title}`}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
