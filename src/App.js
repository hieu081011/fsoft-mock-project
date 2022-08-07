import React from 'react'
import './global.scss'
import Navigation from './components/Navigation/Navigation'
import AppBar from './components/AppBar/AppBar'
import Table from './components/Table/Table'
import CreateProduct from './components/Product/CreateProduct/CreateProduct'
import CreateUser from './components/User/CreateUser/CreateUser'
import OrderDetail from './components/Order/OrderDetail/OrderDetail'
const App = () => {
    return (
        <>
            <OrderDetail />
        </>
    )
}

export default App