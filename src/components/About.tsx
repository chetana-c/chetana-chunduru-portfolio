import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>Chetana Chunduru</strong> | Data Engineer & ML Enthusiast
            </p>
            <p>
              Passionate Data Engineer with 5+ years of experience building scalable data pipelines, ML models, and cloud solutions. 
              Expertise in Big Data technologies (Spark, Hadoop), Cloud platforms (Azure, AWS), and modern ML frameworks.
            </p>
            <p>
              Proven track record of delivering high-impact data solutions at Fortune 500 companies like LexisNexis and UnitedHealth Group.
              Awarded GHC 2023 Scholarship and multiple SPOT/STAR awards for leadership and collaboration.
            </p>
            <p>
              Microsoft Azure Certified | NVIDIA Deep Learning Certified | Active open source contributor.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-item">
              <h4>Years of Experience</h4>
              <p className="highlight-value">5+</p>
            </div>
            <div className="highlight-item">
              <h4>Projects</h4>
              <p className="highlight-value">20+</p>
            </div>
            <div className="highlight-item">
              <h4>Awards & Certifications</h4>
              <p className="highlight-value">5+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
