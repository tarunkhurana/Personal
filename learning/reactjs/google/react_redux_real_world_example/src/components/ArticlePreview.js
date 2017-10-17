import React from "react";
import {Link} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import homeActions from "../actions/homeActions";

const ArticlePreview=({article,actions})=>{

    const favoriteButtonClass=article.favorite?"btn btn-sm btn-primary":"btn btn-sm btn-outline-primary"
    const handleClick=(ev)=>{
      ev.preventDefault();
      article.favorited?actions.unFavorite(article.slug):actions.favorite(article.slug)
     
    }
 
    return(
        <div className="article-preview">
            <div className="article-metadata">
                <Link>
                  <img src={article.author.image} alt={article.author.username}/>
                </Link>
                <div className="info">
                    <Link to={`@${article.author.username}`} className="author">
                     {article.author.username}
                    </Link>
                    <span className="date">
                    {new Date(article.createdAt).toDateString()}
                </span>
                </div>
                <div className="pull-xs-right">
                    <button className={favoriteButtonClass} onClick={handleClick}>
                        <i className="ion-heart"></i>{article.favoritesCount}
                    </button>
                </div>
            </div>
            <Link>
             <h1>{article.title}</h1>
             <p>{article.description}</p>
             <span>Read more...</span>
             <ul className="tag-list">
                 {
                     article.tagList.map(tag=>{
                         return(
                             <li className="tag-default tag-pill tag-outline" key={tag}>
                                 {tag}
                             </li>
                         )
                     })
                 }
             </ul>
            </Link>

        </div>
    )

}

const mapDispatchToProps=dispatch=>({
    actions:bindActionCreators(homeActions,dispatch)
})

export default connect(()=>({}),mapDispatchToProps)(ArticlePreview);