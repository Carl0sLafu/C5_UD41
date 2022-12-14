import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3000/characters');
  }

  getById(id:number): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3000/characters/'+id);
  }

  delete(id:number): Observable<Book[]>{
    return this.http.delete<Book[]>('http://localhost:3000/characters/'+id);
  }

}
