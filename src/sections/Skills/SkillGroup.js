import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Skill from './Skill';
import styled from 'styled-components';

const Heading = styled.h3`
  text-transform: uppercase;
  color: inherit;
  font-weight: 700;
  font-size: 1.5vw;
  margin: 15px 0;

  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const SkillGroupWrapper = styled.div`
  padding-right: 0;
  color: #fff;
  width: 100%;
  font-size: 18px;
  min-height: 200px;
  min-width: 400px;

  @media only screen and (max-width: 425px) {
    min-width: 90%;
  }
`;

const HeadingIcon = styled.span`
  margin-right: 1rem;
`;

const SkillGroup = ({ skillgroup, children, tooltipLoc }) => {
  const [ref, inView] = useInView();
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimateSkills(true);
    } else {
      setAnimateSkills(false);
    }
  }, [inView, setAnimateSkills]);

  return (
    <SkillGroupWrapper ref={ref}>
      <Heading>
        <HeadingIcon>
          <FontAwesomeIcon icon={skillgroup.gpIcon} />
        </HeadingIcon>
        <span>{skillgroup.type} </span>
      </Heading>
      {skillgroup.skills.map((skill, i) => (
        <Skill key={i} skill={skill.skill} tooltipText={skill.tooltip} id={skill.id} level={skill.level} percentage={skill.percentage} location={tooltipLoc} animate={animateSkills}>
          {children[i]}
        </Skill>
      ))}
    </SkillGroupWrapper>
  );
};

export default SkillGroup;
