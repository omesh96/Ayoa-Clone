let arr=JSON.parse(localStorage.getItem("signup"))||[];

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        customerEmail:document.querySelector("#email").value,
        customerPassword:document.querySelector("#password").value,
    }
    if(checksignin(obj.customerEmail,obj.customerPassword)==false)
    {
        alert("Wrong email or password !!")
    }
    else
    {
localStorage.setItem("login",JSON.stringify(arr));
alert("Login successfully !!")

    }
    document.querySelector("form").reset();
})

function checksignin(customerEmail,customerPassword)
{
    let filter=arr.filter(function(elem){
        return elem.customerEmail==customerEmail && elem.customerPassword==customerPassword;
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
document.querySelector("#forgetPass").addEventListener("click",function(){
    forgetPaswordfunc()
})
let forgetPaswordfunc=()=>{
    alert("Please update the Password!!")
    // let updatePass=JSON.parse(localStorage.getItem("login"));
    // let login=document.querySelector("#login");


}

    