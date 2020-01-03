import React from 'react'

function ProductItem(props) {
  return (
    <div className="product-item">
      <div>
        <span className="product-text">{props.data.product}</span>
        <input type="number" min="0" step="1" onChange={() => props.subtotal()}/>
        <span>kg</span>
      </div>
      <span className="product-value">$ {props.data.subtotalItem}</span>
    </div>
  )
}

export default ProductItem