import React, {Component} from "react";
import Article from "../components/Article";

export default class Archives extends Component {
    render(){
        const {query}=this.props.location;
        const {params}=this.props;
        const {article}=params;
        const {date, filter}=query;

        const Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Fake Article",
            "Partial Article",
            "American Article",
            "Mexican Article",
          ].map((title, i) => <Article key={i} title={title}/> );

        return(
            <div>
            <h1>Archives ({article})</h1>
            <h4>date: {date}, filter:{filter}</h4>
            <div class="row">
                {Articles}
            </div>
            </div>
        );
    }
}