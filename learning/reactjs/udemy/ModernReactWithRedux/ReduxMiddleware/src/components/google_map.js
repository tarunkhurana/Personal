import React, {Component} from "react";
//import {GoogleMapLoader, GoogleMap} from "react-google-maps";
// ONE WAY

export default class GoogleMap extends Component{
   componentDidMount(){
       new google.maps.Map(this.refs.map,{
           zoom:12,
           center:{
               lat:this.props.lat,
               lng:this.props.long 
           }
       });
   } 
    render(){
        return(
            <div ref="map"></div>
        )
    }
}


// export default class GoogleMapp extends Component{
//     render(){
//     return(
//         <GoogleMapLoader containerElement={<div style={{height:'100%'}} /> }
//                 googleMapElement={
//                     <GoogleMap defaultZoom={12} defaultCenter={{lat:this.props.lat, long:this.props.lon}}/>
//                 }
//                 />
//     )
//     }
// }