import React,{Component} from 'react';
import products from './products.json'
import Product from './Product'

class ProductList extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }
        componentDidMount(){
          let items=products.items.map((item)=>{
            let id=item.sys.id
            let title=item.fields.title;
            let price=item.fields.price;
            let image=item.fields.image.fields.file.url
            return{id,title,price,image}
          });
          this.setState({items})
        }

    render(){
           let {items}=this.state
           let outputProducts=items.map(item=>{
               return(
                   <Product key={item.id} id={item.id} title={item.title} price={item.price} image={item.image}/>
               )
           })
           
        return(
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