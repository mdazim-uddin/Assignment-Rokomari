import React from 'react';
import {Container} from 'react-bootstrap';
import './Menu.css'
const Menu = () => {
    
    return (
        <Container>
          <div className='nav-area'>
            <nav>
                <a href='/Book'>Book</a>
                <a href='/Book'>Book</a>
                <a href='/Book'>Book</a>
                <a href='/Book'>Book</a>
                <a href='/Book'>Book</a>
            </nav>
          </div>
         
        </Container>
    );
};

export default Menu;