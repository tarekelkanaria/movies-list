import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMoviesContext } from "../../store/MoviesProvider";

const PopupModal = () => {
  const modalCtx = useMoviesContext();
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-2 text-bg-danger text-light-emphasis">
            Something went wrong!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="fs-2 text-danger text-md-center">
          {modalCtx.errorText}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} size="lg">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PopupModal;
