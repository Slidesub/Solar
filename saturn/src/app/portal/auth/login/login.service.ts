import { Injectable } from '@angular/core';
import { HttpService } from '../../../service/http.service';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import { Constant } from '../../../common/constant';

@Injectable()
export class LoginService {

  constructor(private httpService: HttpService) { }

  login(data): Observable<any> {
    return this.httpService.post(Constant.URL_LOGIN, data)
    .timeout(15000)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this.httpService.handleError);
  }
}
