import React from 'react';
import MyModal from '../UI/modal';
import { Form } from 'react-bootstrap';

const CreateType = (props) => {
    return (
        <MyModal {...props}>
            <Form>
                <Form.Control 
                    placeholder='Введите название типа'
                />
            </Form>
        </MyModal>
    );
}

export default CreateType;
