
 import {navbar_avnish} from "../component_avnish/navbar_avnish.js"

 document.getElementById("navbar").innerHTML=navbar_avnish()
 

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

  import {footer_component} from "../footer_component/footer_component.js"

  document.getElementById("footer").innerHTML=footer_component()