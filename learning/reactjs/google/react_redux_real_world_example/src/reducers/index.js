import {combineReducers} from "redux";
import common from "./common";
import articlelist from "./articlelist";
import home from "./home";
import auth from "./auth";
import settings from "./settings";
import profile from "./profile";

export default combineReducers({
    common,
    articlelist,
    home,
    auth,
    settings,
    profile
})