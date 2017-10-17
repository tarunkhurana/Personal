import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent=superagentPromise(_superagent,global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const encode = encodeURIComponent;
const responseBody=(res)=> res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests={
    get(url){
        return superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody);
    },
    del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
}

const limit=(count,p)=> `limit=${count}&offset=${p ? p * count : 0}`;

const omitSlug = article => Object.assign({}, article, { slug: undefined });

const Articles={
    all: page =>
    requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(`/articles?author=${encode(author)}&${limit(10, page)}`),
  byTag: (tag, page) =>{
    return requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`)
  },
  del: slug =>
    requests.del(`/articles/${slug}`),
  favorite: slug =>
    requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(10, page)}`),
  feed: () =>
    requests.get('/articles/feed?limit=10&offset=0'),
  get: slug =>
    requests.get(`/articles/${slug}`),
  unFavorite: slug =>
    requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    requests.post('/articles', { article })
};

const Tags={
    getAll:()=> requests.get("/tags")
}

const Auth={
    current: () =>
    requests.get('/user'),
    register:(username,email,password)=>requests.post('/users', { user: { username, email, password } }),
    login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
    save: user =>
    requests.put('/user', { user })
}

const setToken=_token=>{
    token=_token
}

const Comments = {
    create: (slug, comment) =>
      requests.post(`/articles/${slug}/comments`, { comment }),
    delete: (slug, commentId) =>
      requests.del(`/articles/${slug}/comments/${commentId}`),
    forArticle: slug =>
      requests.get(`/articles/${slug}/comments`)
  };

const Profile = {
    follow: username =>
      requests.post(`/profiles/${username}/follow`),
    get: username =>
      requests.get(`/profiles/${username}`),
    unfollow: username =>
      requests.del(`/profiles/${username}/follow`)
  };
  

export default {
    Articles,
    Tags,
    Auth,
    Comments,
    Profile,
    setToken
}