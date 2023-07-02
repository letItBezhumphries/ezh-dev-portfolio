import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Education.scss';

const Education = () => {
  return (
    <section className="education-section">
      <div className="section-inner">
        <h2 className="section-heading">Education</h2>
        <div className="section-content">
          <div className="education-entry">
            <h3 className="degreeTitle">
              <FontAwesomeIcon icon={faGraduationCap} size="lg" className="education-icon" />
              Adv. Software Engineering Immersive
            </h3>
            <h4 className="university">
              Hack Reactor
              <span className="year">2019</span>
            </h4>
          </div>
          <div className="education-entry">
            <h3 className="degreeTitle">
              <FontAwesomeIcon icon={faGraduationCap} size="lg" className="education-icon" />
              BA Theater Performance
            </h3>
            <h4 className="university">
              University of Maryland at College Park
              <span className="year">2007</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
