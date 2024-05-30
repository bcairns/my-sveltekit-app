<script>
    import {getContext} from 'svelte';

    const title = getContext('site.title');
    const cart = getContext('cart');
</script>

<header class="border p-4 flex gap-6 justify-between items-center">
    <a href="/" class="font-bold uppercase text-24 text-blue">{title}</a>
    <div class="flex gap-6">
        <a href="/my-account">My Account</a>
        <a href="/products">Products</a>
        <a href="/fetch/1">Blog</a>
    </div>
    <button class="relative" on:click={() => cart.open()}>
        <iconify-icon class="text-30 block" icon="mdi:cart-outline"></iconify-icon>
        {#if cart.count()}
            <div class="absolute -top-2 -right-1 bg-blue w-5 h-5 rounded-full text-14 font-bold pt-0.5">{cart.count()}</div>
        {/if}
    </button>
</header>
