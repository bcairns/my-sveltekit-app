import type {Variant} from "$lib/types/Product";

export interface CartItem extends Variant {
    title: string;
}