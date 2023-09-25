import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Divider from '../components/Divider';
import Headshot from '../assets/img/EricH-59473.jpg';
import portfolioData from '../assets/data/portfolioData';
import Music from '../sections/Music/Music';
import Information from '../sections/About/Information';
import './AboutView.scss';

const SectionHeading = styled.h1`
  font-size: 4.8rem;
  font-family: 'Chronicle Display', sans-serif;

  @media only screen and (max-width: 425px) {
    font-size: 3.2rem;
  }
`;

const SectionSubheading = styled.h3`
  width: 60%;
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 1.6rem;
  font-family: 'Gotham', Helvetica, Arial;

  @media only screen and (max-width: 425px) {
    width: 45%;
    font-size: 1.5rem;
  }
`;

const AboutView = ({ aboutText, firstName, intro, handleActivateSection }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      handleActivateSection('about');
    }
  }, [inView, handleActivateSection]);

  return (
    <section className="aboutView" id="about" data-nav-title="About" data-scrollspy ref={ref}>
      <div className="section-wrapper">
        <div className="about-container">
          <SectionHeading>Hey, I'm {firstName}.</SectionHeading>
          <SectionSubheading>{intro}</SectionSubheading>
          <Divider color="#00b7c7"></Divider>
          <div className="about-wrapper">
            <div className="right-side">
              <Image src={Headshot} className="headshot" />
              <Information />
            </div>

            <div className="about-text-wrapper">
              {aboutText.map((txt, i) => (
                <div className="about-text" key={i}>
                  {txt}
                </div>
              ))}
            </div>
            <Divider color="#00b7c7" full={true}></Divider>
            <div className="about-music-wrapper">
              <Music tracks={portfolioData.tracks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutView;
