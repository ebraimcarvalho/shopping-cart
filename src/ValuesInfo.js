import React from 'react'

function ValuesInfo(props) {
  return (
    <div className="values-info">
      <div>
        <span>Subtotal</span>
        <span>$ {props.subtotal}</span>
      </div>

      <div>
        <span>Shipping</span>
        <span>$ {props.shipping}</span>
      </div>

      <div>
        <span>Discount</span>
        <span>- $ {props.discount}</span>
      </div>

      <div>
        <span>Total</span>
        <span>$ {props.total}</span>
      </div>
    </div>
  )
}

export default ValuesInfo