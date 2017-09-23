import constants from "../constants";

let initialState={
    selectedPost:null
}

export default(state=initialState, action)=>{
   let newState=Object.assign({}, state);

   switch(action.type){
   case constants.SELECT_POST:
   console.log(action.data)
   newState['selectedPost']=action.data;
   return newState;    
   default:
   return state;
   }
}