import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Soat} from '../_models';

@Injectable()
export class SoatService {
  private resourceUrl = 'http://friday.eastus.cloudapp.azure.com:8009/api/soats';

  constructor(private http: HttpClient) {}

  allItems(): Observable<Array<Soat>> {
    return this.http.get<Array<Soat>>(this.resourceUrl);
  }

  create(soat: Soat): Observable<Soat> {
    return this.http.post<Soat>(this.resourceUrl, soat);
  }

  update(soat: Soat): Observable<Soat> {
    return this.http.put<Soat>(`${this.resourceUrl}/${soat.id}`, soat);
  }
}
