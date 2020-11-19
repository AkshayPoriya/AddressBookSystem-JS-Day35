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
let contacts = new Array();
function AddContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
    contacts.push(contact);
}
try {
    AddContact('Rohit', 'Sharma', 'Mumbai', 'Powai', 'Maharastra', '111222', '9288009922', 'ro.hit@bcci.com');
    AddContact('Shikar', 'Dhawan', 'Delhi', 'Delhi', 'Delhi', '111222', '8887776665', 'shi.kar@dhawn.co.in');
} catch (e) {
    console.error(e);
}

//UC4 Update Contact
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
    contacts[indexOfContact].firstName = 'Virat';
    contacts[indexOfContact].lastName = 'Kohli';
}

console.log(contacts);