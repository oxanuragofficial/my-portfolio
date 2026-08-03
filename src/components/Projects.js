import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Image Generator',
      category: 'aiml',
      description: 'Advanced text-to-image generation platform using Stable Diffusion with custom training capabilities.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      image: 'https://via.placeholder.com/400x300/ec4899/ffffff?text=AI+Image+Gen',
      github: '#',
      demo: '#'
    },
    
        {
      id: 2,
      title: 'Tech Blog Portfolio',
      category: 'website',
      description: 'Modern blog platform with dark mode, search functionality, and responsive design.',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Tech+Blog',
      github: '#',
      demo: '#'
    },

   
    

   

       
    
   
    {
      id: 3,
      title: 'Corporate Landing Page',
      category: 'website',
      description: 'Professional business website with animations, contact forms, and SEO optimization.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      image: 'https://via.placeholder.com/400x300/14b8a6/ffffff?text=Corporate+Site',
      github: '#',
      demo: '#'
    },
 
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <p className="section-subtitle">Explore my latest work across different domains</p>
      
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          <span className="filter-icon">🎯</span> All Projects
        </button>
        <button 
          className={`filter-btn ${filter === 'aiml' ? 'active' : ''}`}
          onClick={() => setFilter('aiml')}
        >
          <span className="filter-icon">🤖</span> AI/ML
        </button>
        <button 
          className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          <span className="filter-icon">💻</span> Full Stack
        </button>
        <button 
          className={`filter-btn ${filter === 'website' ? 'active' : ''}`}
          onClick={() => setFilter('website')}
        >
          <span className="filter-icon">🌐</span> Websites
        </button>
        <button 
          className={`filter-btn ${filter === 'ebook' ? 'active' : ''}`}
          onClick={() => setFilter('ebook')}
        >
          <span className="filter-icon">📚</span> E-books
        </button>
      </div>

      <div className="projects-count">
        Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" title="View Code">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
