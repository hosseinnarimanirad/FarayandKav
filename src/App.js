
import React from 'react';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FarayandKaviChist from './pages/FarayandKaviChist';

import logo from './logo.svg';
import './App.css'; 

import MainPage from './pages/MainPage'
import DocumentMeta from 'react-document-meta';

function App() {


  const meta = {
    title: 'فرآیندکاو',
    description: 'اجرای حرفه ای فرآیندکاوی و هوش تجاری برای کسب و کارها و سازمان ها',
    canonical: 'https://pkav.ir',
   
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'فرآیندکاوی,داده کاوی,process mining,فرآیند کاوی, هوش تجاری, هوشمندی کسب و کار, علم داده, مدیریت فرآیندهای سازمانی, تحلیل داده'
      }
    }
  };
  
  return (
    <DocumentMeta {...meta}>
      <div>    
        <MainPage/>
      </div>
    </DocumentMeta>

   

   
  );
}

export default App;
