import React from 'react'
import './App.scss'
import Home from './views/home/home'
import Offers from './views/offers/offers'
import Login from './views/login/login'
import Register from './views/register/register'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/offers' exact component={Offers} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
