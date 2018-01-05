import React from "react";
import PropTypes from "prop-types";

import ProductItem from "./ProductItem";

const Products=({products, onAddToCartClicked})=>{
   return (
       <div>
           <h3>Products</h3>
           {products.map(product=>{
            return <ProductItem key={product.id} product={product} onAddToCartClicked={()=>onAddToCartClicked(product.id)}/>
           })}
       </div>
   )
}

Products.propTypes={
    products:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        inventory:PropTypes.number.isRequired
    })).isRequired,
    onAddToCartClicked:PropTypes.func.isRequired
};

export default Products;