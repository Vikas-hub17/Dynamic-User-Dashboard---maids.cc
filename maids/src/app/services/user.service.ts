import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  private cache = new Map();

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    if (this.cache.has(page)) {
      return of(this.cache.get(page));
    }

    return this.http.get<any>(`${this.apiUrl}?page=${page}`).pipe(
      tap(response => this.cache.set(page, response))
    );
  }

  getUserById(id: number): Observable<any> {
    if (this.cache.has(id)) {
      return of(this.cache.get(id));
    }

    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(response => this.cache.set(id, response))
    );
  }
}
