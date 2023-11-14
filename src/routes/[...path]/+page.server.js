/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    /*
     * [...path] serves as a "catch-all" wildcard path.
     * It would be a good option for handling CMS content with arbitrary paths:
     * Fetch page content via API using params.path, or (eg) `throw error(404)` if not found.
     */

    return {
        path: params.path
    };
}