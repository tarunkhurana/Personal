import React from "react";
import PropTypes from "prop-types";

import ProductTitle from "./ProductTitle";

const Cart=({products, total, onCheckoutClicked})=>{
    const hasProducts=products.length>0;

  const productItems=hasProducts?products.map(product=>{
      return <ProductTitle key={product.id} title={product.title} price={product.price}/>
  }):(<em>Please add some products to your cart.</em>);

    return(
     <div>
         <h3>Your Cart</h3>
         {productItems}
         <p>Total: &#36;{total}</p>
         <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
     </div>
  )
}

Cart.propTypes={
    products:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })),
    total:PropTypes.number.isRequired,
    onCheckoutClicked:PropTypes.func.isRequired
}

export default Cart;