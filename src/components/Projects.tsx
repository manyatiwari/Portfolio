import React from 'react';
import { ExternalLink, Github, Database, Server, Code, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "A comprehensive hospital management backend system built with Spring Boot, featuring scalable architecture, advanced JPA relationships, and optimized database performance for healthcare operations.",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "Maven"],
      githubUrl: "https://github.com",
      features: [
        "Scalable backend with Spring Boot & JPA delivering clean RESTful APIs",
        "Complex data models & relationships with advanced JPA features like cascading and projections",
        "CRUD APIs with partial updates (PATCH), custom business logic, and validation",
        "Transaction management for data consistency and robust error handling",
        "Optimized database performance with custom JPQL queries and FetchType tuning",
        "N+1 query resolution ensuring high efficiency and maintainability"
      ],
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "API Gateway Integration Tool",
      description: "Enterprise-grade REST API development at HPE for automating communication between UI components and internal API Gateway, significantly reducing deployment time.",
      technologies: ["Spring Boot", "Redis Cache", "Java", "REST APIs", "JSP"],
      achievements: [
        "Decreased application deployment time by 20%",
        "Automated UI to API Gateway communication",
        "Integrated with Redis Cache for optimal performance",
        "Resolved top three causes of build failures"
      ],
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "Porting Tool Assistant",
      description: "Automated tool for open-source project porting with intelligent JAR selection, GitHub integration, and code discrepancy detection, dramatically improving developer productivity.",
      technologies: ["Python", "Tkinter", "GitHub API", "Automation"],
      githubUrl: "https://github.com",
      achievements: [
        "Accelerated porting process by 60%",
        "Reduced developer onboarding time by 20 hours",
        "Improved project startup speed by 5x",
        "Generated 250+ code duplicates automatically",
        "Reduced manual porting effort by 40%"
      ],
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Microservices Architecture Enhancement",
      description: "Enhanced NSASJ microservices architecture by integrating MicroProfile APIs, improving cloud-native functionality and deployment efficiency for enterprise applications.",
      technologies: ["Java", "JEE", "Microservices", "WildFly", "MicroProfile"],
      achievements: [
        "Accelerated WildFly 34 integration by 60%",
        "40% improvement in application deployment speed",
        "Enhanced cloud-native functionality",
        "Improved resource utilization by 50%",
        "System-level testing across 5 critical modules"
      ],
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my backend development work, from enterprise solutions at HPE to personal projects demonstrating technical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-600">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.features && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.achievements && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {project.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.achievements && !project.githubUrl && (
                    <span className="flex items-center gap-2 text-gray-500">
                      <Shield size={20} />
                      <span>Enterprise Project</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
