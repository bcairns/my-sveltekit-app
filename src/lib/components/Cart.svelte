<script>
    import { fly } from 'svelte/transition';

    import { cartItems } from '../stores/cartItems';
    import { cartOpen } from '../stores/cartOpen';
    import CartItem from './CartItem.svelte';
    import Backdrop from "./Backdrop.svelte";
    import { focusTrap } from "../actions/focusTrap";

    function close() {
        $cartOpen = false;
    }
</script>

{#if $cartOpen}
    <Backdrop />

    <div use:focusTrap={{onDeactivate: close}} transition:fly={{ x: "100%" }} class="fixed top-0 right-0 w-[350px] bg-white h-full border-l">

        <div class="bg-black text-white flex gap-6 justify-between p-3 items-center">
            <h2 class="uppercase font-bold text-20">Your Cart</h2>
            <button on:click={close}>
                <iconify-icon class="text-30 block" icon="ep:close"></iconify-icon>
            </button>
        </div>

        <div class="p-3 grid gap-3">

            {#each Object.values($cartItems) as item}
                <CartItem {...item} />
            {/each}

        </div>

    </div>
{/if}
