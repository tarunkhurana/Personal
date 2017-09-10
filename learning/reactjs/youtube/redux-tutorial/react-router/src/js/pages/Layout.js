import React from "react";
import {Link} from "react-router";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  // navigate(){
  //   console.log(this.props);
  //   this.props.history.pushState(null,"/");
  // }
  render() {
    const {location}=this.props;
    const containerStyle={
      marginTop:"60px"
    }
    return (
      <div> 
        <Nav location={location}></Nav>   
        <div class="container" style={containerStyle}>
        <div class="row">
        <div class="col-lg-12">
        <h1>KillerNew.net</h1>
        {/* <Link to="archives" activeClassName="test">Archives</Link>
        <Link to="settings"><button class="btn btn-success">Settings</button></Link>
        <button onClick={this.navigate.bind(this)}>Featured</button> */}
        {this.props.children}
        </div>
        </div>
        <Footer/>
        </div>
      </div>
          );
  }
}
