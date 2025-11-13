$(document).ready(function() {
    // Código que se ejecuta cuando el documento está completamente cargado

    // 1. Manejar el clic en el botón "Añadir"
    $("#anadirCompra").click(function(){
        // a) Capturamos el texto del input
        var nuevoTexto = $("#compra").val();
        
        // **IMPORTANTE**: Solo añade si hay texto
        if (nuevoTexto.trim() === "") {
            alert("Por favor, introduce un artículo.");
            return;
        }

        // b) Creamos un nuevo elemento <li>
        var nuevoLi = document.createElement("li");
        $(nuevoLi).html(nuevoTexto);
        
        // c) Lo añadimos a la lista
        $("#listaCompra").append(nuevoLi);
        
        $("#compra").val("");
        
        // e) Asignamos los eventos de clic y doble clic al nuevo <li>
        $(nuevoLi).on({ 
            click:function(){
                $(this).css({
                    "text-decoration":"line-through",
                    "font-style":"italic"
                })
            },
            // Comportamiento al hacer doble clic: borrar el elemento
            dblclick: function(){ 
                $(this).remove(); 
            }
        })
    })

    // 2. Funcionalidad del Botón "Resetear Lista"
    // Cuando se pulsa el botón, se borran TODOS los elementos <li> de la página
    $("#reset").click(function(){ 
        $("li").remove()
    })
})