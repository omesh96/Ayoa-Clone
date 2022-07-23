  

   import {navbar_avnish} from "../component_avnish/navbar_avnish.js"

   document.getElementById("navbar").innerHTML=navbar_avnish()

   
    let slider=document.getElementById("slider")
    let selector=document.getElementById("selector")
    let selectvalue=document.getElementById("selectvalue")
    let progressbar=document.getElementById("progressbar")

      selectvalue.innerHTML=slider.value;
    slider.oninput=function(){
        selector.style.left=this.value + "%";
        selectvalue.innerHTML=this.value + " user";
     
        progressbar.style.width=this.value+ "%"

      
       // console.log(this.value);
       changevalue(this.value)
    }

    function changevalue(user){
   console.log(user);
   let p=document.getElementById("pricevalue")
   let pvbox2=document.getElementById("pricevalue2")
   let pvbox3=document.getElementById("pricevalue3")

   let p1=document.createElement("p")
   let discount=document.createElement("p")
   let p2=document.createElement("p")
   let discount2=document.createElement("p")

   let p3=document.createElement("p")
   let discount3=document.createElement("p")

        let offervalue1=491.67

        let offervalue2=620

        let offervalue3=810;

        if(user>-1 && user<5){
            p1.innerText=`₹ ${offervalue1}`
            discount.innerText="0 % Discount"

            p2.innerText=`₹ ${offervalue2}`
            discount2.innerText="0 % Discount"

            p3.innerText=`₹ ${offervalue3}`
            discount3.innerText="0 % Discount"
        }
        if(user>4 && user<10){
            offervalue1=(offervalue1*0.9).toFixed(2)
          p1.innerText=`₹ ${offervalue1}`
          discount.innerText="10 % Discount"
         
          offervalue2=(offervalue2*0.9).toFixed(2)
          p2.innerText=`₹ ${offervalue2}`
          discount2.innerText="10 % Discount"

          offervalue3=(offervalue3*0.9).toFixed(2)
          p3.innerText=`₹ ${offervalue3}`
          discount3.innerText="10 % Discount"
           
        }
        if(user>9 && user<15){
            offervalue1=(offervalue1*0.875).toFixed(2)
          p1.innerText=`₹ ${offervalue1}`
          discount.innerText="12.5 % Discount"
           

          offervalue2=(offervalue2*0.875).toFixed(2)
          p2.innerText=`₹ ${offervalue2}`
          discount2.innerText="12.5 % Discount"

          offervalue3=(offervalue3*0.875).toFixed(2)
          p3.innerText=`₹ ${offervalue3}`
          discount3.innerText="12.5 % Discount"
        }
        if(user>14 && user<20){
            offervalue1=(offervalue1*0.8625).toFixed(2)
          p1.innerText=`₹ ${offervalue1}`
          discount.innerText="13.75 % Discount"
           

          offervalue2=(offervalue2*0.8625).toFixed(2)
          p2.innerText=`₹ ${offervalue2}`
          discount2.innerText="13.75 % Discount"

          offervalue3=(offervalue3*0.8625).toFixed(2)
          p3.innerText=`₹ ${offervalue3}`
          discount3.innerText="13.75 % Discount"
        }
        if(user>19 && user<25){
            offervalue1=(offervalue1*0.85).toFixed(2)
          p1.innerText=`₹ ${offervalue1}`
          discount.innerText="15 % Discount"
            

          offervalue2=(offervalue2*0.85).toFixed(2)
          p2.innerText=`₹ ${offervalue2}`
          discount2.innerText="15 % Discount"

          offervalue3=(offervalue3*0.85).toFixed(2)
          p3.innerText=`₹ ${offervalue3}`
          discount3.innerText="15 % Discount"
        }
        if(user>24 && user<30){
            offervalue1=(offervalue1*0.84375).toFixed(2)
          p1.innerText=`₹ ${offervalue1}`
          discount.innerText="15.625 % Discount"
            

          offervalue2=(offervalue2*0.84375).toFixed(2)
          p2.innerText=`₹ ${offervalue2}`
          discount2.innerText="15.625 % Discount"

          offervalue3=(offervalue3*0.84375).toFixed(2)
          p3.innerText=`₹ ${offervalue3}`
          discount3.innerText="15.625 % Discount"
        }
        if(user>29 && user<40){
            offervalue1=(offervalue1*0.8375).toFixed(2)
          p1.innerText=`₹ ${offervalue1}`
          discount.innerText="16.25 % Discount"
           

          offervalue2=(offervalue2*0.8375).toFixed(2)
          p2.innerText=`₹ ${offervalue2}`
          discount2.innerText="16.25 % Discount"

          offervalue3=(offervalue3*0.8375).toFixed(2)
          p3.innerText=`₹ ${offervalue3}`
          discount3.innerText="16.25 % Discount"
        }
        if(user>39 && user<50){
            offervalue1=(offervalue1*0.825).toFixed(2)
          p1.innerText=`₹ ${offervalue1}`
          discount.innerText="17.5 % Discount"
           

          offervalue2=(offervalue2*0.825).toFixed(2)
          p2.innerText=`₹ ${offervalue2}`
          discount2.innerText="17.5 % Discount"

          offervalue3=(offervalue3*0.825).toFixed(2)
          p3.innerText=`₹ ${offervalue3}`
          discount3.innerText="17.5 % Discount"
        }
        if(user==50){
            offervalue1=(offervalue1*0.8125).toFixed(2)
          p1.innerText=`₹ ${offervalue1}`
          discount.innerText="18.5 % Discount"
           

          offervalue2=(offervalue2*0.8125).toFixed(2)
          p2.innerText=`₹ ${offervalue2}`
          discount2.innerText="18.5 % Discount"

          offervalue3=(offervalue2*0.8125).toFixed(2)
          p3.innerText=`₹ ${offervalue3}`
          discount3.innerText="18.5 % Discount"
        }
        if(user>50){
            p.innerHTML=null;
            document.getElementById("permonth").innerText=null;
           discount.setAttribute("class","discountbox")
            discount.style.backgroundColor="#fbfbfb"

            discount2.setAttribute("class","discountbox")
            discount2.style.backgroundColor="#fbfbfb"

            discount3.setAttribute("class","discountbox")
            discount3.style.backgroundColor="#fbfbfb"

            let large=document.createElement("h2")
            large.style.color="black"
            large.innerText="Larger team?"

            let contact=document.createElement("p")
            contact.style.color="blue"
            contact.innerText="Contact Us"

            let bet=document.createElement("p")
            bet.style.color="#d39c60"
            bet.innerText="For a bespoke quote"



            let large2=document.createElement("h2")
            large2.style.color="black"
            large2.innerText="Larger team?"

            let contact2=document.createElement("p")
            contact2.style.color="blue"
            contact2.innerText="Contact Us"

            let bet2=document.createElement("p")
            bet2.style.color="#d39c60"
            bet2.innerText="For a bespoke quote"


            let large3=document.createElement("h2")
            large3.style.color="black"
            large3.innerText="Larger team?"

            let contact3=document.createElement("p")
            contact3.style.color="blue"
            contact3.innerText="Contact Us"

            let bet3=document.createElement("p")
            bet3.style.color="#d39c60"
            bet3.innerText="For a bespoke quote"


            discount.append(large,contact,bet)
            discount2.append(large2,contact2,bet2)
            discount3.append(large3,contact3,bet3)
        }
        p.innerHTML=null;
        pvbox2.innerHTML=null
        pvbox3.innerHTML=null
        p.append(p1,discount)
        pvbox2.append(p2,discount2)
        pvbox3.append(p3,discount3)
    }


    let downloadarr=JSON.parse(localStorage.getItem("login")) || [];
   let x=document.getElementsByClassName("launch")
  x[0].addEventListener("click",mylaunch)
  x[1].addEventListener("click",mylaunch)
  x[2].addEventListener("click",mylaunch)
  x[3].addEventListener("click",mylaunch)
  x[4].addEventListener("click",mylaunch)
  x[5].addEventListener("click",mylaunch)

 function mylaunch(){
 if(downloadarr.length>0){
    window.location.href="https://app.ayoa.com/"
 } else{
    alert("Login first !")
    window.location.href="../login.html"
 }
 }



  document.getElementById("alterbtn").addEventListener("click",tosignup)

  function tosignup(){
    event.preventDefault()
    window.location.href="../login.html"
  }

  import {footer_component} from "../footer_component/footer_component.js"

  document.getElementById("footer").innerHTML=footer_component()

  import { anything } from "../footer_component/footer_component.js"

  document.getElementById("anything").innerHTML=anything()