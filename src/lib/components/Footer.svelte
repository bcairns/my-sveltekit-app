<script lang="ts">
	import { getContext } from 'svelte';

	const title = getContext('site.title');
</script>

<footer class="p-6 flex flex-wrap gap-6 justify-between bg-gray-200 text-white">
	<div class="">&copy;2025 {title}</div>
	<div class="text-blue flex flex-wrap gap-6">
		{@render link('/about', 'About')}
		{@render link('/contact', 'Contact')}
		{@render link('/support', 'Support')}
		{@render link('/privacy', 'Privacy')}
	</div>
</footer>

{#snippet link(href: string, label: string)}
	<a {href} class="hover:underline font-bold">{label}</a>
{/snippet}
