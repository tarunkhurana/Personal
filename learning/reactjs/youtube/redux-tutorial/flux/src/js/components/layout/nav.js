import React, {Component} from "react";
import {Link, IndexLink} from "react-router";

export default class Nav extends Component{
    constructor(){
      super();
      this.state={
          collapsed:false
      }
    }

    toggleCollapse(){
        const collapsed=!this.state.collapsed;
        this.setState({collapsed});
    }

    render(){
      const {location}= this.props;
      const {collapsed}= this.state;
      const featuredClass=location.pathname==="/"?"active":"";
      const archivesClass=location.pathname.match(/^\/favorites/) ? "active" : "";
      const settingsClass=location.pathname.match(/^\/settings/) ? "active" : "";
      const navClass=collapsed?"collapse":"";

      return (
          <nav class="navbar navbar-inverse navbar-fixed-top">
           <div class="container">
               <div class="navbar-header">
               <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               </button>
               </div>
           </div>
           <div class={"navbar-collpase "+ navClass}>
               <ul class="nav navbar-nav">
                   <li class={featuredClass}>
                       <IndexLink to="/" >Todos</IndexLink>
                   </li>
                   <li class={archivesClass}>
                       <Link to="favorites" >Favorites</Link>
                   </li>
                   <li class={settingsClass}>
                       <Link to="settings">Settings</Link>
                   </li>
               </ul>
           </div>
          </nav>
      )


    }
}