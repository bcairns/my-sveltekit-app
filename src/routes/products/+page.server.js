import { mockProducts } from '../../lib/mockProducts';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    /*
     * A real version might use something like /routes/products/[category]/[product_id] and then fetch data using that
     */

    return {
        products: mockProducts
    };
}