// -------------------------------------------
//           Variables Globales
// -------------------------------------------


// -------------------------------------------
//           Funciones Globales
// -------------------------------------------
function representarCardsProductos() {

    var cards = ''

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            cards += '<section>'+
                        '<h3>' + productos[i].nombre + '</h3>' +
                        '<img src="' + productos[i].foto + '">' +
                        '<p><b>Precio:</b> $' + productos[i].precio + '</p>' +
                        '<p><b>Stock:</b> ' + productos[i].stock + '</p>' +
                        '<p><b>Marca:</b> ' + productos[i].marca + '</p>' +
                        '<p><b>Categoría:</b> ' + productos[i].categoria + '</p>' +
                        '<p><b>Detalles:</b> ' + productos[i].detalles + '</p>' +
                        '<br>' +
                        '<p><b style="color:gold;">Envío:</b> ' + (productos[i].envio? 'Si':'No') + '</p>' +
                    '</section>'
        }
    }
    else cards += '<h2 class="msg-error">No se encontraron productos para mostrar</h2>'

    document.querySelector('.section-cards-container').innerHTML = cards 
}

function start() {
    console.warn( document.querySelector('title').innerText )

    representarCardsProductos()
}


// -------------------------------------------
//               Ejecución
// -------------------------------------------
