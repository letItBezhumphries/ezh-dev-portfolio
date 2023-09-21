import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Skills from '../sections/Skills/Skills';
import portfolioData from '../assets/data/portfolioData';
import './SkillsView.scss';

const SkillsView = ({ handleActivateSection, skew }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      handleActivateSection('skills');
    }
  }, [inView, handleActivateSection]);

  return (
    <section className={skew ? 'skillsView skew' : 'skillsView'} id="skills" data-nav-title="Skills" data-scrollspy ref={ref}>
      <div className="skills-wrapper">
        <Skills intro={portfolioData.skills.intro} skillgroups={portfolioData.skills.skillgroups} />
      </div>
    </section>
  );
};
export default SkillsView;
