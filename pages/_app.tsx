import { AppProps } from 'next/app';
import '../styles.scss';
import 'antd/dist/antd.css';

import { Provider } from 'mobx-react';
import {useStore} from "../state/root.store";

export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  const store = useStore(pageProps.initialState)
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>);
}


//https://github.com/shadowwalker/next-pwa

//https://developers.google.com/web/tools/workbox/guides/get-started