import ReactGA from 'react-ga';

const IS_BROWSER = typeof window !== 'undefined';

export const initGA = (code: string = 'UA-XXXXXXXXX'): any => {
  if (IS_BROWSER && !(window as any).GA_INITIALIZED && code) {
    ReactGA.initialize(code || 'UA-XXXXXXXXX');
    (window as any).GA_INITIALIZED = true;
  }

  // fluent
  return {
    logPageView,
    logEvent,
    logException,
  };
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  //
  ReactGA.pageview(window.location.pathname + window.location.search);
  // ReactGA.pageview(window.location.pathname );
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
/*
functional component:
const AppIndex = () => {
    useEffect(() => {

      initGA('UA-XXXXXXXXX').logPageView()

    or class component:
  componentDidMount () {
      initGA('UA-XXXXXXXXX').logPageView()
  }
*/


// newer gtag api instead of ga: [doesn't work with ssr , only export/ssg]
// https://github.com/zeit/next.js/tree/canary/packages/next-plugin-google-analytics/src

// https://github.com/zeit/next.js/issues/6665
