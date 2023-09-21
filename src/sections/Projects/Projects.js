import { useState } from 'react';
import Project from './Project';
import Pagination from '../../components/Pagination';

const Projects = ({ projectsData }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleProjectClick = (index) => {
    if (index !== currentProjectIndex) {
      setCurrentProjectIndex(index);
    }
  };

  let projects = projectsData.map((proj, i) => {
    return (
      <Project
        key={i}
        featured={proj.featured}
        type={proj.type}
        title={proj.title}
        summary={proj.summary}
        specs={proj.specs}
        description={proj.description}
        details={proj.details}
        gitlink={proj.githublink}
        url={proj.url}
        images={proj.images}
      />
    );
  });

  return (
    <>
      {projects[currentProjectIndex]}
      <Pagination totalProjects={projectsData} clicked={handleProjectClick} currentIndex={currentProjectIndex} />
    </>
  );
};

export default Projects;
