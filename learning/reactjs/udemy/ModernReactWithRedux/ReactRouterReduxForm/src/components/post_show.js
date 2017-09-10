import React, { Component } from "react";
import { fetchPost, deletePost } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class PostShow extends Component {
    componentWillMount() {
        console.log(this.props.post);
        if (!this.props.post) {
            const id = this.props.match.params.id;
            this.props.fetchPost(id);
        }
    }

    deletePost() {
        const id = this.props.match.params.id;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }
    render() {
        const { post } = this.props;
        if (!post) {
            return ( <
                div >
                Loading... <
                /div>
            )
        }
        const { title, categories, content } = post;
        return ( <
            div >
            <
            Link to = "/" > Back to Index < /Link> <
            button className = "btn btn-danger pull-xs-right"
            onClick = { this.deletePost.bind(this) } > Delete Post < /button>  <
            h3 > { title } < /h3> <
            h6 > { categories } < /h6> <
            p > { content } < /p> < /
            div >
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);