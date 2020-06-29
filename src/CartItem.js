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
                <span className="remove-item" onClick={()=>props.onRemoveItem(props.id)}>remove</span>
            </div>
            <div>
                <i className="fas fa-chevron-up" onClick={()=>props.onIncreaseQuantity(props.id)}></i>
                <p className="item-amount">
                    {props.quantity}
              </p>
                <i className="fas fa-chevron-down" onClick={()=>props.onDecreaseQuantity(props.id)}></i>
            </div>
        </div>
    )

}
export default CartItem;