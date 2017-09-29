import React, {Component,ProTypes} from "react";
import {connect} from "react-redux";
import HobbyList from "./HobbyList";
import {bindActionCreators} from "redux";

import * as catActions from "../actions/CatActions";

import CatForm from "./CatForm";

class CatPage extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            isEditing:false,
            cat:props.cat,
            catHobbies:props.catHobbies,
            checkBoxHobbies:props.checkBoxHobbies
        };
        this.toggleEdit=this.toggleEdit.bind(this);
        this.deleteCat=this.deleteCat.bind(this);
        this.updateCatState=this.updateCatState.bind(this);
        this.saveCat = this.saveCat.bind(this);
        this.updateCatHobbies = this.updateCatHobbies.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.cat.id!==nextProps.cat.id){
            this.setState({
                cat:nextProps.cat
            })
        }

        if (this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length) {
            this.setState({catHobbies: nextProps.catHobbies, checkBoxHobbies: nextProps.checkBoxHobbies});
          }
    }

   toggleEdit(){
       this.setState({
           isEditing:!isEditing
       })
   }

   deleteCat(){
       this.props.actions.deleteCat(this.state.cat)
   }

   saveCat(event){
     event.preventDefault();
     this.props.actions.updateCat(this.state.cat);
   }

   updateCatState(event){
    const field=event.target.name;
    const cat= this.state.cat;
    cat[field]=event.target.value;
    this.setState({
        cat
    });
   }

   updateCatHobbies(event) {
    const cat = this.state.cat;
    const hobbyId = event.target.value;
    const hobby = this.state.checkBoxHobbies.filter(hobby => hobby.id === hobbyId)[0];
    const checked = !hobby.checked;
    hobby['checked'] = !hobby.checked;
    if (checked) {
        cat.hobby_ids.push(hobby.id);
      } else {  
        cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));
      }
      this.setState({cat: cat});
   }

    render(){
        if(!this.state.isEditing){
        return(
            <div className="col-md-8 col-md-offset-2">
                <h1>{this.state.cat.name}</h1>
                <p>breed: {this.state.cat.breed}</p>
                <p>weight: {this.state.cat.weight}</p>
                <p>temperament: {this.state.cat.temperament}</p>
                <HobbyList hobbies={this.state.catHobbies}/>
                <button onClick={this.toggleEdit}>Edit</button>
                <button onClick={this.deleteCat}>Delete</button>
            </div>
        )
     }

     return(
         <div>
             <h1>Edit Cat</h1>
             <CatForm
              cat={this.state.cat}
              hobbies={this.state.checkBoxHobbies}
              onSave={this.saveCat}
              onChange={this.updateCatState}
              onHobbyChange={this.updateCatHobbies}/>
         </div>
     )

    }
}

CatPage.propTypes={
    cat:PropTypes.object.isRequired,
    hobbies:PropTypes.array.isRequired,
    checkBoxHobbies:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
};


function hobbiesForCheckBoxes(hobbies,cat=null){
    return hobbies.map(hobby=>{
        if(cat.hobby_ids.filter(hobbyId=> hobbyId===hobby.id).length>0){
            hobby["checked"]=true;
        } else {
            hobby["checked"]=false;
        }
        return hobby;
  })
}

function collectCatHobbies(hobbies,cat){
    let selected=hobbies.map(hobby=>{
        if(cat.hobby_ids.filter(hobbyId=> hobbyId===hobby.id).length>0){
            return hobby;
        }
    });

    return selected.filter(el=> el!==undefined);
}


function mapStateToProps(state,ownProps){
    let cat = {name: '', breed: '', weight: '', temperament: '', hobby_ids: []};
    let catHobbies=[];
    let checkBoxHobbies=[];
    const catId=ownProps.params.id;// this is coming from URL params with the help of route
    if(catId && state.cats.length>0 && state.hobbies.lenght>0){
        cat=Object.assign({},state.cats.find(cat=>cat.id))
        if(cat.id && cat.hobby_ids.length>0){
           catHobbies=collectCatHobbies(state.hobbies,cat);
           checkBoxHobbies=hobbiesForCheckBoxes(state.hobbies,cat)
        } else {
            checkBoxHobbies=hobbiesForCheckBoxes(state.hobbies);
        }
    }
    return {
        cat,
        catHobbies,
        checkBoxHobbies
    }
}


function mapDispatchToProps(dispatch){
  return{
      actions:bindActionCreators(catActions,dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatPage);
















