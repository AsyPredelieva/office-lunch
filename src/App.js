import React, { Component } from 'react'
import UserContext from './Context'
import getCookie from './utils/getCookie'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuth: null,
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
        document.cookie = 'x-auth-token= ; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        this.setState({
            isAuth: false,
            user: null,
        })
    }

    componentDidMount() {
        const token = getCookie('x-auth-token')
        console.log(token)

        if (!token) {
            this.logOut()
            return
        }

        fetch('http://localhost:9999/api/user/verify', {
            method: 'POST',
            body: JSON.stringify({ token }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((data) => data.json())
            .then((res) => {
                res.status
                    ? this.logIn({
                          username: res.user.username,
                          id: res.user._id,
                      })
                    : this.logOut()
            })
    }

    render() {
        const { isAuth, user } = this.state

        if (isAuth === null) {
            return <div>Loading...</div>
        }

        return (
            <UserContext.Provider value={{ isAuth, user, logIn: this.logIn, logOut: this.logOut }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default App
