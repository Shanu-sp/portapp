import projectItem from "./projectItem";

function ProfileCard() {
  return (
    <div className="card">
      <h1 className="name">SHANU P</h1>
      <p className="role">Python Full Stack Developer</p>
      <p>I build web applications using Python and React.</p>

      <div className="skills">
        <span>Python</span>
        <span>React</span>
        <span>Django</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Git</span>
        <span>MySQL</span>
        <span>REST API</span>
        <span>Django REST Framework</span>
        <span>OOP</span>
      </div>

      <div className="projects">
        <h3>Projects</h3>

        <projectItem
          title="E-commerce Website"
          description="A full-stack e-commerce website built with Python and Django"
        />
        <projectItem
          title="Personal Portfolio"
          description="A personal portfolio website using React.js for showcasing my projects and skills."
        />
      </div>

      <div className="contact">
        <p>📧 shanualr20@gmail.com</p>
        <p>🔗 github.com/Shanu-sp</p>
      </div>
    </div>
  );
}

export default ProfileCard;
