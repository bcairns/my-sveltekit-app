<script lang="ts">
	interface Props {
		hex: any;
		selected: any;
		onclick?: (event: any) => void;
	}

	let { hex, selected, onclick }: Props = $props();
</script>

<button
	{onclick}
	class="w-[24px] h-[24px] rounded-full"
	class:border-2={selected}
	style:background-color={hex}
></button>
