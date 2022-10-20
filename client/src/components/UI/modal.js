import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const MyModal = ({title, show, onHide, children}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            {title}
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
        </Modal.Footer>
    </Modal>
    );
}

export default MyModal;
