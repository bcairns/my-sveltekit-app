import type { CartItems } from "$lib/types/CartItems.js";
import type {Variant} from "$lib/types/Product";

export function createCart() {
    const items = $state({} as CartItems);
    const count = $derived(Object.keys(items).length);
    let isOpen = $state(false);

    return {
        items: () => items,
        count: () => count,
        add: (title: string, variant: Variant) => {
            items[variant.sku] = {title, ...variant};
            isOpen = true;
        },
        remove: (sku: string) => {
            delete items[sku];
        },
        isOpen: () => isOpen,
        open: () => {
            isOpen = true
        },
        close: () => {
            isOpen = false
        },
    };
}
