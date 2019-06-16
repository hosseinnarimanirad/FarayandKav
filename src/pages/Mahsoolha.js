import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import Iframe from 'react-iframe'
 
import './MainPage.css';
import pmBiFig1 from '../assets/images/PmbiPage/pmbi.Fig1.jpg';
import pmBiFig2 from '../assets/images/PmbiPage/pmbi.Fig2.jpg';
import pmBiFig3 from '../assets/images/PmbiPage/pmbi.Fig3.jpg';
import pmBiFig4 from '../assets/images/PmbiPage/pmbi.Fig4.jpg';
import pmBiFig5 from '../assets/images/PmbiPage/pmbi.Fig5.jpg';
 
  

class MahsoolhaPage extends React.Component {
  
  render() {
    return (
      <div className="text-justify rightToLeft iranSansFont">
      <br/>
      <MDBContainer>
           
        <h2>
            نحوه بکارگیری BIpm در ابزار هوش تجاری Microsoft Power BI
        </h2>
        <p>
            
        فعال سازی افزونه در درون ابزار
-	برای فعال‌سازی این افزونه ابتدا می‌بایست ابتدا شرایط اجرای نمودن کدهای R را در ابزار Power BI مهیا کرد. برای این امر، دو گام زیر باید انجام شده باشد:
          </p>

          <p>
          1.	می بایست بسته کتابخانه ای اصلی R، CRAN R repository، (https://cran.r-project.org/bin/windows/base/)  بر روی سیستم نصب شده باشد.
          </p>

          <p>
          2.	در قسمت Options، در بخش R scripting، در فیلد Detected R home directories:، می بایست آدرس مجموعه نصب شده در بالا آورده شده باشد.
-	در ادامه می بایست BIpm به عنوان یک Custom visual در محیط Power BI صدا زده شود:              
          </p>

          <p>
          3.	در محیط طراحی برنامه، در بخش Visualizations که همان پلات انتخاب قالب‌های تحلیلی-نمایشی است، با کلیک بر روی ...، این امکان وجود دارد تا دیگر Custom visual همانند BIpm فراخوانی شوند. برای این کار دو روش وجود دارد. در روش نخست فایل BIpm که قبلا به صورت فایل با فرمت pbiviz از خود سایت AppSource دانلود شده باشد، با کلیک بر روی “Import from file”، آدرس دهی و بارگذاری می شود. در روش دوم، با کلیک بر روی گزینه “Import from marketplace” همان جا از درون شبکه با جستجوی عبارت BIpm از موارد موجود در بازار مایکروسافت، بارگذاری می‌شود.              
          </p>

          <p>
          4.	در زمان اولین باری که BIpm مورد استفاده در دستگاه قرار می‌گیرد، کتابخانه‌های تکمیلی زیر می‌بایست دانلود و نصب شود. برای این امر در پنجره باز شده می‌بایست گزینه Install زده شود.              
          </p>

        <img className="rounded mx-auto d-block" src={pmBiFig1} style={{width:'50%', minwidth:'300px'}}alt=""></img>
       
        
        <p>
            5.	پس از نصب موفق همگی کتابخانه‌های مورد نیاز، یک پیغام نصب موفق زیر نمایش داده می‌شود که با دیدن این پیام می‌توانید تحلیل با BIpm را شروع کنید:
        </p>

        <img className="rounded mx-auto d-block" src={pmBiFig2} style={{width:'50%', minwidth:'300px'}} alt=""></img>

        <p className="text-center" style={{fontSize:12}}>
        شکل ۲: شمای کلی از سه گونه تحلیل اصلی در فرآیند کاوی (بیانیه فرآیندکاوی ترجمه آصف پورمعصومی)
        </p>

          <h3>
          نحوه کار با افزونه BIpm در محیط Power BI
            </h3>

          <p>
          برای کار با این افزونه، مجموعه داده‌ای ورودی می بایست دارای سه فیلد اصلی در فرآیندکاوی شامل شناسه نمونه، نام فعالیت و زمان باشد. برای ساخت مدل فرآیندی از لاگ داده‌ای می‌بایست این اقلام در محل پیش بینی شده مقادیر فیلدها، قرار گیرد:

          </p>
          <p>
          1.	CaseId: این فیلد، نماینده شناسه یکتا برای رخداد یک نمونه در یک زمان توسط انجام فعالیت مشخص است که می بایست در جای خالی اول قرار گیرد. این فیلد می بایست به صورت عددی (numeric) باشد.
          </p>

          <p>
          2.	Activity: این فیلد، بیان کننده نام فعالیتی است که بر روی یک نمونه خاص در یک زمان مشخص، رخ داده است.
          </p>

          <p>
          3.	Timestamp: این فیلد نیز دربردارنده اطلاعات زمانی لازم برای رخداد مذکور است. مقدار این فیلد فقط کافیست ماهیتی زمانی با وجود تقدم و تاخر باشد. بنابر این علاوه بر پشتیبانی از مقادیر زمانی، مقادیر عددی نیز قابل استفاده است.
          </p>

<p>

نکته ای که اینجا پیرامون این مقادیر وجود دارد آن است که تمامی سه فیلد فوق باید به صورت "Don’t summarize" تنظیم شوند. برای این کار با Right Click بر روی مقدار فیلد گزینه مربوطه، می بایست این قابلیت انتخاب شود:

</p>
<img className="rounded mx-auto d-block" src={pmBiFig3} style={{width:'auto', minwidth:'300px'}} alt=""></img>


<p>
4.	Path threshold: این فیلد برای آن است که بتوان بر روی نمایش مدل فرآیندی کشف شده مدیریت داشت و تعداد مسیرها میان اجزای نودهای مدل فرآیندی را مدیریت کرد. این فیلد مقداری مابین 1-100 را می‌گیرد که به معنای میزان درصد نمایش مسیرهای موجود در مدل فرآیندی است. این فیلد اختیاری است و مقدار پیش فرض آن 80% است. برای ساخت این فیلد می‌توان از گزینه “what if the parameter” در بخش Modeling استفاده کرد.

</p>

<p>
5.	Activity threshold: این فیلد برای آن است که بتوان میزان فعالیت‌ها را به عنوان نودهای مدل فرآیندی کنترل کرد. این فیلد مقداری مابین 1-100 را می گیرد که به معنای میزان درصد نمایش نودهای مدل فرآیندی است. این فیلد اختیاری است و مقدار پیش فرض آن 80% است. برای ساخت این فیلد می توان از گزینه “what if the parameter” در بخش Modeling استفاده کرد.
</p>
 
         
              

          <img className="rounded mx-auto d-block" src={pmBiFig4} style={{width:'30%', minwidth:'300px'}} alt=""></img>

<p>
در نهایت مدل فرآیندی به دست آمده همانند آنچه در نمونه زیر است، به صورت یک گراف جهت دار با قابلیت تعاملی ساخته می شود: 
</p>

          <img className="rounded mx-auto d-block" src={pmBiFig5} style={{width:'80%', minwidth:'300px'}} alt=""></img>

 

           </MDBContainer> </div>);
    }
}


export default MahsoolhaPage;