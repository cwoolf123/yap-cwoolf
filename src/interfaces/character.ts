interface ComicsList {
    available: number;
    collectionURI: string;
    items: ComicSummary[];
    returned: number;
}

interface ComicSummary {
    resourceURI: string;
    name: string;
}

interface SeriesList {
    available: number;
    collectionURI: string;
    items: SeriesSummary[];
    returned: number;
}

interface SeriesSummary {
    resourceURI: string;
    name: string;
}

interface StoriesList {
    available: number;
    collectionURI: string;
    items: StoriesSummary[];
    returned: number;
}

interface StoriesSummary {
    resourceURI: string;
    name: string;
    type: string;
}

interface EventsList {
    available: number;
    collectionURI: string;
    items: EventsSummary[];
    returned: number;
}

interface EventsSummary {
    resourceURI: string;
    name: string;
}

interface Url {
    type: string;
    url: string;
}

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: Date;
    thumbnail: { path: string, extension: string; }
    resourceURI: string;
    comics: ComicsList;
    series: SeriesList;
    stories: StoriesList;
    events: EventsList;
    urls: Url[];
}