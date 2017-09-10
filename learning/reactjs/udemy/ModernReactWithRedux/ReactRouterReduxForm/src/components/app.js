import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PostsIndex from "./posts_index";
import PostNew from "./post_new";
import PostShow from "./post_show";

export default class App extends Component {
    render() {
        return ( <
            BrowserRouter >
            <
            div >
            <
            Switch >
            <
            Route path = "/posts/new"
            component = { PostNew }
            /> <
            Route path = "/posts/:id"
            component = { PostShow }
            /> <
            Route path = '/'
            component = { PostsIndex }
            /> </Switch > < /
            div >
            <
            /BrowserRouter>

        );
    }
}