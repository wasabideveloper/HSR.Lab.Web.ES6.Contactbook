//"use strict";
import {Contact} from 'Classes/Model/Contact.es6'

export function main(contactbookNode) {
    console.log('Start contactbook');

    var contact = new Contact('Sandro', 'Meyer');
    var listNode = document.createElement('li');
    listNode.appendChild(document.createTextNode(contact.fullName));
    contactbookNode.appendChild(listNode);
}
