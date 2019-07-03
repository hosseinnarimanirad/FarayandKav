import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import Iframe from 'react-iframe'

import './MainPage.css';
import faracheImage from '../assets/images/farache.png';
import processM from '../assets/images/processM.png';
import apartImage from '../assets/images/brands/aparat.png'
import appSourceImage from '../assets/images/brands/appsource.png'
import pkavBackground from '../assets/images/pkavBackground.jpg'
import farayandKavWhite from '../assets/images/logo/FarayanKavWhite.png';
// import  './App.css';

import { FaEnvelope } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'

class HomePage extends React.Component {
  render() {
    return <div>

      <MDBView src={pkavBackground}>
        <MDBMask overlay="green-strong" className="flex-center flex-column text-white text-center">
          {/* <h2 className="entezareZohoor1Font" style={{ fontSize: '58px' }}>فرآیند کاوی</h2> */}
          <img src={farayandKavWhite} style={{width:'300px', margin:'20px'}} alt="فرآیندکاو"/>
          <br/>
          <br/>
          
          <h3 className="iranSansFont">کشف خودکار و هوشمندانهٔ بینش‌های فرآیندی از انبوه داده</h3>
          <br />
          {/* <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p> */}
        </MDBMask>
      </MDBView>

      <div style={{ background: 'lightGray', paddingTop: 2, paddingBottom: 2 }}>
        <MDBContainer className="text-center my-5">
          <MDBRow>
            <h2 className="text-right iranSansFont" style={{ direction: 'rtl', marginLeft: 'auto' }}>فیلم‌ها</h2>
          </MDBRow>
          <MDBRow className="justify-content-md-center">
            <MDBCol size="5">
              <Iframe url="https://www.aparat.com/video/video/embed/videohash/K7Pzu/vt/frame"
                width="90%"
                height="300px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
            </MDBCol>
            <MDBCol size="5">
              <Iframe url="https://www.aparat.com/video/video/embed/videohash/xdBkh/vt/frame"
                width="90%"
                height="300px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="text-center my-5">
        <MDBRow>
          <h2 className="text-right iranSansFont" style={{ direction: 'rtl', marginLeft: 'auto' }}>محصول‌های ما</h2>
        </MDBRow>
        <MDBRow className="justify-content-md-center iranSansFont">
          <MDBCol size="4">
            <img src={faracheImage} className="img-fluid productImages" alt="" />
            <br />
            <p className="rightToLeft text-justify my-2">
              در حال حاضر، این بستر در حال توسعه می‌باشد تا بتواند تحلیل‌های داده محور پرکاربرد را در صنایع مختلف به صاحبان کسب و کارها ارائه کند. در حوزه فرآیندکاوی، این بستر اولین ابزار حرفه ای فرآیندکاوی فارسی است که در یک محیط آنلاین به کاربران ارائه خدمت می‌کند.
                  </p>
          </MDBCol>
          <MDBCol size="4">
            <img src={processM} className="img-fluid productImages" alt="" />
            <br />
            <p className="rightToLeft text-justify my-2">
              در
              ProcessM،
              ما به دنبال ساخت افزونه‌های کاربردی برای انجام تحلیل فرآیندکاوی برای ابزارهای پرکاربرد هستیم. در حال حاضر، محصول
              BIpm
              مان، افزونه تحلیلی برای فرآیندکاوی پایه در ابزار قدرتمند
              Power BI
              است که توسط شرکت مایکروسافت تایید شده و در سایت
              <a href="https://appsource.microsoft.com/en-us/product/power-bi-visuals/WA104381928?src=manufacturing&tab=Overview" target="_blank" rel="noopener noreferrer"> AppSource </a>
              انتشار یافته است.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div style={{ background: 'lightgray', paddingTop: 1, paddingBottom: 1 }}>
        <MDBContainer className="text-center my-3 iranSansFont" >
          <MDBRow>
            {/* <h2 className="text-right iranSansFont" style={{direction: 'rtl', marginLeft:'auto'}}>  </h2> */}
          </MDBRow>
          <br />
          <MDBRow className="justify-content-md-center">
            <MDBCol size="3" className="iranSansFont">
              <FaEnvelope style={{ width: 32, height: 32, color: 'white' }} />
              <p className="my-2">
                <a href="mailto:info@pkav.ir" className="active">info@pkav.ir</a>
              </p>

            </MDBCol>
            <MDBCol size="3">
              <img src={appSourceImage} alt="App Source" style={{ width: 32, height: 32 }} />
              <p className="my-2">
                <a href="https://appsource.microsoft.com/en-us/product/power-bi-visuals/WA104381928?src=manufacturing&tab=Overview" target="_blank" rel="noopener noreferrer" className="active">Microsoft AppSource</a>
              </p>
            </MDBCol>
            <MDBCol size="3">
              <img src={apartImage} alt="اپارت" style={{ width: 32, height: 32 }} />
              <p className="my-2">
                <a href="https://www.aparat.com/pkav.ir" target="_blank" rel="noopener noreferrer" className="active">کانال آپارت</a>
              </p>
            </MDBCol>
            <MDBCol size="3">
              {/* <img src={FaGlobe} alt="Process M" style={{width:32,height:32}}/> */}
              <FaGlobe style={{ width: 32, height: 32, color: 'white' }} />
              <p className="my-2">
                <a href="http://processm.com/" target="_blank" rel="noopener noreferrer" className="active">ProcessM</a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

    </div>
  }
}

export default HomePage;