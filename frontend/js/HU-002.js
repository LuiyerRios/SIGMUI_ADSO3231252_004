/**
 * HU-002: Lógica de Autenticación de Usuario
 * Team_004 - SIGMUI 2026
 * * Este módulo gestiona el flujo de inicio de sesión y validación de campos.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. INPUTS: Referencias a elementos del DOM
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    // 2. DISPARADOR (Trigger): Escucha el evento de envío del formulario
    loginForm.addEventListener('submit', handleLogin);
});
/**
 * Función manejadora del evento de Login
 * Actúa como el "Nodo Principal" del flujo.
 */
function handleLogin(event) {
    event.preventDefault(); // Evita el recargado nativo de la página
    // Captura de valores actuales
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    // 3. PROCESO (Reglas de Validación)
    if (!email) {
        alert('Error: Email is required');
        return;
    }
    if (!password) {
        alert('Error: Password is required');
        return;
    }
    if (!validateEmail(email)) {
        alert('Error: Please enter a valid email address');
        return;
    }
    // 4. OUTPUT (Resultado exitoso)
    console.log('Login successful with:', email);
    alert('Login successful');
    // Limpieza de datos (Reset del nodo)
    document.getElementById('loginForm').reset();
}
/**
 * Función de Utilidad: Validación de Formato
 * Usa Regex para verificar la estructura del correo.
 * @param {string} emailValue 
 * @returns {boolean}
 */
function validateEmail(emailValue) {
    // Expresión regular para formato email estándar
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
}