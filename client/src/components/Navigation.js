import React, { useContext } from 'react';
import { Context } from '../index';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts';
import { Container , Button} from 'react-bootstrap';
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE } from './../utils/consts';

const Navigation = () => {
    const {user} = useContext(Context)
    const linkComponent = {
        color:"white",
        textDecoration: 'none'
    }
    const history = useNavigate()
    return (
        <NavBar bg="dark" variant="dark">
        <Container>
        <Link style={linkComponent} to={SHOP_ROUTE}>SHOP</Link>
            {user.isAuth ? 
                <Nav className="mL-auto">
                    <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
                    <Button variant={"outline-light"} onClick={() => history(BASKET_ROUTE)}>Корзина</Button>
                    <Button variant={"outline-light"} onClick={()=> user.setIsAuth(false)}>Выйти</Button>
                </Nav>
                :
                <Nav className="mL-auto">
                    <Button variant={"outline-light"} onClick={()=> user.setIsAuth(true)}>Войти</Button>
                </Nav>
            }
        </Container>
        </NavBar>
    );
}

export default observer(Navigation);
