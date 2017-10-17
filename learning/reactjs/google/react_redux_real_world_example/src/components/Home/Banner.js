import React from "react";
import PropTypes from "prop-types";

const Banner=({appName,currentUser})=>{
    if(!currentUser){
    return(
        <div className="banner">
            <div className="container">
                <h1 className="logo-front">
                    {appName.toLowerCase()}
                </h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>
    )
 } 
 return null;
}

Banner.propTypes={
    appName:PropTypes.string.isRequired
}

export default Banner;