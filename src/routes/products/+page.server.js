import { mockProducts } from '$lib/mockProducts';

export function load() {

    /*
     * A real version might use something like /routes/products/[category]/[product_id] and then fetch data using that
     */

    return {
        products: mockProducts
    };
}