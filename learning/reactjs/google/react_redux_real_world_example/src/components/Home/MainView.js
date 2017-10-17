import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import homeActions from "../../actions/homeActions";

import ArticleList from "../ArticleList";


const GlobalFeedTab=({tab, onTabClick})=>{
    const clickHandler=ev=>{
        ev.preventDefault();
        const tab="all";
         onTabClick(tab);
    }
    return (
        <li className="nav-item">
            <a href="" className={tab==="all"?"nav-link active":"nav-link"} onClick={clickHandler}>
                Global Feed
            </a>
        </li>
    )
}


const TagFilterTab=({tag})=>{
    if(!tag){
        return null;
    }
    return(
        <li className="nav-item">
            <a href="" className="nav-link active">
                <i className="ion-pound"></i>{tag}
            </a>
        </li>
    )
}

const MainView=({articles,tab,tag,pager,articlesCount, currentPage, actions})=>{
    return (
        <div className="col-md-9">
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                    <GlobalFeedTab tab={tab} onTabClick={actions.onTabClick}/>
                    <TagFilterTab tag={tag}/>
                </ul>
            </div>
            <ArticleList 
              articles={articles}
              pager={pager}
              articlesCount={articlesCount}
              currentPage={currentPage}/>
        </div>
    )
}

const mapStateToProps=state=>({
    ...state.articlelist,
   ...state.home
})

const mapDispatchToProps=dispatch=>({
    actions:bindActionCreators(homeActions,dispatch)
 })

export default connect(mapStateToProps,mapDispatchToProps)(MainView);