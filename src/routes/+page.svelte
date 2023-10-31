<script>
	let rtl = false;

	function toggleRTL() {
		rtl = !rtl;
	}
</script>

<button on:click={toggleRTL}>Toggle RTL</button>

<div class="grid gap-6" dir={rtl ? 'rtl' : 'ltr'}>

	<header class="border p-4 flex gap-6 justify-between items-center">
		<div class="font-bold uppercase text-24 text-blue">Logitech</div>
		<div class=""><iconify-icon class="text-30" icon="mdi:cart-outline"></iconify-icon></div>
	</header>

	<main class="grid gap-6 md:[grid-template-columns:250px_auto]">
		<div class="border p-6">Filters</div>
		<div class="border p-6">
			<h1>Main Content</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem in nobis numquam odio praesentium repellendus rerum sed totam ullam! Architecto consequuntur debitis delectus mollitia porro quia velit? Consectetur, in magni.</p>
		</div>
	</main>

	<footer class="p-6 flex flex-wrap gap-6 justify-between bg-gray-200 text-white">
		<div class="">&copy;2023 Logitech</div>
		<div class="text-blue flex flex-wrap gap-6">
			<a href="#">About</a>
			<a href="#">Contact</a>
			<a href="#">Support</a>
			<a href="#">Privacy</a>
		</div>
	</footer>

</div>

<style lang="scss">
	footer {
		a {
			&:hover {
				@apply underline;
			}
		}
	}
</style>