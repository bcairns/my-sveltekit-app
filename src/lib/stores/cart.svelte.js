/*
 *  {
 *    'sku123': {
 *      ...
 *    },
 *    'sku234': {
 *      ...
 *    }
 */

export function createCart() {
    let isOpen = $state(false);
    const items = $state({});
    const count = $derived(Object.keys(items).length);

    return {
        items: () => items,
        count: () => count,
        add: (title, variant) => {
            items[variant.sku] = {title, ...variant};
            isOpen = true;
        },
        remove: (sku) => {
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
