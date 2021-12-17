import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Content';
import { useSelector } from 'react-redux';

const ModalDetail = ({ showModal, handleShowModal, addToCart }) => {
  const contentViewed = useSelector((state) => state.contentViewed);
  const handleContentViewed = () => {
    addToCart(contentViewed.id);
    handleShowModal();
  };
  return (
    <>
      <Modal show={showModal} onHide={handleShowModal} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{contentViewed.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Content />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShowModal}>
            Close
          </Button>
          <Button onClick={handleContentViewed}>Add To Cart</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDetail;
