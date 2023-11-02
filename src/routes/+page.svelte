<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import PlpPageLayout from '../lib/components/PlpPageLayout.svelte';

	let rtl = false;
	let dir;

	function toggleRTL() {
		rtl = !rtl;
	}

	function getDir(foo) {
		return foo ? 'rtl' : 'ltr';
	}

	$: dir = rtl ? 'rtl' : 'ltr';
</script>

<button on:click={toggleRTL}>Toggle RTL</button>

<div class="grid gap-6" dir={getDir(rtl)}>
	<Header />
	<PlpPageLayout />
	<Footer />
</div>

