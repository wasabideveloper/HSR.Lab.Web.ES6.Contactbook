'use strict';


export class Contact {
	firstname: string;
	name: string;

	constructor(firstname, name) {
		this.firstname = firstname;
		this.name = name;
	}

	get fullName() {
		return this.firstname + ' ' + this.name;
	}
}
