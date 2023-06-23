import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import StrokedHeading from './strokedHeading';
import './header.scss';
import Image from 'react-bootstrap/Image';
import Headshot from '../assets/EricH-59473.jpg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <div className='header-left'>
          <Image src={Headshot} roundedCircle className='headshot' fluid />
        </div>
        <div className='header-main'>
          <h1 className='name'>Eric Z Humphries</h1>

          <h2 className='description'>Software Engineer | Always Learning</h2>
          <ul className='social-links list-inline'>
            <li className='list-link'>
              <a href='https://www.linkedin.com/in/eric-humphries-80'>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size='xl'
                  className='item-icon'
                />
              </a>
            </li>
            <li className='list-link'>
              <a href='https://www.github.com/letItBezhumphries'>
                <FontAwesomeIcon
                  icon={faGithub}
                  size='xl'
                  className='item-icon'
                />
              </a>
            </li>
            <li className='list-link'>
              <a href='https://www.facebook.com/ericzhumphries'>
                <FontAwesomeIcon
                  icon={faFacebook}
                  size='xl'
                  className='item-icon'
                />
              </a>
            </li>
            <li className='list-link last'>
              <a href='https://www.twitter.com/erichumphries'>
                <FontAwesomeIcon
                  icon={faTwitter}
                  size='xl'
                  className='item-icon'
                />
              </a>
            </li>
          </ul>
        </div>
        <div className='header-right'>
          <a href='/' className='btn btn-info'>
            <span>
              <FontAwesomeIcon icon={faPaperPlane} className='link-icon' />
              <span>CONTACT ME</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
