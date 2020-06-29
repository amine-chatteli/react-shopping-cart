import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './CartItem.css'

const CartItem = (props) => {

    return (
        <div className="cart-item">
            <img src={props.image} alt="product" />
            <div>
                <h4>{props.title}</h4>
                 <h5>${props.price}</h5>
                <span className="remove-item">remove</span>
            </div>
            <div>
                <i className="fas fa-chevron-up" onClick={()=>props.onIncreaseQuantity(props.id)}></i>
                <p className="item-amount">
                    {props.quantity}
              </p>
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    )

}
export default CartItem;