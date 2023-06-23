import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import MicrosoftBadge from '../../assets/microsoft-365-certified-fundamentals.png';
import './Certifications.scss';

const Certifications = () => {
  return (
    <section className='certification-section'>
      <div className='section-inner'>
        <h2 className='section-heading'>Certifications</h2>
        <div className='section-content'>
          <div className='certification'>
            <div className='certification__badge'>
              <img src={MicrosoftBadge} />
            </div>
            <h4 className='certification__title'>
              Microsoft 365 Certified: Fundamentals
              <span className='certification__year'>2022</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Certifications;
