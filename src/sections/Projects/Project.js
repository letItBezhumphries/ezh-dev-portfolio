import InteractiveHeading from '../../components/headings/InteractiveHeading';
import ProjectVisual from './ProjectVisual';
import ProjectDetails from './ProjectDetails';
import ProjectLink from './ProjectLink';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ProjectContainer = styled.div`
  width: 100%;
  padding: 6rem;
  font-family: 'brandon_textthin';

  @media only screen and (max-width: 87.5em) {
    padding: 4rem;
  }

  @media only screen and (max-width: 56.25em) {
    padding: 3rem;
  }

  @media only screen and (max-width: 767.98px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 1.5rem;
  }

  @media only screen and (max-width: 425px) {
    padding: 1rem;
  }
`;

const ProjectType = styled.h3`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 200;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 1.4rem;
  }
`;

const ProjectSummary = styled(motion.p)`
  padding: 0 0 1.5rem;
  margin: 2rem 0 1rem 0;
  font-size: 1.8rem;
  font-family: 'brandon_textthin';
  font-weight: 400;
  line-height: 2.4rem;
  color: #fff;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 425px) {
    padding: 0 0.5rem;
  }

  & a {
    text-decoration: none;
    color: #f4a949;

    &:hover {
      color: #f4ac4f;
      border-bottom: 1px solid #f4ac4f;
    }
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

const Project = ({ featured, type, description, summary, title, specs, details, gitlink, images, url }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [inView, control]);

  return (
    <ProjectContainer>
      <ProjectType>{type}</ProjectType>
      <InteractiveHeading heading={title} link={true} githublink={gitlink} size={'md'} />

      {featured === true && summary.length > 0 ? (
        <>
          <ProjectSummary ref={ref} variants={SlideinLeftVariant} initial="hidden" animate={control}>
            The <a href={gitlink}>{summary.split(' ').slice(1, 6).join(' ')}</a> {summary.split(' ').slice(6).join(' ')}.
          </ProjectSummary>
          <ProjectVisual images={images} featured={featured} />
          <ProjectDetails details={details} specs={specs} featured={featured} githublink={gitlink} title={title} />
          <ProjectLink githublink={gitlink} url={url} />
        </>
      ) : (
        <>
          <ProjectVisual images={images} />
          <ProjectDetails details={details} specs={specs} githublink={gitlink} title={title} />
          <ProjectLink githublink={gitlink} url={url} />
        </>
      )}
    </ProjectContainer>
  );
};

export default Project;
