import React from 'react'
import './App.scss'
import Home from './views/home/home'
import Login from './views/login/login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
