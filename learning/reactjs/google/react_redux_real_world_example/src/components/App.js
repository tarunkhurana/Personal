import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import commonActions from "../actions/commonActions";
import Header from "./Header";
import agent from "../agent";


class App extends Component{
  componentWillReceiveProps(nextProps){
      if(nextProps.redirectTo){
        this.props.router.replace(nextProps.redirectTo);    
        this.props.actions.redirect();    
      }
  } 
  
  componentWillMount(){
      const token=window.localStorage.getItem("jwt");
      if(token){
        agent.setToken(token);
      }

      this.props.actions.onAppLoad(token);
  }


  render(){
    if(this.props.appLoaded){  
    return (
        <div>
           <Header appName={this.props.appName} currentUser={this.props.currentUser}/>
          {this.props.children}          
        </div>
    )
   } else {
    return (
        <div>
           <Header appName={this.props.appName} currentUser={this.props.currentUser}/>
        </div>
    )
   }
  }
}

App.propTypes={
    appName:PropTypes.string.isRequired,
    router:PropTypes.object.isRequired
}

const mapStateToProps=state=>({
    appLoaded:state.common.appLoaded,
    appName:state.common.appName,
    currentUser:state.common.currentUser,
    redirectTo:state.common.redirectTo
})

const mapDispatchToProps=dispatch=>({
    actions:bindActionCreators(commonActions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(App);