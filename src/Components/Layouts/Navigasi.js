import React from 'react';
import { Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './../config/fire';

const Navigasi = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>V-Shop</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/" className="nav-wrapper">Home </Nav.Link>
        <Nav.Link href="/features" className="features">Product </Nav.Link>
        <Nav.Link href="/cart" className="cart">Cart </Nav.Link>
        <Nav.Link href="/profile" className="profile">Profile </Nav.Link>
      </Nav>
      <Button variant="outline-danger" onClick={() => app.auth().signOut()} >Sign Out</Button>
    </Navbar >
  )
}

export default Navigasi