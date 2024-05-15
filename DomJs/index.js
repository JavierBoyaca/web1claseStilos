// // seleccionar por nombre de etiqueta
// //let titulo = document.querySelector("h1");
// //seleccionar por nombre de la clase
// //let titulo = document.querySelector(".titulo")
// //seleccionar por nombre de ID etiqueta
// //let titulo = document.querySelector("#titulo");
// //seleccionar una etiqueta dentro de otra
// let titulo = document.querySelector("h1 > span");
// let apellido = document.querySelector("span b ");
// //agregar atributos
// apellido.setAttribute("style", "color:red", "font-style:italic");
// titulo.style.backgroundColor = "green";
// titulo.style.color = "white";
// titulo.textContent = "Hola desde JS";

///////////////////////////////////
// //seleccionar varias etiquetas
//let ps = document.querySelectorAll("div > p");
// //console.log(ps);
// for (let x = 0; x < ps.length; x++) {
//   ps[x].style.color = "red";
// }
// ps.forEach((p) => {
//   p.style.color = "blue";
// });

// //crear etiqueta
// let enlace = document.createElement("a");
// //agregar texto de forma directa
// enlace.textContent = "ir a youtube";
// //agregar atributo de forma directa
// enlace.href = "https://youtube.com";
// enlace.target = "_blank";
// //agregar etiqueta al documento
// let body = document.body;
// //agregar el enlace al body
// body.appendChild(enlace);
/////////////////////////
// //crear etiqueta
// let enlace = document.createElement("a");
// //crear texto
// let texto = document.createTextNode("Ir a vimeo");
// //agregar texto a la etiqueta
// enlace.appendChild(texto);
// //agregar atributos
// enlace.setAttribute("href", "https://vimeo.com");
// enlace.setAttribute("target", "_blank");
// //reemplazar la etiqueta
// enlace.replaceWith(titulo);
// titulo.textContent = "Titulo";
// //selecionar body del documento html
// let body = document.body;
// //agregar el enlace al body
// body.appendChild(enlace);
// //eliminar una etiqueta
// //enlace.remove();
////////////////////////////////////////

let enlace = document.createElement("a");
// //agregar texto de forma directa
enlace.textContent = "ir a youtube";
// //agregar atributo de forma directa
enlace.href = "https://youtube.com";
enlace.target = "_blank";
//seleccionar una etiqueta ya existente del html
let ps = document.querySelectorAll("p");
//unicar el enlace
ps[1].insertAdjacentElement("afterend", enlace);
//agregar una clase de css
ps[1].classList.add("fondo", "texto");
