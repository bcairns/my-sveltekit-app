<script>
    /** @type {{class: any, children?: import('svelte').Snippet}} */
    let { class: _class, children } = $props();

</script>

<button class="border-2 py-2 px-4 uppercase font-bold rounded-full {_class}">{@render children?.()}</button>
