<script lang="ts">
    import Button from './Button.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Button class="hover:bg-black hover:text-white">{@render children?.()}</Button>
