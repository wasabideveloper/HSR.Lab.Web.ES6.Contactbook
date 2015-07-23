"use strict";
import Contact from 'Classes/Model/Contact.es6';

// type is not visible outside of module
var type = {
    private: 'Private',
    business: 'Business'
}

// export class to use in other modules
export class Contactbook {
    constructor() {
        this.type = type.private;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    setContacts(contacts) {
        this.contacts = contacts;
    }

    getContacts() {
        return this.contacts;
    }
    /**
     * setter/getter not supported by es6 shim

    set contacts(contacts) {
        this.contacts = contacts;
    }

    get contacts() {
        return this.contacts;
    }
    */
}
