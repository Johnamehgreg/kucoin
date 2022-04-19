var mobileBtn = document.getElementById("mobileSign");
var emailBtn = document.getElementById("EmailSign");


const changeSign =(type) =>{
  
    if(type == 'mobile'){
        mobileBtn.classList.add("btn-active");
        emailBtn.classList.remove("btn-active");
    }

    if(type == 'email'){
        mobileBtn.classList.remove("btn-active");
        emailBtn.classList.add("btn-active");
    }
   
}