import "../styles/Career.css";

const Career = () => {
  const experiences = [
    {
      company: "LexisNexis",
      position: "Data Engineer II",
      duration: "June 2024 - Present",
      location: "Raleigh, NC",
      description: "Developing scalable data solutions for legal document processing and vector search.",
      achievements: [
        "Implemented serverless document upload and vector search using AWS Lambda, SQS, and LanceDB (8% recall improvement)",
        "Built scalable solution for extracting legal-case data from AWS Data Lake (millions of XML docs)",
        "Designed Spark-based AWS OpenSearch pipeline for high-dimensional embeddings (reduced API failures)"
      ]
    },
    {
      company: "United Health Care (Financial Data Management)",
      position: "Data Science Intern",
      duration: "June 2023 - December 2023",
      location: "Minnetonka, MN (Global HQ)",
      description: "Automated data analysis and ML modeling for financial datasets using TeradataML.",
      achievements: [
        "Built automated process to identify active/inactive database users (cost savings)",
        "Developed classification/regression models using Teradata Vantage and Python ML libraries"
      ]
    },
    {
      company: "Optum - United Health Group (Data Solutions)",
      position: "Senior Software Engineer",
      duration: "December 2021 - July 2022",
      location: "Hyderabad, India",
      description: "Architected data ingestion frameworks using Spark and Databricks.",
      achievements: [
        "Developed Spark/Databricks framework for >11TB daily data from Azure Data Lake",
        "Orchestrated security management using Terraform and Jenkins pipeline",
        "Configured Spark apps to analyze 60+ United Health Group report suites from Adobe Clickstream"
      ]
    },
    {
      company: "Optum - United Health Group",
      position: "Software Engineer",
      duration: "July 2019 - December 2021",
      location: "Hyderabad, India",
      description: "Developed Spark projects for medical/pharmacy claims data processing.",
      achievements: [
        "Modernized Talend projects to Spark/Scala (9% cost reduction)",
        "Automated data validation using ElasticSearch and Kibana (200-300M claim records)",
        "Optimized business metrics app achieving 70x computation speed using Spark Accumulators"
      ]
    }
  ];

  return (
    <section id="experience" className="career">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="timeline-marker"></div>
              <div className="experience-content">
                <h3>{exp.position}</h3>
                <p className="company">{exp.company}</p>
                {exp.location && <p className="location">{exp.location}</p>}
                <p className="duration">{exp.duration}</p>
                <p className="description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
