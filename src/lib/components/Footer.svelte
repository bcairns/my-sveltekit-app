<script>
    import FooterLink from './FooterLink.svelte';
    import {getContext} from 'svelte';

    const title = getContext('site.title');
</script>

<footer class="p-6 flex flex-wrap gap-6 justify-between bg-gray-200 text-white">
    <div class="">&copy;2023 {title}</div>
    <div class="text-blue flex flex-wrap gap-6">
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/support">Support</FooterLink>
        <FooterLink href=/privacy>Privacy</FooterLink>
    </div>
</footer>
