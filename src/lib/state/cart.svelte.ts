import type { CartItems } from "$lib/types/CartItems.js";
import type {Variant} from "$lib/types/Product";

export function createCart() {
    const items = $state({} as CartItems);
    const count = $derived(Object.keys(items).length);
    const totalPrice = $derived(calcTotalPrice(items));
    let isOpen = $state(false);

    function calcTotalPrice(cartItems: CartItems) {
        return Object.values(cartItems).reduce( (sum, item) => sum + item.price, 0);
    }

    return {
        items: () => items,
        count: () => count,
        totalPrice: () => totalPrice,
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
