import Document, { Head, Main, NextScript } from 'next/document';
import ServiceWorker from './service-worker';

export default class extends Document {
  // static getInitialProps({renderPage}) {
  // 	const {html, head, errorHtml, chunks} = renderPage()
  // 	return {html, head, errorHtml, chunks, styles}
  // }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          {/* <meta charset="utf-8" /> */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="manifest" href="/static/manifest.json" />
          <title>Next.js</title>

          {/* <meta name='application-name' content={APP_NAME} /> */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          {/* <meta name='apple-mobile-web-app-title' content={APP_NAME} /> */}
          {/* <meta name='description' content={APP_DESCRIPTION} /> */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />


          {/* <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' /> */}

          {
            //todo:
          }
          {/*<meta charSet="utf-8">*/}
          {/*  <base href="/">*/}
          {/*    <meta name="Description" content="zohar harakia">*/}


          {/*      <meta name="theme-color" content="#16161d">*/}
          {/*        <meta name="apple-mobile-web-app-capable" content="yes">*/}
          {/*          <meta name="mobile-web-app-capable" content="yes">*/}

          {/*            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">*/}
          {/*              <meta name="viewport"*/}
          {/*                    content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"/>*/}
          {/*              <meta http-equiv="Content-type" content="text/html;charset=UTF-8">*/}


          {/*                <meta http-equiv="x-dns-prefetch-control" content="on">*/}
          {/*                  <link rel="dns-prefetch" href="/cdnjs.cloudflare.com"/>*/}
          {/*                  <link rel="preconnect" href="//cdnjs.cloudflare.com"/>*/}
          {/*                  <link rel="dns-prefetch" href="/use.fontawesome.com"/>*/}
          {/*                  <link rel="preconnect" href="//use.fontawesome.com"/>*/}
          {/*                  <link rel="dns-prefetch" href="/cdn.jsdelivr.net"/>*/}
          {/*                  <link rel="preconnect" href="/cdn.jsdelivr.net"/>*/}


          {/*                  <meta http-equiv="content-language" content="en"/>*/}
          {/*                  <meta property="og:site_name" content="zohar harakia"/>*/}
          {/*                  <meta property="og:locale" content="en_US"/>*/}
          {/*                  <meta name="twitter:title" property="og:title" itemProp="name" content="zohar harakia"/>*/}
          {/*                  <meta name="twitter:description" property="og:description" itemProp="description"*/}
          {/*                        content="test stencil"/>*/}


          {/*                  <link rel="stylesheet"*/}
          {/*                        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap-reboot.min.css"*/}
          {/*                        integrity="sha256-pTFzHsh1e+rz97pjNUpygMbwPzZM3iI3jPd9k4PBTko="*/}
          {/*                        crossOrigin="anonymous"/>*/}

          {/*                  <link rel="stylesheet"*/}
          {/*                        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap-grid.min.css"*/}
          {/*                        integrity="sha256-UQsknf/mQPLQ3ybNMD/V2mKe4JGc7KuYUxOhjQW0P18="*/}
          {/*                        crossOrigin="anonymous"/>*/}


          {/*                  <link rel="stylesheet"*/}
          {/*                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"*/}
          {/*                        integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ="*/}
          {/*                        crossOrigin="anonymous"/>*/}


          {/*                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1.7.1/glider.min.css"/>*/}

          {/*                  <script src="https://cdn.jsdelivr.net/npm/glider-js@1.7.1/glider.min.js"></script>*/}


          {/*                  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"*/}
          {/*                          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="*/}
          {/*                          crossOrigin="anonymous"></script>*/}

          {/*                  <link rel="stylesheet"*/}
          {/*                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"*/}
          {/*                        integrity="sha256-UK1EiopXIL+KVhfbFa8xrmAWPeBjMVdvYMYkTAEv/HI="*/}
          {/*                        crossOrigin="anonymous"/>*/}

          {/*                  <link rel="stylesheet"*/}
          {/*                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"*/}
          {/*                        integrity="sha256-4hqlsNP9KM6+2eA8VUT0kk4RsMRTeS7QGHIM+MZ5sLY="*/}
          {/*                        crossOrigin="anonymous"/>*/}

          {/*                  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"*/}
          {/*                          integrity="sha256-NXRS8qVcmZ3dOv3LziwznUHPegFhPZ1F/4inU7uC8h0="*/}
          {/*                          crossOrigin="anonymous"></script>*/}


          {/*                  <script*/}
          {/*                      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>*/}

          {/*                  <script*/}
          {/*                      src="https://cdnjs.cloudflare.com/ajax/libs/tippy.js/5.2.0/tippy-bundle.iife.min.js"></script>*/}

          {/*                  <script src="https://unpkg.com/micromodal@0.4.2/dist/micromodal.min.js"></script>*/}


          {/*                  <script type="module" src="/build/app.esm.js"></script>*/}
          {/*                  <script noModule src="/build/app.js"></script>*/}

          {/*                  <link href="/build/app.css" rel="stylesheet">*/}

          {/*                    <link rel="apple-touch-icon" href="/assets/icon/icon.png">*/}
          {/*                      <link rel="icon" type="image/x-icon" href="/assets/icon/favicon.ico">*/}
          {/*                        <link rel="shortcut icon" href="/assets/icon/favicon.ico"/>*/}

          {/*                        <link rel="manifest" href="/manifest.json">*/}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <ServiceWorker />

          {/*<div>*/}
          {/*  <nav-header></nav-header>*/}

          {/*  <main className="App">*/}
          {/*    <div id="router-outlet"></div>*/}
          {/*  </main>*/}

          {/*  <site-footer></site-footer>*/}
          {/*</div>*/}
        </body>
      </html>
    );
  }
}
