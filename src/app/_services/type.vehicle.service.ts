import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TypeVehicle} from '../_models';

@Injectable()
export class TypeVehicleService {
  private resourceUrl = 'http://friday.eastus.cloudapp.azure.com:8009/api/sorters/types-vehicles';

  constructor(private http: HttpClient) {}

  allItems(): Observable<Array<TypeVehicle>> {
    return this.http.get<Array<TypeVehicle>>(this.resourceUrl);
  }
}
