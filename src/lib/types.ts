type block = {
    _key: string;
    _type: string;
    children: Array<object>;
    markDefs: Array<string>;
    style: string
}

interface pageType {
    body: Array<block>;
    slug: object;
    title: string;
    _updatedAt: string;
}

interface dropdownType {
    title: string;
    pages: Array<pageType>;
}


export type { pageType }
export type { dropdownType }