import React from 'react';
import './Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Banner=()=>{

    return(
    <header className="hero">
      <div className="banner">
        <h1 className="banner-title">furniture collection</h1>
        <button className="banner-btn">shop now</button>
      </div>
    </header>
    )
}
export default Banner;