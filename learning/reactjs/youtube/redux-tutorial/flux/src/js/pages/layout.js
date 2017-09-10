import React from "react";
import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";


export default class Layout extends React.Component{
    render(){
        const {location}= this.props;
        const containerStyle={
            marginTop:"60px"
        };
        return(
            <div>
                <Nav location={location}/>
                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}