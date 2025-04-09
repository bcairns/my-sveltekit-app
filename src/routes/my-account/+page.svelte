<script lang="ts">
	import { createUserState } from './state/user.svelte';
	import { User } from './state/class/User.svelte';

	// const user = createUserState();

	const user = new User();

	// let firstName = $state('John');
	// let lastName = $state('Doe');
	// let address = $state('123 Anystreet USA');

	// const fullName = $derived(`${firstName} ${lastName}`);
</script>

My account!

<hr />

<div class="grid gap-3">
	<div class="">
		Name: {user.fullName}
	</div>

	<div class="">
		Address: {user.address}
	</div>
</div>

<hr />

<div class="grid gap-3">
	<div class="">
		First Name: <input bind:value={user.firstName} />
	</div>
	<div class="">
		Last Name: <input bind:value={user.lastName} />
	</div>
	<div class="">
		Address: <input bind:value={user.address} />
	</div>
</div>

<style>
	input {
		border: 1px solid black;
	}
</style>
