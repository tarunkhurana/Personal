import React, {Component} from "react";
import {Link,IndexLink} from "react-router";

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
          <nav>
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
              {"|"}
              <Link to="/cats" activeClassName="active">Cats</Link>
          </nav>
        )
    }
}

export default Header;