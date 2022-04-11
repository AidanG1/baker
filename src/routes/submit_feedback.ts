
import type { feedback } from '$lib/types';
import sanityClient from "@sanity/client"


const feedbackClient = sanityClient({
    projectId: 'zfhxf8dx',
    dataset: 'production',
    apiVersion: '2022-04-10', // use current UTC date - see "specifying API version"!
    token: import.meta.env.VITE_SANITY_FEEDBACK_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
})

/** @type {import('./submit_feedback').RequestHandler} */
export async function post({ request }) {
    let r: feedback = await request.json()
    let res = await feedbackClient.create(r)
    if (res) {
        return {
            status: 200,
            body: { res }
        }
    } else {
        console.log(res)
        return {
            status: 400,
            body: { res }
        };
    }
}