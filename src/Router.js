import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import OffersList from './pages/Offers/OffersList/OffersList'
import OfferDetails from './pages/Offers/OfferDetails/OfferDetails'
import Orders from './pages/Orders/Orders'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/offers' exact component={OffersList} />
                <Route path='/offers/Kamenica' exact component={OfferDetails} />
                <Route path='/orders' exact component={Orders} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
