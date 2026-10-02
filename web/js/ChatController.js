/*
 * Script controlador de la página de chat
 */
import { Mensaje } from './Mensaje.js';

/** Array de mensajes */
const mensajes = [];

/**
 * Muestra todos los mensajes de la colección dentro de la lista #msgList,
 * cada uno en un elemento <li>.
 * @returns {undefined}
 */
function actualizarMensajes() {
    const listMsgs = document.getElementById("msgList");

    // Vaciar la lista antes de volver a pintarla
    while (listMsgs.firstChild) {
        listMsgs.removeChild(listMsgs.firstChild);
    }

    // Recorrer la colección de mensajes y añadir un <li> por cada uno
    for (let msg = 0; msg < mensajes.length; msg++) {
        const newLi = document.createElement("li");
        const newContent = document.createTextNode(mensajes[msg].text);
        newLi.appendChild(newContent);
        listMsgs.appendChild(newLi);
    }
}

/**
 * Recoge el mensaje que quiere enviar el usuario y lo añade a la lista.
 * @param {Event} event El evento click o submit
 * @returns {undefined}
 */
function enviarMensaje(event) {
    // Evita que el formulario se envíe y recargue la página
    if (event) {
        event.preventDefault();
    }

    const campoTexto = document.getElementById('msgText');
    const textoMensaje = campoTexto.value.trim();
    if (textoMensaje === "") {
        return;
    }

    mensajes.push(new Mensaje(textoMensaje, new Date()));
    campoTexto.value = "";
    campoTexto.focus();
    actualizarMensajes();
}

// Pinta la lista (vacía) al cargar la página
actualizarMensajes();

// Asocio enviarMensaje al click del botón
document.getElementById('sendButton').addEventListener('click', enviarMensaje);

// Por si acaso el formulario llega a enviarse (p. ej. con Enter), lo bloqueo
const chatForm = document.getElementById('chatForm');
if (chatForm) {
    chatForm.addEventListener('submit', enviarMensaje);
}

