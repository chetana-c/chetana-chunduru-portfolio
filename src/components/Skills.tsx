import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Scala", "Python", "Ruby on Rails", "SQL"],
    },
    {
      category: "Big Data",
      skills: ["Apache Spark", "Apache Hadoop", "Hive", "HBase", "Talend", "MapReduce", "Apache Pig", "Apache Sqoop", "Cassandra", "Snowflake", "Airflow", "Jenkins", "Shell Scripting", "TeradataML", "Terraform", "ETL", "Apache Kafka", "Grafana", "REST APIs", "Unit Testing"],
    },
    {
      category: "Cloud",
      skills: ["Azure Data Lake Storage (ADLS)", "Databricks", "Azure SQL Database", "OpenSearch", "AWS Data Lake", "AWS Lambda", "AWS SQS", "Flink", "Amazon S3", "Adobe Analytics ClickStream", "Lance DB", "FastAPI"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQL Server", "Oracle", "Teradata Vantage", "ElasticSearch", "DynamoDB"],
    },
    {
      category: "AI/ML & LLMs",
      skills: ["gpt-4o", "claude", "TensorFlow", "Scikit-learn", "Keras"],
    },
    {
      category: "Tools",
      skills: ["Docker", "Kubernetes", "Linux", "Kibana", "Grafana"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
