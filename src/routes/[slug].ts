import bakerClient from '$lib/sanity';

export async function get({ params }) {
    const query = '*[_type == "page" && slug.current == $slug][0] {title, slug, body, "files": files[].asset->{originalFilename, url}, _updatedAt}';
    const query_params = { slug: params.slug };
    const page = await bakerClient.fetch(query, query_params)
    if (page) {
        return {
            status: 200,
            body: {
                page
            }
        }
    } else {
        return {
            status: 404
        }
    }
}