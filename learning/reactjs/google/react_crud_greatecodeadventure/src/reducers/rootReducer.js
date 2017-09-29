import {combineReducers} from "redux";
import catsReducer from "./catsReducer";
import HobbyReducer from "./hobbyReducer";

const rootReducer=combineReducers({
    catsReducer,
    HobbyReducer
});

export default rootReducer;