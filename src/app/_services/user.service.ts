import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../_models/index';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  private resourceUrl = 'http://friday.eastus.cloudapp.azure.com:8009/api/users';

  constructor(private http: HttpClient) {}

  find(login: string): Observable<User> {
    return this.http.get<User>(`${this.resourceUrl}/${login}`);
  }
}
