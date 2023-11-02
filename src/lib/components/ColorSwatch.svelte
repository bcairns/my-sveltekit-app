<script>
    export let hex;
    export let selected;
</script>

<button on:click
        class="w-[24px] h-[24px] rounded-full"
        class:border-2={selected}
        style:background-color={hex}
></button>