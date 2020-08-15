import React, { useState, useEffect } from 'react'
import UserContext from './Context'
import getCookie from './utils/getCookie'
import ErrorBoundary from './ErrorBoundary'
import Loader from './components/common/Loader/Loader'

const App = (props) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const logIn = (user) => {
        setUser({
            ...user,
            isAuth: true,
        })
    }

    const logOut = () => {
        document.cookie = 'x-auth-token= ; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        setUser({
            isAuth: false,
        })
    }

    useEffect(() => {
        const token = getCookie('x-auth-token')

        if (!token) {
            logOut()
            setLoading(false)
            return
        }

        fetch('http://localhost:9999/api/user/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        })
            .then((data) => data.json())
            .then((res) => {
                res.status
                    ? logIn({
                          username: res.user.username,
                          id: res.user._id,
                      })
                    : logOut()

                setLoading(false)
            })
    }, [])

    // TODO Loading
    if (loading) {
        return <Loader />
    }

    return (
        <UserContext.Provider value={{ user, logIn, logOut }}>
            <ErrorBoundary>{props.children}</ErrorBoundary>
        </UserContext.Provider>
    )
}

export default App
