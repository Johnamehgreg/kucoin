var mobileBtn = document.getElementById("mobileSign");
var emailBtn = document.getElementById("EmailSign");

var emailInput = document.getElementById("EmailSignInputI");
var emailLabel = document.getElementById("EmailSignInputL");


var mobileLabel = document.getElementById("MobileSignInputL");
var mobileInput = document.getElementById("MobileSignInputI");






const changeSign =(type) =>{
  
    if(type == 'mobile'){
        mobileBtn.classList.add("btn-active");
        emailBtn.classList.remove("btn-active");
        
        emailInput.classList.add("disactivate-input")
        emailLabel.classList.add("disactivate-input")

        mobileLabel.classList.remove("disactivate-input")
        mobileInput.classList.remove("disactivate-input")
       
    }

    if(type == 'email'){
        mobileBtn.classList.remove("btn-active");
        emailBtn.classList.add("btn-active");

        emailInput.classList.remove("disactivate-input")
        emailLabel.classList.remove("disactivate-input")

        mobileLabel.classList.add("disactivate-input")
        mobileInput.classList.add("disactivate-input")
    }
   
}