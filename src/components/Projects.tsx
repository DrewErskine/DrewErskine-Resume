import React from "react";

interface ProjectsProps {
  currentProjectIndex: number;
}

const projectData = [
  {
    title: "Project A",
    description: "Developed a responsive e-commerce website using React and Redux.",
    technologies: "Technologies: React, Redux, Node.js, MongoDB"
  },
  {
    title: "Project B",
    description: "Created a mobile application for task management using React Native.",
    technologies: "Technologies: React Native, Redux, Firebase"
  },
  {
    title: "Project C",
    description: "Built a real-time chat application using WebSocket and Node.js.",
    technologies: "Technologies: WebSocket, Node.js, Express, MongoDB"
  }
];

const Projects: React.FC<ProjectsProps> = ({ currentProjectIndex }) => {
  const currentProject = projectData[currentProjectIndex];

  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      <div className="section-content flex">
        <div className="w-full">
          <h3>{currentProject.title}</h3>
          <p>{currentProject.description}</p>
          <p>{currentProject.technologies}</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
