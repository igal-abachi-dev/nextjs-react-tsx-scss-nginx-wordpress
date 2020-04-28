import Document, {Head, Main, NextScript} from 'next/document';
import ServiceWorker from './service-worker'

export default class extends Document {
	// static getInitialProps({renderPage}) {
	// 	const {html, head, errorHtml, chunks} = renderPage()
	// 	return {html, head, errorHtml, chunks, styles}
	// }

	render() {
		return (
			<html lang="en" dir='ltr'>
				<Head>
					{/*<meta charset="utf-8" />*/}
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
					<link rel="icon" href="/static/favicon.ico" />
					<link rel="manifest" href="/static/manifest.json" />
					<title>Next.js</title>

					{/*<meta name='application-name' content={APP_NAME} />*/}
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-status-bar-style' content='default' />
					{/*<meta name='apple-mobile-web-app-title' content={APP_NAME} />*/}
					{/*<meta name='description' content={APP_DESCRIPTION} />*/}
					<meta name='format-detection' content='telephone=no' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='theme-color' content='#FFFFFF' />

					{/*<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />*/}
				</Head>
				<body className="custom_class">
					<Main />
					<NextScript />
					<ServiceWorker />
				</body>
			</html>
		)
	}
}
