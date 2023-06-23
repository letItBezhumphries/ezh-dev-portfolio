import Modal from 'react-bootstrap/Modal';
import './imageModal.scss';

const ImageModal = ({ showModal, imgSrc, hideModal }) => {
  return (
    <Modal
      show={showModal}
      fullscreen={true}
      onHide={hideModal}
      className='image-modal'
    >
      <Modal.Header className='image-modal__header' closeButton></Modal.Header>
      <Modal.Body className='image-modal__body'>
        <img src={imgSrc} className='image-modal__image'></img>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
