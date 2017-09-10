import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props);
    const { complete, edit, text, id } = this.props;
    const cursorStyle={
      cursor:"pointer"
    };

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <span>{text}</span>
        <span style={cursorStyle} onClick={()=>this.props.deleteTodo(id)}>{icon}</span>
      </li>
    );
  }
}
