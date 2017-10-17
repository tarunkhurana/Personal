import React,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import ListErrors from "./ListErrors";
import {bindActionCreators} from "redux";

import loginActions from "../actions/loginActions";

class Login extends Component{

    submitForm(email, password,ev){
        ev.preventDefault();
        this.props.actions.submitForm(email, password);
    }

    handleChange(key,ev){
        this.props.actions.handleChange(key,ev.target.value);
     }
  
    componentWillUnmount(){
      this.props.actions.unloadLoginPage();
    }

   
    render(){
        const {email,password, inProgress, errors}=this.props; 
      return(
        <div className="auth-page">
              <div className="container page">
                  <div className="row">
                      <div className="col-md-6 offset-md-3 col-xs-12">
                          <h1 className="text-xs-center"></h1>
                          <p className="text-xs-center">
                              <Link to="register">
                                Need an account?
                              </Link>
                          </p>

                          <ListErrors errors={errors}/>
                          <form onSubmit={this.submitForm.bind(this,email,password)}>
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
    actions:bindActionCreators(loginActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);