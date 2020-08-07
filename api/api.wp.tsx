import React from 'react';
import {_api_get, swr_wrap, swr_get} from './api.base';

import {configProfider} from '../services/configProvider';
import {wpPage, wpPost} from "./api.types";
import DOMPurify from 'dompurify';
import _ from 'lodash';


const WP_Url: string = configProfider.getConfig().WP_Url || 'http://demo.wp-api.org/wp-json'; // setExternal ip , by init() config , not localhost

const WP_Url_V2: string = WP_Url + "/wp/v2/";
const QueryPostfix: string = "/?per_page=100&page=";
//const WPAPI = require('wpapi/superagent');
//const wp = new WPAPI({ endpoint: 'http://src.wordpress-develop.dev/wp-json' });

//https://888888888.xyz/wp-json/wp/v2/posts/?per_page=100&page=1
//https://888888888.xyz/wp-json/wp/v2/pages/?per_page=100&page=1

// posts/pages/categories

function sanitize_Html(html: string) {
    //html = "<div></div>";
    let cleanHtml = DOMPurify.sanitize(html, {SAFE_FOR_JQUERY: true});
    html = _.unescape(cleanHtml);
    return html;
}

export const WordPress_Api = { // strong typed , read only , [admin is from wordpress itself] , no need for WPAPI

    getPosts: (page: number = 1) => {
        const url = WP_Url_V2 + "posts" + QueryPostfix + page;
        return swr_get(url, (data: wpPost[]) => {
            return data.map(post => {
                const sanitizedHtmlContent = sanitize_Html(post.content.rendered);
                return (
                    <React.Fragment>
                        <h1>{post.title.rendered}</h1>
                        <p>{post.modified}</p>
                        <div dangerouslySetInnerHTML={{__html: sanitizedHtmlContent}}>
                        </div>
                        {/*    elementor content rendering support*/}
                    </React.Fragment>
                )
            });
        })
    }, getPages: (page: number = 1) => {

        const url = WP_Url_V2 + "pages" + QueryPostfix + page;
        return swr_get(url, (data: wpPage[]) => {
            return data.map(pg => {
                const sanitizedHtmlContent = sanitize_Html(pg.content.rendered);
                return (
                    <React.Fragment>
                        <h1>{pg.title.rendered}</h1>
                        <div dangerouslySetInnerHTML={{__html: sanitizedHtmlContent}}>
                        </div>
                        {/*    elementor content rendering support*/}
                    </React.Fragment>
                )
            });
        })
    },
};
