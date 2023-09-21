import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './ProjectLink.scss';

const ProjectLink = ({ githublink, url }) => {
  return (
    <div className={url !== undefined ? 'project-link-container site' : 'project-link-container'}>
      <a href={githublink} className="project-link">
        See the code
        <FontAwesomeIcon icon={faChevronRight} />
      </a>
    </div>
  );
};
export default ProjectLink;
