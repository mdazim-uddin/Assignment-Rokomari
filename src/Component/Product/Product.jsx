import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './Product.css'


const Product = (props) => {
    console.log('this',props)
const {title,image,paragrap,price} = props.product;
    return (

        
        <Col md={3}>
        <div className="cart-area">
            <div className='cart-img'>
                <img src={image}/>
            <button className='t'>Add to cart</button>
            </div>

            <div className='cart-title'>
                <h1>{title}</h1>
                <p>{paragrap}</p>
            </div>
            <div>
                <span>{price}</span>
            </div>
            <div className='btn'>
        <button className='btn-1'>View Details</button> 
        </div>
        </div> 
        
    </Col>

    );
};

export default Product;