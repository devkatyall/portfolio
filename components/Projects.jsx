import React from 'react'
import './../assets/projects.css'

export default function Projects() {
  return (
    <section id='work' className="projects-section">
        <h2>Turning Ideas into Impactful Solutions</h2>
        <p>A showcase of innovative projects blending intuitive design, robust architecture, and data-driven insights to solve real-world challenges.</p>
    <div className="projects-container">
      <div className="project-card">
        <img src="https://i.ibb.co/XW6qL7N/image.png" alt="Project 1" />
        <h3>CopyWriters - for Writers</h3>
        <p>The Collaborative Writing Platform is a full-stack web application designed to empower copywriters and content creators.</p>
        <a href="https://frontendblog-five.vercel.app/" target="_blank">View Project</a>
      </div>

      <div className="project-card">
        <img src="https://i.ibb.co/zHsG8NP/image.png" alt="Project 2" />
        <h3>Car Detailing Website</h3>
        <p>A Business Website for a service company that wanted to cover digital landscape</p>
        <a href="#" target="_blank">View Project</a>
      </div>

      <div className="project-card">
        <img src="https://via.placeholder.com/350x200" alt="Project 3" />
        <h3>Grocery Planner</h3>
        <p>An app that helps you budget for your monthly grocery using AI and lets you collaborate on it with others.</p>
        <a href="#" >Coming Soon</a>
      </div>

    </div>
  </section>
  )
}
