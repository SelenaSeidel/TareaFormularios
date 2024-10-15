document.addEventListener('DOMContentLoaded', function() {
    let usuarios=[]
    let productos=[]
    
    
    function agregarUsuario() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const edad = document.getElementById('edad').value;
        const usuario = {
            nombre: nombre,
            email: email,
            edad: edad,
        }
        //seguir hay que usar los metodos nuevos
    }
    // Asignar los eventos a los botones de envío
    document.querySelectorAll('#submitComment').forEach((button, index) => {
    if (index === 0) {
    button.addEventListener('click', agregarUsuario);
    } else {
    button.addEventListener('click', agregarProducto);
    }
});
});