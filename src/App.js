import React, { Component } from 'react';
import './App.css';
import Coba from './Components/Nav/Coba'
import app from './Components/config/fire';
import Login from './Components/auth/Login';

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
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
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