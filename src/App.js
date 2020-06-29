import React,{component, Component} from 'react';
import Navbar from './Navbar';
import './App.css';
import Banner from './Banner';
import ProductList from './ProductList'
import Cart from './Cart'



class App extends Component {
  constructor(props){
    super(props)
    this.state={
        cartVisibility:false
    }
    this.handleShowCart=this.handleShowCart.bind(this);
    this.handleCloseCart=this.handleCloseCart.bind(this);

  }

  handleShowCart(){
    this.setState({cartVisibility:true})
  }
  handleCloseCart(){
    this.setState({cartVisibility:false})
  }
  render(){
    let {cartVisibility}=this.state;
    return (
      <div className="App">
       <Navbar onShowCart={this.handleShowCart}/>
       <Banner />
       <ProductList />
       <Cart cartVisibility={cartVisibility} onCloseCart={this.handleCloseCart} />
      </div>
    );
  }
  
}

export default App;
