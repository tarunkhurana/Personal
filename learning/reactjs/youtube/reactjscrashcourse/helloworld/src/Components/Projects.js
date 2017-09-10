import React, { Component } from "react";
import PropTypes from 'prop-types';
import ProjectItem from "./ProjectItem";



class Projects extends Component {
    deleteProject(id) {
        this.props.onDeleteProject(id);
    }
    render() {
        let projectItems;
        projectItems = this.props.projects.map(project => {
            return ( <
                ProjectItem onDeleteProject = { this.deleteProject.bind(this) }
                key = { project.title }
                project = { project }
                />
            )
        });

        return ( <
            div className = "Projects" >
            <
            strong > List of projects < /strong> < br / > < br / > { projectItems } <
            /div>
        )
    }
}

Projects.propTypes = {
    projects: PropTypes.array,
    deleteProject: PropTypes.func
}

export default Projects;