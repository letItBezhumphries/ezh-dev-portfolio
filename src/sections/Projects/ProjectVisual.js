import './ProjectVisual.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Laptop from '../../components/Laptop';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SlideinRightVariant = {
  visible: {
    opacity: 1,
    x: [100, -10, 0],
    transition: { ease: 'easeIn', duration: 1, delay: 0.25 }
  },
  hidden: { opacity: 0, x: 100 }
};

const ProjectVisual = ({ images, featured }) => {
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [inView, control]);

  const handlePhotoNext = (index) => {
    if (index < images.length - 1) {
      setCurrentPhotoIdx(index + 1);
    } else if (index === images.length - 1) {
      setCurrentPhotoIdx(0);
    }
  };

  const handlePhotoPrev = (index) => {
    if (index > 0) {
      setCurrentPhotoIdx(index - 1);
    } else if (index === 0) {
      setCurrentPhotoIdx(images.length - 1);
    }
  };

  return (
    <motion.div ref={ref} variants={SlideinRightVariant} initial="hidden" animate={control} className="project-visual">
      <span className="project-visual__icon-box project-visual__icon-box--left" onClick={() => handlePhotoPrev(currentPhotoIdx)}>
        <FontAwesomeIcon icon={faCircleArrowLeft} size="2xl" className="project-visual__icon visual__icon--left" />
      </span>
      <Laptop image={images[currentPhotoIdx]} />
      <span className="project-visual__icon-box project-visual__icon-box--right" onClick={() => handlePhotoNext(currentPhotoIdx)}>
        <FontAwesomeIcon icon={faCircleArrowRight} size="2xl" className="project-visual__icon visual__icon--right" />
      </span>
    </motion.div>
  );
};
export default ProjectVisual;
