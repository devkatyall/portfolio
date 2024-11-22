import React from 'react';
import Image from 'next/image';
import './../assets/projects.css';

export default function Projects() {
  return (
    <section id="work" className="projects-section">
      <h2 className="heading">Turning Ideas into Impactful Solutions</h2>
      <p className="description">
        A showcase of innovative projects blending intuitive design, robust architecture, and data-driven insights to solve real-world challenges.
      </p>
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <Image
            width={300}
            height={200}
            src="https://i.ibb.co/XW6qL7N/image.png"
            alt="Project 1"
            className="project-image"
          />
          <h3 className="project-title">CopyWriters - for Writers</h3>
          <p className="project-description">
            The Collaborative Writing Platform is a full-stack web application designed to empower copywriters and content creators.
          </p>
          <a
            href="https://frontendblog-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <Image
            width={300}
            height={200}
            src="https://i.ibb.co/zHsG8NP/image.png"
            alt="Project 2"
            className="project-image"
          />
          <h3 className="project-title">Car Detailing Website</h3>
          <p className="project-description">
            A Business Website for a service company that wanted to cover the digital landscape.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <Image
            width={300}
            height={200}
            src="https://via.placeholder.com/350x200"
            alt="Project 3"
            className="project-image"
          />
          <h3 className="project-title">Grocery Planner</h3>
          <p className="project-description">
            An app that helps you budget for your monthly grocery using AI and lets you collaborate on it with others.
          </p>
          <a href="#" className="project-link">
            Coming Soon
          </a>
        </div>
      </div>
    </section>
  );
}
