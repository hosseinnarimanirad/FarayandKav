
import React from 'react';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FarayandKaviChist from './pages/FarayandKaviChist';

import logo from './logo.svg';
import './App.css';

import MainPage from './pages/MainPage'

function App() {


  
  return (
    <div>    
    <MainPage/>
    </div>

   

   
  );
}

export default App;
