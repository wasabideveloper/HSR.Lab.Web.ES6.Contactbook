'use strict';

import {Contact} from 'Classes/Model/Contact';


enum ContactbookType {
	private,
	business
}


export class Contactbook {
	contactbookType: ContactbookType;
	contactList: Contact[];

	constructor() {
		this.contactbookType = ContactbookType.private;
		this.contactList = [];
	}

	addContact(contact):void {
		this.contactList.push(contact);
	}

	set contact(contacts) {
		this.contactList = contacts;
	}

	get contacts():Contact[] {
		return this.contactList;
	}
}
