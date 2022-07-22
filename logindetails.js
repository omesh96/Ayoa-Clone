let userdetails;

let userDetails=()=>{
     userdetails=JSON.parse(localStorage.getItem("login"))
    let container=document.querySelector("#container")
   
              
        userdetails.forEach((elem)=>{
         
            
                let name=document.createElement("p")
                name.innerText=`Hello, ${elem.customerName}`;
            
       
        container.append(name)
    })
}
userDetails();

document.querySelector("#logout").addEventListener("click",function(){
    gotohomepage()
})
function gotohomepage(){
        userdetails=null;
    localStorage.setItem("login",JSON.stringify(userdetails));
    alert("Log out successfully");
    window.location.href="index.html";
}


 import {footer_component} from "./footer_component/footer_component.js"

 document.getElementById("footer").innerHTML=footer_component()