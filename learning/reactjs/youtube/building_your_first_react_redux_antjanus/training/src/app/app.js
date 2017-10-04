import React, {Component} from "react";
import {connect} from "react-redux";

import {fetchTasks, completeTask} from "./actions";
import TaskList from "./tasklist";
import Navigation from "./nav";

class App extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {dispatch}=this.props;
        dispatch(fetchTasks());
    }

   handleCompleteTask(task){
    const {dispatch}=this.props;
    dispatch(completeTask(task.id));
   }

   render(){
    const {dispatch, habits, dailies, todos}=this.props;

    return(
        <div className="container">
            <Navigation/>
            <section>
                <h3>Habits</h3>
                <TaskList onCompleteTask={(task)=>this.handleCompleteTask(task)}
                    task={habits} type="habit"/>
            </section>
            <section>
                <h3>Dailies</h3>
                <TaskList onCompleteTask={(task)=>this.handleCompleteTask(task)}
                    task={habits} type="daily"/>
            </section>
            <section>
                <h3>Todos</h3>
                <TaskList onCompleteTask={(task)=>this.handleCompleteTask(task)}
                    task={todos} type="todo"/>
            </section>
        </div>
    )
    
   }

}

function mapStateToProps(state){
  return{
      habits:state.tasks.filter(task=>task.type==="habit"),
      dailies:state.tasks.filter(task=>task.type==="daily"),
      todos:state.tasks.filter(task=>task.type==="todo")
  }
}

export default connect(mapStateToProps)(App);