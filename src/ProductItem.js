import React from 'react'

function ProductItem(props) {
  return (
    <div className="product-item">
      <div>
        <span className="product-text">{props.data.product}</span>
        <input type="number" min="0" onClick={() => props.subtotal}/>
        <span>kg</span>
      </div>
      <span>$ valor total</span>
    </div>
  )
}

export default ProductItem