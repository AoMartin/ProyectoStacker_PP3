import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { Store } from './redux/store/Store';

ReactDom.render(
    <Provider store={Store}>
        <App />
    </Provider>
    , document.getElementById('root'));
