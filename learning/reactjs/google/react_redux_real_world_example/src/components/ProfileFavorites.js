import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Profile, mapStateToProps} from "./Profile";
import {Link} from "react-router";
import profileActions from "../actions/profileActions";

class ProfileFavorites extends Profile{
    componentWillMount(){
        this.props.actions.loadProfilePage(this.props.params.username,"favorite");
    }

    componentWillUnmount(){
        this.props.actions.unloadProfilePage();
    }

    renderTabs(){
        return (
            <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                    <Link className="nav-link " to={`@${this.props.profile.username}`}>
                     My Articles
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to={`@${this.props.profile.username}/favorites`}>
                     Favorite Articles
                    </Link>
                </li>
            </ul>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    actions:bindActionCreators(profileActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ProfileFavorites);