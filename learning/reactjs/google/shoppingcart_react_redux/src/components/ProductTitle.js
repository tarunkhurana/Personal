import React from "react";

const ProductTitle=({title, price,inventory})=>{
   return (
       <div>
           {title} - &#36;{price}{inventory?` X ${inventory}`:null}
       </div>
   )
}
export default ProductTitle;