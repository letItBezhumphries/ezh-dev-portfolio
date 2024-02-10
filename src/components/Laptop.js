import { Image } from 'react-bootstrap';
import './Laptop.scss';

const Laptop = ({ image, bg }) => {
  return (
    <div className="laptop-bg">
      <div className="image-bg">
        <Image as={'div'} className="app-image" src={image.src} alt={image.alt} />
      </div>
    </div>
  );
};
export default Laptop;
