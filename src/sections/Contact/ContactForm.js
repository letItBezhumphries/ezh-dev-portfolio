import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.scss';
import Swal from 'sweetalert2';
import styled from 'styled-components';

const ContactFormContainer = styled.div`
  margin: 0 auto;
  background-color: #1d1d20;
  margin-top: 6rem;
  padding: 4rem 4rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SlideinLeftVariant = {
  visible: {
    opacity: 1,
    x: [-100, 10, 0],
    transition: { ease: 'easeIn', duration: 1, delay: 0.25 },
  },
  hidden: { opacity: 0, x: -100 },
};

const SlideinRightVariant = {
  visible: {
    opacity: 1,
    x: [100, -10, 0],
    transition: { ease: 'easeIn', duration: 1, delay: 0.25 },
  },
  hidden: { opacity: 0, x: 100 },
};

const FormVariant = {
  visible: {
    opacity: 1,
    scale: [0, 1.1, 1, 1.08, 1],
    transition: { ease: 'easeIn', duration: 1, delay: 0.5 },
  },
  hidden: { opacity: 0, scale: 0 },
};

const ContactForm = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  });

  // to register when element is in viewport and initiate animations
  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [inView, control]);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Message sent successfully',
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oooops, something went wrong',
          text: err.text,
        });
      });
    setToSend({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactFormContainer>
      <motion.div
        ref={ref}
        variants={SlideinLeftVariant}
        initial='hidden'
        animate={control}
        className='contactFormHeader'
      >
        CONTACT
      </motion.div>
      <motion.div
        ref={ref}
        variants={SlideinRightVariant}
        initial='hidden'
        animate={control}
        className='contactFormHeaderBar'
      >
        _
      </motion.div>
      <motion.p
        ref={ref}
        variants={SlideinRightVariant}
        initial='hidden'
        animate={control}
        className='contactFormPrompt'
      >
        Have a question or want to work together?
      </motion.p>
      <motion.form
        onSubmit={handleOnSubmit}
        id={'contactform'}
        ref={ref}
        variants={FormVariant}
        initial='hidden'
        animate={control}
        className='contactForm'
      >
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={toSend.name}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          placeholder='Enter Email'
          name='email'
          value={toSend.email}
          onChange={handleChange}
          required
        />
        <textarea
          type='text'
          placeholder='Your Message'
          name='message'
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          className='submit-button'
          type='submit'
          id='submit'
          value='SUBMIT'
        />
      </motion.form>
    </ContactFormContainer>
  );
};
export default ContactForm;
