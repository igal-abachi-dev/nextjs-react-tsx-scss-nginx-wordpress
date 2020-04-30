import {
    _api_get,
    _api_post,
    _api_delete,
    _api_put,
    Api_Addr,
} from "./api.base";


import _ from "lodash";

//https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

//https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
/*
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
*/

export interface entityApi {

//IEnumerable<T> _GetAll();
    getAll(cb: any): Promise<void>; //return promise ,to wait many getAll,using  Promise.all([...]).then(()=>{});

//IEnumerable<T> _GetByParentId(int pid);
    getByParentId(pid, cb: any): Promise<void>;

//IEnumerable<T> _GetPage(int page, int pageSize);
    getPage(page: number, pageSize: number, cb: any): Promise<void>; //return promise ,to wait many getPage,using  Promise.all([...]).then(()=>{});

//IEnumerable<T> _GetPage(int page, int pageSize);
    getPageByParentId(pid: any, page: number, pageSize: number, cb: any): Promise<void>;

//T _GetItem(int id);
    getItem(id, cb: any): void;

//IEnumerable<T> getItems();
    getItems(ids, cb: any): void;


//void _CreateNew(T value);
    CreateNew(item: any, cb): void;

//void _UpdateItem(int id, T value);
    UpdateItem(item: any, cb): void;

//void _DeleteById(int id);
    DeleteById(id, cb: any): void;


//other:
    get(fn: string, cb: any): void;

    getWithQuery(fn: string, query: string, cb: any): void;

    //get by id
    getId(fn: string, id: number, cb: any): void;

    post(fn: string, item: any, cb: any): void;

    //post by id
    postId(fn: string, id: number, item: any, cb: any): void;
}

export const AuthApi = {
    Api_Addr: Api_Addr,

    login: function (userName: string, password: string, cb) {
        let encodedLogin = {challenge: ""};

        //4-5 sec login , protects against brute force
        _api_post(`/Login`, encodedLogin, cb);
    },

    refreshToken: function (refreshToken: string, cb) {
        let refToken = {refreshToken: refreshToken || ""};
        _api_post(`/RefreshToken`, refToken, cb);
    },


    resetPasswordGenCode: function (userName: string, cb) {
        let req = {UserName: userName || ""};

        _api_post(`/ResetPassword`, req, cb);
    }
};


// wordpress rest:  /wp-json/wp/v2/posts/
export const genApiRoutes = function genApiRoutes(route: entityApi, controller: string) {

    route.getAll = function (cb: any): Promise<void> {
        return _api_get(`/${controller}`, null, cb);
    };
    route.getItems = function (ids: number[], cb: any): Promise<void> {
        let idsStr: string = "-1";
        if (ids != null && ids.length > 0) {
            idsStr = ids.reduce(function (str, id) {
                if (id == null)
                    return '';
                return str + ',' + id.toString();
            }, '');
            if (idsStr.length == 0) {
                idsStr = "-1";
            } else if (idsStr[0] == ',') {
                idsStr = idsStr.substr(1);
            }
        }
        return _api_get(`/${controller}/`, `id=${idsStr}`, cb);
    };
    route.getByParentId = function (pid, cb: any): Promise<void> {
        return _api_get(`/${controller}/_byParentId/` + pid, null, cb);
    };

    route.getPage = function (page: number, pageSize: number, cb: any): Promise<void> {
        return _api_get(`/${controller}/page/${page}/${pageSize}`, null, cb);
    };

    route.getPageByParentId = function (pid: any, page: number, pageSize: number, cb: any): Promise<void> {
        return _api_get(`/${controller}/_byParentId/${pid}/page/${page}/${pageSize}`, null, cb);
    };

    route.getItem = function (id, cb: any) {
        _api_get(`/${controller}/` + id, null, cb);
    };

    route.CreateNew = function (item: any, cb) {
        _api_post(`/${controller}`, item, cb);
    };
    route.UpdateItem = function (item: any, cb) {
        _api_put(`/${controller}/` + item.Id, item, cb);
    };
    route.DeleteById = function (id, cb: any) {
        _api_delete(`/${controller}/` + id, cb);
    };


    //generic:
    route.get = function (fn: string, cb) {
        _api_get(`/${controller}/${fn}/`, null, cb);
    };
    route.getWithQuery = function (fn: string, query: string, cb) {
        _api_get(`/${controller}/${fn}/?` + query, null, cb);
    };
    route.getId = function (fn: string, id: number, cb) {
        _api_get(`/${controller}/${fn}/${id}`, null, cb);
    };
    route.post = function (fn: string, item: any, cb) {
        _api_post(`/${controller}/${fn}/`, item, cb);
    };
    route.postId = function (fn: string, id: number, item: any, cb) {
        _api_post(`/${controller}/${fn}/${id}`, item, cb);
    };
}

