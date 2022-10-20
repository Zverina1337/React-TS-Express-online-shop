import React,{useContext} from 'react';
import { Context } from './../index';
import { Row, Card } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const BrandBar = () => {
    const {device} = useContext(Context)
    return (
        <Row className='d-flex flex-row'>
            {device.brands.map(brand =>
                <Card
                    style={{cursor:"pointer"}}
                    className='p-3'
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                >
                    {brand.name}
                </Card>    
            )}
        </Row>
    );
}

export default observer(BrandBar);
