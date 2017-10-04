import React from "react";

// ONE WAY Functional Based Component
// const SearchBar=()=>{
//     return (
//         <input/>
//     );
// }

// export default SearchBar;

//SECOND WAY Class Based Component
export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:props.term
        }
    }
    onInputChange(event){
        const term=event.target.value;
         this.setState({
             term
         });
         this.props.onVideoSearch(this.state.term);
    }
    render(){
        return(
            <div>
            <input value={this.state.term} onChange={this.onInputChange.bind(this)}/>
            Value of input: {this.state.term}
            </div>

        )
    }
}