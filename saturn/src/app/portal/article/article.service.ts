import { Injectable } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import { Article } from './article.modle';
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

}
