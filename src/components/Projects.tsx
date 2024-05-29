import '../styles/carousel.css'; // Assuming you are using the same CSS file


interface ProjectsProps {
  currentProjectIndex: number;
}

const projectDetails = [
  {
    title: "Project A",
    description: "Developed a responsive blog using React and Redux.",
    technologies: "React, Redux, Node.js, MongoDB"
  },
  {
    title: "Project B",
    description: "Developed a mobile application using React Native.",
    technologies: "React Native, Redux, Firebase"
  },
  {
    title: "Project C",
    description: "Developed a real-time chat application.",
    technologies: "React, Socket.io, Node.js"
  }
];

function Projects({ currentProjectIndex }: ProjectsProps) {
  const project = projectDetails[currentProjectIndex];

  return (
    <div className="section project-container">
      <h2 className="section-title">Projects</h2>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>Technologies:</strong> {project.technologies}</p>
      </div>
    </div>
  );
}

export default Projects;
