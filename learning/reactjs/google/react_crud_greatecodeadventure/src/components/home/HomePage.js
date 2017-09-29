import React from "react";
import {Link} from "react-router";

const HomePage=()=>{
    return(
      <div className="jumbotorn">
       <h1>Cat Book</h1>
       <p>the best way manage your cat collection.</p>
       <Link to="/login" className="btn btn-primary btn-lg">Login as a test user</Link>
      </div>  
    );
};

export default HomePage;