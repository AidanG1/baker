import imageUrlBuilder from '@sanity/image-url'
import bakerClient from './sanity'

const builder = imageUrlBuilder(bakerClient)

function urlFor(source: string) {
    console.log
    return builder.image(source)
}

export default urlFor
export async function captionFor(ref: string) {
    const query = '*[_type == "image" && ref._id == $ref][0] {caption}';
    const query_params = { ref: ref };
    return await bakerClient.fetch(query, query_params)
}