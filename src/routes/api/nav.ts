import bakerClient from '$lib/sanity';
export async function get() {
    const outer_query = '*[_type == "nav" && nav_type == "navbar"][0] {content}';
    const nav = await bakerClient.fetch(outer_query);
    let nav_pages = [];
    for (let nav_item of nav.content) {
        const query = '*[_id == $id][0]';
        const query_params = { id: nav_item._ref };
        const query_nav_item = await bakerClient.fetch(query, query_params);
        console.log(query_nav_item);
        nav_pages.push(query_nav_item);
    }
    return {
        body: { nav_pages }
    };
}