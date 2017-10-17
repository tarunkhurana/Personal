import * as constants from "../constants";
import agent from "../agent";

const redirect=()=>{
    return {
        type:constants.REDIRECT
    }
}

const onAppLoad=(token)=>{
    const payload=token?agent.Auth.current():null;
    return {
        type:constants.APP_LOAD,
        token,
        payload
    }
}



export default {
    redirect,
    onAppLoad
}