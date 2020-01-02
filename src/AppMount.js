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

    this.subtotal = this.subtotal.bind(this)
  }

  subtotal() {
    this.setState((state) => {
      return {subtotal: state.subtotal + 1};
    });
  }

  render() {
    const productItems = this.state.products.map(item =>
      <ProductItem key={item.id} data={item} subtotal={this.subtotal}/>)
    
    console.log(productItems)
    console.log(this.state)

    return (
      <div>
        <div>
          {productItems}
          <div>
            <span>Coupon A</span>
            <button>Remove</button>
            <span>$ -57 (30%)</span>
          </div>

          <hr/>         
          
          <ValuesInfo subtotal={this.subtotal}/>
          
          <hr/>

          <div>
            <input type="text" placeholder="Coupon code"/>
            <button>Apply</button>
          </div>
        </div>
        <button>Purchase</button>
      </div>
    )
  }
}

export default App;
