import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Hewlett Packard Enterprise (HPE)",
      location: "Bengaluru, Karnataka, India",
      period: "Aug 2023 - Aug 2025",
      type: "Full-time",
      projects: [
        {
          name: "Java Backend Developer – REST APIs for API Gateway",
          technologies: ["Spring Boot", "Redis Cache", "Java"],
          achievements: [
            "Engineered RESTful APIs using Spring Boot and Spring Framework to automate communication between UI and internal API Gateway",
            "Decreased application deployment time by 20% enabling faster release cycles",
            "Orchestrated backend service integrations by executing Python-based build scripts",
            "Interfaced with IMC database (Redis Cache) and deployed WAR files to JSP environments",
            "Resolved the top three causes of build failure through systematic debugging"
          ]
        },
        {
          name: "Java Backend Developer – Nonstop Application Server for Java 34",
          technologies: ["Java", "JEE", "Microservices", "WildFly"],
          achievements: [
            "Accelerated WildFly 34 integration into NSASJ34 by 60% using a custom internal Porting Tool Assistant",
            "Enhanced microservices architecture within NSASJ by spearheading MicroProfile APIs integration",
            "Achieved 40% improvement in application deployment speed and greater cloud-native functionality",
            "Conducted system-level testing and debugging across five critical modules",
            "Identified memory leaks and improved resource utilization by 50%"
          ]
        }
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Hewlett Packard Enterprise (HPE)",
      location: "Bengaluru, Karnataka, India",
      period: "Jan 2023 - July 2023",
      type: "Internship",
      projects: [
        {
          name: "Backend Developer - Porting Tool Assistant",
          technologies: ["Python", "Tkinter"],
          achievements: [
            "Designed and developed a tool automating open-source project porting with JAR selection and integration",
            "Accelerated porting process by 60% and reduced developer onboarding time by 20 hours",
            "Built a GitHub repository detection module for automatic project downloads and setup",
            "Improved project startup speed by 5x and eliminated manual configuration errors",
            "Scripted detection of discrepancies between ported code versions",
            "Generated 250+ duplicates to speed developer code modifications",
            "Reduced manual porting effort by approximately 40% through automation"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey at Hewlett Packard Enterprise, contributing to enterprise-grade backend systems and automation tools.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    <h4 className="text-lg text-blue-600 font-medium">
                      {exp.company}
                    </h4>
                  </div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {exp.type}
                  </span>
                </div>
                <div className="flex flex-col lg:items-end gap-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {project.name}
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
