import React from 'react';
 import Logo from '../../image/rokomari_logo.png'
 import {GrNotification } from 'react-icons/gr'
 import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaSearchLocation} from 'react-icons/fa'
import {Container,Row,Col} from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
            <Container>
                <Row className='main'>
                    <Col md={2}>
                    <div className='logo'>
                    <img src={Logo} alt='' className='fluid'></img>
                </div>
                    </Col>
                     <Col md={6}>
                        <div className="search-box">
                            {/* <div className='box'> */}
                            <input className="search-txt" type="text" placeholder="Type to search"></input>
                            {/* </div> */}
                            <div className='b'>
                            <a className="search-btn" href="#">
                        <FaSearchLocation ></FaSearchLocation>
                            </a>
                            </div>
                        </div>
                    </Col>
                     <Col md={2}>
                    <div className='icon'>
                        < GrNotification className='icon-1'/>
                        <AiOutlineShoppingCart className='icon-2'/>
                </div>
                    </Col> 
                    <Col md={2}>
                            <button className='btn-primary '>Login</button>
                    </Col>
                </Row>
            </Container>
    );
};

export default Header;