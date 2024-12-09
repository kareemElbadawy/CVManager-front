import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private apiUrl = 'https://localhost:44355/api/cvs';

  constructor(private http: HttpClient) {}

  getCvs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCvById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createCv(cv: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cv);
  }

  updateCv(id: number, cv: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, cv);
  }

  deleteCv(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
