import React from "react";
import "./Projects.css";
import { Button, Typography } from "@mui/material";
import { AiOutlineDelete, AiOutlineProject } from "react-icons/ai";

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a
        href={url}
        className="projectCard"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <img src={projectImage} alt="ProjectImage" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          <AiOutlineDelete />
        </Button>
      )}
    </>
  );
};

function Projects() {
  const projects = [1, 2, 3, 4];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((projects, index) => (
          <ProjectCard
            url="https://github.com/atactoc-sys"
            projectImage="https://cdn.pixabay.com/photo/2019/01/07/03/23/cloud-3918395_960_720.png"
            projectTitle="Server Management System"
            description="Building a server management project using Spring Boot and Angular requires a good understanding of these technologies, as well as knowledge of server management concepts. It's essential to plan, design, and test the application thoroughly to ensure its reliability and security."
            technologies="Backend: Spring Boot (Java)
Frontend: Angular (TypeScript)
Database: PostgreSQL or MySQL (for storing server information)"
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
