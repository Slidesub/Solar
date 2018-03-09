import { Injectable } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Http } from '@angular/http';
import { ArticlePagination } from './article.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleService {

  constructor(private _httpService: HttpService, public http: Http) { }

  addArticle(article) {
    return this._httpService.post(`portal/articles`, article)
    .timeout(15000)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this.handleError);
  }

  updateArticle (article: any, articleId) {
    return this._httpService.put(`portal/articles/${articleId}`, article)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  getArticle(page, size, searchContent): Observable<ArticlePagination> {
    return this._httpService
      .get(`portal/articles?searchContent=${searchContent}&page=${page}&size=${size}`)
      .timeout(15000)
      .map((response: Response) => {
        return response.json().data;
      })
      .catch(this.handleError);
  }

  deleteArticle(ids): Observable<any[]> {
    return this._httpService.delete(`portal/articles?companyIds=${ids}`)
    .timeout(15000)
    .map((response: Response) => {
      return response.json().message;
    })
    .catch(this.handleError);
  }


  public handleError(error: any) {
    let errorMessage = '';
    if (error.message === 'Timeout has occurred') {
      errorMessage = 'request.timeout';
    } else if (error.status === 400) {
      errorMessage = JSON.parse(error._body).message;
    } else if (error.status === 500) {
      errorMessage = 'service.not.connect';
    } else if (error.status === 401) {
      errorMessage = 'tokenError';
    } else if (error.status === 403) {
      errorMessage =  '403 : ' + error.json().message;
    }
    return Observable.throw(errorMessage);
  }
}
