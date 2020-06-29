import React, { Component } from 'react';
import Product from './Product'

class ProductList extends Component {

    render() {
        let { items } = this.props
        let outputProducts = items.map(item => {
            return (
                <Product key={item.id} id={item.id} title={item.title} 
                price={item.price} image={item.image} onAddToCart={this.props.onAddToCart} quantity={item.quantity} />
            )
        })

        return (
            <section className="products">
                <div className="section-title">
                    <h2>our products</h2>
                </div>
                <div className="products-center">
                    {outputProducts}
                </div>
            </section>
        )
    }
}

export default ProductList;