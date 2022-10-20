import React from 'react';
import MyModal from '../UI/modal';
import { Form } from 'react-bootstrap';

const CreateBrand = (props) => {
    return (
        <MyModal {...props}>
            <Form>
                <Form.Control 
                    placeholder='Введите название бренда'
                />
            </Form>
        </MyModal>
    );
}

export default CreateBrand;
