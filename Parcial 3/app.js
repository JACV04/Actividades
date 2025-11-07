const addForm = document.getElementById("form-validation");
addForm.addEventListener("submit", (e) => {
    if (addForm.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        addForm.classList.add('was-validated');
        return false;
    } else {
        e.preventDefault(); // Prevenir envío real del formulario para este ejemplo
        // Mostrar la sección de selección de libros después del registro
        document.getElementById("seleccion-libros").style.display = "block";
        alert("Registro exitoso. Ahora selecciona un libro.");
    }
});

// Función para calcular el precio con IVA mexicano
document.getElementById("calcular").addEventListener("click", () => {
    const precio = parseFloat(document.getElementById("precio").value);
    const iva = parseFloat(document.getElementById("iva").value);
    
    if (!isNaN(precio) && precio >= 0) {
        const total = precio + (precio * iva);
        document.getElementById("resultado").value = "$" + total.toFixed(2) + " MXN";
    } else {
        alert("Ingresa un precio válido.");
    }
});

// Rellenar automáticamente el precio cuando se selecciona un libro
document.getElementById("libro").addEventListener("change", function() {
    if (this.value) {
        document.getElementById("precio").value = this.value;
    }
});