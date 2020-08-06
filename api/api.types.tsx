// c#

export interface dto {
    Id: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: number;
    Parent: any;//nullable number id
}


export interface anyDTO extends dto {
}

export interface errorDetails {
    Message: string;
    HResult: number;
    StackTrace: string;
    Source: string;
    Type: string;
    Inner: string;
}

///


//http://demo.wp-api.org/wp-json/wp/v2/posts/

// https://github.com/wp-api/node-wpapi
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



//missing!!! :
//nav-menu , /menu
//https://wordpress.stackexchange.com/questions/209381/get-wp-navigation-menu-from-rest-api-v2
//
// also elementor support


// posts , pages ,categories, tags/types ...
// get item / get items , page slug

//base types:

export interface wpString {
    rendered: string;
    //   "protected": false
}

export interface wpAuthor {
    display_name: string;
}


export interface wpBaseObj {
    id: number;
    link: string;
}

export interface wpBaseSlugObj extends wpBaseObj {
    slug: string;
}

export interface wpContentObj extends wpBaseSlugObj {
    date: string;
    modified: string;
    status: string;
    guid: wpString;
    title: wpString;
    type: string;
    author: number;
}

export interface wpTextContentObj extends wpContentObj {

    content: wpString
    excerpt: wpString
}

// wp types

export interface wpPost extends wpTextContentObj {
    sticky: boolean;
    categories: number[];
    tags: number[];
    author_info: wpAuthor;
}

////

export interface wpPage extends wpTextContentObj {
    parent: number;
    menu_order: number;
}

export interface wpUser extends wpBaseSlugObj {
    name: string;
    url: string;
    description: string;
}

export interface wpCategory extends wpBaseSlugObj {
    count: number;
    name: string;
    description: string;
    parent: number;
    taxonomy: string;
}

export interface wpTag extends wpBaseSlugObj {
    count: number;
    name: string;
    description: string;
    taxonomy: string;
}

export interface wpComment extends wpBaseObj {
    post: number;
    parent: number;
    content: wpString;
    author_name: string;
    author_url: string;
    date: string;
    status: string;
}

export interface wpMedia extends wpContentObj {
    descriptions: wpString;
    caption: wpString;
    alt_text: string;
    media_type: string;
    mime_type: string;
    post: number;
    source_url: string;
}

export interface wpSearchResult {
    id: number;
    title: string;
    url: string;
    type: string;//post
    subtype: string;//post or page
}


//https://shlomo888.xyz/wp-json/wp/v2/posts/?per_page=100&page=1


//https://shlomo888.xyz/wp-json/wp/v2/pages/?per_page=100&page=1


//https://demo.wp-api.org/wp-json/wp/v2/comments?post=1
