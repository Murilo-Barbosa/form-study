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

    if (userEmailValue === '') {

        setErrorFor(userEmail, 'O Email é obrigatório...')
    } else if(!checkEmail(userEmailValue)){

        setErrorFor(userEmail, 'Por favor insira um Email valido...')
    }
    
    else {

        setSuccessFor(userEmail)
    }

    if(userPasswordValue === '') {

        setErrorFor(userPassword, 'A senha é obrigatória...')
    } else if(userPasswordValue.length < 7) {

        setErrorFor(userPassword, 'A senha tem que ter pelo menos 7 caracteres...')
    } else {
        setSuccessFor(userPassword)
    }

    if (passwordConfirmValue === '') {

        setErrorFor(passwordConfirm, 'A confirmação de senha é obrigatória...')
    } else if(passwordConfirmValue !== userPasswordValue) {
        setErrorFor(passwordConfirm, 'As senhas não são iguais...')
    } else {

        setSuccessFor(passwordConfirm)
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

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }