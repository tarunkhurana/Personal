import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router";
import profileActions from "../actions/profileActions";
import ArticleList from "./ArticleList";

const EditProfileSettings=props=>{
    if(props.isUser){
        return(
            <Link to="settings" className="btn btn-sm btn-outline-secondary action-btn">
            <i className="ion-gear-a"></i>Edit Profile Settings
            </Link>
        )
    }
    return null;
}

const FollowUserButton=props=>{
    if(props.isUser){
        return null;
    }

    const handleClick=(ev)=>{
       ev.preventDefault();
       if(props.user.following){
           props.unfollow(props.user.username)
       } else {
           props.follow(props.user.username)
       }
    }

    let classes="btn btn-sm action-btn";
    if(props.user.following){
        classes+=" btn-secondary";
    } else {
        classes+=" btn-outline-secondary";
    }
   if(props.user.username){
    return(
        <button
      className={classes}
      onClick={handleClick}>
      <i className="ion-plus-round"></i>
      &nbsp;
      {props.user.following ? 'Unfollow' : 'Follow'} {props.user.username}
    </button>
    )
  }
  return null;
}



class Profile extends Component{
  componentWillMount(){
     this.props.actions.loadProfilePage(this.props.params.username);
  } 
  componentWillUnmount(){
    this.props.actions.unloadProfilePage();
  }
  
  componentWillReceiveProps(nextProps){
     if(nextProps.params.username!=this.props.params.username){
        this.props.actions.loadProfilePage(nextProps.params.username);
     }
  }

  renderTabs(){
    return (
        <ul className="nav nav-pills outline-active">
            <li className="nav-item">
                <Link className="nav-link active" to={`@${this.props.profile.username}`}>
                 My Articles
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`@${this.props.profile.username}/favorites`}>
                 Favorite Articles
                </Link>
            </li>
        </ul>
    )
} 


  render(){
      const profile=this.props.profile;
      const isUser=this.props.currentUser && (this.props.profile.username===this.props.currentUser.username)
      if(!profile){
          return null;
      }
      return(
          <div className="profile-page">
              
              <div className="user-info">
                  <div className="container">
                      <div className="row">
                          <div className="col-xs-12 col-md-10 offset-md-1">
                              <img src={profile.image} className="user-img" alt={profile.username}/>
                              <h4>{profile.username}</h4>
                              <p>{profile.bio}</p>
                              <EditProfileSettings isUser={isUser}/>
                              <FollowUserButton isUser={isUser}
                                                user={profile} follow={this.props.actions.follow} unfollow={this.props.actions.unfollow}/>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="container">
               <div className="row">
                   <div className="col-xs-12 col-md-10 offset-md-1">
                       <div className="article-toggle">
                          {this.renderTabs()}
                       </div>
                       <ArticleList pager={this.props.pager} articles={this.props.articles}
                                    articlesCount={this.props.articlesCount} currentPage={this.props.currentPage}/>
                   </div>
               </div>
              </div>            


          </div>
      )
  }
}

const mapStateToProps=state=>({
    ...state.articlelist,
    profile:state.profile,
    currentUser:state.common.currentUser
    
});

const mapDispatchToProps=dispatch=>({
    actions:bindActionCreators(profileActions,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
export {
    Profile,
    mapStateToProps
}