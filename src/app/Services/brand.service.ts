import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {

  APIURL: string = 'http://localhost:8000/api/v1';
  constructor(private http: HttpClient) {}

  getAllBrands(): Observable<any> {
    return this.http.get(`${this.APIURL}/brands`);
  }

  getBrand(id: String): Observable<any> {
    return this.http.get(`${this.APIURL}/brands/${id}`);
  }

  createBrand(formData: FormData) {
    return this.http.post(`${this.APIURL}/brands`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  deleteBrand(id: string) {
    return this.http.delete(`${this.APIURL}/brands/${id}`);
  }
}
