import React from 'react'
import './App.scss'
import Home from './views/home/home'
import Login from './views/login/login'
import Register from './views/register/register'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
