import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import Iframe from 'react-iframe'
 
import './MainPage.css';
import fkcFig1 from '../assets/images/FkcPage/PageFKC.Fig1.png';
import fkcFig2 from '../assets/images/FkcPage/PageFKC.Fig2.png'; 
import fkcFig3 from '../assets/images/FkcPage/PageFKC.Fig3.jpg'; 
// import  './App.css';
 
import {FaEnvelope} from 'react-icons/fa'
import {FaGlobe} from 'react-icons/fa'

class FarayandKaviChist extends React.Component {
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
      <div className="text-justify rightToLeft iranSansFont">
      <br/>
      <MDBContainer>
           
        <h3>
              فرآیندکاوی چیست؟
        </h3>
        <p>
            
          
فرآیندکاوی یک حوزه نوظهور میان رشته ای در حوزه علم داده و مدیریت فرآیندهای کسب و کار است. از یک سو شکاف میان مدیریت فرآیندهای کسب و کار و مدیریت جریان های کاری را پوشش می دهد و از طرف دیگر بکارگیرنده انواع روش‌های داده کاوی، هوش تجاری و یادگیری ماشین است. 
 
 


          </p>
        <img className="rounded mx-auto d-block" src={fkcFig1} style={{maxWidth:'70%'}} alt="شمای کلی حوزه بین رشته ای فرآیندکاوی"></img>
        <p className="text-center" style={{fontSize:12}}>
            شکل ۱: شمای کلی حوزه بین رشته ای فرآیندکاوی 
            (
              <a href="https://www.researchgate.net/publication/283636375_Processes_Meet_Big_Data_Connecting_Data" target="_blank" rel="noopener noreferrer">لینک</a>
              
            )
        </p>
        <p>
            در این میان سه گونه تحلیل اصلی در فرآیندکاوی مطرح است: 1) کشف فرآیند، 2) کنترل هم‌نوایی و 3) بهبود.
        </p>

        <img className="rounded mx-auto d-block" src={fkcFig2} style={{maxWidth:'70%'}} alt="شکل ۲: شمای کلی از سه گونه تحلیل اصلی در فرآیند کاوی (بیانیه فرآیندکاوی ترجمه آصف پورمعصومی)"></img>
        <p className="text-center" style={{fontSize:12}}>
        شکل ۲: شمای کلی از سه گونه تحلیل اصلی در فرآیند کاوی (بیانیه فرآیندکاوی ترجمه آصف پورمعصومی)
        </p>

          <h3>
          کشف فرآیند    
          </h3>
          <p>
          گونه اول، کشف فرآیند است که در این نوع از تحلیل، به دنبال شناسایی مدل فرآیندی است هستیم که در واقعیت اجرا رخ داده است و در لاگ داده ای وجود دارد. به عبارت دیگر داده های ثبت شده در لاگ بازگو کننده یک مدل فرآیندی است که واقعیت سامانه مدیریت اجرای فرآیند رخ داده است؛ تکنیک های کشف فرآیند به دنبال کشف این مدل فرآیندی است.

کنترل هم‌نوایی (چک کردن انطباق)
گونه دوم، کنترل هم‌نوایی است. در این نوع از تحلیل به دنبال ارزیابی و بررسی این موضوع هستیم که آیا وضعیت اجرای داده های فرآیندی مبتنی بر یک مدل فرآیند تعریف شده از قبل هست؟ به عبارت دیگر روش های چک کردن انطباق به دنبال شناسایی موارد انحراف داده های ثبت شده فرآیندی از یک مدل استاندارد فرآیند است.

          </p>

          <h3>بهبود فرآیند</h3>
          <p>
              



گونه سوم، بهبود فرآیند است. در این روش با استفاده از دستاوردهای دو گونه تحلیل قبلی و اطلاعات زمینه ای، تلاش در جهت بهبود فرآیندهای سازمان است.

نقطه آغازین شروع فرآیندکاوی، تهیه و ساخت داده فرآیندی در قالب لاگ رخدادی است. این قالب موضوع پیچیده ای نیست، برای ساخت این قالب اقلام داده‌ای شامل زمان رخداد، نام فعالیت انجام شده رخداد و شماره شناسه نمونه، ضروری و دیگر اقلام اختیاری است. البته هر چه قدر اقلام تکمیلی بیشتری در داده همچون نام فرد انجام دهنده فعالیت، نوع گروه مشتری، هزینه و... موجود باشد، تحیلی غنی‌تر و کامل‌تری می‌توان بدست آورد. 
 


          </p>

          <img className="rounded mx-auto d-block" src={fkcFig3} style={{maxWidth:'70%'}} alt="شکل ۳: فرآیندکاوی، ساخت قالب لاگ رخداد فرآیندی جهت تحلیل فرآیندکاوی"></img>
        <p className="text-center" style={{fontSize:12}}>
            شکل ۳: فرآیندکاوی، ساخت قالب لاگ رخداد فرآیندی جهت تحلیل فرآیندکاوی
        </p>

           </MDBContainer> </div>);
    }
}


export default FarayandKaviChist;