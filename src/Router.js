import React, { Component } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import OffersList from './pages/Offers/OffersList/OffersList'
import OfferDetails from './pages/Offers/OfferDetails/OfferDetails'
import Orders from './pages/Orders/Orders'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserContext from './Context'

class Router extends Component {
    static contextType = UserContext

    render() {
        const { isAuth } = this.context

        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/offers' exact component={OffersList} />
                    {isAuth && (
                        <>
                            <Route path='/offers/Kamenica' exact component={OfferDetails} />
                            <Route path='/orders' exact component={Orders} />
                        </>
                    )}
                    <Route path='*' component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
