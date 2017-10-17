import {UPDATE_FIELD_AUTH, LOGIN, LOGIN_PAGE_UNLOADED} from "../constants";
import agent from "../agent";

const handleChange=(key,value)=>{
    return {
        type:UPDATE_FIELD_AUTH,
        payload:{
        key,
        value
        }
    }
}

const submitForm=(email,password)=>{
    const payload=agent.Auth.login(email,password)
    return {
        type:LOGIN,
        payload
    }
}

const unloadLoginPage=()=>{
    return {
        type:LOGIN_PAGE_UNLOADED
    }
}

export default{
    handleChange,
    submitForm,
    unloadLoginPage
}
