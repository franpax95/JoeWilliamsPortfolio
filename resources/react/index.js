import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers     from './reducers';
import reduxThunk   from 'redux-thunk';

import App from './components/App';

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
        </Provider>, 
        document.getElementById('app')
    );
}