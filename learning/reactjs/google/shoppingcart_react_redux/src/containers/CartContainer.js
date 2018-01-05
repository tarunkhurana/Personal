import {connect} from "react-redux";
import { getCartProducts, getCartTotal } from '../reducers';
import Cart from "../components/Cart";
import {bindActionCreators} from "redux";
import {checkout} from "../actions";

function mapStateToProps(state){
    return {
        products:getCartProducts(state),
        total:getCartTotal(state)
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onCheckoutClicked: checkout,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);