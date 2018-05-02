import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import { HttpService } from '../../service/http.service';
import { Constant } from '../../common/constant';

@Injectable()
export class UploaderService {

  constructor(private httpService: HttpService) { }

  upload(data): Observable<any> {
    return this.httpService.post(Constant.URL_UPLOAD_IMAGE, data)
    .timeout(15000)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this.httpService.handleError);
  }
}
