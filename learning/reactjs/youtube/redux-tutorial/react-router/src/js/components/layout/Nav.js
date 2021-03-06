import React, {Component} from "react";
import {Link, IndexLink} from "react-router";

export default class Nav extends Component{
  constructor(){
      super();
      this.state={
          collapsed:true
      }
  }

  toggleCollapse(){
     const collapsed=!this.state.collapsed;
     console.log(collapsed);
     this.setState({collapsed});
  }

   render(){
       const {location}=this.props;
       const {collapsed}= this.state;
     
       const featuredClass=location.pathname==="/"?"active":"";
       const archiveClass=location.pathname.match(/^\/archives/)?"active":"";
       const settingsClass=location.pathname.match(/^\/settings/)?"active":"";
       const navClass=collapsed?"collapse":"";

       return(
          <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
              <div class="container">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                  </div>
                  <div class={"navbar-collapse "+navClass}>
                      <ul class="nav navbar-nav">
                          <li class={featuredClass}>
                              <IndexLink to="/">Featured</IndexLink>
                          </li>
                          <li class={archiveClass}>
                              <Link to="/archives">Archives</Link>
                          </li>
                          <li class={settingsClass}>
                              <Link to="/settings">Settings</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
       )
   }
}