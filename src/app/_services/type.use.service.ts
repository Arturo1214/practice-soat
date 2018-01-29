import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TypeUse} from '../_models';

@Injectable()
export class TypeUseService {
  private resourceUrl = 'http://friday.eastus.cloudapp.azure.com:8009/api/sorters/types-uses';

  constructor(private http: HttpClient) {}

  allItems(): Observable<Array<TypeUse>> {
    return this.http.get<Array<TypeUse>>(this.resourceUrl);
  }
}
