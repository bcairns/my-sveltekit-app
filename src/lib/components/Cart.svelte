<script>
	import { fly } from 'svelte/transition';

	import CartItem from './CartItem.svelte';
	import Backdrop from './Backdrop.svelte';
	import { focusTrap } from '../actions/focusTrap';
	import { getContext } from 'svelte';

	const cart = getContext('cart');

	function close() {
		cart.close();
	}
</script>

{#if cart.isOpen()}
	<Backdrop />

	<div
		use:focusTrap={{ onDeactivate: close }}
		transition:fly={{ x: '100%' }}
		class="fixed top-0 right-0 w-[350px] bg-white h-full border-l"
	>
		<div class="bg-black text-white flex gap-6 justify-between p-3 items-center">
			<h2 class="uppercase font-bold text-20">Your Cart</h2>
			<button onclick={close} aria-label="Close">
				<iconify-icon class="text-30 block" icon="ep:close"></iconify-icon>
			</button>
		</div>

		<div class="p-3 grid gap-3">
			{#each Object.values(cart.items()) as item}
				<CartItem {...item} />
			{/each}
		</div>

		<hr>

		<div class="p-3 font-bold">
			TOTAL: ${cart.totalPrice()}
		</div>
	</div>
{/if}
