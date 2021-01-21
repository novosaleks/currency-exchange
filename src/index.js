import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import ErrorBoundary from './components/error-boundary';
import Context from './containers/context-api';
import CurrencyApi from './service';
import store from './store';
import App from './App';

const currencyAPI = new CurrencyApi();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Context.Provider value={currencyAPI}>
                <App/>
            </Context.Provider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'));
