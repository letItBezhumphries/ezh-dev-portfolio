import { SectionCard } from '../../components/Section';
import MicrosoftBadge from '../../assets/img/microsoft-365-certified-fundamentals.png';
import './Certifications.scss';

const Certifications = (props) => {
  return (
    <SectionCard heading="Certifications">
      <div className="certification">
        <div className="certification__badge">
          <img src={MicrosoftBadge} alt="Microsoft 365 certification badge" />
        </div>
        <h4 className="certification__heading">
          Microsoft 365 Certified: Fundamentals
          <span className="certification__year">2022</span>
        </h4>
      </div>
    </SectionCard>
  );
};
export default Certifications;
