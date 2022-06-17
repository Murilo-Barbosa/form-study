const form = document.getElementById('form')
const userName = document.getElementById('user-name')
const userEmail = document.getElementById('user-email')
const userPassword = document.getElementById('user-password')
const passwordConfirm = document.getElementById('confirm-password')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs()

});

function checkInputs(){

    const userNameValue = userName.value;
    const userEmailValue = userEmail.value;
    const userPasswordValue = userPassword.value;
    const passwordConfirmValue = passwordConfirm.value;

    if (userNameValue === "") {

        setErrorFor(userName, 'O nome de usuario é obrigatório.')
    } else {
        setSuccessFor(userName);
    }

}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function setErrorFor(input, message){

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error'

}