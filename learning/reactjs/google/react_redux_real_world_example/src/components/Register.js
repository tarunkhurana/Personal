import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router";
import ListErrors from "./ListErrors";
import registerActions from "../actions/registerActions";



class Register extends React.Component{
    
    constructor(){
        super();
  }
    submitForm(username, email, password,ev){
        ev.preventDefault();
        this.props.actions.submitForm(username, email, password);
    }

    componentWillUnmount(){
        this.props.actions.unloadRegisterPage();
    }   
  

    handleChange(key,ev){
       this.props.actions.handleChange(key,ev.target.value);
    }


    render(){  
    console.log(this.props);    
    const {username,email,password, inProgress, errors}=this.props; 
    return(
           <div className="auth-page">
              <div className="container page">
                  <div className="row">
                      <div className="col-md-6 offset-md-3 col-xs-12">
                          <h1 className="text-xs-center"></h1>
                          <p className="text-xs-center">
                              <Link to="login">
                                Have an account?
                              </Link>
                          </p>

                          <ListErrors errors={errors}/>
                          <form onSubmit={this.submitForm.bind(this,username,email,password)}>
                          <fieldset className="form-group">
                              <input className="form-control form-control-lg"
                                     type="text" placeholder="Username"
                                     onChange={this.handleChange.bind(this,"username")}
                                     value={username}/>
                          </fieldset>
                          <fieldset className="form-group">
                              <input className="form-control form-control-lg"
                                    type="email" placeholder="Email"
                                    onChange={this.handleChange.bind(this,"email")}
                                    value={email}/>
                          </fieldset>
                          <fieldset className="form-group">
                              <input className="form-control form-control-lg"
                                    type="password" placeholder="Password"
                                    onChange={this.handleChange.bind(this,"password")}
                                    value={password}/>
                          </fieldset>
                          <button className="btn btn-lg btn-primary pull-xs-right" type="submit" disabled={inProgress}>
                              Sign in
                          </button>
                      </form>
                      </div>                      
                  </div>
              </div>
           </div>
       )
    }
}

const mapStateToProps=state=>({
    ...state.auth
})
const mapDispatchToProps=dispatch=>({
    actions:bindActionCreators(registerActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Register);