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