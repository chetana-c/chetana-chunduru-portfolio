import "../styles/Education.css";

const Education = () => {
  const educationData = [
    {
      school: "North Carolina State University, Raleigh, NC",
      degree: "Master's in Computer Science",
      year: "August 2022 - May 2024",
      gpa: "",
      description: "Advanced coursework in Data Engineering, Machine Learning, Big Data Systems, and Distributed Computing.",
    },
    {
      school: "Osmania University (OU), Hyderabad, India",
      degree: "B.E in Computer Science",
      year: "July 2015 - May 2019",
      gpa: "",
      description: "Strong foundation in Computer Science fundamentals, Data Structures, Algorithms, and Software Engineering principles.",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <h3>{edu.degree}</h3>
              <p className="school">{edu.school}</p>
              <p className="year">{edu.year}</p>
              {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
              <p className="description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
