import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Plugin.css'

import Product from "./Product";
import { productData, responsive } from "./PluginData";

const Plugin = () => {
    const product = productData.map((item) => (
        <Product
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
        />
      ));

      return (
        <div className="App">
          <h1>React multi carousel</h1>
          <Carousel showDots={true} responsive={responsive}>
            {product}
          </Carousel>
        </div>
      );
  
};

export default Plugin;