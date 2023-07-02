import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import SkillTooltip from './SkillTooltip';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="section-inner">
        <h2 className="section-heading">Skills</h2>
        <div className="section-content">
          <p className="intro">
            While most of my experience is in Web Development utilizing JavaScript, I also have experience working with DevOps / infrastructure building technologies like Terraform, Packer, Ansible,
            Docker
          </p>
          <div className="skillset">
            <div className="skill">
              <h3 className="skill__title">
                <span>JavaScript &amp; NodeJS</span>
                <SkillTooltip title="I have over 4 years experience in JS and Node including utilizing it while having taken Hack Reactor the top coding Bootcamp in the US." id="javascript-skill">
                  <FontAwesomeIcon icon={faCircleInfo} className="skill__icon" size="lg" />
                  Expert
                </SkillTooltip>
              </h3>
              <div className="skill__level-bar">
                <div className="skill__level-bar-inner" data-level="92%"></div>
              </div>
            </div>
            <div className="skill">
              <h3 className="skill__title">
                <span>React &amp; Redux</span>
                <SkillTooltip
                  title="With over 4 years of experience working with React, most of all my projects have been built with React, and I have become quite familiar developing React projects with Redux for state management."
                  id="react-skill"
                >
                  <FontAwesomeIcon icon={faCircleInfo} className="skill__icon" size="lg" />
                  Expert
                </SkillTooltip>
              </h3>
              <div className="skill__level-bar">
                <div className="skill__level-bar-inner" data-level="92%"></div>
              </div>
            </div>
            <div className="skill">
              <h3 className="skill__title">
                <span>HTML, CSS, &amp; SASS</span>
                <SkillTooltip
                  title="I have over 4 years experience developing web applications relying on my knowledge of HTML, CSS and SASS, and have incorporated responsive breakpoints to ensure the projects are tailored for multiple screen sizes"
                  id="html-css-skill"
                >
                  <FontAwesomeIcon icon={faCircleInfo} className="skill__icon" size="lg" />
                  Expert
                </SkillTooltip>
              </h3>
              <div className="skill__level-bar">
                <div className="skill__level-bar-inner" data-level="92%"></div>
              </div>
            </div>
            <div className="skill">
              <h3 className="skill__title">
                <span>MongoDB / MySQL</span>
                <SkillTooltip
                  title="With over 4 years experience working with MongoDB/MySQL databases,
                  most of the applications I have built were Fullstack or Mernstack, in which I 
                  built out both frontend and backend systems."
                  id="mongodb-mysql-skill"
                >
                  <FontAwesomeIcon icon={faCircleInfo} className="skill__icon" size="lg" />
                  Expert
                </SkillTooltip>
              </h3>
              <div className="skill__level-bar">
                <div className="skill__level-bar-inner" data-level="92%"></div>
              </div>
            </div>
            <div className="skill">
              <h3 className="skill__title">
                <span>Terraform, Ansible, &amp; Packer</span>
                <SkillTooltip
                  title="I have 2 years of experience building utilizing Docker,
                  Jenkins, Terraform, Ansible and Packer, in order to build out infrastructure,
                  spin up ec2s on Amazon, and to configure linux based systems to incorporate and
                  deploy applications in the cloud."
                  id="devop-skill"
                >
                  <FontAwesomeIcon icon={faCircleInfo} className="skill__icon" size="lg" />
                  Pro
                </SkillTooltip>
              </h3>
              <div className="skill__level-bar">
                <div className="skill__level-bar-inner" data-level="85%"></div>
              </div>
            </div>
            <div className="skill">
              <h3 className="skill__title">
                <span>AWS</span>
                <SkillTooltip title="I have 3 years experience deploying application code on Amazon ec2 and ecs services." id="aws-skill">
                  <FontAwesomeIcon icon={faCircleInfo} className="skill__icon" size="lg" />
                  Pro
                </SkillTooltip>
              </h3>
              <div className="skill__level-bar">
                <div className="skill__level-bar-inner" data-level="80%"></div>
              </div>
            </div>
            <div className="skill last-link">
              <a className="more-skills-link" href="https://linkedin.com/in/eric-humphries-80">
                <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="more-link-icon" />
                More on Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
