// Obtener referencia al formulario
const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('form-response');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener valores de los campos
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const contactMethod = document.querySelector('input[name="contactMethod"]:checked');

  // Validar campos
  if (name && email && phone && message && contactMethod) {
    responseDiv.textContent = `¡Gracias, ${name}! Tu mensaje ha sido enviado por ${contactMethod.value}.`;
    responseDiv.classList.remove('text-danger');
    responseDiv.classList.add('text-success');
    form.reset();
  } else {
    responseDiv.textContent = 'Por favor, completa todos los campos y selecciona un método de contacto.';
    responseDiv.classList.remove('text-success');
    responseDiv.classList.add('text-danger');
  }
});
