<script>
    import { cartItems } from '../stores/cartItems';
    import { cartOpen } from '../stores/cartOpen';
    import CartItem from './CartItem.svelte';
</script>

{#if $cartOpen}
    <div class="fixed top-0 right-0 w-[350px] bg-white h-full border-l">

        <div class="bg-black text-white flex gap-6 justify-between p-3">
            Cart
            <button on:click={() => $cartOpen = false}>Close</button>
        </div>

        <div class="p-3 grid gap-3">

            {#each Object.values($cartItems) as item}
                <CartItem {...item} />
            {/each}

        </div>

    </div>
{/if}
