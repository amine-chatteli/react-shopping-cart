import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Cart.css'
import CartItem from './CartItem';

class Cart extends Component {
  
    render() {
      let {cartVisibility}=this.props;
      let {cart}=this.props;
      let output=cart.map(cartItem=>{
        return(
          <CartItem  key ={cartItem.id} id={cartItem.id} title={cartItem.title} 
          price={cartItem.price} image={cartItem.image} quantity={cartItem.quantity}
          onIncreaseQuantity={this.props.onIncreaseQuantity}/>
        )
      })
        return (
            <div className={cartVisibility?"cart-overlay transparentBcg":"cart-overlay"}>
            <div className={cartVisibility?"cart showCart":"cart"}>
              <span className="close-cart" onClick={this.props.onCloseCart}><i className="far fa-window-close"></i></span>
              <h2>your cart</h2>
              <div className="cart-content">
                  {output}
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