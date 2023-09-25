import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ListWrapper = styled.div`
  padding: 1rem;
  margin-top: 4rem;
  display: flex;
  font-size: 1.05em;
  letter-spacing: 1.05px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 425px) {
    margin-top: 1rem;
    font-size: 0.85em;
  }
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  @media only screen and (max-width: 425px) {
    padding-left: 1rem;
  }

  & li {
    margin-bottom: 12px;
    font-size: inherit;
    color: #fff;
    white-space: nowrap;

    @media only screen and (max-width: 425px) {
      margin-bottom: 10px;
    }

    .list-icon {
      margin-right: 1rem;
      color: #9c9999;

      @media only screen and (max-width: 425px) {
        margin-right: 0.75rem;
      }
    }

    &:first-child {
      color: #9c9999;
    }

    a {
      text-decoration: none;
      color: #00b7c7;
    }

    a:hover {
      text-decoration: underline;
      color: #3ee0ef;
    }
  }
`;

const Information = (props) => {
  return (
    <ListWrapper>
      <InfoList>
        <li className="info-listitem">
          <FontAwesomeIcon icon={faLocationDot} className="list-icon" size="lg"></FontAwesomeIcon>
          Los Angeles, California
        </li>
        <li className="info-listitem">
          <FontAwesomeIcon icon={faEnvelope} className="list-icon" size="lg"></FontAwesomeIcon>
          {/* <a href='mailto:email@ezhumphries@gmail.com'>
            <span>ezhumphries@gmail.com</span>
          </a> */}
          <a href="/#contact">
            <span>ezhumphries@gmail.com</span>
          </a>
        </li>
        <li className="info-listitem">
          <FontAwesomeIcon icon={faLink} className="list-icon" size="lg"></FontAwesomeIcon>
          <a href="https://linkedin.com/in/eric-humphries-80">linkedin.com/in/eric-humphries</a>
        </li>
        <li className="info-listitem">
          <FontAwesomeIcon icon={faLink} className="list-icon" size="lg"></FontAwesomeIcon>
          <a href="https://github.com/letItBezhumphries">github.com/letItBezhumphries</a>
        </li>
        <li className="info-listitem">
          <FontAwesomeIcon icon={faLink} className="list-icon" size="lg"></FontAwesomeIcon>
          <a href="https://www.ezhumphries.dev">ezhumphries.dev</a>
        </li>
      </InfoList>
    </ListWrapper>
  );
};
export default Information;
