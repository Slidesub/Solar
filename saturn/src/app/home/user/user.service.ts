import { Injectable } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserPage, UserModel } from './user.model';

@Injectable()
export class UserService {

  constructor(private _httpService: HttpService) { }

  list(pageIndex, pageSize, search): Observable<UserPage> {
    return this._httpService.get(`api/users?search=${search}&page=${pageIndex}&size=${pageSize}`)
    .timeout(15000)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this._httpService.handleError);
  }

  add(user: UserModel): any {
    this._httpService.post(`api/users`, user)
    .timeout(15000)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this._httpService.handleError);
  }

  update (user: UserModel, id) {
    return this._httpService.put(`api/users/${id}`, id)
      .timeout(15000)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this._httpService.handleError);
  }

  delete(ids): Observable<any[]> {
    return this._httpService.delete(`portal/users?ids=${ids}`)
    .timeout(15000)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this._httpService.handleError);
  }

}
