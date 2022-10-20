import React, {useContext, useState} from 'react';
import MyModal from '../UI/modal';
import { Form, Dropdown, Container, Button, Row, Col } from 'react-bootstrap';
import { Context } from './../../index';

const CreateDevice = (props) => {
    const {device} = useContext(Context)

    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <MyModal {...props}>
            <Form>
                <div className='d-flex justify-content-around align-items-center mb-4'>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => 
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand => 
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <hr />    
                <Form.Control
                    className="mt-4"
                    placeholder="Введите название устройства"
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите стоимость устройства"
                />
                <Form.Control
                    className="mt-3"
                    type="file"
                    />
                <Button onClick={addInfo} className="mt-4">Добавить новое свойство</Button>
                {info.map(info => 
                    <Row key={info.number} className="mt-4">
                        <Col md={4}>
                            <Form.Control 
                                placeholder='Введите название свойства'
                            />
                        </Col>
                        <Col md={4}>
                        <Form.Control 
                                placeholder='Введите описание свойства'
                            />
                        </Col>
                        <Col md={4}>
                            <Button
                                variant={"outline-danger"}
                                onClick={() => removeInfo(info.number)}
                            >
                                Удалить
                            </Button>
                        </Col>
                    </Row> 
                )}
            </Form>
        </MyModal>
    );
}

export default CreateDevice;
