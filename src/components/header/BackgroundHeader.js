import './BackgroundHeader.scss';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import RevealHeading from '../headings/RevealHeading';
import ProjectLink from '../links/ProjectLink';

const BackgroundHeader = ({ showSideNav, handleShowSideNav, handleHideSideNav, handleActivateSection }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      handleHideSideNav();
      handleActivateSection('intro');
    } else {
      handleShowSideNav();
    }
  }, [inView, handleShowSideNav, handleHideSideNav, handleActivateSection]);

  return (
    <section className="section-header" id="intro" ref={ref} data-nav-title="Intro" data-scrollspy>
      <div className="bg-header"></div>
      <RevealHeading name={'Eric Z. Humphries'} subtext={'Front End Software Engineer | Javascript Expert | Always Learning'} />
      <ProjectLink text={'About me'} section={'/#about'} linkClass={'aboutLink'} />
    </section>
  );
};
export default BackgroundHeader;
