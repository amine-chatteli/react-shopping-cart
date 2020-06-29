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
      let {cartVisibility}=this.props;
        return (
            <div className={cartVisibility?"cart-overlay transparentBcg":"cart-overlay"}>
            <div className={cartVisibility?"cart showCart":"cart"}>
              <span className="close-cart" onClick={this.props.onCloseCart}><i class="far fa-window-close"></i></span>
              <h2>your cart</h2>
              <div class="cart-content">
                  <CartItem />
                  
            </div>
            <div className="cart-footer">
              <h3>your total : $<span className="cart-total">0</span></h3>
              <button className="clear-cart banner-btn">clear cart</button>
            </div>
          </div>
        </div>
        )
    }
}
export default Cart;