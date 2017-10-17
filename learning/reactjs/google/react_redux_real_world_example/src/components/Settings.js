import React,{Component} from "react";
import {connect} from "react-redux";
import ListErrors from "./ListErrors";
import agent from "../agent";

import {
    SETTINGS_SAVED,
    SETTINGS_PAGE_UNLOADED,
    LOGOUT
} from "../constants";

class SettingsForm extends Component{
   constructor(){
    super();   
    this.state={
           image:"",
           username:"",
           bio:"",
           email:"",
           password:"" 
       }
   }

   updateState(key,ev){
       const state=this.state;
       const newState=Object.assign({},state,{[key]:ev.target.value})
       this.setState(newState);
   }

   submitForm(ev){
       ev.preventDefault();
       const user=Object.assign({},this.state);
       if(!user.password){
           delete user.password
       }

       this.props.onSubmitForm(user);
   }
   
   componentWillMount() {
    if (this.props.currentUser) {
      Object.assign(this.state, {
        image: this.props.currentUser.image || '',
        username: this.props.currentUser.username,
        bio: this.props.currentUser.bio,
        email: this.props.currentUser.email
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState(Object.assign({}, this.state, {
        image: nextProps.currentUser.image || '',
        username: nextProps.currentUser.username,
        bio: nextProps.currentUser.bio,
        email: nextProps.currentUser.email
      }));
    }
  }

  componentWillUnmount(){
      this.props.onUnload();
  }


   render(){
       console.log(this.props.inProgress);
       return(
       <div>
           <p>{}</p>
           <form onSubmit={this.submitForm.bind(this)}>
               <fieldset className="form-group">
                   <input className="form-control"
                         type="text"
                         placeholder="Url of profile picture"
                         value={this.state.image}
                         onChange={this.updateState.bind(this,"image")}/>
               </fieldset>
               <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.updateState.bind(this,'username')} />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows="8"
              placeholder="Short bio about you"
              value={this.state.bio}
              onChange={this.updateState.bind(this,'bio')}>
            </textarea>
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateState.bind(this,'email')} />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="New Password"
              value={this.state.password}
              onChange={this.updateState.bind(this,'password')} />
          </fieldset>
          <button className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={this.props.inProgress}>
          Update Settings
         </button>
           </form>
       </div>
       )

   }
}

class Settings extends Component{
    render(){
        return(
            <div className="settings-page">
            <div className="container page">
              <div className="row">
                <div className="col-md-6 offset-md-3 col-xs-12">
    
                  <h1 className="text-xs-center">Your Settings</h1>
    
                  <ListErrors errors={this.props.errors}></ListErrors>
    
                  <SettingsForm currentUser={this.props.currentUser} onSubmitForm={this.props.onSubmitForm} onUnload={this.props.onUnload} inProgress={this.props.inProgress} />
    
                  <hr />
    
                  <button
                    className="btn btn-outline-danger" onClick={this.props.onClickLogout} >
                    Or click here to logout.
                  </button>
    
                </div>
              </div>
            </div>
          </div> 
        )
    }
}

const mapStateToProps=state=>({
    ...state.settings,
    currentUser:state.common.currentUser
});

const mapDispatchToProps=dispatch=>({
    onClickLogout:()=> dispatch({type:LOGOUT}),
    onSubmitForm:user=>dispatch({type:SETTINGS_SAVED, payload:agent.Auth.save(user)}),
    onUnload:()=>dispatch({type:SETTINGS_PAGE_UNLOADED})
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);