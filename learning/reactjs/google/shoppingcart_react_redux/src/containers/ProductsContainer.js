import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Products from "../components/Products";
import {addToCart} from "../actions";
function mapStateToProps(state){
return {
  products:state.products,
}
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onAddToCartClicked: addToCart,
      }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);