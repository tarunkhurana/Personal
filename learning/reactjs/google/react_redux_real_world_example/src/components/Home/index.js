import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import homeActions from "../../actions/homeActions";
import Banner from "./Banner";
import MainView from "./MainView";
import Tags from "./Tags";
class Home extends Component{
  componentWillMount(){
      const tab="all";
      console.log(this.props)
      this.props.actions.loadHomePageData(tab);
  }

  componentWillUnMount(){
      this.props.actions.unloadHomePage();
  }

  onClickTag(tag){
      this.props.actions.onClickTag(tag);
  }


  render(){
    return (
        <div className="home-page">
          <Banner appName={this.props.appName} currentUser={this.props.currentUser}/>  
          <div className="container page">
              <div className="row">
            <MainView/>
            <div className="col-md-3">
                <div className="sidebar">
                    <p>Popular Tags</p>
                    <Tags tags={this.props.tags} onClickTag={this.onClickTag.bind(this)}/>
                </div>
            </div>
            </div>
          </div> 
        </div>
    )
  }
}


// ONE WAY
// const mapStateToProps=state=>{
//    return{
//     appName:state.common.appName
//    }
// }

// SECOND WAY
const mapStateToProps=state=>({
     appName:state.common.appName,
     currentUser:state.common.currentUser,
     tags:state.home.tags
 })

//THIRD WAY
// function mapStateToProps(state,ownProps){
//   return {
//       appName:state.common.appName
//   }    
// }

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(homeActions,dispatch)
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Home);