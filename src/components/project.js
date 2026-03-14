import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>

      <div className="project-card">
        <h3>E-commerce Website</h3>
        <p>
          A full-stack e-commerce website built with Python and Django,
          featuring user authentication, product management, shopping cart
          functionality.
        </p>
        <a
          className="link-button"
          href="https://github.com/Shanu-sp"
          target="_blank"
        >
          View Code
        </a>
      </div>

      <div className="project-card">
        <h3>Personal Portfolio</h3>
        <p>
          Minimal developer portfolio built using React showcasing skills and
          projects.
        </p>
        <a
          className="link-button"
          href="https://github.com/Shanu-sp/portapp"
          target="_blank"
        >
          View Code
        </a>
      </div>

      <div className="project-card">
        <h3>Instagram UI Clone</h3>
        <p>
          Designed and implemented an Instagram homepage UI clone using HTML and
          CSS, demonstrating responsive design and modern UI layout techniques.
        </p>
        <a
          className="link-button"
          href="https://github.com/Shanu-sp/instagram-clone"
          target="_blank"
        >
          View Code
        </a>
      </div>

      <div className="project-card">
        <h3>IoT Based Air Quality Monitoring System</h3>
        <p>
          College Project - Developed an IoT system to monitor real-time air
          quality using environmental sensors and a microcontroller. Collected
          and transmitted air pollution data to a cloud platform for monitoring
          and analysis. Enabled early detection of harmful air conditions
          through continuous monitoring and alerts.
        </p>
      </div>

      <br />

      <Link className="link-button" to="/">
        ← Back
      </Link>
    </div>
  );
}

export default Projects;
