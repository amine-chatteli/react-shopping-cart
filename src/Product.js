import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Product.css';
import './product-1.jpeg'
const Product = (props) => {
    let id = props.id;
    let title = props.title;
    let price = props.price;
    let image = props.image;
    console.log(image);


    return (
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
            <h3>{title}</h3>
            <h4>{price}$</h4>
        </article>
    )

}
export default Product;