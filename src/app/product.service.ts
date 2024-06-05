import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  


  constructor(private sharedService:SharedService){}
  addition(c: number, d: number){
    return c+d;
  }
  multiply(a: number, b: number){
    this.sharedService.mySharedFunction();
  return a * b;
  }
  // getproducts() {
  //   throw new Error('Method not implemented.');
  // }
// public getJsonValue:any;
// public postJsonvalue:any;
 
//   constructor(public httpClient:HttpClient) { }
//   getMethod(): Observable<any>{
//     return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
//   }
  
  // postMethod(): Observable<any>{
  //   let body={
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }
  //   return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',body);
  // }

  // putMethod(): Observable<any>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   let user={
  //     id: 1,
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }
  //   return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',user, httpOptions);
  // }

  // deleteMethod(id: number): Observable<any>{
  //   return this.httpClient.delete('https://jsonplaceholder.typicode.com/posts/1',{id});
  // }



//   getData(): Observable<any> {
//     const mockData = {
//       item_name: 'Mock Item',
//       item_image: 'https://example.com/mock-image.jpg',
//       item_description: 'This is a mock item description.',
//       item_price: 10.99,
//       contacts: [
//          {
//             item_number: '1234567890',
//             item_type: 'Mock Type'
//           },
//           {
//             item_number: '0987654321',
//             item_type: 'Mock Type 2'
//           }
//         ]
//       };
//         return of(mockData);
//     }

//   postData(): Observable<any> {
//     const mockPostData = {
//       item_name: 'Mock Item',
//       item_image: 'https://example.com/mock-image.jpg',
//       item_description: 'This is a mock item description.',
//       item_price: 10.99,
//       contacts: [
//         {
//           item_number: '1234567890',
//           item_type: 'Mock Type'
//         },
//         {
//           item_number: '0987654321',
//           item_type: 'Mock Type 2'
//         }
//       ]
//     };
//     return of(mockPostData);
//   }

//   deleteData(productId: number): Observable<any> {
//     const deletedProduct = {
//       item_name: 'Mock Item',
//       item_image: 'https://example.com/mock-image.jpg',
//       item_description: 'This is a mock item description.',
//       item_price: 10.99,
//       contacts: [
//         {
//           item_number: '1234567890',
//           item_type: 'Mock Type'
//         },
//         {
//           item_number: '0987654321',
//           item_type: 'Mock Type 2'
//         }
//       ],
//       isDeleted: true,
//       deletedOn: new Date().toISOString()
//     };
//     return of(deletedProduct);
//   }
 }
