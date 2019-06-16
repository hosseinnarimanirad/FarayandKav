import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Iframe from 'react-iframe'
 
import './MainPage.css';
import faracheImage from '../assets/images/farache.png';
import processM from '../assets/images/processM.png';
import apartImage from '../assets/images/brands/aparat.png'
import appSourceImage from '../assets/images/brands/appsource.png'
import pkavBackground from '../assets/images/pkavBackground.jpg'
// import  './App.css';
 
import {FaEnvelope} from 'react-icons/fa'
import {FaGlobe} from 'react-icons/fa'


import HomePage from './HomePage'
import FarayandKaviChist from './FarayandKaviChist';
import MahsoolhaPage from './Mahsoolha';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
     
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    
    this.onClick = this.onClick.bind(this); 
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
     
    });
  }
 

  render() {
    return ( 
     
 <div>
 <Router>
    <header>
     
     <MDBNavbar color="lime" fixed="top" dark expand="md" style={{direction:'rtl'}}>

       <MDBContainer>
         <MDBNavbarBrand href="/">
           <strong className="iranSansFont">فرآیندکاو</strong>
         </MDBNavbarBrand>
         <MDBNavbarToggler onClick={this.goToHomePage} />
         <MDBCollapse isOpen={this.state.collapse} navbar className="iranSansFont">
           <MDBNavbarNav right>
             {/* <MDBNavItem active> */}
             <MDBNavItem > 
               <MDBNavLink to="/FarayandKaviChistPage">فرآیندکاوی چیست؟</MDBNavLink>               
             </MDBNavItem>
             <MDBNavItem>
               <MDBNavLink to="/MahsoolhaPage">محصول‌ها</MDBNavLink>
             </MDBNavItem>
             <MDBNavItem>
               <MDBNavLink to="#">محتوا</MDBNavLink>
             </MDBNavItem>  
               
           </MDBNavbarNav>
         </MDBCollapse>
       </MDBContainer>
     </MDBNavbar>
 
  
     
   {/* <MDBView src="https://images.discerningassets.com/image/upload/c_fit,h_1000,w_1000/c_fit,fl_relative,h_1.0,o_100,w_1.0/v1439143159/Tree_of_Zen_dtgz5n.jpg"> */}

 </header>

 <main> 
 
 <div style={{marginTop:50}}>
  <Route exact path="/" component={HomePage}/>
  <Route path="/FarayandKaviChistPage" component={FarayandKaviChist}/>
  <Route path="/MahsoolhaPage" component={MahsoolhaPage}/>
  
</div>


   {/* { 
      (this.currentPage==='HomePage')?(<HomePage/>):(<FarayandKaviChist/>)
    } */}
 
 </main>
 
 </Router>
      </div>
    );
  }
}

export default MainPage;
 