// Form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("miFormulario");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const cedula = document.getElementById("cedula").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;
        const direccion = document.getElementById("direccion").value;
        const empresa = document.getElementById("empresa").value;

        // Verificar si se aceptaron los términos y condiciones
        const acepto = document.getElementById("acepto").checked;

        /* Imprimir los valores en la consola
        console.log("Nombre:", nombre);
        console.log("Apellido:", apellido);
        console.log("Cédula:", cedula);
        console.log("Teléfono:", telefono);
        console.log("Email:", email);
        console.log("Dirección Domiciliaria:", direccion);
        console.log("Términos y Condiciones Aceptados:", acepto);
        console.log("Empresa (Opcional):", empresa);*/
    });
});
