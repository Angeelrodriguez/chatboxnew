/* 
 * script fot chat page controler
 */
import { Mensaje } from './Mensaje.js';
//**array de mensajes*/
var mensajes=new Array();
/**
 * esta funcion muestra todos los mensajes del paramentro
 * en una página en forma de texto dentro de un Contenedor DIV
 * @param {type} mensajes La coleccion de mensajes a mostrar
 * @returns {undefined} Undefined
 */
function actualizarMensajes() {
    //Ordenar mensajes pr fecha de mensaje de
    //de mas reciente a más antiguo
    const listMsgs = document.getElementById("msgList");
    while (listMsgs.firstChild) {
        listMsgs.removeChild(listMsgs.firstChild);
    }
    //Recorrer la coleccion de mensajes
    for(let msg=0; msg < mensajes.length; msg++){
        const newLi = document.createElement("li");
        const newContent = document.createTextNode(mensajes[msg].texto);
        newLi.appendChild(newContent);
        listMsgs.insertBefore(newLi, null);
    }
        //En cada iteración añidimos al elemento <DIV> continido
        //consitente en el texto del mensaje, dentro de un elemnto <LI>
}
/**
 * Esta es la funcion que recoge el mensaje que quiere enviar el usuario
 * y lo envia a la lista de mensajes
 * @returns {undefined}
 */
function enviarMensaje() {
    //Obtenemos el mensaje
    let textoMensaje=document.getElementById('msgText').value;
    //Lo metemos en la coleccion de mensajes
    mensajes.push(new Mensaje (textoMensaje, new Date()));
    document.getElementById("msgText").value="";
    document.getElementById("msgText").focus();
    actualizarMensajes();
    
}
//Asocio la funciom actualizarMensaje como manejadora del evento de carga del 
//DOM de la pagina
document.addEventListener('DOMContentLoaded',actualizarMensajes(mensajes));
//Asocio la funcion enviarMensaje como manejadora del evento click del
//elemento sendButton
document.getElementById('sendButton').addEventListener('click', enviarMensaje);

