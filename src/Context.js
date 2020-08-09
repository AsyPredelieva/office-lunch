import React from 'react'

const UserContext = React.createContext({
    user: null,
    logIn: () => {},
    logOut: () => {},
})

export const OrderContext = React.createContext({
    name: '',
    count: '',
    price: '',
    addOrderItem: () => {},
    removeOrderItem: () => {},
})

export default UserContext
