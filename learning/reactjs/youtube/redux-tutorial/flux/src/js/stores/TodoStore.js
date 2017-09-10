import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import _ from "underscore";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bill",
        complete: false
      },
    ];
  }

  createTodo(text){
    const id=Date.now();
    this.todos .push({
      id,
      text,
      complete:false
    });
    this.emit("CREATE_TODO");
  }

  deleteTodo(id){
    
    this.todos.splice(_.indexOf(_.pluck(this.todos, 'id'), id),1);
    this.emit("CREATE_TODO");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "DELETE_TODO": {
        this.deleteTodo(action.id);
        break;
      }
      case "FETCH_TODOS": {
        this.emit("FETCH_TODOS");
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos=this.todos.concat(action.todos);
        this.emit("RECEIVE_TODOS");
        break;
      }
    }
  }

  

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.todoStore=todoStore;
window.dispatcher=dispatcher;

export default todoStore;
