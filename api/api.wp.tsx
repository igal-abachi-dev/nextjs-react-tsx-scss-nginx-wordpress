import React from 'react';
import {_api_get, swr_wrap, swr_get} from './api.base';

import {configProfider} from '../services/configProvider';
import {wpPage, wpPost} from "./api.types";


const WP_Url: string = configProfider.getConfig().WP_Url || 'http://demo.wp-api.org/wp-json'; // setExternal ip , by init() config , not localhost

const WP_Url_V2: string = WP_Url + "/wp/v2/";
const QueryPostfix: string = "/?per_page=100&page=";

//const WPAPI = require('wpapi/superagent');
//const wp = new WPAPI({ endpoint: 'http://src.wordpress-develop.dev/wp-json' });

//https://888888888.xyz/wp-json/wp/v2/posts/?per_page=100&page=1
//https://888888888.xyz/wp-json/wp/v2/pages/?per_page=100&page=1

// posts/pages/categories

export const WordPress_Api = { // strong typed , read only , [admin is from wordpress itself] , no need for WPAPI
    getPosts: (page: number = 1) => {
        return swr_get(WP_Url_V2 + "posts" + QueryPostfix + page, (data: wpPost[]) => {
            return data.map(post => (
                <React.Fragment>
                    <h1>{post.title}</h1>
                    <p>{post.author_info.display_name} - {post.modified}</p>
                    <div>{post.content.rendered}</div>
                    {/*    elementor content rendering support*/}
                    </React.Fragment>
            ));
        })
    }, getPages: (page: number = 1) => {
        return swr_get(WP_Url_V2 + "pages" + QueryPostfix + page, (data: wpPage[]) => {
            return data.map(post => (
                <React.Fragment>
                    <h1>{post.title}</h1>
                    <div>{post.content.rendered}</div>
                    {/*    elementor content rendering support*/}
                    </React.Fragment>
            ));
        })
    },
};
