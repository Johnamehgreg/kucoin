var mobileBtn = document.getElementById("mobileSign");
var emailBtn = document.getElementById("EmailSign");

    var input = document.querySelector(".iti__flag-containe");


var emailInput = document.getElementById("EmailSignInputI");
var emailLabel = document.getElementById("EmailSignInputL");


var mobileLabel = document.getElementById("MobileSignInputL");
var mobileInput = document.getElementById("MobileSignInputI");

const inputElement = document.getElementById('inputButton')

const passSee = document.getElementById('pass-see')
const passHide = document.getElementById('pass-hide')
const passInput = document.getElementById('passwordInput')


const passwordSecure = (type) =>{
    if(!type){
       passSee.style.display = "block"
       passHide.style.display = "none"
       passInput.type = 'text'
    }else{
        passSee.style.display = "none"
        passHide.style.display = "block"
        passInput.type = 'password'

    }
}







const changeSign =(type) =>{
    // input.innerHTML = '.iti__flag-containe{display: none}'
    if(type == 'mobile'){
        mobileBtn.classList.add("btn-active");
        emailBtn.classList.remove("btn-active");
        
        emailInput.classList.add("disactivate-input")
        emailLabel.innerText ='Phone Number'

        mobileLabel.classList.remove("disactivate-input")
        mobileInput.classList.remove("disactivate-input")
       
    }

    if(type == 'email'){
        mobileBtn.classList.remove("btn-active");
        emailBtn.classList.add("btn-active");

        emailInput.classList.remove("disactivate-input")
        emailLabel.innerText ='Email/Sub-Account'

        mobileLabel.classList.add("disactivate-input")
        mobileInput.classList.add("disactivate-input")
    }
   
}



inputElement.onclick = (e) => {
	e.preventDefault()
}



const showDialogAlert = () => {
    
}