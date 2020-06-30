import React, { Component } from 'react';
import Navbar from './Navbar';
import './App.css';
import Banner from './Banner';
import ProductList from './ProductList';
import Cart from './Cart'
import products from './products.json';
import ls from 'local-storage'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartVisibility: false,
      items: [],
      cart: [],
      totalItems: 0,
      totalPrice: 0
    }
    this.handleShowCart = this.handleShowCart.bind(this);
    this.handleCloseCart = this.handleCloseCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);
  }

  componentDidMount() {
    let items=ls.get('items');
    let cart=ls.get('cart');
    let totalItems=ls.get('totalItems');
    let totalPrice=ls.get('totalPrice');
    if(items&&cart&&totalItems&&totalPrice){
      this.setState({cart,items,totalItems,totalPrice});
    }else{
       items = products.items.map((item) => {
          let id = item.sys.id
          let title = item.fields.title;
          let price = item.fields.price;
          let image = item.fields.image.fields.file.url
          return { id, title, price, image, quantity: 0 }
        });
        this.setState({ items })
    }
     
        
   
  }

  handleShowCart() {
    this.setState({ cartVisibility: true })
  }
  handleCloseCart() {
    this.setState({ cartVisibility: false })
  }
  handleAddToCart(id) {
    let cart = [...this.state.cart];
    let item = this.state.items[id]
    item.quantity++;
    cart.push(item)
    this.setState({
      cart,
      cartVisibility: true
    });
    ls.set('cart',cart)
    ls.set('items',this.state.items)
    this.totalItems(cart);
   
  }
  handleIncreaseQuantity(id) {
    let cart = [...this.state.cart];
    cart.find(element => element.id === id).quantity++;
    this.totalItems(cart)
  }
  handleDecreaseQuantity(id) {
    let cart = [...this.state.cart];
    if (cart.find(element => element.id === id).quantity > 1) {
      cart.find(element => element.id === id).quantity--;
      this.totalItems(cart)
    } else {
      this.handleRemoveItem(id);
    }
   
  }
  handleRemoveItem(id) {
    let cart = this.state.cart.filter(item => item.id !== id);
    let items = [...this.state.items];
    let item = this.state.items[id]
    item.quantity = 0;
    this.setState({ cart, items });
    ls.set('items',items);
    ls.set('cart',cart);
    this.totalItems(cart);
   
  }
  totalItems(cart) {
    let totalItems = 0;
    let totalPrice = 0;
    cart.forEach(item => {
      totalItems += item.quantity
      totalPrice += (item.price * item.quantity);
    })
    this.setState({ totalItems, totalPrice })
    ls.set('totalItems',totalItems);
    ls.set('totalPrice',totalPrice);
    ls.set('cart',cart);
   
  }
  handleClearCart() {
    let items = [...this.state.items];
    items.forEach(item => {
      item.quantity = 0
    })
    this.setState({
      items,
      cart: [],
      totalItems: 0,
      totalPrice: 0
    })
    ls.set('totalItems',0);
    ls.set('totalPrice',0);
    ls.set('cart',[]);
    ls.set('items',items);
  
  }

  render() {
    let { totalItems } = this.state
    let { cart } = this.state
    let { items } = this.state;
    let { cartVisibility } = this.state;
    let { totalPrice } = this.state;
    return (
      <div className="App">
        <Navbar onShowCart={this.handleShowCart} totalItems={totalItems} />
        <Banner />
        <ProductList items={items} onAddToCart={this.handleAddToCart} />
        <Cart cartVisibility={cartVisibility} onCloseCart={this.handleCloseCart}
          cart={cart} onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity} onRemoveItem={this.handleRemoveItem}
          onClearCart={this.handleClearCart} totalPrice={totalPrice} />
      </div>
    );
  }

}

export default App;
