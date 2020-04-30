
export interface dto {
    Id: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: number;
    Parent: any;
}


export interface anyDTO extends dto {}

export interface post extends dto {
    title: string;
    content: string;
}


//https://github.com/wp-api/node-wpapi
//
// wp.posts()...: Request items from the /posts endpoints
// wp.pages()...: Start a request for the /pages endpoints
// wp.types()...: Get Post Type collections and objects from the /types endpoints
// wp.comments()...: Start a request for the /comments endpoints
// wp.taxonomies()...: Generate a request against the /taxonomies endpoints
// wp.tags()...: Get or create tags with the /tags endpoint
// wp.categories()...: Get or create categories with the /categories endpoint
// wp.statuses()...: Get resources within the /statuses endpoints
// wp.users()...: Get resources within the /users endpoints
// wp.search()...: Find resources of any [REST-enabled] post type matching a ?search= string
//     wp.media()...: Get Media collections and objects from the /media endpoints
// wp.themes()...: Read information about the active theme from the /themes endpoint (always requires authentication)
// wp.settings()...: Read or update site settings from the /settings endpoint (always requires authentication)
// wp.blocks()...: Create queries against the blocks endpoint


//posts , pages ,categories, tags/types ...
//get item / get items , page slug


export interface errorDetails {
    Message: string;
    HResult: number;
    StackTrace: string;
    Source: string;
    Type: string;
    Inner: string;
}
