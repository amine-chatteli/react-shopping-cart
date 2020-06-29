import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Product.css';

const Product = (props) => {
    let id = props.id;
    let title = props.title;
    let price = props.price;
    let image = props.image;
    let quantity=props.quantity

console.log(image);

    
    return (
        <article className="product">
            <div className="img-container">
                <img
                   src={require(`./${image}`)}
                    alt="product"
                    className="product-img"
                />
                <button disabled={quantity>0?true:false} className="bag-btn" data-id={id} onClick={()=>{props.onAddToCart(id)}}>
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