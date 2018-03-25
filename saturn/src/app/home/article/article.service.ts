import { Injectable } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Http } from '@angular/http';
import { ArticlePagination } from './article.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleService {

  constructor(private _httpService: HttpService, public http: Http) { }

  list(): Observable<any> {
    return this._httpService.get(`api/articles`)
    .timeout(15000)
    .map((response: Response) => {
      return response;
    })
    .catch(this._httpService.handleError);
  }
  addArticle(article) {
    return this._httpService.post(`api/articles`, article)
    .timeout(15000)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this._httpService.handleError);
  }

  updateArticle (article: any, articleId) {
    return this._httpService.put(`portal/articles/${articleId}`, article)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this._httpService.handleError);
  }

  getArticle(page, size, searchContent): Observable<ArticlePagination> {
    return this._httpService
      .get(`portal/articles?searchContent=${searchContent}&page=${page}&size=${size}`)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this._httpService.handleError);
  }

  deleteArticle(ids): Observable<any[]> {
    return this._httpService.delete(`portal/articles?companyIds=${ids}`)
    .timeout(15000)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this._httpService.handleError);
  }

}
