//En esta seccion fui colocando todas laas funciones que cree para ir llamandolas proximamente
function calcularIva(precio) {
    precio += precio * 0.21;
    return Math.round(precio);
}
//Constructor
class Almacen {
    constructor(id, nombre, precio, marca, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.stock = stock;

    }
}

// Aca quise facilitarme una tarea de dom 
function crearInput(tipo, id, placeholder) {
    const input = document.createElement('input');
    input.type = tipo;
    input.id = id;
    input.placeholder = placeholder;
    return input;
}
function agregarInputAlFormulario(container, tipo, id, placeholder) {
    const div = document.createElement('div');
    const input = crearInput(tipo, id, placeholder);
    div.appendChild(input);
    container.appendChild(div);
}
//Esta seria la funcion 'principal' del codigo para la parte de agregar un producto
function agregarProducto() {
    let nombreP = document.getElementById('nombrep').value.trim();
    let marcaP = document.getElementById('marcap').value.trim();
    let idP = document.getElementById('idp').value.trim();
    let stockP = document.getElementById('stockp').value.trim();
    let precioP = calcularIva(parseFloat(document.getElementById('preciop').value.trim()));

    if (!nombreP || !marcaP || !idP || !stockP || isNaN(precioP)) {
        alert('Por favor, complete todos los campos correctamente.');
    } else {
        // Agregar producto al HTML
        agregarProductoAlHTML(nombreP, marcaP, idP, stockP, precioP);
        // Agregar producto a la lista de mercadería
        ingresarProducto(Almacen, mercaderia, idP, nombreP, precioP, marcaP, stockP);
        
        // Limpiar campos del formulario
        document.getElementById('nombrep').value = '';
        document.getElementById('marcap').value = '';
        document.getElementById('idp').value = '';
        document.getElementById('stockp').value = '';
        document.getElementById('preciop').value = '';
    }
}

function ingresarProducto(claseProducto, mercaderia, id, nombre, precio, marca, stock) {
    let producto = new claseProducto(id, nombre, precio, marca, stock);
    mercaderia.push(producto);
}

function agregarProductoAlHTML(nombre, marca, id, stock, precio) {
    // Crear elementos HTML para mostrar los datos del producto
    const contenedorProductos = document.getElementById('contenedor-productos');

    // Crear un contenedor estilizado para el producto
    const productoContainer = document.createElement('div');
    contenedorProductos.style.marginTop = '210px';
    contenedorProductos.style.position = 'absolute';
    productoContainer.style.backgroundColor = '#90EE90'; 
    productoContainer.style.border = '1px solid #ccc';
    productoContainer.style.borderRadius = '5px';
    productoContainer.style.padding = '15px';
    productoContainer.style.marginBottom = '20px';
    productoContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 1)'; 
    contenedorProductos.style.display = 'flex';
    contenedorProductos.style.flexWrap = 'wrap'; // Añadir flex-wrap para controlar el flujo de elementos

    const productoDiv = document.createElement('div');
    productoDiv.style.flex = '0 0 24%'; // 24% para que haya 4 productos por fila
    productoDiv.style.marginRight = '1%'; // Margen derecho para los elementos

    const nombreP = document.createElement('p');
    nombreP.textContent = `Nombre: ${nombre}`;
    nombreP.style.margin = '0'; // Eliminar el margen superior e inferior
    nombreP.style.marginBottom = '5px'; // Espacio entre los elementos
    nombreP.style.fontFamily = 'Georgia, serif'; 
    nombreP.style.color = '#333';

    const marcaP = document.createElement('p');
    marcaP.textContent = `Marca: ${marca}`;
    marcaP.style.margin = '0'; 
    marcaP.style.marginBottom = '5px';
    marcaP.style.fontFamily = 'Georgia, serif'; 
    marcaP.style.color = '#333';

    const idP = document.createElement('p');
    idP.textContent = `ID: ${id}`;
    idP.style.margin = '0'; 
    idP.style.marginBottom = '5px'; 
    idP.style.fontFamily = 'Georgia, serif'; 
    idP.style.color = '#333';

    const stockP = document.createElement('p');
    stockP.textContent = `Stock: ${stock}`;
    stockP.style.margin = '0'; 
    stockP.style.marginBottom = '5px'; 
    stockP.style.fontFamily = 'Georgia, serif'; 
    stockP.style.color = '#333';

    const precioP = document.createElement('p');
    precioP.textContent = `Precio: $${precio}`;
    precioP.style.margin = '0'; 
    precioP.style.fontFamily = 'Georgia, serif'; 
    precioP.style.color = '#333';

    // Agregar los elementos al contenedor del producto
    productoDiv.appendChild(nombreP);
    productoDiv.appendChild(marcaP);
    productoDiv.appendChild(idP);
    productoDiv.appendChild(stockP);
    productoDiv.appendChild(precioP);

    // Agregar el producto al contenedor del producto
    productoContainer.appendChild(productoDiv);

    // Agregar el contenedor del producto al contenedor de productos
    contenedorProductos.appendChild(productoContainer);
}





// Función para manejar el evento de búsqueda
function buscarProducto(criterio) {
    let productoEncontrado = null;

    // Buscar el producto según el criterio
    switch (criterio) {
        case 'nombre':
            let nombreProducto = document.getElementById('nombre').value.trim();
            productoEncontrado = mercaderia.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
            break;
        case 'marca':
            let marcaProducto = document.getElementById('marca').value.trim();
            productoEncontrado = mercaderia.find(producto => producto.marca.toLowerCase() === marcaProducto.toLowerCase());
            break;
        case 'id':
            let idProducto = document.getElementById('id').value.trim();
            productoEncontrado = mercaderia.find(producto => producto.id === idProducto);
            break;
        default:
            alert('Criterio de búsqueda inválido.');
            return;
    }
    
    if (productoEncontrado) {
        let mensaje = `Producto encontrado:\n\n`;
        mensaje += `ID: ${productoEncontrado.id}\n`;
        mensaje += `Nombre: ${productoEncontrado.nombre}\n`;
        mensaje += `Precio: ${productoEncontrado.precio}\n`;
        mensaje += `Marca: ${productoEncontrado.marca}`;
        alert(mensaje);
        document.getElementById('nombre').value= '';
        document.getElementById('marca').value= '';
        document.getElementById('id').value= '';
        inputNombre.style.display = 'none';
        inputId.style.display = 'none';
        inputMarca.style.display = 'none';
        botonBuscar.style.display = 'none';
    } else {
        alert('Producto no encontrado.');
        document.getElementById('nombre').value= '';
        document.getElementById('marca').value= '';
        document.getElementById('id').value= '';
        
    }
}

// Recicle el codigo de index para crear aca tambien la barra de navegacion 
const titulo = document.createElement('title');
titulo.textContent = 'Actividad Nro 2';
document.head.appendChild(titulo);

const footer = document.createElement('footer');
footer.textContent = `Hoy es ${new Date().toLocaleDateString()}`;
footer.style.position = 'fixed';
footer.style.bottom = '0';
footer.style.width = '100%';
footer.style.fontSize = '20px';
footer.style.fontWeight = 'bold';
document.body.appendChild(footer);

const titulo2 = document.createElement('h2');
titulo2.textContent = 'Tienda de Cacho';
titulo2.style.float = 'left';
titulo2.style.marginTop = '10px';
titulo2.style.marginBottom = '0px';
titulo2.style.marginRight = '10px';
titulo2.style.fontFamily = 'Arial, sans-serif';
titulo2.style.fontSize = '24px';
const cuerpo = document.body;
const cabecera = document.createElement('header');
cabecera.id = 'header';
cuerpo.appendChild(cabecera);

const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
cabecera.appendChild(titulo2);
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);

// Creación de enlaces de navegación
const paginas = ['index', 'Almacen', 'Contacto'];

for (const link of paginas) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `${link.toLowerCase()}.html`;
    a.textContent = link;
    a.style.fontFamily = 'Arial';
    a.style.fontSize = '14px';
    a.style.color = 'black';
    a.style.textDecoration = 'none';
    a.style.fontWeight = 'bold';
    li.style.display = 'inline';
    li.style.marginRight = '20px';
    li.appendChild(a);
    ul.appendChild(li);
}

// Estilos para la barra de navegación
cuerpo.style.backgroundColor = '#F3E5AB';
ul.style.textAlign = 'right';
cabecera.style.backgroundColor = '#804000';
cabecera.style.padding = '5px 0';
ul.style.listStyleType = 'none';
ul.style.margin = '1';
ul.style.padding = '0'


// Aca empece a usar dom para crear distintos elementos para el html y modificando los estilos para que quede lindo a la vista la pagina
const h1 = document.createElement('h1');
const divTextoI = document.createElement('div');
const pTextoI = document.createElement('p');

h1.textContent = 'Bienvenido al almacen de Cacho!'
pTextoI.textContent = `a continuacion, tenes un formulario en el cual podes ingresar los datos de los productos a agregar
luego aprieta el boton "AGREGAR" para poder ingresarlos a la pagina, los mismos se veran reflejados en bloques abajo
tambien a la derecha si queres buscar un producto en especifico que agregaste tenes 3 opciones para buscar dicho producto`;
pTextoI.style.textAlign = 'left';
pTextoI.style.marginRight = '360px';
pTextoI.style.position = 'absolute';
document.body.appendChild(h1);
document.body.appendChild(divTextoI);
document.body.appendChild(pTextoI);

// Creacion de formularios dandole uso a la funcion
const divFormulario = document.createElement('div');
divFormulario.style.position = 'absolute';
divFormulario.style.marginTop = '100px'
document.body.appendChild(divFormulario);
agregarInputAlFormulario(divFormulario, 'text', 'nombrep', 'nombre del producto');
agregarInputAlFormulario(divFormulario, 'text', 'marcap', 'marca del producto');
agregarInputAlFormulario(divFormulario, 'text', 'idp', 'id del producto');
agregarInputAlFormulario(divFormulario, 'number', 'stockp', 'stock del producto');
agregarInputAlFormulario(divFormulario, 'number', 'preciop', 'precio del producto');
const contenedorProductos = document.createElement('div');
contenedorProductos.id = 'contenedor-productos';
document.body.appendChild(contenedorProductos);

//Cree un boton para poder darle uso despues, el cual me deje agregar los datos del producto que ingrese
const botonAgregar = document.createElement('button');
botonAgregar.style.position = 'absolute';
botonAgregar.id = "boton2";
botonAgregar.textContent = 'Agregar Producto';
botonAgregar.style.fontSize = '20px';
botonAgregar.style.padding = '10px 20px';
botonAgregar.style.color = 'light green';
botonAgregar.style.marginTop = '100px';
botonAgregar.style.marginLeft = '250px';
botonAgregar.style.padding = '5px 10px';

const divBotonAgregar = document.createElement('div');
divBotonAgregar.style.textAlign = 'center';
divBotonAgregar.appendChild(botonAgregar);
divFormulario.appendChild(divBotonAgregar);



//Esto esta porque agregue un par de cosas en el html pero cuando iniciaba me los generaba arriba de la barra de navegacion y termine con esta solucion
document.addEventListener('DOMContentLoaded', function () {   // Agregue 3 botones desde el html que basicamente son para poder mostrar el input que te
    const body = document.querySelector('body');              // ingresar el criterio para buscar el producto 
    const header = document.querySelector('header');

    const botones = document.querySelectorAll('button[id^="boton"]');
    const divsInputs = document.querySelectorAll('div[id^="input"]');

    // Estableci estilos para los botones
    botones.forEach(boton => {
        boton.style.float = 'right';
        boton.style.display = 'block';
        boton.style.marginBottom = '10px';
        body.appendChild(boton);

        botonBuscar.style.display = 'none';
    });

   
    divsInputs.forEach(divInput => {
        divInput.style.marginRight = '15px'
        divInput.style.float = 'right';
        divInput.style.display = 'none';
        divInput.style.marginBottom = '10px';
        divInput.style.clear = 'both';
        body.appendChild(divInput);
    });
});
//Aca empece a crear variables para poder darle los valores de los botones creados en el html y poder trabajar con ellos
const botonNombre = document.getElementById('botonNombre');
const botonMarca = document.getElementById('botonMarca');
const botonId = document.getElementById('botonId');
const inputNombre = document.getElementById('inputNombre');
const inputMarca = document.getElementById('inputMarca');
const inputId = document.getElementById('inputId');
const botonBuscar = document.getElementById('botonBuscar');
botonBuscar.style.padding = '10px 20px';
botonBuscar.style.color = 'black';
botonBuscar.style.marginTop = '10px';
botonBuscar.style.marginRight = '15px'
botonBuscar.style.float = 'right';
botonBuscar.style.marginBottom = '10px';
botonBuscar.style.clear = 'both';
let mercaderia = []; // Aca cree este array porque lo necesito para poder almacenar los valores de los productos como objetos y poder buscarlos
botonAgregar.addEventListener('click', agregarProducto)



// En esta parte del codigo trabaje en darle un poco de vida a la parte de los botones de buscar y que vayan apareciendo y desapareciendo los input
botonNombre.addEventListener('click', function () { // depende del boton que toquemos
    inputNombre.style.display = 'block';
    inputId.style.display = 'none';
    inputMarca.style.display = 'none';
    botonBuscar.style.display = 'block';



});
botonMarca.addEventListener('click', function () {
    inputNombre.style.display = 'none';
    inputId.style.display = 'none';
    inputMarca.style.display = 'block';
    botonBuscar.style.display = 'block';

});
botonId.addEventListener('click', function () {
    inputNombre.style.display = 'none';
    inputId.style.display = 'block';
    inputMarca.style.display = 'none';
    botonBuscar.style.display = 'block';

});


    



botonBuscar.addEventListener('click', function () {
    let criterio = '';
    if (inputNombre.style.display === 'block') {
        criterio = 'nombre';
    } else if (inputMarca.style.display === 'block') {
        criterio = 'marca';
    } else if (inputId.style.display === 'block') {
        criterio = 'id';
    }

    buscarProducto(criterio);
});





