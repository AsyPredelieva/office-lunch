import React from 'react'
import './App.scss'
import Home from './views/home/home'
import Offers from './views/offers/offersList/offersList'
import Login from './views/login/login'
import Register from './views/register/register'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import OfferDetails from './views/offers/OfferDetails/OfferDetails'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/offers' exact component={Offers} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/offers/Kamenica' exact component={OfferDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
