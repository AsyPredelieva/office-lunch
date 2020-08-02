import React from 'react'

const UserContext = React.createContext({
    isAuth: false,
    user: null,
    logIn: () => {},
    logOut: () => {},
})

export default UserContext
