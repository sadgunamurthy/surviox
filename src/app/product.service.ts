import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient:HttpClient) { }

  getMethod(): Observable<any>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  
  postMethod(): Observable<any>{
    let body={
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',body);
  }

  putMethod(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let user={
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',user, httpOptions);
  }

  deleteMethod(id: number): Observable<any> {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
