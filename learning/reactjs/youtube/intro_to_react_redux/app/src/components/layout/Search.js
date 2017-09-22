import React,{Component} from "react";
import superagent from "superagent";
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
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
            console.log(JSON.stringify(data.body));
       })
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
                    </div>
                    <div className="col-md-8"></div>
                </div>
            </div>
        )
    }
}

export default Search;