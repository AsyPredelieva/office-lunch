import React from 'react'
import './App.scss'
import Home from './pages/Home/Home'
import Offers from './pages/Offers/OffersList/OffersList'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import OfferDetails from './pages/Offers/OfferDetails/OfferDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

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
