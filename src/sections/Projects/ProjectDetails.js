import styled from 'styled-components';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StyledDetails = styled(motion.div)`
  padding: 1rem 2.5rem;
  color: #fff;
  margin: 0 0 3rem 0;
`;

const ProjectTitle = styled.h3`
  margin: 2rem 0;
  font-size: 2.4rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 37.5em) {
    font-size: 2.2rem;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  &:hover,
  &:active {
    text-decoration: underline;
    text-underline-offset: 4px;
    color: #f4ac4f;
  }
`;

const ProjectSpecs = styled.div`
  font-family: 'Montserrat';
  font-size: 1.6rem;
  font-weight: 300;
  color: inherit;
  line-height: 20px;
  margin-bottom: 1rem;
  margin-left: 4px;
`;

const BoldText = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  margin-right: 8px;
  color: #9c27b0;
`;

const DetailsList = styled.ul`
  font-family: 'Montserrat';
  li {
    margin-left: 2rem;
    padding-left: 1rem;
    margin-bottom: 5px;
    font-size: 1.4rem;
  }
`;

const SlideinLeftVariant = {
  visible: {
    opacity: 1,
    x: [-100, 10, 0],
    transition: { ease: 'easeIn', duration: 1, delay: 0.25 }
  },
  hidden: { opacity: 0, x: -100 }
};

const ProjectDetails = ({ details, specs, title, featured, githublink }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  let projectDetails = details.map((detail, i) => <li key={i}>{detail}</li>);

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [inView, control]);

  return (
    <StyledDetails ref={ref} variants={SlideinLeftVariant} initial="hidden" animate={control}>
      {featured ? (
        <ProjectTitle>{title}</ProjectTitle>
      ) : (
        <ProjectTitle>
          <a href={githublink}>{title}</a>
        </ProjectTitle>
      )}

      <ProjectSpecs>
        <BoldText>Built with:</BoldText>
        {specs}
      </ProjectSpecs>
      <DetailsList>{projectDetails}</DetailsList>
    </StyledDetails>
  );
};

export default ProjectDetails;
