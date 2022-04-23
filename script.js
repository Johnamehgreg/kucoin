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

const alertDialog = document.getElementById('alert-dialog')
const loadingModal = document.getElementById('modal-l')
const successModal = document.getElementById('modal-s')
const errorModal = document.getElementById('modal-e')


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
    openErrorModal()
    // input.innerHTML = '.iti__flag-containe{display: none}'
    showDialogAlert()
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
    alertDialog.style.top= '70px'

    setTimeout(()=>{
        alertDialog.style.top= '-100px'

    }, 3000)
}

const hideShowAlertDialog = () =>{
    alertDialog.style.top= '-100px'

}

const openLoadingModal = () => {
    loadingModal.style.top= '0px'
    loadingModal.style.zIndex= 100

}
const closeLoadingModal = () => {
    loadingModal.style.top= '-1000px'
    loadingModal.style.zIndex= -4
}
const openSuccessModal = () => {
    successModal.style.top= '0px'
    successModal.style.zIndex= 100

}
const closeSuccessModal = () => {
    successModal.style.top= '-1000px'
    successModal.style.zIndex= -4
}
const openErrorModal = () => {
    errorModal.style.top= '0px'
    errorModal.style.zIndex= 100

}
const closeErrorModal = () => {
    errorModal.style.top= '-1000px'
    errorModal.style.zIndex= -4
}