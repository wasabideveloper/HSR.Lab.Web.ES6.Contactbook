//"use strict";
import {Contact} from 'Classes/Model/Contact.es6'

export function main() {
    console.log('Start contactbook');

    var contact = new Contact('Sandro', 'Meyer');
    console.log(contact);
    console.log(contact.fullName);
}
