import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
    renderWeather() {

        return this.props.weather.map(function(cityData) {
            const temps = cityData.list.map((weather) => weather.main.temp);
            const pressures = cityData.list.map((weather) => weather.main.pressure);
            const humidities = cityData.list.map((weather) => weather.main.humidity); 
            const {lon, lat} = cityData.city.coord;

            return ( <
                tr key = { cityData.city.name } >
                <td><GoogleMap long={lon} lat={lat}/></td>
                <td>
                   <Chart data={temps} color="orange" units="K"/>
                </td>
                <td>
                   <Chart data={pressures} color="green" units="hPa"/>
                </td>
                <td>
                   <Chart data={humidities} color="black" units="%"/>
                </td>
                  < /
                tr >
            )
        })
    }
    render() {
        return ( <
            table className = "table table-hover" >
            <
            thead >
            <
            tr >
            <
            th > City < /th><th>Temperature(K)</th > < th > Pressure(hPa) < /th><th>Humidity(%)</th > < /
            tr > <
            /thead> <
            tbody > { this.renderWeather() } <
            /tbody> < /
            table > );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);