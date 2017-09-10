import dispatcher from "../dispatcher";

export function createTodo(text){
   dispatcher.dispatch({
       type:"CREATE_TODO",
       text
   });
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type:"DELETE_TODO",
        id
    });
 }

 export function reloadTodos(){
    dispatcher.dispatch({
        type:"FETCH_TODOS",
    }) 
    setTimeout(()=>{
        dispatcher.dispatch({
            type:"RECEIVE_TODOS",todos:[
                {
                  id: 324324234,
                  text: "Hello World",
                  complete: false
                },
                {
                  id: 2344322342432,
                  text: "Greetings",
                  complete: true
                }
              ]
        })
    },3000);
  
 }

