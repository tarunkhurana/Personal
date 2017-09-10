import React from "react";
import Todo from "../components/todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/todoActions";


export default class Todos extends React.Component{
    constructor(){
      super();
      this.state={
          newTodo:"",
          todos:TodoStore.getAll(),
          loading:false
      }
      this.getTodos=this.getTodos.bind(this);
      this.fetchTodos=this.fetchTodos.bind(this);
      this.receiveTodos=this.receiveTodos.bind(this);
    }
    componentDidMount(){
        
        TodoStore.on("CREATE_TODO",this.getTodos);
        TodoStore.on("FETCH_TODOS", this.fetchTodos);

         TodoStore.on("RECEIVE_TODOS", this.receiveTodos);
         
        console.log("Count", TodoStore.listenerCount("CREATE_TODO"));
        console.log("Count", TodoStore.listenerCount("FETCH_TODOS"));
        console.log("Count", TodoStore.listenerCount("RECEIVE_TODOS"));
        
    }

    componentWillUnmount(){
        TodoStore.removeListener("CREATE_TODO",this.getTodos);
        TodoStore.removeListener("FETCH_TODOS", this.fetchTodos);

         TodoStore.removeListener("RECEIVE_TODOS", this.receiveTodos);
    }

   componentWillMount(){
    console.log("component will mount");
   }



   getTodos(){
    this.setState({
        todos:TodoStore.getAll()
    })
   }

   receiveTodos(){
    this.setState({loading:false});
    this.getTodos();
   }

   fetchTodos(){
    this.setState({loading:true});
   }

   reloadTodos(){
       TodoActions.reloadTodos();
   }

   createTodo(){
       TodoActions.createTodo(this.state.newTodo);
   }

   deleteTodo(id){
    TodoActions.deleteTodo(id);
   }

   handleChange(e){
    this.setState({newTodo:e.target.value})
   }

    render(){
        console.log("render");

        const loaderStyle={
            display:this.state.loading?"block":"none"
        }
        console.log(loaderStyle);
        const {todos}=this.state;
        const todoComponents=todos.map((todo)=>{
            return(
                <Todo key={todo.id} {...todo} deleteTodo={this.deleteTodo.bind(this)}/>
            )
        })
        
        return(
            <div>
                <p style={loaderStyle}>Loading....</p>
                <button onClick={this.createTodo.bind(this)}>Create Todo</button>
                <button onClick={this.reloadTodos.bind(this)}>Reload Todos</button> 
                <input type="text" value={this.state.newTodo} onChange={this.handleChange.bind(this)}/>
                <ul>{todoComponents}</ul>
            </div>
        )
    }
}