import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import configStore from "./store";
import {Provider} from "react-redux";
import {getAllProducts} from "./actions";

import registerServiceWorker from './registerServiceWorker';

const store=configStore();
store.dispatch(getAllProducts());

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
