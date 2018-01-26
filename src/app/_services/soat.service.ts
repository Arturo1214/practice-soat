import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SoatService {
  private resourceUrl = 'http://friday.eastus.cloudapp.azure.com:8009/api/soats';

  constructor(private http: HttpClient) {}

  allItems(): Observable<Object> {
    return this.http.get(this.resourceUrl);
  }
}
