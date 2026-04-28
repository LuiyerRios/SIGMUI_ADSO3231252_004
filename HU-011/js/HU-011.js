/* * Archivo: HU-011.js
 * Proyecto: Tech Parking / SIGMUI
 * Descripción: Manejo del formulario de ayuda y envío a n8n vía Webhook
 */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('help-form');
    const description = document.getElementById('description');
    const counter = document.getElementById('current');
    
    // Configura tu URL de Webhook de n8n aquí
    const WEBHOOK_URL = "TU_URL_DE_WEBHOOK_AQUI";

    // 1. Contador de caracteres en tiempo real (UX mejorada)
    description.addEventListener('input', () => {
        counter.textContent = description.value.length;
    });

    // 2. Manejo del envío
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita recarga de página

        // Captura de datos
        const payload = {
            firstName: document.getElementById('firstname').value.trim(),
            lastName: document.getElementById('lastname').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            description: description.value.trim(),
            timestamp: new Date().toISOString() // Útil para n8n saber cuándo llegó
        };

        // Estado visual: Deshabilitar botón para evitar envíos dobles
        const btn = form.querySelector('.send-btn');
        btn.disabled = true;
        btn.textContent = "Sending...";

        try {
            // Envío a n8n
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Message sent successfully! Our agents will contact you soon.");
                form.reset();
                counter.textContent = "0";
            } else {
                throw new Error("Server response was not ok");
            }
        } catch (error) {
            console.error("Error connecting to n8n:", error);
            alert("There was an error sending your message. Please try again later.");
        } finally {
            // Restaurar botón
            btn.disabled = false;
            btn.textContent = "Send Message";
        }
    });
});