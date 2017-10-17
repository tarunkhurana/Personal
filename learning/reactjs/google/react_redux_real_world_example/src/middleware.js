import * as constants from "./constants";
import agent from "./agent";

const promiseMiddleware=store=>next=>action=>{
    if(isPromise(action.payload)){
        store.dispatch({
            type:constants.ASYNC_START, subtype:action.type
        });
        action.payload.then(
            res=>{
               action.payload=res;
               store.dispatch({
                type:constants.ASYNC_END, promise:action.payload
            });
            store.dispatch(action);
            },error=>{
                action.error=true;
                action.payload=error.response.body;
                store.dispatch({
                    type:constants.ASYNC_END, promise:action.payload
                });
                store.dispatch(action);
            }
        )
        return;
    }
    next(action);
}

const localStorageMiddleware=store=>next=>action=>{
    if(action.type===constants.REGISTER || action.type===constants.LOGIN){
        if(!action.error){
            window.localStorage.setItem("jwt",action.payload.user.token);
            agent.setToken(action.payload.user.token);
        }
    } else if(action.type===constants.LOGOUT){
        window.localStorage.setItem("jwt","");
        agent.setToken(null);
    }
    next(action);
}

function isPromise(v){
    return v && typeof v.then==="function";
}

export {
    promiseMiddleware,
    localStorageMiddleware
}