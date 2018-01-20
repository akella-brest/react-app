import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

export const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
