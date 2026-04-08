/*Creo variables para las condiciones */
const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(event){
    event.preventDefault();/*Esto previene que el form se recargue automaticamente */
    /*Validaciones para el email y password*/
    if(email.value.trim() === ''){
        alert('Email is required');
        return
    }
    if(password.value.trim() === ''){
        alert('Password is required');
        return
    }
    if(!validateEmail(email.value)){
        alert('Please enter a valid email address');
        return;
    }
    alert('Login successful');
    form.reset();/*Esto limpia el formulario despues de enviar */
});
