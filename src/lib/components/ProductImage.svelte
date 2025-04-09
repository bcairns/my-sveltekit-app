<script lang="ts">
	interface Props {
		hex: any;
	}

	let { hex }: Props = $props();
</script>

<div class="aspect-4/3" style:background-color={hex}></div>
