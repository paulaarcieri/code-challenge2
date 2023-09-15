let enviar = document.getElementById("enviar");

document.addEventListener("DOMContentLoaded", function() {
    enviar.addEventListener("click", function() {
        let nombre = document.getElementById("name");
        let apellido = document.getElementById("apellido");
        let fecha = document.getElementById("fecha");

  fetch('https://jsonplaceholder.typicode.com/users', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    nombre: nombre.value,
    apellido: apellido.value,
    fecha: fecha.value,
  })
})
.then(response => response.json())
.then(data => {
    Swal.fire(
        '¡Un éxito!',
        'Los datos se han enviado correctamente.',
        'success'
      )
      nombre.value = '';
      apellido.value = '';
      fecha.value = '';
    });
})
})