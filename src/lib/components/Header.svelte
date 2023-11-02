<script>
    import { cartOpen } from '../stores/cartOpen';
    import { cartCount } from '../stores/cartCount';
</script>

<header class="border p-4 flex gap-6 justify-between items-center">
    <div class="font-bold uppercase text-24 text-blue">Logitech</div>
    <button class="relative" on:click={() => $cartOpen = true}>
        <iconify-icon class="text-30" icon="mdi:cart-outline"></iconify-icon>
        {#if $cartCount}
            <div class="absolute -top-2 -right-1 bg-blue w-5 h-5 rounded-full">{$cartCount}</div>
        {/if}
    </button>
</header>
