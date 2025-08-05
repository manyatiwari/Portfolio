import React from 'react';
import { Code, Database, Server, Users, Award, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Engineering",
      description: "Specialized in Java, Spring Boot, and building scalable REST APIs"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Expert in PostgreSQL, Redis Cache, JPA, and Hibernate ORM"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Microservices Architecture",
      description: "Experience with microservices, API Gateway, and cloud-native applications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Led 70+ volunteers and mentored developers in agile environments"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "HPE Recognition",
      description: "Bold Mover, Customer Obsessed, Early Delivery badges"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Academic Excellence",
      description: "8.62 CGPA in Computer Science Engineering"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Results-driven Software Engineer with 2+ years of experience in Backend Development at Hewlett Packard Enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate Software Engineer at <strong>Hewlett Packard Enterprise (HPE)</strong> with expertise in building scalable Java-based backend systems. My experience spans from developing REST APIs for API Gateway integration to enhancing microservices architecture in enterprise applications.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At HPE, I've successfully engineered RESTful APIs using Spring Boot that decreased application deployment time by 20%, and accelerated WildFly 34 integration by 60% using custom internal tools. My work includes system-level testing, debugging, and improving resource utilization by 50%.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Beyond technical skills, I'm a certified volunteer mediation coach who led a team of 70+ volunteers, demonstrating my leadership and communication abilities. I hold a Master Microservices certification and maintain a strong academic background with 8.62 CGPA from VIT Bhopal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                  <div className="text-blue-600">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-blue-600 mb-3">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
