import './Skill.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import SkillInfoTooltip from '../../components/tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Skill = ({
  skill,
  tooltipText,
  id,
  level,
  percentage,
  children,
  location,
  animate,
}) => {
  const GrowBarVariant = {
    visible: {
      width: percentage,
      opacity: 1,
      transition: { ease: 'easeIn', duration: 0.3 },
    },
    hidden: { opacity: 0, width: 0 },
  };

  const control = useAnimation();

  useEffect(() => {
    if (animate) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [animate, control]);

  return (
    <div className='skill'>
      <h3 className='skill__heading'>
        <span>{skill}</span>
        {tooltipText.length > 0 ? (
          <SkillInfoTooltip text={tooltipText} id={id} location={location}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              className='skill__icon'
              size='lg'
            />
            {level}
          </SkillInfoTooltip>
        ) : null}
      </h3>
      <div className='bar'>
        <motion.div
          initial='hidden'
          variants={GrowBarVariant}
          animate={control}
          className='fillBar'
          exit={{ width: percentage, opacity: 1 }}
        >
          <div className='tag'>{children}</div>
        </motion.div>
        <span className='unfilledBar'>{percentage}</span>
      </div>
    </div>
  );
};

export default Skill;
