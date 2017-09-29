import React,{PropTypes,Component} from "react";
import {connect} from "react-redux";

import CatList from "./cats/CatList";

class CatsPage extends Component{
    render(){
        const {cats, children}=this.props;
        return(
            <div className="col-md-12">
                <h1>Cats</h1>
                <Link to="/cats/new" className="btn btn-primary">+ cat</Link>
                <div className="col-md-4">
                    <CatList cats={cats}/>
                </div>
                <div className="col-md-8">
                    {children}
                </div>
            </div>
        );
    }
}

CatPage.propTypes={
  cats:PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
     cats:state.cats
    }
}

export default connect(mapStateToProps)(CatPage);