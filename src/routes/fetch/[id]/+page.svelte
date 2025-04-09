<script lang="ts">
	interface Props {
		data: any;
	}

	let { data }: Props = $props();
</script>

<div class="font-bold capitalize">{data.post?.title}</div>
<div class="">{data.post?.body}</div>
