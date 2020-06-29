import React, { Component } from 'react';
import Navbar from './Navbar';
import './App.css';
import Banner from './Banner';
import ProductList from './ProductList'
import Cart from './Cart'
import products from './products.json'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartVisibility: false,
      items: [],
      cart: [],
    }
    this.handleShowCart = this.handleShowCart.bind(this);
    this.handleCloseCart = this.handleCloseCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);

  }

  componentDidMount() {
    let items = products.items.map((item) => {
      let id = item.sys.id
      let title = item.fields.title;
      let price = item.fields.price;
      let image = item.fields.image.fields.file.url
      return { id, title, price, image,quantity:0 }
    });
    this.setState({ items })
  }

  handleShowCart() {
    this.setState({ cartVisibility: true })
  }
  handleCloseCart() {
    this.setState({ cartVisibility: false })
  }
  handleAddToCart(id) {
    let cart = [...this.state.cart];
    let item=this.state.items[id]
    item.quantity++;
    cart.push(item)
    this.setState({ cart ,
    cartVisibility:true})
  }
  handleIncreaseQuantity(id){
console.log('hi',id);

  }

  render() {
    let {cart}=this.state
    let { items } = this.state;
    let { cartVisibility } = this.state;
    return (
      <div className="App">
        <Navbar onShowCart={this.handleShowCart} />
        <Banner />
        <ProductList items={items} onAddToCart={this.handleAddToCart} />
        <Cart cartVisibility={cartVisibility} onCloseCart={this.handleCloseCart}
         cart={cart} onIncreaseQuantity={this.handleIncreaseQuantity}/>
      </div>
    );
  }

}

export default App;
