import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PurchaseType} from '../_models';


@Injectable()
export class PurchaseTypeService {
  private resourceUrl = 'http://friday.eastus.cloudapp.azure.com:8009/api/sorters/purchase-types';

  constructor(private http: HttpClient) {}

  allItems(): Observable<Array<PurchaseType>> {
    return this.http.get<Array<PurchaseType>>(this.resourceUrl);
  }
}
