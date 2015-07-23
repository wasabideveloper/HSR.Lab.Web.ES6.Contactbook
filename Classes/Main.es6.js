"use strict";
import {Contact} from 'Classes/Model/Contact.es6'
import {Contactbook} from 'Classes/Model/Contactbook.es6'

export function main(contactbookNode) {
    console.log('Start contactbook');

    var contactbook = new Contactbook();

    contactbook.addContact(new Contact('Sandro', 'Meyer'));
    contactbook.addContact(new Contact('Laura', 'Fischer'));
    contactbook.addContact(new Contact('Jan', 'Sandoz'));

    contactbook.getContacts().forEach(function(contact){
        var listNode = document.createElement('li');
        listNode.appendChild(document.createTextNode(contact.fullName));
        contactbookNode.appendChild(listNode);
    });
}
