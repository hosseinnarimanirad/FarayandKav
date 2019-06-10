import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import Iframe from 'react-iframe'
 
import './MainPage.css';
import faracheImage from '../assets/images/farache.png';
import processM from '../assets/images/processM.png';
// import  './App.css';
 

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
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
           <header>
           <Router>
         
            <MDBNavbar color="lime" fixed="top" dark expand="md" style={{direction:'rtl'}}>
              <MDBContainer>
                <MDBNavbarBrand href="/" >
                  <strong className="iranSansFont">فرآیندکاو</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  {/* <MDBNavbarNav right>
                    <MDBNavItem active>
                      <MDBNavLink to="#">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">Link</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">Profile</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav> */}
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            </Router>
        
            
          {/* <MDBView src="https://images.discerningassets.com/image/upload/c_fit,h_1000,w_1000/c_fit,fl_relative,h_1.0,o_100,w_1.0/v1439143159/Tree_of_Zen_dtgz5n.jpg"> */}
          <MDBView src="https://i.imgur.com/UoqJN8j.jpg">
            <MDBMask overlay="green-strong" className="flex-center flex-column text-white text-center">
              <h2 className="entezareZohoor1Font" style={{fontSize:'58px'}}>فرآیند کاوی</h2>
              <h5>When you scroll down it will disappear</h5>
              <br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.</p>
          </MDBContainer>
          <MDBContainer className="text-center my-5">
            <MDBRow>          

              <h2 className="text-right iranSansFont" style={{direction: 'rtl', marginLeft:'auto'}}>محصول‌های ما</h2>
            </MDBRow>
            <MDBRow className="justify-content-md-center">              
                <MDBCol size="4">
                  <img src={faracheImage} className="img-fluid productImages" alt="" />
                </MDBCol>
                <MDBCol size="4">
                  <img src={processM} className="img-fluid productImages" alt="" />
                </MDBCol>               
            </MDBRow>
          </MDBContainer>
          <MDBContainer className="text-center my-5">
            <MDBRow>          
              <h2 className="text-right iranSansFont" style={{direction: 'rtl', marginLeft:'auto'}}>فیلم‌ها</h2>
            </MDBRow>
            <MDBRow className="justify-content-md-center">   
            
              <MDBCol size="5">
                <Iframe url="https://www.aparat.com/video/video/embed/videohash/xNBpL/vt/frame"
                        width="90%"
                        height="300px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"/>
              </MDBCol>
              <MDBCol size="5">
                <Iframe url="https://www.aparat.com/video/video/embed/videohash/xNBpL/vt/frame"
                        width="90%"
                        height="300px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"/>
                </MDBCol>
                   
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default MainPage;
 