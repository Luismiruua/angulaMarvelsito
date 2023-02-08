export interface Marvel {
  code: 'int',
  status: string,
  copyright: string,
  attributionText: string,
  attributionHTML: string,
  data: {
    offset: 'int',
    limit: 'int',
    total: 'int',
    count: 'int',
    results: [
      {
        id: 'int',
        name: string,
        description: string,
        modified: Date,
        resourceURI: string,
        urls: [
          {
            type: string,
            url: string
          }
        ],
        thumbnail: {
          path: string,
          extension: string
        },
        comics: {
          available: 'int',
          returned: 'int',
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        },
        stories: {
          available: 'int',
          returned: 'int',
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string,
              type: string
            }
          ]
        },
        events: {
          available: 'int',
          returned: 'int',
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        },
        series: {
          available: 'int',
          returned: 'int',
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        }
      }
    ]
  },
  etag: string
}

export interface Data {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Result[];
}

export interface Result {
  id: 'int',
        name: string,
        description: string,
        modified: Date,
        resourceURI: string,
        urls: [
          {
            type: string,
            url: string
          }
        ],
        thumbnail: {
          path: string,
          extension: string
        },
        comics: {
          available: 'int',
          returned: 'int',
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        },
        stories: {
          available: 'int',
          returned: 'int',
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string,
              type: string
            }
          ]
        },
        events: {
          available: 'int',
          returned: 'int',
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        },
        series: {
          available: 'int',
          returned: 'int',
          collectionURI: string,
          items: [
            {
              resourceURI: string,
              name: string
            }
          ]
        }
}

export interface Comics {
  available:     number;
  collectionURI: string;
  items:         ComicsItem[];
  returned:      number;
}

export interface ComicsItem {
  resourceURI: string;
  name:        string;
}

export interface Stories {
  available:     number;
  collectionURI: string;
  items:         StoriesItem[];
  returned:      number;
}

export interface StoriesItem {
  resourceURI: string;
  name:        string;
  type:        ItemType;
}

export enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
}

export interface Thumbnail {
  path:      string;
  extension: Extension;
}

export enum Extension {
  GIF = "gif",
  Jpg = "jpg",
}

export interface URL {
  type: URLType;
  url:  string;
}

export enum URLType {
  Comiclink = "comiclink",
  Detail = "detail",
  Wiki = "wiki",
}
