import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducers/index.reducers'
import {updateUser} from './actions/user.action'
import {updateProduct} from './actions/product.action'


const store = createStore(
    allReducers, 
    {
        products:[{name:"First Product"}],
        user:"BHOPAL"
    }, 
    window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(<Provider store={store}><App country="INDIA"/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
