import { Injectable } from '@angular/core';
import { RequestOptions, RequestOptionsArgs, RequestMethod, Http, Request, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { isEmpty } from '../common/util';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

  rootUrl: string;

  constructor(private _http: Http) {
    this.rootUrl = '/';
  }

  public createHeaders(): Headers {
    let headers = new Headers();
    const token = localStorage.getItem('token');
    if (!isEmpty(token)) {
      headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  private _request(
    method: RequestMethod,
    relativeUrl: string,
    body?: string,
    options?: RequestOptionsArgs): Observable<any> {
      const url = this.rootUrl + relativeUrl;
      const requestOptions = new RequestOptions(Object.assign({
        method: method,
        url: url,
        body: body,
        headers: this.createHeaders()
      }, options));
      return this._http.request(new Request(requestOptions));
  }

  get(url: string, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Get, url, null, options);
  }
  post(url: string, body: any, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Post, url, body, options);
  }
  put(url: string, body: any, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Put, url, body, options);
  }
  delete(url: string, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Delete, url, null, options);
  }

  public handleError(error: any) {
    let errorMessage = '';
    if (error.message === 'Timeout has occurred') {
      errorMessage = 'request timeout';
    } else if (error.status === 400) {
      errorMessage = JSON.parse(error._body).message;
    } else if (error.status === 500) {
      errorMessage = 'service error';
    } else if (error.status === 401) {
      errorMessage = 'token error';
    } else if (error.status === 403) {
      errorMessage = JSON.parse(error._body).message;
    } else if (error.status === 404) {
      errorMessage = error._body;
    }
    return Observable.throw(errorMessage);
  }

}
