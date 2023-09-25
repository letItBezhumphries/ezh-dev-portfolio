import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { SectionCard, CardList, CardListItem } from '../../components/Section';

const Degree = styled.h3`
  margin-top: 0;
  font-size: inherit;
  font-weight: 700;
  color: inherit;

  & .education-icon {
    margin-right: 10px;
    font-size: 1em;
    color: #778492;
  }
`;

const University = styled.h4`
  font-weight: 600;
  font-size: 1em;
  color: #999;
  margin-left: 30px;

  & .year {
    font-size: 12px;
    font-weight: 500;
    color: #b0b7bf;
    margin-left: 12px;
  }
`;

const Education = (props) => {
  return (
    <SectionCard heading="Education">
      <CardList>
        <CardListItem>
          <Degree>
            <FontAwesomeIcon icon={faGraduationCap} size="lg" className="education-icon" />
            Adv. Software Engineering Immersive
          </Degree>
          <University>
            Hack Reactor
            <span className="year">2019</span>
          </University>
        </CardListItem>
        <CardListItem>
          <Degree>
            <FontAwesomeIcon icon={faGraduationCap} size="lg" className="education-icon" />
            BA Theater Performance
          </Degree>
          <University>
            University of Maryland at College Park
            <span className="year">2007</span>
          </University>
        </CardListItem>
      </CardList>
    </SectionCard>
  );
};
export default Education;
