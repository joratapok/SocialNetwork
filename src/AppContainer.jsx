import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './redux/redux-store'
import App from './App'

const AppContainer = () => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    )
}

export default AppContainer
