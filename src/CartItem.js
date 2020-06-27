import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './CartItem.css'

const CartItem = (props) => {

    return (
        <div class="cart-item">
            <img src="./images/product-1.jpeg" alt="product" />
            <div>
                <h4>queen bed</h4>
                <h5>$9.00</h5>
                <span class="remove-item">remove</span>
            </div>
            <div>
                <i class="fas fa-chevron-up"></i>
                <p class="item-amount">
                    1
              </p>
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    )

}
export default CartItem;