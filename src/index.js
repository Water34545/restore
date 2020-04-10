import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import BooksstoreService from './services/bookstore-service'
import {BooksstoreServiceProvider} from './components/booksstore-service-context'

import store from './store'

const booksstoreService = new BooksstoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BooksstoreServiceProvider value={booksstoreService}>
                <Router>
                    <App/>
                </Router>
            </BooksstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
)