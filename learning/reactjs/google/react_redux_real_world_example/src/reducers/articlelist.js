import {HOME_PAGE_LOADED,HOME_PAGE_UNLOADED, APPLY_TAG_FILTER, SET_PAGE, CHANGE_TAB, ARTICLE_FAVORITED, ARTICLE_UNFAVORITED, PROFILE_PAGE_LOADED, PROFILE_PAGE_UNLOADED} from "../constants";

export default (state={},action)=>{
    switch(action.type){
        case HOME_PAGE_LOADED:
        return {
            ...state,
            articles:action.payload[1].articles,
            articlesCount:action.payload[1].articlesCount,
            pager:action.pager,
            currentPage:0,
            tab:action.tab
        }
        case HOME_PAGE_UNLOADED:
        return {};
        case APPLY_TAG_FILTER:
        return {
            ...state,
            articles:action.payload.articles,
            articlesCount:action.payload.articlesCount,
            pager:action.pager,
            tab:null,
            tag:action.tag,
            currentPage:0
        }
        case CHANGE_TAB:
        return {
            ...state,
            articles:action.payload.articles,
            articlesCount:action.payload.articlesCount,
            pager:action.pager,
            tab:action.tab,
            tag:null,
            currentPage:0
        }
        case SET_PAGE:
        return {
            ...state,
            articles:action.payload.articles,
            articlesCount:action.payload.articlesCount,
            currentPage:action.page
        }
        case ARTICLE_FAVORITED:
        case ARTICLE_UNFAVORITED:
        return {
            ...state,
            articles:state.articles.map(article=>{
                if(action && action.payload && article.slug===action.payload.article.slug){
                    return {
                        ...article,
                        favorited:action.payload.article.favorited,
                        favoritesCount:action.payload.article.favoritesCount
                    }
                }
                return article;
            })
        }
        case PROFILE_PAGE_LOADED:
          return {
            ...state,
            pager: action.pager,
            articles: action.payload[1].articles,
            articlesCount: action.payload[1].articlesCount,
            currentPage: 0
          };
        case PROFILE_PAGE_UNLOADED:
          return {};
        default:
        return state;
    }
}