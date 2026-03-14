import ProjectItem from "./projectItem";
import { Link } from "react-router-dom";

function ProfileCard() {
  return (
    <div className="card">
      <h1 className="name">SHANU P</h1>
      <p className="role">Python Full Stack Developer</p>
      <p>
        I am an aspiring Software Developer with strong knowledge of Python,
        Django, HTML, CSS, JavaScript, React, and MySQL. I enjoy building
        practical projects and continuously improving my development skills. My
        portfolio showcases projects that demonstrate my ability to create clean
        user interfaces and develop functional web applications.
      </p>

      <div>
        <h3>SKILLS</h3>
      </div>

      <div className="skills">
        <span>Python</span>
        <span>React</span>
        <span>Django</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>Version Control</span>
        <span>MySQL</span>
        <span>MVC Architecture</span>
        <span>REST API</span>
        <span>Django REST Framework</span>
        <span>OOP</span>
        <span>PostgreSQL</span>
        <span>Bootstrap</span>
        <span>Authentication and Session Management</span>
        <span>ORM</span>
      </div>

      {/* <div className="projects">
        <h3>Projects</h3>

        <ProjectItem
          title="E-commerce Website"
          description="A full-stack e-commerce website built with Python and Django"
        />
        <ProjectItem
          title="Personal Portfolio"
          description="A personal portfolio website using React.js for showcasing my projects and skills."
        />
        <ProjectItem
          title="Instagram UI Clone"
          description="Designed and implemented an Instagram homepage UI clone using HTML and CSS, demonstrating responsive design and modern UI layout techniques."
        />
      </div> */}

      <div
        className="projects-link"
        aria-placeholder="Click here to view projects"
      >
        <Link to="/projects">VIEW MY PROJECTS →</Link>
      </div>

      <div className="contact">
        <a className="email" href="mailto:shanualr20@gmail.com">
          📧 shanualr20@gmail.com
        </a>
        <a
          className="git"
          href="https://github.com/Shanu-sp"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 github.com/Shanu-sp
        </a>
        <a
          className="linked"
          href="https://www.linkedin.com/in/shanu-p-636b57303"
        >
          🔗 linkedin.com/in/shanu-p-636b57303
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
