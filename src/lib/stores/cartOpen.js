import { persisted } from 'svelte-persisted-store'
import {writable} from 'svelte/store';


export const cartOpen = persisted('cart.open', false, {storage: 'session'});