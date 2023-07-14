import React, { useState } from 'react';
import fakeData from '../FakeData'
import Product from '../Product/Product';
import {Container,Row,Col} from 'react-bootstrap';

const Shop = () => {
const [product,setProduct] = useState (fakeData)
    return (
        // <Container>
            <Row>           
                {
        product.map(pd => <Product product={pd}></Product>)
        }       
            </Row>
        // </Container>
    );
};

export default Shop;