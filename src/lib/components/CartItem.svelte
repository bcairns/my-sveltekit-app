<script>
    import ProductImage from './ProductImage.svelte';
    import {removeFromCart} from '../stores/cartItems';

    export let hex;
    export let name;
    export let price;
    export let sku;
    export let title;
</script>

<div class="flex gap-2 justify-between">

    <div class="w-[125px]">
        <ProductImage {hex} />
    </div>

    <div class="flex-grow">
        <h3 class="font-bold">{title}</h3>
        <div class="">{name}</div>
        <div class="">{sku}</div>
        <div class="">{price}</div>
    </div>

    <div class="">
        <button on:click={() => removeFromCart(sku)}>
            <iconify-icon class="text-24" icon="ph:trash-bold"></iconify-icon>
        </button>
    </div>


</div>