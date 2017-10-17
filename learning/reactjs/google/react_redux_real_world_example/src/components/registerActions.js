import {UPDATE_FIELD_AUTH, REGISTER, REGISTER_PAGE_UNLOADED} from "../constants";
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

const submitForm=(username,email,password)=>{
    const payload=agent.Auth.register(username,email,password)
    return {
        type:REGISTER,
        payload
    }
}

const unloadRegisterPage=()=>{
    return {
        type:REGISTER_PAGE_UNLOADED
    }
}

export default{
    handleChange,
    submitForm,
    unloadRegisterPage
}
