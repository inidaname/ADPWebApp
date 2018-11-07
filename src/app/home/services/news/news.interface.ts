export interface INews{
    feed: Feed;
    items: News[];
    status: string;
}

export interface Feed{
    author: string;
    description: string;
    image: string;
    link: string;
    title: string;
    url: string;
}

export interface News {
    author: string;
    categories: Array<string>;
    content: string;
    description: string;
    enclosure: object;
    guid: string;
    link: string;
    pubDate: Date;
    thumbnail: string;
    title: string;
}
