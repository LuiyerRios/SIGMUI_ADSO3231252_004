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
    if(!validateEmail(email.value)){/*Esta funcion valida el formato del email */
        alert('Please enter a valid email address');
        return;
    }
    alert('Login successful');
    form.reset();/*Esto limpia el formulario despues de enviar */
});
/*Esta funcion valida el formato del email usando una expresion regular */
function validateEmail(emailValue){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;/*Esta expresion regular verifica que el email tenga un formato correcto, con caracteres antes y despues del @ y un dominio valido */

    return regex.test(emailValue);

}
