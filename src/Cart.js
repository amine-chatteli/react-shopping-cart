import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Cart.css'
import CartItem from './CartItem';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div class="cart-overlay">
            <div class="cart">
              <span class="close-cart"><i class="far fa-window-close"></i></span>
              <h2>your cart</h2>
              <div class="cart-content">
                  <CartItem />
                  
            </div>
            <div class="cart-footer">
              <h3>your total : $<span class="cart-total">0</span></h3>
              <button class="clear-cart banner-btn">clear cart</button>
            </div>
          </div>
        </div>
        )
    }
}
export default Cart;