<script lang="ts">
	import ColorSwatch from './ColorSwatch.svelte';
	import ProductImage from './ProductImage.svelte';
	import { getContext } from 'svelte';

	interface Props {
		title: any;
		variants: any;
	}
	let { title, variants }: Props = $props();

	const cart = getContext('cart');

	let selectedVariantIndex = $state(0);
	let selectedVariant = $derived(variants[selectedVariantIndex]);

	function swatchClicked(index) {
		selectedVariantIndex = index;
	}

	function addToCartClicked() {
		cart.add(title, selectedVariant);
	}
</script>

<div class="border p-3 grid gap-2">
	<ProductImage hex={selectedVariant.hex} />

	<div class="font-bold">{title}</div>

	<div class="flex gap-2">
		{#each variants as variant, index}
			<ColorSwatch
				onclick={() => swatchClicked(index)}
				hex={variant.hex}
				selected={index === selectedVariantIndex}
			/>
		{/each}
	</div>

	<div class="">${selectedVariant.price}</div>
	<div class="">
		<button onclick={addToCartClicked} class="bg-black text-white p-2">Add to Cart</button>
	</div>
</div>
