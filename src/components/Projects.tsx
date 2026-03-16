import "../styles/Projects.css";

const Projects = () => {
  const projectsData = [
    {
      title: "DocAssist - Disease Prediction Engine",
      description: "Developed disease prediction system using BioBert and co-occurrence matrix for early diagnosis, enhancing clinical judgment for physicians.",
      technologies: ["BioBert", "Python", "ML", "Healthcare AI"],
      link: "https://github.com",
      liveLink: "",
    },
    {
      title: "Expertiza Open Source Contributions",
      description: "Made open source contributions to Ruby-based assignment submission website 'Expertiza' used by NCSU.",
      technologies: ["Ruby on Rails", "Open Source", "Education Tech"],
      link: "https://expertiza.ncsu.edu/",
      liveLink: "https://expertiza.ncsu.edu/",
    },
    {
      title: "Personalized Music Recommendation Discord Bot",
      description: "Built Discord bot leveraging data analysis and user preferences for personalized music recommendations.",
      technologies: ["Python", "Discord API", "Data Analysis", "Recommendation Systems"],
      link: "https://github.com",
      liveLink: "",
    },
    {
      title: "LSTM & CNN Terrain Analysis",
      description: "Implemented LSTM & CNN architecture for time series sensor data analysis to identify terrain types.",
      technologies: ["LSTM", "CNN", "TensorFlow", "Time Series", "Sensor Data"],
      link: "https://github.com",
      liveLink: "",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
