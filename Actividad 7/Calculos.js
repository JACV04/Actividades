// Función para navegar entre secciones
function mostrarSeccion(seccion) {
    document.getElementById('principal').style.display = 'none';
    document.getElementById('conversion').style.display = 'none';
    document.getElementById('empresas').style.display = 'none';
    document.getElementById(seccion).style.display = 'block';
}

// Funciones para conversión de unidades
function convertir() {
    const valor = parseFloat(document.getElementById('valor').value);
    const origen = document.getElementById('unidadOrigen').value;
    const destino = document.getElementById('unidadDestino').value;
    let resultado;
    
    // Convertir todo a metros primero
    let enMetros;
    if (origen === 'mm') enMetros = valor / 1000;
    else if (origen === 'cm') enMetros = valor / 100;
    else enMetros = valor;
    
    // Convertir de metros a destino
    if (destino === 'mm') resultado = enMetros * 1000;
    else if (destino === 'cm') resultado = enMetros * 100;
    else resultado = enMetros;
    
    document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)} ${destino}`;
}

// Funciones para gestión de empresas
let empresas = JSON.parse(localStorage.getItem('empresas')) || [];

function mostrarEmpresas() {
    const lista = document.getElementById('listaEmpresas');
    lista.innerHTML = '';
    empresas.forEach((empresa, index) => {
        const li = document.createElement('li');
        li.textContent = `Folio: ${empresa.folio}, Nombre: ${empresa.nombre}, Domicilio: ${empresa.domicilio}`;
        lista.appendChild(li);
    });
}

function agregarEmpresa() {
    const folio = document.getElementById('folio').value;
    const nombre = document.getElementById('nombre').value;
    const domicilio = document.getElementById('domicilio').value;
    
    if (folio && nombre && domicilio) {
        empresas.push({ folio, nombre, domicilio });
        localStorage.setItem('empresas', JSON.stringify(empresas));
        mostrarEmpresas();
        document.getElementById('empresaForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Mostrar empresas al cargar la página
mostrarEmpresas();