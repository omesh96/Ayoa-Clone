let forgetpass=JSON.parse(localStorage.getItem("signup"));
// let forgetpasslogin=JSON.parse(localStorage.getItem("login"))

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        customerName:document.querySelector("#name").value,
        customerEmail:document.querySelector("#email").value,
        customerPassword:document.querySelector("#password").value,
    }
    if(checksignin(obj.customerEmail)==false)
    {
        alert("Wrong email !!")
    }
    else
    {
        // forgetpasslogin=[];
        forgetpass=[];
        // forgetpasslogin.push(obj);
        forgetpass.push(obj);
localStorage.setItem("signup",JSON.stringify(forgetpass));
// localStorage.setItem("login",JSON.stringify(forgetpasslogin));
alert("Password reset successfully !!")
window.location.href="login.html";
    }
    document.querySelector("form").reset();
})
function checksignin(customerEmail){
    let filter=forgetpass.filter((elem)=>{
        return elem.customerEmail===customerEmail;
    })
    if(filter.length>0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
