import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "Python", level: 85 },
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Spring Boot", level: 95 },
        { name: "Spring Framework", level: 90 },
        { name: "Jakarta EE", level: 85 },
        { name: "REST APIs", level: 95 },
        { name: "Microservices", level: 90 },
        { name: "JPA/Hibernate", level: 85 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "Redis Cache", level: 85 },
        { name: "JPA", level: 85 },
        { name: "Hibernate", level: 85 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Linux", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "Jenkins", level: 80 },
        { name: "GitHub Actions", level: 80 },
        { name: "Maven", level: 85 },
        { name: "CI/CD Pipelines", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My expertise spans across backend technologies, databases, and DevOps tools essential for enterprise-grade Java development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Certifications & Methodologies
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center gap-3 bg-blue-50 p-4 rounded-lg">
                <span className="text-blue-600 font-semibold">📜</span>
                <span className="text-gray-700">Master Microservices with Spring Boot and Spring Cloud</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-green-50 p-4 rounded-lg">
                <span className="text-green-600 font-semibold">⚡</span>
                <span className="text-gray-700">Agile Development Methodology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
