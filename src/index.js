import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import Router from './Router'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <React.StrictMode>
        <App>
            <Router />
        </App>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
