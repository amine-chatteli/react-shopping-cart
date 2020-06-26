import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Product.css';
import image from './product-1.jpeg';
const Product=(props)=>{

return(
<article className="product">
    
            <div className="img-container">
              <img
                src={image}
                alt="product"
                className="product-img"
              />
              <button className="bag-btn" data-id="1">
                <i className="fas fa-shopping-cart"></i>
                add to bag
              </button>
            </div>
            <h3>queen bed</h3>
            <h4>$16</h4>
          </article>
)

}
export default Product;