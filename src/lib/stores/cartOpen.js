import { writable } from 'svelte/store';

function createCartOpenStore() {
    const { subscribe, set, update } = writable(false);

    const open = () => set(true);
    const close = () => set(false);
    const toggle = () => update(isOpen => !isOpen);

    return {
        subscribe,
        open,
        close,
        toggle
}

export const cartOpen = createCartOpenStore();