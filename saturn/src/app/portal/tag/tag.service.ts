import { Injectable } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import { Constant } from '../../common/constant';

@Injectable()
export class TagService {

  constructor(private httpService: HttpService) { }
  add(tag) {
    return this.httpService.post(Constant.URL_TAG_ADD, tag)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.httpService.handleError);
  }

  delete(tagIds) {
    return this.httpService.delete(Constant.URL_TAG_DELETE + `/${tagIds}`)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.httpService.handleError);
  }

  update(tag: any, tagId) {
    return this.httpService.put(Constant.URL_TAG_UPDATE + `/${tagId}`, tag)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.httpService.handleError);
  }


  list(size, index, search): Observable<any> {
    return this.httpService.get(Constant.URL_TAG_LIST + `?search=${search}&index=${index}&size=${size}`)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.httpService.handleError);
  }

  get(tagId): Observable<any> {
    return this.httpService.get(Constant.URL_TAG_GET + `/${tagId}`)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.httpService.handleError);
  }

}
