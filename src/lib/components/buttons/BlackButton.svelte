<script lang="ts">
    import Button from './Button.svelte';

    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<Button class="bg-black text-white hover:bg-transparent hover:text-black">{@render children?.()}</Button>
