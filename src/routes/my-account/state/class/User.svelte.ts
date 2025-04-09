export class User {
    #firstName = $state('John');

    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        this.#firstName = value.toUpperCase();
    }

	lastName = $state('Doe');
	address = $state('123 Anystreet USA');

	fullName = $derived(`${this.#firstName} ${this.lastName}`);
}
