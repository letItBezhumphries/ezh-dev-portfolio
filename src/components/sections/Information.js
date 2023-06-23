import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faEnvelope,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import './Information.scss';

const Information = () => {
  return (
    <section className='basic-info-section'>
      <div className='section-inner'>
        <h2 className='section-heading'>Basic Information</h2>
        <div className='section-content'>
          <ul className='basic-info-section__list'>
            <li className='info-listitem'>
              <FontAwesomeIcon
                icon={faLocationDot}
                className='list-icon'
                size='lg'
              ></FontAwesomeIcon>
              Los Angeles, California
            </li>
            <li className='info-listitem'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='list-icon'
                size='lg'
              ></FontAwesomeIcon>
              ezhumphries@gmail.com
            </li>
            <li className='info-listitem'>
              <FontAwesomeIcon
                icon={faLink}
                className='list-icon'
                size='lg'
              ></FontAwesomeIcon>
              <a href='https://linkedin.com/in/eric-humphries-80'>
                linkedin.com/in/eric-humphries
              </a>
            </li>
            <li className='info-listitem'>
              <FontAwesomeIcon
                icon={faLink}
                className='list-icon'
                size='lg'
              ></FontAwesomeIcon>
              <a href='https://github.com/letItBezhumphries'>
                github.com/letItBezhumphries
              </a>
            </li>
            <li className='info-listitem'>
              <FontAwesomeIcon
                icon={faLink}
                className='list-icon'
                size='lg'
              ></FontAwesomeIcon>
              <a href='https://www.ezhumphries.dev' />
              www.ezhumphries.dev
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Information;
