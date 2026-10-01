
/**
 * This file contains mensaje for a chat aplication
 * @author Angel Rodriguez Delgado
 */
class Mensaje{
    constructor(text, dateTime){
        /**
         * constructor for mensaje class
         * @param {type} text the text of the message
         * @param {type} dateTime The date and time the message was sent
         */
        this.text=text;
        this.dateTime=dateTime;
    }
}

export { Mensaje };

