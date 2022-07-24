
 import {navbar_avnish} from "../component_avnish/navbar_avnish.js"

 document.getElementById("navbar").innerHTML=navbar_avnish()

 document.getElementById("submit").addEventListener("click",mysubmit)

 function mysubmit(){
   let box=document.getElementById("bfr")
    let avtar=document.createElement("img")
    avtar.src="https://media4.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
box.append(avtar)

let textbox=document.createElement("div")
 
 let id=setTimeout(function(){
    document.getElementById("submittext").innerHTML=null;
    textbox.setAttribute("id","txtbox")
  let text=document.createElement("p")
  text.innerText="Thank you for your message. It has been sent"
  textbox.append(text)
  document.getElementById("submittext").append(textbox)
  box.innerHTML=null;
 
 },3000)
 
 }

 import {footer_component} from "/safe-bridge-5506/footer_component/footer_component.js"
 document.getElementById("footer").innerHTML=footer_component()

 import { anything } from "../footer_component/footer_component.js"

 document.getElementById("anythings").innerHTML=anything()
