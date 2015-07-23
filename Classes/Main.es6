"use strict";
import {Contactbook} from 'Classes/Model/Contactbook.es6'

export function main(contactbookNode) {
    console.log('Start contactbook');

    var contactbook = new Contactbook();

    contactbook.addContact(contact = new Contact('Sandro', 'Meyer'));
    contactbook.addContact(contact = new Contact('Laura', 'Fischer'));
    contactbook.addContact(contact = new Contact('Jan', 'Sandoz'));

    console.log(contactbook.contacts);
    contactbook.contacts.forEach(function(contact){
        var listNode = document.createElement('li');
        listNode.appendChild(document.createTextNode(contact.fullName));
        contactbookNode.appendChild(listNode);
    });
}
