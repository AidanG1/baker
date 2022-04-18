import { google } from 'googleapis'
import fs from 'fs'

const SCOPES = [
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.readonly',
];

function authorize() {
    const client_email = import.meta.env.VITE_CLIENT_EMAIL
    const private_key = import.meta.env.VITE_CLIENT_PRIVATE_KEY

    const jwtClient = new google.auth.JWT(client_email, null, private_key, SCOPES)
    return jwtClient
}

/** @type {import('./get__google_doc').RequestHandler} */
export async function get({ request, params }) {
    // const response = await fetch(`https://content.googleapis.com/drive/v3/files/
    // ${params.id}/export?mimeType=text/html&key=${import.meta.env.VITE_GOOGLE_DOCS}&fields=data`)
    // let buffers = []
    // console.log(response)
    // if (response) {
    //     return {
    //         status: 200,
    //         body: {
    //             response
    //         }
    //     }
    // } else {
    //     return {
    //         status: 400,
    //         body: { message: 'You must submit something of type feedback' }
    //     }
    // }
    const drive = google.drive({ version: 'v3', auth: authorize() });
    var fileId = params.id;
    var dest = fs.createWriteStream(`./tmp/${params.id}.html`);
    drive.files.export({
        fileId: fileId,
        mimeType: 'text/html',
    })
        .on('end', function () {
            console.log('Done');
        })
        .on('error', function (err) {
            console.log('Error during download', err);
        })
        .pipe(dest);
}