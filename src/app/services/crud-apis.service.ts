import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudApisService {

  constructor(private http: HttpClient) { }

  getAllData(url: string): Observable<any> {
    return this.http.get(url);
  }

  getDataById(url: string): Observable<any> {
    return this.http.get(url);

  }

  create(url: string, object: any): Observable<any> {
    return this.http.post(url, object)
  }

  update(url: string, object: any, id: number | undefined): Observable<any> {
    return this.http.put(url+id, object)
  }

  delete(url: string, id: number | undefined): Observable<any> {
    return this.http.delete(url+id);
  }
}
