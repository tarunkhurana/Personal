import {PROFILE_PAGE_LOADED, PROFILE_PAGE_UNLOADED, FOLLOW_USER, UNFOLLOW_USER} from "../constants";
import agent from "../agent";

const loadProfilePage=(username,type)=>{
    const payload=type && type==="favorite"?Promise.all([
      agent.Profile.get(username),
      agent.Articles.favoritedBy(username)
    ]):Promise.all([
        agent.Profile.get(username),
        agent.Articles.byAuthor(username)
    ]);

    const pager=page=>type && type==="favorite"? agent.Articles.favoritedBy(username,page): agent.Articles.byAuthor(username,page);

    return {
        type:PROFILE_PAGE_LOADED,
        pager,
        payload 
    }
}

const unloadProfilePage=(username)=>{
    

    return {
        type:PROFILE_PAGE_UNLOADED 
    }
}


const follow=username=>{
  return {
      type:FOLLOW_USER,
      payload:agent.Profile.follow(username)
  }
}

const unfollow=username=>{
    return {
        type:UNFOLLOW_USER,
        payload:agent.Profile.unfollow(username)
    }
}

export default{
    loadProfilePage,
    unloadProfilePage,
    follow,
    unfollow
}