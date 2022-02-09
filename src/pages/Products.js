import React from 'react';
import MainProductImage from '../images/image-product-1.jpg';
import './Products.css';

function Product() {
  return (
    <div className="body-main-container">
      <h2> Products Page</h2>
      <div className="left-side-container">
        <div>
          <img height="800px" width="600px" src={MainProductImage}></img>
        </div>
        <div className="bottom-photo-container">
          <div>
            {' '}
            <img height="100px" width="100px" src={MainProductImage}></img>
          </div>
          <div>
            {' '}
            <img height="100px" width="100px" src={MainProductImage}></img>
          </div>
          <div>
            {' '}
            <img height="100px" width="100px" src={MainProductImage}></img>
          </div>
          <div>
            {' '}
            <img height="100px" width="100px" src={MainProductImage}></img>
          </div>
        </div>
      </div>
      <div className="right-side-container"></div>
    </div>
  );
}

export default Product;
