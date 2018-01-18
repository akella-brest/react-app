import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducers';
import { Router, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

export let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        {/*<BrowserRouter>*/}
            <App/>
        {/*</BrowserRouter>*/}
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
