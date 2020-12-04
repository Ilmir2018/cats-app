import { Injectable } from '@angular/core';
import { Cat } from 'src/app/clases/cat';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataCatsService {


  private url = 'api/cats';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private location: Location) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.url);
  }

  getCat(id: number): Observable<Cat> {
    const url = `${this.url}/${id}`;
    return this.http.get<Cat>(url);
  }

  updateCard(cat: Cat): Observable<any> {
    return this.http.put(this.url, cat, this.httpOptions);
  }

  addCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.url, cat, this.httpOptions);
  }

  delete(cat: Cat): Observable<Cat> {
    const id = cat.id;
    const url = `${this.url}/${id}`;
    return this.http.delete<Cat>(url, this.httpOptions);
  }

  goCard(): void {
    this.location.back();
  }
}
