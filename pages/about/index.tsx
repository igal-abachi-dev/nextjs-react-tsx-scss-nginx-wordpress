import axios from 'axios';
// @ts-ignore
import useSWR from 'swr';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { GetServerSideProps, GetStaticProps } from 'next';
import styles from './index.module.scss';
import { initializeStore } from '../../state/root.store';
import {WordPress_Api} from "../../api/api.wp";


const HelloComponent = dynamic(() => import('../../components/hello'));
//const Recipes = lazy(() => import("./components/Recipes"));

function HTTP_Get(url: string) {
  // const fetcher = url => fetch(url).then(r => r.json())

  console.log(`GET: ${url}`);
  return axios.get(url)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export default function About({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App: Test</title>
        <meta name="Description" content="Create Next About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <div style={{maxWidth:'700px'}}>
            {

                (WordPress_Api.getPosts(1))
            }
        </div>
    </div>
  );
}


// client side fetching on every visit , good for a specific dynamic result
function GetPosts(): any {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', HTTP_Get);

  if (error != null) return <li>failed to load</li>;
  if (data == null) return <li>loading...</li>;
  return data.map((post) => (
    <li>{post.title}</li>
  ));
}


// ssg good for large static result:
// SSG(server side generation): precompiled json file of result for static export
// export const getStaticProps: GetStaticProps = async context => {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     const posts = await res.data;
//
//     return {
//         props: {
//             posts: posts,
//         },
//     }
// };


// SSR(server side rendering): can not be exported to static nginx , uses node.js
// export const getServerSideProps: GetServerSideProps = async context => {
