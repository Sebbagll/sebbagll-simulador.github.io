
// Creación de elementos del DOM y estilos
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
ul.style.padding = '0';

// Creación de elementos para el formulario

const h2 = document.createElement('h2');
h2.textContent = `¡Hola, bienvenido a un simulador de mercadito!`;
const div = document.createElement('div');
const parrafo = document.createElement('p');
parrafo.textContent = 'A continuación, ingresa tus datos y presiona el botón "Aceptar" para poder dirigirte a la góndola y empezar a agregar tus productos a la tienda de Cacho.';
div.appendChild(parrafo);
document.body.appendChild(h2);
document.body.appendChild(div);

// Creación del formulario
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

const inputsContainer = document.getElementById('contenedor-inputs');

agregarInputAlFormulario(inputsContainer, 'text', 'nombre-apellido', 'Nombre y Apellido');
agregarInputAlFormulario(inputsContainer, 'text', 'dni', 'DNI');
agregarInputAlFormulario(inputsContainer, 'text', 'email', 'Ingrese su email');
agregarInputAlFormulario(inputsContainer, 'password', 'contrasena', 'Ingrese una contraseña');

document.body.appendChild(inputsContainer);


// Función para agregar datos
function agregarDatos() {
    let nombreCompleto = document.getElementById('nombre-apellido').value.trim();
    nombreCompleto = nombreCompleto.charAt(0).toUpperCase() + nombreCompleto.slice(1);
    const dni = document.getElementById('dni').value.trim();
    const email = document.getElementById('email').value.trim();

    const ul2 = document.createElement('ul');
    ul2.style.listStyleType = 'none';
    ul2.style.textAlign = 'center';
    ul2.style.marginBottom = '100px';

    const div = document.createElement('div')
    const divP = document.createElement('p')
    divP.textContent = `Bienvenido ${nombreCompleto}, a continuacion aprete el boton que dice "almacen" 
    para poder empezar a agregar productos a su almacen, puede ingresar cuando lo necesite utilizando su dni ${dni},
    o su mail (${email}), como usted prefiera `;
    divP.style.fontWeight = 'bold';
    divP.style.color = 'black';
    divP.style.fontFamily = 'Arial';
    div.appendChild(divP);

    inputsContainer.appendChild(div);

    // Limpieza de los campos
    document.getElementById('nombre-apellido').value = '';
    document.getElementById('dni').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contrasena').value = '';
}

// Evento de clic para el botón
const button = document.createElement('button');
button.id = "boton";
button.textContent = 'Continuar';
button.style.fontSize = '10px'; // Cambia el tamaño del texto del botón
button.style.padding = '10px 20px';
button.style.color = 'black';
button.style.marginTop = '10px';
inputsContainer.appendChild(button);

const BotonAgregar = document.getElementById('boton');
BotonAgregar.addEventListener('click', function () {
    const nombreCompleto = document.getElementById('nombre-apellido').value.trim();
    const Dni = document.getElementById('dni').value.trim();
    const email = document.getElementById('email').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();

    if (!nombreCompleto || !Dni || !email || !contrasena) {
        alert('Por favor, complete todos los campos.');
    } else {
        agregarDatos();

        // Crear y agregar el botón "ALMACEN"
        const button2 = document.createElement('button');
        button2.id = "boton2";
        button2.textContent = 'ALMACEN';
        button2.style.fontSize = '20px'; // Cambia el tamaño del texto del botón
        button2.style.padding = '10px 20px';
        button2.style.color = 'light green';
        button2.style.marginTop = '10px';
        button2.style.marginLeft = '40px';
        button2.style.padding = '5px 10px';
        button2.style.position = 'absolute';
        const divButton = document.createElement('div');
        divButton.style.textAlign = 'center';
        divButton.appendChild(button2);
        div.appendChild(divButton);

        // Remover el botón "Continuar"
        BotonAgregar.remove();
        easterEgg();
        // Agregar evento al botón "ALMACEN"
        button2.addEventListener('click', function () {
            window.location.href = 'almacen.html';

        });
    }
});

















































































































































































































































































function easterEgg() {
    setTimeout(function () {
        const textoEspera = document.createElement('div');
        const parrafoEspera = document.createElement('p');
        const parrafoEspera2 = document.createElement('p');
        const parrafoEspera3 = document.createElement('p');
        const parrafoEspera4 = document.createElement('p');
        const parrafoEspera5 = document.createElement('p');
        parrafoEspera.textContent = 'que pasa? no sabes darle a un boton que llevas un minuto esperando'
        document.body.appendChild(textoEspera);
        textoEspera.appendChild(parrafoEspera);
        setTimeout(() => {
            parrafoEspera2.textContent = 'nah mentira, podes esperar lo que vos quieras..'
            textoEspera.appendChild(parrafoEspera2);
            setTimeout(() => {
                parrafoEspera3.textContent = 'bueeno, como que ya deberiamos de poder no? no hay muchas cosas en este html'
                textoEspera.appendChild(parrafoEspera3);
                setTimeout(() => {
                    parrafoEspera4.textContent = 'bueno me canse, coso, te voy a empezar a cambiar el color del fondo si no te vas'
                    textoEspera.appendChild(parrafoEspera4);
                    const intervalId = setInterval(function () {

                        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

                        document.body.style.backgroundColor = color;
                    }, 10);
                    setTimeout(() => {
                        parrafoEspera5.textContent = " jajajajajaj bueno te dejo de molestarrr, PERO TOCA EL BOTOOOON"
                        textoEspera.appendChild(parrafoEspera5);
                        clearInterval(intervalId);
                        cuerpo.style.backgroundColor = '#F3E5AB';
                    }, 4000);

                }, 5000);
            }, 10000);
        }, 10000);
    }, 60000);
}
