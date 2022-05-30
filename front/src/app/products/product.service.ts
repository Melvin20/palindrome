import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  searchValue(query:string) {

    return this.http.get(`${environment.apiUrl}?search=${query}`).toPromise();
  }

  queryValue(id:string) {

    return this.http.get(`${environment.apiUrl}/${id}`).toPromise();
  }
}
