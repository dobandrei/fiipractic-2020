import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './base/App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './base/reducers/rootReducer'

const globalStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) 

ReactDOM.render(
<Provider store = {globalStore}>  
    <React.StrictMode>
        <App />
    </React.StrictMode>
</Provider>,
 document.getElementById('root'))
 
serviceWorker.unregister();
