<script>
    import { fade } from 'svelte/transition';
    import {onMount} from "svelte";

    onMount(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = '';
        };
    });
</script>

<div transition:fade={{duration: 200}} class="fixed top-0 left-0 w-full h-full bg-black/80"></div>
