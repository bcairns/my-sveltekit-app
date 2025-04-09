<script lang="ts">
	import '../app.scss';
	import 'iconify-icon';
	import { setContext } from 'svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import Cart from '../lib/components/Cart.svelte';
	import { createCart } from '$lib/state/cart.svelte.js';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const cart = createCart();

	setContext('cart', cart);
	setContext('site.title', 'Logitech');

	let rtl = $state(false);
	let dir = $derived(rtl ? 'rtl' : 'ltr');

	function toggleRTL() {
		rtl = !rtl;
	}
</script>

<div {dir}>
	<div class="mx-auto max-w-screen-lg px-6 py-12">
		<div class="col-start-2">
			<!-- Here you can place your Navigation -->
		</div>
		<div>
			<button onclick={toggleRTL}>Toggle RTL</button>

			<div class="grid gap-6">
				<Header />

				{@render children?.()}

				<Footer />
			</div>

			<Cart />
		</div>
	</div>
</div>
