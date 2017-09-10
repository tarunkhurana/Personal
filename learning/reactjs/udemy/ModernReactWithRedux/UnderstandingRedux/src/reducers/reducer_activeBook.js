// state argument is not an application state, only the state
// this reducer is responsible for

export default function(state=null,action){
     console.log(state);
     switch(action.type){
         case "BOOK_SELECTED":
         return action.payload;
         default:

     }
     return state;   
}