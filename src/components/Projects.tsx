import "../styles/carousel.css"; // Assuming you are using the same CSS file

interface ProjectsProps {
  currentProjectIndex: number;
}

const projectDetails = [
  {
    title: "Peep-Pea Blog Platform",
    description:
      "A robust blogging platform built with Spring Boot, demonstrating modern Java development practices with a RESTful API, ensuring scalable and reliable content management.",
    technologies:
      "SpringBoot 3, React, PostgreSQL, H2, MySQL, OAuth2, CRUD Operations",
  },
  {
    title: "Pokedex Explorer - https://drew-erskine.web.app/pokemon-search",
    description:
      "A dynamic Pokedex application built with Node.js and Vue.js, featuring a real-time, interactive interface for exploring Pokémon, items, and moves, supporting user experience with both a CLI and web-based interfaces.",
    technologies: "Node.js, Vue.js, Vite, Tailwind CSS, HTML, Firebase",
  },
  {
    title: "HexWrld",
    description:
      "HexWrld is a dynamic Blender Geometry Nodes animation that exemplifies procedural generation and graphical computing. The project features a landscape made of hexagons and 2D grass, enhanced with vibrant lighting effects, demonstrating the capabilities of procedural content generation and the power of computer graphics for creating engaging visual environments.",
    technologies:
      "Blender, Geometry Nodes, Shaders, Drivers, Value Keying, HTML, CSS, JavaScript, Firebase",
  },
  {
    title: "Peep Pea Ponopoly",
    description:
      "PeepMonopoly is a full-stack application developed using Spring Boot 3 for the backend and React for the frontend. PeepMonopoly is designed to manage users and their autherized cash cards with functionalities like update, delete, and transfer and secure login.",
    technologies:
      "Java 21, Gradle, React, Jdbc, Jpa, PostgresSQL, Cors, Spring Boot3",
  },
];

function Projects({ currentProjectIndex }: ProjectsProps) {
  const project = projectDetails[currentProjectIndex];

  return (
    <div className="section project-container">
      <h2 className="section-title">Projects</h2>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default Projects;
