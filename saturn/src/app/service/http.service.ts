import { Injectable } from '@angular/core';
import { RequestOptions, RequestOptionsArgs, RequestMethod, Http, Request, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  rootUrl: string;

  constructor(private _http: Http) {
    this.rootUrl = '/';
  }

  private _createHeaders(): Headers {
    let headers = new Headers();
    let user = JSON.parse(localStorage.getItem('user'));
    headers.set('token', user && user.token);
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
        headers: this._createHeaders()
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

}
