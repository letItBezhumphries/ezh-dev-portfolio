import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './ButtonGroup.scss';

const ButtonGroup = () => {
  return (
    <div className="buttonGroup-row">
      <a href="/" className="buttonGroup-row__link">
        <div className="buttonGroup-row__iconBox">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="buttonGroup-row__icon" />
        </div>
      </a>
      <a href="/" className="buttonGroup-row__link">
        <div className="buttonGroup-row__iconBox">
          <FontAwesomeIcon icon={faFacebook} size="lg" className="buttonGroup-row__icon" />
        </div>
      </a>
      <a href="/" className="buttonGroup-row__link">
        <div className="buttonGroup-row__iconBox">
          <FontAwesomeIcon icon={faGithub} size="lg" className="buttonGroup-row__icon" />
        </div>
      </a>
      <a href="/" className="buttonGroup-row__link">
        <div className="buttonGroup-row__iconBox">
          <FontAwesomeIcon icon={faTwitter} size="lg" className="buttonGroup-row__icon" />
        </div>
      </a>
    </div>
  );
};
export default ButtonGroup;
