import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TypeVehicleService {
  private resourceUrl = 'http://friday.eastus.cloudapp.azure.com:8009/api/sorters/types-vehicles';

  constructor(private http: HttpClient) {}

  allItems(): Observable<Object> {
    return this.http.get(this.resourceUrl);
  }
}
