"use strict";

// export class to use in other modules
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
