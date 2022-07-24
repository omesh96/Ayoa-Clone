
 import {header} from "./header.js"

 document.querySelector("header").innerHTML=header()

 import {navbar_avnish} from "./component_avnish/navbar_avnish.js"

 document.getElementById("navbar").innerHTML=navbar_avnish()

 import { footer_component } from "./footer_component/footer_component.js"

 document.getElementById("footer").innerHTML=footer_component()

   let x=document.getElementsByClassName("logodiv")
   x[0].addEventListener("click",twiter)
   x[1].addEventListener("click",fb)
   x[2].addEventListener("click",ln)

   function twiter(){
    window.location.href="https://twitter.com/login"
   }
   function fb(){
    window.location.href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Ce%7Cfb%20login%20page%7C&placement=&creative=589460569900&keyword=fb%20login%20page&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-348885504691%26loc_physical_ms%3D1007824%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwuO6WBhDLARIsAIdeyDIws2HwW_1PskO0NBDCQe3X-VDzVzm4Y2e-vYwO-HuphpzR2C2FOtYaAmTZEALw_wcB"
   }
   function ln(){
    window.location.href="https://www.linkedin.com/login/"
   }