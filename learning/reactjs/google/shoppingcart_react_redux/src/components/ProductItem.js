import React from "react";
import PropTypes from "prop-types";
import ProductTitle from "./ProductTitle";

const ProductItem=({product, onAddToCartClicked})=>{
      return(
          <div style={{marginBottom:20}}>
              <ProductTitle title={product.title} price={product.price} inventory={product.inventory}/>
              <button onClick={()=>onAddToCartClicked()} disabled={product.inventory>0?'':'disabled'}>
                  {product.inventory>0?'Add to cart':'Sold Out'}
              </button>
          </div>
      )    

}

ProductItem.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        inventory:PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked:PropTypes.func.isRequired
};

export default ProductItem;