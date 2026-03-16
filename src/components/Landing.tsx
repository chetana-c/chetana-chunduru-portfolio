import { FiDownload } from "react-icons/fi";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <section id="home" className="landing">
      <div className="landing-content">
        <h1>Hi, I'm <span className="highlight">Chetana Chunduru</span></h1>
        <p className="subtitle">Data Engineer | ML Enthusiast | 5+ Years Experience</p>
        <p className="description">
          Building scalable data pipelines & ML solutions at <strong>LexisNexis</strong> | 
          Spark | Azure/AWS | gpt-4o | TensorFlow | Open Source Contributor
        </p>
        <div className="cta-buttons">
          <a href="#experience" className="btn btn-primary">View Experience</a>
          <a href="#skills" className="btn btn-secondary">My Tech Stack</a>
          <a href="/resume.pdf" download className="btn btn-outline">
            <FiDownload /> Download Resume
          </a>
        </div>
        <div className="landing-stats">
          <div className="stat">
            <span>11TB+</span>
            <small>Data Processed Daily</small>
          </div>
          <div className="stat">
            <span>70x</span>
            <small>Performance Boost</small>
          </div>
          <div className="stat">
            <span>GHC 2023</span>
            <small>Scholarship Award</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
