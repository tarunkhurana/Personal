export default function reducer(state={
 user:{
     id:null,
     name:null,
     age:null
 },
 fetching:false,
 fetched:false,
 error:null
},action){

  switch(action.type){
      case "FETCH_USER":
      return {...state,fetching:true}
      break;
      case "FETCH_USER_REJECTED":
      return {...state,error:action.payload}
      break;
      case "FETCH_USER_FULFILLED":
      return {...state,user:action.payload,fetching:false,fetched:true}
      break;
      case "SET_USER_NAME":
      return {...state,user:{...state.user,name:action.payload}}
      break;
      case "SET_USER_AGE":
      return {...state,user:{...state,age:action.payload}}
      break;
  }

}