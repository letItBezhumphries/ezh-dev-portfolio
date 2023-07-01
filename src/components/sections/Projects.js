import { useState } from 'react';
import ImageModal from '../imageModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import BrokenTableMainImage from '../../assets/brokentable-restaurant-page-main.jpg';
import PhotogalleryImage from '../../assets/brokentable-photogalleryandmap.jpeg';
import PhotoScrollerImage from '../../assets/brokentable-photoscroller.jpeg';
import ReclarkerMainImage from '../../assets/reclarker-main.jpg';
import ReclarkerArtworkPageImage from '../../assets/reclarker-artworkpage.jpg';
import CinemaMainPageImage from '../../assets/cinema-app.jpg';
import CinemaMoviePageImage from '../../assets/cinema-app-movie-info.jpg';
import GetTixHomePageImage from '../../assets/getTixHomePage.jpeg';
import GetTixPaymentPageImage from '../../assets/getTixPaymentComponent.jpeg';
import './Projects.scss';

const Projects = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');

  const handleShow = (imgSrc) => {
    setImage(imgSrc);
    setShow(true);
  };

  return (
    <section className='projects-section'>
      <div className='section-inner'>
        <h2 className='section-heading'>
          Personal Software Engineering Projects
        </h2>
        <div className='section-content'>
          <div className='project-featured'>
            <h3 className='project-featured__title'>
              <a href='https://github.com/letItBezhumphries/micro-brokentable'>
                Fullstack Photos & Menus Service - Similar to OpenTable
              </a>
            </h3>
            <p className='project-featured__summary'>
              The{' '}
              <a href='https://github.com/letItBezhumphries/micro-brokentable'>
                Brokentable Photogallery & Menu Service
              </a>
              , was built in an Agile environment with myself being in charge of
              the Photo gallery, and Menus service. Developed utilizing Service
              Oriented Architecture this project gave me the chance to utilize
              my knowledge of React & Redux while learning the vast bundling
              capabilities of Webpack, like Module Federation, as a means of
              incorporating each team members application code in a Service
              Oriented Architecture.
            </p>

            <div className='project-view'>
              <img
                className='project-view__photo project-view__photo--p1'
                src={PhotoScrollerImage}
                alt='brokentable site restaurant page'
              ></img>
              <img
                className='project-view__photo project-view__photo--p2'
                src={PhotogalleryImage}
                alt='brokentable site restaurant photogallery component'
              ></img>
              <img
                className='project-view__photo project-view__photo--p3'
                src={BrokenTableMainImage}
                alt='brokentable site restaurant photoscroller component'
              ></img>
            </div>

            <div className='project-featured__overview'>
              <h3 className='project-featured__overview--title'>
                Brokentable Photogallery Service
              </h3>
              <ul className='project-featured__overview--list'>
                <li className='project-featured__overview--item'>
                  Designed frontend microservice for a cloned version of
                  opentable a restaurant reservation application.
                </li>
                <li className='project-featured__overview--item'>
                  Developed photogallery and photoscrolling components & client
                  UI with React, Redux, Bootstrap, CSS Grid, and Sass.
                </li>
                <li className='project-featured__overview--item'>
                  Designed responsive UI/UX with HTML, CSS and react-bootstrap
                  for a flexible and seamless experience across a multitude of
                  device sizes.
                </li>
                <li className='project-featured__overview--item'>
                  Implemented proxy server in a service-oriented architecture
                  design that incorporated the other services provided by my
                  team members, including Restaurant details service and User
                  reviews service.
                </li>
                <li className='project-featured__overview--item'>
                  Deployed proxy server on AWS ec2 using Terraform, bash
                  scripts, and Packer installing necessary software to run the
                  application code for each service on an Amazon Linux machine
                  image.
                </li>
              </ul>
            </div>
          </div>

          <div className='project-row'>
            <div className='project-row__view'>
              <img
                className='project-row__image'
                src={GetTixHomePageImage}
                alt='landing page for getTix app'
                onClick={() => handleShow(GetTixHomePageImage)}
              ></img>
              <img
                className='project-row__image'
                src={GetTixPaymentPageImage}
                alt='payment page for getTix app'
                onClick={() => handleShow(GetTixPaymentPageImage)}
              ></img>
            </div>
            <div className='project-row__overview'>
              <h3 className='project-row__overview--title'>
                <a
                  href='https://github.com/letItBezhumphries/mern-proshop.git'
                  className='project-row__overview--titlelink'
                >
                  GetTix
                </a>
              </h3>
              <ul className='project-row__overview--list'>
                <li className='project-row__overview--item'>
                  Created each service using Node and Express with data for each
                  service held in MongoDB or redis
                </li>
                <li className='project-row__overview--item'>
                  Incorporated Docker and Kubernetes to deploy micro-service
                  architecture to DigitalOcean infrastructure
                </li>
                <li className='project-row__overview--item'>
                  Built Server-side-Rendered React App using ReactHooks and
                  NextJS
                </li>
                <li className='project-row__overview--item'>
                  Limited access to APIs using JWT-based authentication
                </li>
                <li className='project-row__overview--item'>
                  Wired communication of data between services using an eventbus
                </li>
                <li className='project-row__overview--item'>
                  Shared reusable code between services using custom built NPM
                  package published in NPM registry
                </li>
                <li className='project-row__overview--item'>
                  Wrote comprehensive tests to ensure each service worked as
                  expected in performing CRUD operations
                </li>
              </ul>
              <p>
                <a
                  className='project-row__more-link'
                  href='https://github.com/letItBezhumphries/mern-proshop.git'
                >
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    size='lg'
                    className='project-row__link-icon'
                  ></FontAwesomeIcon>
                  Find out more
                </a>
              </p>
            </div>
          </div>

          <div className='project-row'>
            <div className='project-row__view'>
              <img
                className='project-row__image'
                src={CinemaMainPageImage}
                alt='landing page for cinema movie info app'
                onClick={() => handleShow(CinemaMainPageImage)}
              ></img>
              <img
                className='project-row__image'
                src={CinemaMoviePageImage}
                alt='movie info page for cinema app'
                onClick={() => handleShow(CinemaMoviePageImage)}
              ></img>
            </div>
            <div className='project-row__overview'>
              <h3 className='project-row__overview--title'>
                <a
                  href='https://github.com/letItBezhumphries/cinema-react-app'
                  className='project-row__overview--titlelink'
                >
                  Cinema App
                </a>
              </h3>
              <ul className='project-row__overview--list'>
                <li className='project-row__overview--item'>
                  Built responsive and custom Header, Carousel slideshow,
                  Pagination, Search and Error components with React and Redux
                </li>
                <li className='project-row__overview--item'>
                  Created AWS infrastructure with Terraform code which was
                  integrated into CircleCi build job steps in a CI/CD pipeline
                </li>
                <li className='project-row__overview--item'>
                  Utilized AWS S3 and Cloudfront for storing, distributing, and
                  hosting frontend code for React App
                </li>
                <li className='project-row__overview--item'>
                  Setup online Development, Staging, and Production Environments
                  in Github integrated with CircleCi for automatic deployments
                </li>
                <li className='project-row__overview--item'>
                  Integrated Slack messaging and notifications into CircleCi
                  build job steps in CI/CD pipeline
                </li>
                <li className='project-row__overview--item'>
                  Setup Sentry for Application error monitoring
                </li>
              </ul>
              <p>
                <a
                  className='project-row__more-link'
                  href='https://github.com/letItBezhumphries/cinema-react-app'
                >
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    size='lg'
                    className='project-row__link-icon'
                  ></FontAwesomeIcon>
                  Find out more
                </a>
              </p>
            </div>
          </div>

          <div className='project-row'>
            <div className='project-row__view'>
              <img
                className='project-row__image'
                src={ReclarkerMainImage}
                alt='home page for reclarker gallery site'
                onClick={() => handleShow(ReclarkerMainImage)}
              ></img>
              <img
                className='project-row__image'
                src={ReclarkerArtworkPageImage}
                alt='artwork page for reclarker gallery site'
                onClick={() => handleShow(ReclarkerArtworkPageImage)}
              ></img>
            </div>
            <div className='project-row__overview'>
              <h3 className='project-row__overview--title'>
                <a
                  href='https://github.com/letItBezhumphries/reclarker-gallery'
                  className='project-row__overview--titlelink'
                >
                  ReClarker Gallery App
                </a>
              </h3>
              <ul className='project-row__overview--list'>
                <li className='project-row__overview--item'>
                  Built custom eCommerce platform and modular front-end views
                  with React and Redux
                </li>
                <li className='project-row__overview--item'>
                  Designed document-based schemas with MongoDB and Mongoose for
                  flexibility in data modeling.
                </li>
                <li className='project-row__overview--item'>
                  Created extensive backend RESTful API with Node and Express
                  for scalability and maintainability.
                </li>
                <li className='project-row__overview--item'>
                  Implemented authentication with Bcrypt and JWT for proven
                  security and encryption.
                </li>
              </ul>
              <p>
                <a
                  className='project-row__more-link'
                  href='https://github.com/letItBezhumphries/reclarker-gallery'
                >
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    size='lg'
                    className='project-row__link-icon'
                  ></FontAwesomeIcon>
                  Find out more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        showModal={show}
        imgSrc={image}
        hideModal={() => setShow(false)}
      />
    </section>
  );
};
export default Projects;
