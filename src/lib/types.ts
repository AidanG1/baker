type block = {
    _key: string;
    _type: string;
    children: Array<object>;
    markDefs: Array<string>;
    style: string
}

type pageType = {
    body: Array<block>;
    slug: object;
    title: string;
}

export type { pageType }