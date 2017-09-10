import React, { Component } from 'react';
import $ from "jquery";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
import uuid from 'uuid';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            todos: []
        };
    }

    getProjects() {
        this.setState({
            projects: [{
                    id: uuid.v4(),
                    title: "Business Webiste",
                    category: "Web Design"

                },
                {
                    id: uuid.v4(),
                    title: "Social App",
                    category: "Mobile Development"

                },
                {
                    id: uuid.v4(),
                    title: "Ecommerce Shopping Cart",
                    category: "Web Development"

                }
            ]
        });
    }

    getTodos() {
        $.ajax({
            url: "https://www.jsonplaceholder.typicode.com/todos",
            dataType: "json",
            cache: false,
            success: function(data) {
                this.setState({
                    todos: data
                }, function() {
                    console.log(this.state.todos);
                })
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    }

    componentWillMount() {
        this.getProjects();
        this.getTodos();

    }


    componentDidMount() {
        this.getTodos();
    }

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({
            projects: projects
        });
    }

    handleDeleteProject(id) {
        let projects = this.state.projects,
            index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({
            projects: projects
        });
    }

    render() {
        return ( <
            div className = "App" >
            <
            AddProject addProject = { this.handleAddProject.bind(this) }
            / > <br/ > <
            Projects onDeleteProject = { this.handleDeleteProject.bind(this) }
            author = "Tarun Khurana"
            projects = { this.state.projects }
            / > <
            Todos todos = { this.state.todos }
            />  <
            /
            div >
        );
    }
}

export default App;