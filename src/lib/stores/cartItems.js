import { persisted } from 'svelte-persisted-store'
import {readonly, writable} from 'svelte/store';
import {cartOpen} from './cartOpen';

/*
 *  {
 *    'sku123': {
 *      ...
 *    },
 *    'sku234': {
 *      ...
 *    }
 */


const items = persisted('cart.items', {});

export function addToCart( title, variant ) {

    const productData = { title, ...variant };

    items.update((state) => {
        const sku = variant.sku;
        state[sku] = productData;
        return state;
    });

    cartOpen.set(true);

}

export function removeFromCart( sku ) {
    items.update((state) => {
        delete state[sku];
        return state;
    });
}

export const cartItems = readonly(items);