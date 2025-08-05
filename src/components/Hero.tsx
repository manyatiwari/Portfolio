import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/200x200/6366f1/ffffff?text=MT"
              alt="Manya Tiwari"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Manya Tiwari</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
            Software Engineer at <span className="font-semibold text-blue-600">HPE</span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Java Backend Developer specializing in <span className="font-semibold text-blue-600">Spring Boot</span>, <span className="font-semibold text-blue-600">Microservices</span>, and <span className="font-semibold text-blue-600">REST APIs</span>
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            2+ years of experience building scalable backend systems and automating deployment processes at Hewlett Packard Enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Download size={20} />
              Download Resume
            </button>
            <a href="#contact" className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <Mail size={20} />
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:manyatiwariwork@gmail.com"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
