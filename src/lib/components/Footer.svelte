<script>
    import FooterLink from './FooterLink.svelte';
    import {getContext} from 'svelte';

    const title = getContext('site.title');
</script>

<footer class="p-6 flex flex-wrap gap-6 justify-between bg-gray-200 text-white">
    <div class="">&copy;2023 {title}</div>
    <div class="text-blue flex flex-wrap gap-6">
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
        <FooterLink href="#">Support</FooterLink>
        <FooterLink href="#">Privacy</FooterLink>
    </div>
</footer>
