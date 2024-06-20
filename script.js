document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado correctamente.');
    event.target.reset();
});