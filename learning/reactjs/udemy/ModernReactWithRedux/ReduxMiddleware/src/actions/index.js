import axios from "axios";

const API_KEY = "334585620577f4634a7c3e26227f4c19";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city},us`;
    const REQUEST = axios.get(URL);
    return {
        type: FETCH_WEATHER,
        payload: REQUEST
    }

}