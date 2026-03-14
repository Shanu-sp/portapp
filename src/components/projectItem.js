function ProjectItem({ title, description }) {
  return (
    <div className="project-item">
      <p>
        → <strong>{title}</strong>
      </p>
      <p className="project-description">{description}</p>
    </div>
  );
}

export default ProjectItem;
