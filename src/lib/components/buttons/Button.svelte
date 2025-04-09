<script lang="ts">
    interface Props {
        class?: string;
        children?: import('svelte').Snippet;
    }

    let { class: _class = '', children }: Props = $props();
</script>

<button class="border-2 py-2 px-4 uppercase font-bold rounded-full {_class}">{@render children?.()}</button>
