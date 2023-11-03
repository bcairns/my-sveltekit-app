import {error} from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const id = params.id;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        const json = await response.json();

        return {
            post: json
        };

    } catch (err) {

        throw error(404)

    }


}