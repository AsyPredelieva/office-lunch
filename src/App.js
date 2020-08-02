import React, { Component } from 'react'
import UserContext from './Context'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuth: false,
            user: null,
        }
    }

    logIn = (user) => {
        this.setState({
            isAuth: true,
            user,
        })
    }

    logOut = () => {
        this.setState({
            isAuth: false,
            user: null,
        })
    }

    render() {
        const { isAuth, user } = this.state

        return (
            <UserContext.Provider value={{ isAuth, user, logIn: this.logIn, logOut: this.logOut }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default App
