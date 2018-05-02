import { Injectable } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import { Constant } from '../../common/constant';

@Injectable()
export class ArticleService {

  constructor(private httpService: HttpService) { }

  list(size, index, search): Observable<any> {
    return this.httpService.get(Constant.URL_ARTICLE_LIST + `?search=${search}&index=${index}&size=${size}`)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.httpService.handleError);
  }

  get(articleId): Observable<any> {
    return this.httpService.get(Constant.URL_ARTICLE_GET + `/${articleId}`)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.httpService.handleError);
  }

  add(article) {
    return this.httpService.post(Constant.URL_ARTICLE_ADD, article)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.httpService.handleError);
  }

  update(article: any, articleId) {
    return this.httpService.put(Constant.URL_ARTICLE_UPDATE + `/${articleId}`, article)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.httpService.handleError);
  }

}
