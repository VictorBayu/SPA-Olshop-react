import React, { Component } from 'react';
import './App.css';
import Navigasi from './Components/Layouts/Navigasi'
import Home from './Components/Nav/Home'
import Features from './Components/Nav/Features'
import Profile from './Components/Nav/Profile'
import Cart from './Components/Nav/Cart'
import Coba from './Components/Nav/Coba'
import app from './Components/config/fire';
import Login from './Components/auth/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { AuthProvider } from './Components/auth/Auth';
import PrivateRoute from './Components/auth/PrivateRoutes';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    app.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? (<Coba />) : (<Login />)}
      </div>
    );
  }
}
export default App;