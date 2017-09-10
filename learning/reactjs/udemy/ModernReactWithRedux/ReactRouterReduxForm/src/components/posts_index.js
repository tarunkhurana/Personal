import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";

class PostsIndex extends Component {
    componentDidMount() {
        console.log(this.props.posts);
        if (_.isEmpty(this.props.posts)) {
            this.props.fetchPosts();
        }
    }
    renderPosts() {
        return _.map(this.props.posts, post => {
            return ( <
                li className = "list-group-item"
                key = {
                    post.id
                } > < Link to = { `/posts/${post.id}` } > { post.title } < /Link> < /
                li >
            )
        })
    }
    render() {
        console.log("render");
        return ( <
            div >
            <
            div className = "text-xs-right" >
            <
            Link to = "/posts/new"
            className = "btn btn-primary" > Create Post < /Link> < /
            div > <
            h3 > Posts < / h3 > < ul className = "list-group" > { this.renderPosts() } > < /
            ul > < /
            div >
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);