type block = {
    _key: string;
    _type: string;
    children: Array<object>;
    markDefs: Array<string>;
    style: string
}

interface pageType {
    _created_at: string;
    _id: string;
    _updated_at: string;
    _rev: string;
    _type: string;
    body: Array<block>;
    slug: object;
    title: string;
}

export type { pageType }