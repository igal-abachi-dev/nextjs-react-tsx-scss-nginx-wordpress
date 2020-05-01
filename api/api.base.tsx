import axios, { AxiosPromise } from 'axios';
import jwt_decode from 'jwt-decode';
import useSWR from 'swr';
import { configProfider } from '../services/configProvider';


Object.assign(axios.defaults, {
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});


configProfider.setMode('dev');
export const Api_Addr = configProfider.getConfig().ApiUrl || 'http://127.0.0.1:3000/api'; // setExternal ip , by init() config , not localhost


// swr_get(url,renderer)
export const swr_get = function SwrGet(url: string, renderer: any): any {
  return swr_wrap(url, _api_get, renderer);
};
export const swr_wrap = function SwrWrap(url: string, api: any, renderer: any): any {
  const { data, error } = useSWR(url, api ?? _api_get);
  /*
      HTTP_Get(url: string){
    return axios.get(url)
        .then(res => {
            return res.data;
        });
    */

  if (error != null) return <li>failed to load</li>; // x icon
  if (data == null) return <li>loading...</li>;// spinner circle
  if (renderer) { return renderer(data); }
  return null; '';
};


// axios.create({
//     baseURL:Api_Addr,
//     responseType: 'json'
// })


let _jwtToken: string = null;
let _logoutCallback: any = null;

export const _set_token = function _set_token(jwtToken: string): any {
  _jwtToken = jwtToken;
  if (_jwtToken != null) {
    const decodedJwt = jwt_decode(_jwtToken) as any;
    return decodedJwt;
  }
  return null;
};

export const _set_logoutCallback = function _set_logoutCallback(logoutCallback: any): void {
  _logoutCallback = logoutCallback;
};

function handler(cb: any, res: any, sendError = false, logoutOnAnyError = false): any {
  try {
    const data = (res == null) ? null : res.data as any;
    if (cb == null) {
      // return data;
      cb = (v: any) => {
      };
    }
    const err = (data == null)
      ? null
      : ((Array.isArray(data)) ? null : data.Error);

    // setTimeout(() => {
    try {
      if (err == null) {
        cb(data);// empty
        return data;
      }
      console.error(err); // 401 or islogin error , then store.logout()
      if (sendError) {
        cb(data, err);
      }
    } catch (e2) { // 401 or islogin error , then store.logout()
      if (res.status == 401 && _logoutCallback != null) { // also 403?
        _logoutCallback(false);// also token expired , handling , (long debug breakpoint)/(server private key changed  on restart)
      }
      console.error(`response handler error: ${e2}`);
    }
    // });
  } catch (e) { // 401 or islogin error , then store.logout()
    if (res.status == 401 && _logoutCallback != null) {
      _logoutCallback(false);// also token expired , handling , (long debug breakpoint)/(server private key changed  on restart)
    }
    console.error(`response handler error: ${e}`);
  }
  return null;
}

export const _api_get = function _api_get(api: string, qparams: string, cb: any): Promise<void> {
  try {
    console.log(`GET: ${api}`);
    if (qparams != null) {
      qparams = `?${qparams}`; // map {p:v} to "p=v;"
    }

    const url = api.toUpperCase().startsWith('http') ? api : Api_Addr + api + (qparams || '');
    let getPromise;
    const config = {
      headers: {
        //       'X-XSRF-TOKEN': (_xsrfToken || "")
      } as any,
      //    withCredentials: true
    } as any;
    if (_jwtToken != null) {
      config.headers.Authorization = `Bearer ${_jwtToken}`;
    }
    getPromise = axios.get(url, config);
    return getPromise.then((res) => {
      handler(cb, res, true);
    })
      .catch((err) => {
        console.error(`${api}: ${err || 'Error'}`);
        if (err.status == 401 && _logoutCallback != null) { // err.status == 401
          _logoutCallback(false); // only logout if has token and is invalid , not if token is null
        }
      });
  } catch (e) {
    console.error(`${api}: ${e || 'Error'}`);
  }
};


// xsrfCookieName: 'XSRF-TOKEN',
// xsrfHeaderName: 'X-XSRF-TOKEN'

export const _api_post = function _api_post(api: string, data: any, cb: any) {
  try {
    if (api != '/Login' && api != '/RefreshToken') {
      console.log(`POST: ${api}`);
    }
    const isLogin = (api == '/View/Login');
    const url = Api_Addr + api;
    axios.post(url, data, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${_jwtToken}`,
        //               'X-XSRF-TOKEN': (_xsrfToken || "")
        //                'Content-Length':data.length
      },
      //  withCredentials: true
    })
      .then((res) => {
        handler(cb, res, true, isLogin);
      })
      .catch((err) => { // 401 or islogin error , then store.logout()
        console.error(`${api}: ${err}`);

        if (err.status == 401 && _logoutCallback != null) { // err.status == 401
          _logoutCallback(false); // only logout if has token and is invalid , not if token is null
        }
      });
  } catch (e) { // 401 or islogin error , then store.logout()
    console.error(`${api}: ${e}`);

    if (e.status == 401 && _logoutCallback != null) { // err.status == 401
      _logoutCallback(false); // only logout if has token and is invalid , not if token is null
    }
  }
};
// Content-Type
// application/json
export const _api_put = function _api_put(api: string, data: any, cb: any) {
  try {
    console.log(`PUT: ${api}`);
    const url = Api_Addr + api;
    let putPromise;

    const config = {
      headers: {
        //           'X-XSRF-TOKEN': (_xsrfToken || "")
      } as any,
      //  withCredentials: true
    } as any;
    if (_jwtToken != null) {
      config.headers.Authorization = `Bearer ${_jwtToken}`;
    }
    putPromise = axios.put(url, data, config);
    putPromise.then((res) => {
      handler(cb, res, true);
    })
      .catch((err) => {
        console.error(`${api}: ${err}`);
      });
  } catch (e) {
    console.error(`${api}: ${e}`);
  }
};

export const _api_delete = function _api_delete(api: string, cb: any) {
  try {
    console.log(`DELETE: ${api}`);
    const url = Api_Addr + api;
    let deletePromise;

    const config = {
      headers: {
        //          'X-XSRF-TOKEN': (_xsrfToken || "")
      } as any,
      // withCredentials: true
    } as any;
    if (_jwtToken != null) {
      config.headers.Authorization = `Bearer ${_jwtToken}`;
    }
    deletePromise = axios.delete(url, config);
    deletePromise.then((res) => {
      handler(cb, res, true);
    })
      .catch((err) => {
        console.error(`${api}: ${err}`);
      });
  } catch (e) {
    console.error(`${api}: ${e}`);
  }
};
