import React from 'react';

import ProductItem from './ProductItem'
import productsData from './productsData'

import ValuesInfo from './ValuesInfo'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: productsData,
      subtotal: 0,
      shipping: 0,
      discount: 0,
      total: 0,
    }

    this.valorItem = this.valorItem.bind(this)
    this.subtotal = this.subtotal.bind(this)
  }

  valorItem(id) {
    
  }

  subtotal() {
    this.setState(prevState => {
      return {subtotal: prevState.subtotal + prevState.products[0].price};
    });
  }

  render() {
    const productItems = this.state.products.map(item =>
      <ProductItem key={item.id} data={item} subtotal={this.subtotal}/>)
    
    console.log(productItems)
    console.log(this.state)

    return (
      <div>
        <div className="wrap">
          <div className="product-wrap">
            {productItems}

          <div className="coupon-info">
            <div>
              <span className="coupon-text">Coupon A</span>
              <button>Remove</button>
            </div>
            <span>$ -57 (30%)</span>
          </div>
        </div>

          <hr/>         
          
          <ValuesInfo 
            subtotal={this.state.subtotal}
            shipping={this.state.shipping}
            discount={this.state.discount}
            total={this.state.total} />
          
          <hr/>

          <div className="input-coupon">
            <input type="text" placeholder="Coupon code"/>
            <button>Apply</button>
          </div>
        </div>
        <button className="purchase">Purchase</button>
      </div>
    )
  }
}

export default App;
