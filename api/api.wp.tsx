import { _api_get, swr_wrap, swr_get } from './api.base';

const WPAPI = require('wpapi/superagent');
// const wp = new WPAPI({ endpoint: 'http://src.wordpress-develop.dev/wp-json' });


// posts/pages/categories

export const WordPress_Api = { // strong typed , read only , [admin is from wordpress itself]
  // getPosts:  () => {
  //     return swr_get("https://www.intuit.com/blog/wp-json/wp/v2/posts/", (data) => {
  //         return data.map(post => (
  //             <li>{post.title}</li>
  //         ));
  //     })
  // },
};
