import sanityClient from "@sanity/client"

// https://bobbyhadz.com/blog/javascript-format-date-yyyy-mm-dd
// function padTo2Digits(num) {
//     return num.toString().padStart(2, '0');
// }

// function formatDate(date) {
//     return [
//         date.getFullYear(),
//         padTo2Digits(date.getMonth() + 1),
//         padTo2Digits(date.getDate()),
//     ].join('-');
// }

// let d = formatDate(new Date())


// Note: Do not be tempted to use a dynamic value for the apiVersion. 
// The reason for setting a static value is to prevent unexpected, breaking changes.

const bakerClient = sanityClient({
    projectId: 'zfhxf8dx',
    dataset: 'production',
    apiVersion: '2022-04-10', // use current UTC date - see "specifying API version"!
    token: '',
    // token: import.meta.env.SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
})

export default bakerClient