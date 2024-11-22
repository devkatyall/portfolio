import React from 'react';
import Image from 'next/image';
import './../assets/slider.css';

export default function Slider() {
  const skills = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", alt: "R" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase" },
    { src: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg", alt: "AWS" },
    { src: "https://cdn2.iconfinder.com/data/icons/mixd/512/3_tableau-1024.png", alt: "Tableau" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", alt: "SQLite" },
  ];

  return (
    <div id="skills" className="slider-pad">
      <div className="slider-head">
        <h2>Crafting Seamless Solutions with My Tech Arsenal</h2>
        <p>
          Discover the diverse tools and technologies I wield to bring ideas to life, from intuitive frontend interfaces to robust backend systems, all powered by cutting-edge platforms and data-driven insights.
        </p>
      </div>
      <div className="slider-container">
        <div className="slider">
          {skills.map((skill, index) => (
            <div key={index} className="slider-image-wrapper">
              <Image
                src={skill.src}
                alt={skill.alt}
                width={80} // Set width for the image
                height={80} // Set height for the image
                objectFit="contain" // Ensures the image fits nicely
              />
            </div>
          ))}
        </div>
        <div className="slider slider-copy">
          {skills.map((skill, index) => (
            <div key={index + skills.length} className="slider-image-wrapper">
              <Image
                src={skill.src}
                alt={skill.alt}
                width={80}
                height={80}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
