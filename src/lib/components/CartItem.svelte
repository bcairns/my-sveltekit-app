<script lang="ts">
	import ProductImage from './ProductImage.svelte';
	import { getContext } from 'svelte';

	interface Props {
		hex: any;
		name: any;
		price: any;
		sku: any;
		title: any;
	}

	let { hex, name, price, sku, title }: Props = $props();

	const cart = getContext('cart');
</script>

<div class="flex gap-2 justify-between">
	<div class="w-[125px]">
		<ProductImage {hex} />
	</div>

	<div class="flex-grow">
		<h3 class="font-bold">{title}</h3>
		<div class="">{name}</div>
		<div class="">{sku}</div>
		<div class="">${price}</div>
	</div>

	<div class="">
		<button onclick={() => cart.remove(sku)}>
			<iconify-icon class="text-24" icon="ph:trash-bold"></iconify-icon>
		</button>
	</div>
</div>
