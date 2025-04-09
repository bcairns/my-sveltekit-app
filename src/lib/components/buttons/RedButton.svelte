<script lang="ts">
	import Button from './Button.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Button class="border-red bg-red text-white hover:bg-transparent hover:text-red"
	>{@render children?.()}</Button
>
