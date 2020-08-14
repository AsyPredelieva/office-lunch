import React, { Component } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import OffersList from './pages/Offers/OffersList/OffersList'
import OfferDetails from './pages/Offers/OfferDetails/OfferDetails'
import Orders from './pages/Orders/Orders'
import MyOrders from './pages/MyOrders/MyOrders'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import UserContext from './Context'

class Router extends Component {
    static contextType = UserContext

    render() {
        const { user } = this.context

        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login'>
                        {user && user.isAuth ? <Redirect to='/' /> : <Login />}
                    </Route>
                    <Route path='/register'>
                        {user && user.isAuth ? <Redirect to='/' /> : <Register />}
                    </Route>
                    <Route path='/offers' exact component={OffersList} />
                    <Route path='/offers/:id'>
                        {user && user.isAuth ? <OfferDetails /> : <NotFound />}
                    </Route>
                    <Route path='/orders'>{user && user.isAuth ? <Orders /> : <NotFound />}</Route>
                    <Route path='/myOrders'>
                        {user && user.isAuth ? <MyOrders /> : <NotFound />}
                    </Route>
                    <Route path='*' component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
