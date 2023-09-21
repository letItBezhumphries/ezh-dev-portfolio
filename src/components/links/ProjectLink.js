import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './ProjectLink.scss';

const ProjectLink = ({ githublink, text, section, linkClass, url }) => {
  let link;

  if (linkClass === undefined) {
    link = (
      <a href={section}>
        {text}
        <FontAwesomeIcon icon={faChevronRight} />
      </a>
    );
  } else {
    link = (
      <div className={url !== undefined ? 'link-container site' : 'link-container'}>
        <a href={section !== undefined ? section : githublink} className={`link ${linkClass}`}>
          {text}
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
    );
  }
  return link;
};

export default ProjectLink;
