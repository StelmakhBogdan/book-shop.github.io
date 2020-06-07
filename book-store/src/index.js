import React from 'react';
import { render } from 'react-dom';
import {Provider} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import BookstroreService from './services/bookstore-service';
import store from './redux/store/store';
import ErrorBoundry from './components/error-boundry';
import { BookstoreServiceProvider } from './components/bookstore-service-context';

const bookstoreService = new BookstroreService();

render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
  document.getElementById('root')
);