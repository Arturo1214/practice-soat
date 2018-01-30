import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Soat} from '../_models';
import {HttpParams} from '@angular/common/http/src/params';
import {HttpHeaders} from '@angular/common/http/src/headers';

@Injectable()
export class SoatService {
  private resourceUrl = 'http://friday.eastus.cloudapp.azure.com:8009/api/soats';

  constructor(private http: HttpClient) {}

  allItems(options?: any): Observable<any> {
    return this.http.get(this.resourceUrl, {
      params: options,
      observe: 'response'});
  }

  create(soat: Soat): Observable<Soat> {
    return this.http.post<Soat>(this.resourceUrl, soat);
  }

  update(soat: Soat): Observable<Soat> {
    return this.http.put<Soat>(`${this.resourceUrl}/${soat.id}`, soat);
  }

  voucher(id: any): Observable<Blob> {
    return this.http.get(`${this.resourceUrl}/${id}/vouchers`, {
      responseType: "blob"
    });
  }

}
