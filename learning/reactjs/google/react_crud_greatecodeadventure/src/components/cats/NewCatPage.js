import React,{PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as catActions from "../../actions/catActions";
import CatFrom from "./CatFrom";

class NewCatPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cat:{
                name:"",
                breed:"",
                weight:"",
                temperament:"",
                hobby_ids:[]
            },
            saving:false
        }

        this.redirect=this.redirect.bind(this);
        this.saveCat=this.saveCat.bin(this);
        this.updateCatHobbies=this.updateCatHobbies.bind(this);
        this.updateCatState=this.updateCatState.bind(this);
    }

    updateCatHobbies(event){
      const cat=this.state.cat;
      const hobbyId=event.target.value;
      const hobby=this.props.checkBoxHobbies.filter(hobby=>{
          hobbyId===hobby.id
      })[0];
      const checked=!hobby.checked;
      hobby["checked"]=!hobby.checked;
      if(checked){
          cat.hobby_ids.push(hobby.id)
      } else {
          cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));
      }

      this.setState({cat});

    }

    updateCatState(event){
        const field=event.target.name;
        const cat=this.state.cat;
        cat[field]=event.target.value;
        return this.setState({cat});
    }

    saveCat(event){
        event.preventDefault();
        this.props.actions.createCat(this.state.cat);
    }

    render(){
        return(
            <div>
                <h1>New Cat</h1>
                <CatFrom cat={this.state.cat} hobbies={this.props.checkBoxHobbies} onSave={this.saveCat} onChange={this.updateCatState} onHobbyChange={this.updateCatHobbies}/>
            </div>
        )

    }


}

NewCatPage.propTypes={
    checkBoxHobbies:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
}

function hobbiesForCheckBoxes(hobbies){
    return hobbies.map(hobby=>{
        hobby["checked"]=false;
        return hobby;
    })
}

function mapStateToProps(state,ownProps){
    let checkBoxHobbies=[];
    if(state.hobbies.length>0){
        checkBoxHobbies=hobbiesForCheckBoxes(Object.assign({},state.hobbies))
    }

    return {
        checkBoxHobbies
    }

}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(catActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCatPage);