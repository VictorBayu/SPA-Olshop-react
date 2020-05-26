import React, { Component } from 'react'
import Home from './Home';
import Cart from './Cart';
import Features from './Features';
import Profile from './Profile';
import Navigasi from '../Layouts/Navigasi';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const Coba = () => {
    return (
        <Router>
            <Navigasi />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/features' component={Features} />
                <Route path='/cart' component={Cart} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </Router>
    )
}

export default Coba
