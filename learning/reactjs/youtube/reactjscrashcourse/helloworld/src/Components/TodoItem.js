import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
    render() {
        return ( <
            li className = "todo" > { this.props.todo.title } < /li>
        )
    }
}

TodoItem.props = {
    todo: PropTypes.Object
}

export default TodoItem;