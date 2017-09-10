import React, { Component } from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

class Todos extends Component {
    cosntructor() {
        super();
    }

    render() {
        let todoItems = this.props.todos.map(todo => {
            return ( <
                TodoItem key = { todo }
                todo = { todo }
                />
            )
        })
        return ( <
            div className = "Todos" >
            Todos List { todoItems } <
            /div>
        )
    }
}

Todos.props = {
    todos: PropTypes.Array
}

export default Todos;