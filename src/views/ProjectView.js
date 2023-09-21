import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Projects from '../sections/Projects/Projects';
import InteractiveHeading from '../components/headings/InteractiveHeading';
import Divider from '../components/Divider';
import portfolioData from '../assets/data/portfolioData';
import './ProjectView.scss';

const ProjectView = ({ handleActivateSection, skew }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      handleActivateSection('projects');
    }
  }, [inView, handleActivateSection]);

  return (
    <section className={skew ? 'projectView skew' : 'projectView'} id="projects" data-nav-title="Projects" data-scrollspy ref={ref}>
      <div className="u-center-text u-margin-bottom-small">
        <InteractiveHeading heading={'Portfolio & Projects'} />
        <Divider centered={true}></Divider>
      </div>

      <div className="projects-wrapper">
        <Projects projectsData={portfolioData.projects} />
      </div>
    </section>
  );
};

export default ProjectView;
