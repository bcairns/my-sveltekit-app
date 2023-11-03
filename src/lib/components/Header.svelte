<script>
    import { cartOpen } from '../stores/cartOpen';
    import { cartCount } from '../stores/cartCount';
    import {getContext} from 'svelte';

    const title = getContext('site.title');
</script>

<header class="border p-4 flex gap-6 justify-between items-center">
    <a href="/" class="font-bold uppercase text-24 text-blue">{title}</a>
    <div class="flex gap-6">
        <a href="/my-account">My Account</a>
        <a href="/products">Products</a>
    </div>
    <button class="relative" on:click={() => $cartOpen = true}>
        <iconify-icon class="text-30" icon="mdi:cart-outline"></iconify-icon>
        {#if $cartCount}
            <div class="absolute -top-2 -right-1 bg-blue w-5 h-5 rounded-full">{$cartCount}</div>
        {/if}
    </button>
</header>
