import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ContactForm from '../sections/Contact/ContactForm';
import './ContactView.scss';

const ContactView = ({ handleActivateSection }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      handleActivateSection('contact');
    }
  }, [inView, handleActivateSection]);

  return (
    <section heading={'Contact'} className={'contactView'} id="contact" data-nav-title="Contact" data-scrollspy ref={ref}>
      <svg preserveAspectRatio="none" viewBox="0 0 100 100" height="75" width="100%" version="1.1" xmlns="www.w3.org/2000/svg" className="svg-darktriangle">
        <path d="M 0 0 H 100 L50 100" stroke="#1d1d20" fill="#1d1d20" />
      </svg>
      <ContactForm />
    </section>
  );
};
export default ContactView;
