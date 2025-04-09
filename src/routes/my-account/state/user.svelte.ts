export function createUserState() {
    let firstName = $state('John');
	let lastName = $state('Doe');
	let address = $state('123 Anystreet USA');

	const fullName = $derived(`${firstName} ${lastName}`);

    return {
        get firstName() { return firstName },
        set firstName(value) { firstName = value },

        get lastName() { return lastName },
        set lastName(value) { lastName = value },

        get address(){ return address },
        set address(value) { address = value },
        
        get fullName() { return fullName },
    }
}