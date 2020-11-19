class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let fnRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (fnRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw 'Invalid First Name';
        }
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let lnRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (lnRegex.test(lastName)) {
            this._lastName = lastName;
        } else {
            throw 'Invalid Last Name';
        }
    }

    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z0-9]{4,}$');
        if (addressRegex.test(address)) {
            this._address = address;
        } else {
            throw 'Invalid Address';
        }
    }

    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if (cityRegex.test(city)) {
            this._city = city;
        } else {
            throw 'Invalid City';
        }
    }

    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if (stateRegex.test(state)) {
            this._state = state;
        } else {
            throw 'Invalid State';
        }
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        }
        else {
            throw 'Invalid Zip Code';
        }
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[1-9][0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw 'Invalid Phone Number';
        }
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp('^[a-zA-Z0-9]+([.+-]{1}[A-Za-z0-9]+)*[@][a-zA-Z0-9]+([.]{1}([a-zA-Z]{2}|[a-zA-Z]{3,})){0,2}$');
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else {
            throw 'Invalid email-id';
        }
    }
}

//UC3 Add Contact
console.log("\nUC3\n");
let contacts = new Array();
function AddContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    if (contacts.some(obj => obj.firstName == firstName && obj.lastName == lastName)) {
        console.log("Contact with firstName: " + firstName + " and lastName: " + lastName + " already exist!");
        return;
    }
    let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
    contacts.push(contact);
}
try {
    AddContact('Rohit', 'Sharma', 'Mumbai', 'Powai', 'Maharastra', '111222', '9288009922', 'ro.hit@bcci.com');
    AddContact('Shikar', 'Dhawan', 'Delhi', 'Delhi', 'Delhi', '111222', '8887776665', 'shi.kar@dhawn.co.in');
} catch (e) {
    console.error(e);
}
console.log(contacts);

//UC4 Update Contact
console.log("\nUC4\n");
function GetContactIndexWithName(firstName, lastName) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName == firstName && contacts[i].lastName == lastName) {
            return i;
        }
    }
    return -1;
}
let indexOfContact = GetContactIndexWithName('Rohit', 'Sharma');
if (indexOfContact != -1) {
    console.log('Contacts before update operation: ');
    console.log(contacts);
    contacts[indexOfContact].firstName = 'Virat';
    contacts[indexOfContact].lastName = 'Kohli';
    contacts[indexOfContact].city = 'Banglore';
    console.log('Contacts after update operation: ');
    console.log(contacts);
}

//UC5 Delete Contact
console.log("\nUC5\n");
try {
    AddContact('Yuvraj', 'Singh', 'Mumbai', 'Powai', 'Maharastra', '111222', '9288009922', 'yu.raj@bcci.com');
} catch (e) {
    console.error(e);
}
function DeleteContact(firstName, lastName) {
    contacts = contacts.filter(obj => obj.firstName != firstName && obj.lastName != lastName);
}
console.log('Contacts before delete operation: ');
console.log(contacts);
DeleteContact('Yuvraj', 'Singh');
console.log('Contacts after delete operation: ');
console.log(contacts);

//UC6 Get count of contact
console.log("\nUC6\n");
let countOfContact = contacts.reduce((countOfContact, obj) => countOfContact += 1, 0);
console.log("Number of contacts: " + countOfContact);

//UC7 Ensure no duplicate entry of the contact with same name
console.log("\nUC7\n");
AddContact('Shikar', 'Dhawan', 'Haryana', 'Delhi', 'Delhi', '111242', '8887776665', 'shi.khar@dhawn.co.in');
console.log(contacts);

//UC8 Check if a person with given name and city or state exist or not
console.log("\nUC8\n");
function CheckNameInCity(firstName, lastName, city) {
    if (contacts.some(obj => obj.firstName == firstName && obj.lastName == lastName && obj.city == city)) {
        return true;
    }
    return false;
}
function CheckNameInState(firstName, lastName, state) {
    if (contacts.some(obj => obj.firstName == firstName && obj.lastName == lastName && obj.state == state)) {
        return true;
    }
    return false;
}
console.log(CheckNameInCity("Akshay", "Poriya", "Rohtak"));
console.log(CheckNameInState("Shikar", "Dhawan", "Delhi"));

//UC9 View Person By City or State
console.log("\nUC9\n");
function ViewContactByCity(city) {
    console.log(contacts.filter(obj => obj.city == city));
}
function ViewContactByState(state) {
    console.log(contacts.filter(obj => obj.state == state));
}
ViewContactByCity("Delhi");
ViewContactByState("Maharastra");

//UC10 Get Number of contacts by city or state
console.log("\nUC10\n");
function GetCountByCity(city) {
    return contacts.filter(obj => obj.city == city).reduce((countOfContact, obj) => countOfContact += 1, 0);
}
function GetCountByState(state) {
    return contacts.filter(obj => obj.state == state).reduce((countOfContact, obj) => countOfContact += 1, 0);
}
console.log("Number of contacts belonging to Powai city: " + GetCountByCity("Powai"));
console.log("Number of contacts belonging to Delhi state: " + GetCountByState("Delhi"));
console.log("Number of contacts belonging to Rohtak city: " + GetCountByCity("Rohtak"));

//UC11 Sort Contacts by name
console.log("\nUC11\n");
function compareName(a, b) {
    if ((a.firstName + a.lastName) < (b.firstName + b.lastName)) {
        return -1;
    } else if ((a.firstName + a.lastName) > (b.firstName + b.lastName)) {
        return 1;
    } else return 0;
}
console.log(contacts.sort(compareName));

//UC12 Sort contacts by city state or zip
console.log("\nUC12\n");
function compareCity(a, b) {
    if (a.city < b.city) {
        return -1;
    } else if (a.city > b.city) {
        return 1;
    } else return 0;
}
function compareState(a, b) {
    if (a.state < b.state) {
        return -1;
    } else if (a.state > b.state) {
        return 1;
    } else return 0;
}
function compareZip(a, b) {
    if (a.zip < b.zip) {
        return -1;
    } else if (a.zip > b.zip) {
        return 1;
    } else return 0;
}
console.log("Sort By City");
console.log(contacts.sort(compareCity));
console.log("Sort BY State");
console.log(contacts.sort(compareState));
console.log("Sort By Zip");
console.log(contacts.sort(compareZip));