import React from 'react'

function ValuesInfo(props) {
  return (
    <div className="values-info">
      <div>
        <span>Subtotal</span>
        <span>{props.subtotal}</span>
      </div>

      <div>
        <span>Shipping</span>
        <span>$ 30</span>
      </div>

      <div>
        <span>Discount</span>
        <span>- $ 57</span>
      </div>

      <div>
        <span>Total</span>
        <span>$ 163</span>
      </div>
    </div>
  )
}

export default ValuesInfo