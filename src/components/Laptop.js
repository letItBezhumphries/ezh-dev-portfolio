import { Image } from 'react-bootstrap';
import './Laptop.scss';

const Laptop = ({ image, bg }) => {
  return <Image as={'div'} className="app-image" src={image.src} alt={image.alt} />;
};
export default Laptop;
