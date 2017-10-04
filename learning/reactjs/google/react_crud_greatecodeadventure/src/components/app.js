import React, {Component,PropTypes} from "react";
import Header from "./common/header";
import {loadCats} from "../actions/CatActions"
import {loadHobbies} from "../actions/HobbyActions"

class App extends Component{
    constructor(props){
        super(props);
    }
    ComponentDidMount(){
        const {dispatch}=this.props;
        dispatch(loadCats());
        dispatch(loadHobbies());
    }
    render(){
     const {children}=this.props;

        return(
            <div className="container-fluid">
                <header/>
                {children}
            </div>
        )
    }
}

App.propTypes={
    children:PropTypes.object.isRequired
}

export default App;