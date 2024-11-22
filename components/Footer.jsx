import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.name}>Dev Katyal</div>
        <div style={styles.links}>
          <a
            href="https://github.com/devkatyall"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FaGithub size={30} style={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/devkatyal/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FaLinkedin size={30} style={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#18cafc',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  icon: {
    color: '#18cafc',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#0a98c0',
  },
};

export default Footer;
