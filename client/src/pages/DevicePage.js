import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
    
export const DevicePage = () => {
    const device = {id: 9, name: "iPhone 12 pro", price: "25000", rating: "5", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202834000"}
    const desc = [
        {id: 1, title: "Оперативная память", description: "5 гб"},
        {id: 2, title: "Камера", description: "12 мп"},
        {id: 3, title: "Процессор", description: "Snapdragon 400"},
        {id: 4, title: "Кол-во ядер", description: "2"},
        {id: 5, title: "Аккумулятор", description: "4000 мгц"},
    ]
    return (
        <Container className="mt-3">
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{device.name}</h2>
                    <div>
                        Рейтинг: {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Row className='mt-3'>
                    <h3>{device.price}</h3>
                    <Button variant={"outline-dark"}>Добавить в корзину</Button>
                </Row>
            </Col>
            <Row className="mt-3">
                {desc.map(info => 
                    <Row key={info.id}>
                        {info.title}: {info.description}
                    </Row>      
                )}
            </Row>
        </Container>
);
}
