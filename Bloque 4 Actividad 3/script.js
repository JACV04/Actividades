const form = document.getElementById('travelForm');
const alojamientoInput = document.getElementById('alojamiento');
const alimentacionInput = document.getElementById('alimentacion');
const entretenimientoInput = document.getElementById('entretenimiento');
const resultadoDiv = document.getElementById('resultado');
const totalSpan = document.getElementById('total');

const errorAlojamiento = document.getElementById('errorAlojamiento');
const errorAlimentacion = document.getElementById('errorAlimentacion');
const errorEntretenimiento = document.getElementById('errorEntretenimiento');

function validarCampo(input, errorElement) {
    const valor = parseFloat(input.value);
    
    if (isNaN(valor) || valor < 0) {
        errorElement.style.display = 'block';
        input.style.borderColor = '#e74c3c';
        return false;
    } else {
        errorElement.style.display = 'none';
        input.style.borderColor = '#bdc3c7';
        return true;
    }
}

alojamientoInput.addEventListener('blur', function() {
    validarCampo(alojamientoInput, errorAlojamiento);
});

alimentacionInput.addEventListener('blur', function() {
    validarCampo(alimentacionInput, errorAlimentacion);
});

entretenimientoInput.addEventListener('blur', function() {
    validarCampo(entretenimientoInput, errorEntretenimiento);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const alojamientoValido = validarCampo(alojamientoInput, errorAlojamiento);
    const alimentacionValido = validarCampo(alimentacionInput, errorAlimentacion);
    const entretenimientoValido = validarCampo(entretenimientoInput, errorEntretenimiento);
    

    if (alojamientoValido && alimentacionValido && entretenimientoValido) {
        const alojamiento = parseFloat(alojamientoInput.value);
        const alimentacion = parseFloat(alimentacionInput.value);
        const entretenimiento = parseFloat(entretenimientoInput.value);
        
        const total = alojamiento + alimentacion + entretenimiento;
        
        totalSpan.textContent = total.toFixed(2);
        resultadoDiv.style.display = 'block';
    }
});