import React,{Component} from "react";
import superagent from "superagent";
import actions from "../../actions";
import {connect} from "react-redux";

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            search:{
                location:"",
                query:""
            }
        }

    }

    onUpdateFilters(field,event){
        let search=Object.assign({},this.state.search);
        search[field]=event.target.value;
        this.setState({
            search:search
        });
    }

    onSearch(){
       const URL=`https://jsonplaceholder.typicode.com/posts`;
       const PARAMS={
        query:this.state.query
       };
       superagent.get(URL).query(PARAMS).set('Accept','application/json').end((err,data)=>{
            if(err){
                alert(err.message);
                return;
            }
            this.setState({
                posts:data.body
            });
       })
    }

    onSelectPost(post,event){
        event.preventDefault();
        this.props.selectPost(post);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Search</h3>
                        <input type="text" onChange={this.onUpdateFilters.bind(this,"query")} placeholder="Query"/><br/>
                        <input type="text" onChange={this.onUpdateFilters.bind(this,"location")} placeholder="Location"/><br/>
                        <button onClick={this.onSearch.bind(this)}>Search</button>
                        <hr/>
                        <h3>Posts</h3>
                        <ol>
                           { this.state.posts.map((post)=>{
                                return <li key={post.id}>
                                   <a href="" onClick={this.onSelectPost.bind(this,post)}> {post.title}</a>
                                    </li>
                            })}
                        </ol>
                    </div>
                    <div className="col-md-8"></div>
                    {this.props.post.selectedPost?JSON.stringify(this.props.post.selectedPost):"No Post"}
                </div>
            </div>
        )
    }
}

const stateToProps=(state)=>{
   return {
       post:state.post
   }
}

const dispatchToProps=(dispatch)=>{
    console.log(actions)
    return{
        selectPost(post){dispatch(actions.selectPost(post))}
    }
}


export default connect(stateToProps,dispatchToProps)(Search);