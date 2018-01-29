import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {City} from '../_models';

@Injectable()
export class CityService {
  private resourceUrl = 'http://friday.eastus.cloudapp.azure.com:8009/api/sorters/cities';

  constructor(private http: HttpClient) {}

  allItems(): Observable<Array<City>> {
    return this.http.get<Array<City>>(this.resourceUrl);
  }
}
