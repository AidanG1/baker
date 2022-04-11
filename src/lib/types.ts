type block = {
    _key: string;
    _type: string;
    children: Array<object>;
    markDefs: Array<string>;
    style: string
}

type file = {
    originalFilename: string;
    url: string;
}

interface pageType {
    body: Array<block>;
    slug: object;
    title: string;
    _updatedAt: string;
    files: Array<file>
}

interface dropdownType {
    title: string;
    pages: Array<pageType>;
}

interface feedback {
    _type: string,
    name: string,
    email: string,
    happy: number,
    subject: string,
    message: string,
}


export type { pageType }
export type { dropdownType }
export type { feedback }