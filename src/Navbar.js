import React,{component} from 'react';
import './Navbar.css';
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


const Navbar=(props)=>{

    return(
        <nav className="navbar">
        <div className="navbar-center">
          <span className="nav-icon">
            <i className="fas fa-bars"></i>
          </span>
          <img src={logo} alt="store logo" />
          <div className="cart-btn" onClick={props.onShowCart}>
            <span className="nav-icon">
              <i className="fas fa-cart-plus"></i>
            </span>
            <div className="cart-items">0</div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;