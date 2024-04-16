import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  constructor(public httpClient:HttpClient) { }

  getData(): Observable<any> {
    const mockData = {
      item_name: 'Mock Item',
      item_image: 'https://example.com/mock-image.jpg',
      item_description: 'This is a mock item description.',
      item_price: 10.99,
      contacts: [
         {
            item_number: '1234567890',
            item_type: 'Mock Type'
          },
          {
            item_number: '0987654321',
            item_type: 'Mock Type 2'
          }
        ]
      };
        return of(mockData);
    }

  postData(): Observable<any> {
    const mockPostData = {
      item_name: 'Mock Item',
      item_image: 'https://example.com/mock-image.jpg',
      item_description: 'This is a mock item description.',
      item_price: 10.99,
      contacts: [
        {
          item_number: '1234567890',
          item_type: 'Mock Type'
        },
        {
          item_number: '0987654321',
          item_type: 'Mock Type 2'
        }
      ]
    };
    return of(mockPostData);
  }

  deleteData(productId: number): Observable<any> {
    const deletedProduct = {
      item_name: 'Mock Item',
      item_image: 'https://example.com/mock-image.jpg',
      item_description: 'This is a mock item description.',
      item_price: 10.99,
      contacts: [
        {
          item_number: '1234567890',
          item_type: 'Mock Type'
        },
        {
          item_number: '0987654321',
          item_type: 'Mock Type 2'
        }
      ],
      isDeleted: true,
      deletedOn: new Date().toISOString()
    };
    return of(deletedProduct);
  }
}
