import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import CreateType from './../components/modals/CreateType';
import CreateDevice from './../components/modals/CreateDevice';
import CreateBrand from './../components/modals/CreateBrand';
    
export const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
    <Container className='d-flex flex-column'>
        <Button 
            variant={"outline-dark"} 
            className="mt-3"
            onClick={() => setTypeVisible(true)}
        >
                Добавить тип
        </Button>
        <Button 
            variant={"outline-dark"} 
            className="mt-3"
            onClick={() => setBrandVisible(true)}
        >
                Добавить бренд
        </Button>
        <Button 
            variant={"outline-dark"} 
            className="mt-3"
            onClick={() => setDeviceVisible(true)}
        >
                Добавить устройство
        </Button>
        <CreateType show={typeVisible} title="Добавить тип" onHide={() => setTypeVisible(false)}/>
        <CreateBrand show={brandVisible} title="Добавить бренд" onHide={() => setBrandVisible(false)}/>
        <CreateDevice show={deviceVisible} title="Добавить устройство" onHide={() => setDeviceVisible(false)}/>
    </Container>
);
}
