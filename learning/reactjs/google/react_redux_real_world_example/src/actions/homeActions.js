import * as constants from "../constants";
import agent from "../agent";

const loadHomePageData=(tab)=>{
    const pager=agent.Articles.all;

    const articlesPromise=agent.Articles.all;
    const tags=agent.Tags.getAll
    const payload=Promise.all([tags(), articlesPromise()])

    return {
     type: constants.HOME_PAGE_LOADED,
     tab,
     pager,
     payload }
}

const unloadHomePage=()=>{
    return {
        type:constants.HOME_PAGE_UNLOADED
    }
}

const onClickTag=(tag)=>{
   
   const pager=page=>agent.Articles.byTag(tag,page);
   const payload=agent.Articles.byTag(tag);

    return {
        type:constants.APPLY_TAG_FILTER,
        tag,
        pager,
        payload
    }
}

const onSetPage=(page,pager)=>{
    const payload=pager?pager:agent.Articles.all(page)
    return {
        type:constants.SET_PAGE,
        page,
        payload
    }
}

const onTabClick=tab=>{
    const pager=agent.Articles.all;
    const payload=pager();
    return {
        type:constants.CHANGE_TAB,
        tab,
        pager,
        payload
    }
}

const unFavorite=(slug)=>{
    return {
        type:constants.ARTICLE_UNFAVORITED,
        payload:agent.Articles.unFavorite(slug)
    }
}

const favorite=(slug)=>{
    return {
        type:constants.ARTICLE_FAVORITED,
        payload:agent.Articles.favorite(slug)
    }
}


export default {
    loadHomePageData,
    unloadHomePage,
    onClickTag,
    onTabClick,
    onSetPage,
    unFavorite,
    favorite
}