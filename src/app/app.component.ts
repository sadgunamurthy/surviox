import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import{ ProductService} from './product.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UntypedFormControl } from '@angular/forms';
import { TopicsComponent } from './topics/topics.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{


  // Examples for using @Input,@output,@ViewChild
  parentmsg:string='hello from parent';
  msg:string='';
  outputchild:string='';

  @ViewChild(TopicsComponent) childComp: any;

// -----------------------------  //
  isOpen: boolean = true;
  openPopup(): void {
    this.isOpen = false;
  }

  selectedOption: string = '';
  message: string = '';
  // selectedOption: string;

    navigateToOtherPage() {
      
    }
  
  response:any;

  // product: ProductData = {
  //   id: 1,
  //   name: 'Example Product',
  //   price: 10,
  //   description: 'This is an example product'
  // };

  // ProductData={title:""};
  ProductData:any;
  tableData: any[] = [];
  
  dateControl = new UntypedFormControl(new Date());
  // constructor(public httpClient:HttpClient) {
  //  this.ProductData= this.httpClient.get("https://dummyjson.com/products")
  // }
// users:any=[];
// getproducts:any;


 // Examples for using @Input,@output,@ViewChild
  constructor(public products:ProductService) { 
    console.log(this.childComp);
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log(this.childComp);
    this.msg=this.childComp.childmsg;
  }
  receiveMessage($event: any){
    // console.log($event)
    this.outputchild=$event;
  }

// ----------------------------------------------- //


  ngOnInit() {
  // this.getproductsDa();
  // this.getprod();
  // this.getpro();
    // this.postpro();
  //  this.putprod();
  // this.deleteprod();
  }

  // ngAfterViewInit(){

  // }

  //   getproductsDa(): void {
  //   this.products.getproducts().subscribe((response:any) =>{
  //     console.log('api called::',response)
  //     this.ProductData=response.products;
  //     console.log('api array::',this.ProductData)
  //   });

  //  }

  //  getprod(): void {
  //   this.products.getprod().subscribe((response:any) =>{
  //     console.log('api called::',response)
  //     this.ProductData=response.products;
  //     console.log('api array::',this.ProductData)
  //   });
  //  }
  //  getpro(): void {
  //   this.products.getpro().subscribe((response:any) =>{
  //     console.log('api called::',response)
  //     this.ProductData=response.products;
  //     console.log('api array::',this.ProductData)
  //   });
  // }

//     postpro(): void {
//     let data={
//       id:2,
//       title:"hello",
//       name:"nani"
//     }
//     this.products.addProduct(data).subscribe((response:any) =>{
//       console.log('api called::',response)
      
//     })
//   }
// }
  //   putprod(): void {
  //   let user={
  //     // id:2,
  //     title:"rrr",
  //     brand:"ram"
  //   }
  //   this.products.putprod(user, 123).subscribe((response:any) =>{
  //     console.log('api called::',response)
      
  //   });
  // }
  //   deleteprod(): void {
  //   this.products.deleteprod( 123).subscribe((response:any) =>{
  //     console.log('api called::',response)
      
  //   });
  // }
// }

  // Getter for easier access to form controls in the template
  
//   ngOnInit(){
//     this.loadSampleData();
//   }


// loadSampleData(): void {
//   this.tableData = [
//     { column1: 'Value 1', column2: 'Value A' },
//     { column1: 'Value 2', column2: 'Value B' },
//     { column1: 'Value 3', column2: 'Value C' }
//   ];
// }
// }
  // private handleError(error: HttpErrorResponse) {
  //   let errorMessage = 'Unknown error occurred.';
  //   if (error.error instanceof ErrorEvent) {
  //     // Client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // Server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }






 // title = 'hi ramcharan';

 

  
  // isPhoneNumberValid(): boolean {
  //   // Implement your phone number validation logic here
  //   // For simplicity, this example checks if the phone number has at least 10 digits
  //   return /^\d{10}$/.test(this.phoneNumber);
  // }

  // isNameValid(): boolean {
  //   // Implement your phone number validation logic here
  //   // For simplicity, this example checks if the phone number has at least 10 digits
  //   return  /^[a-zA-Z]+$/.test(this.name);
  // }
  // titleModel = 'I have more than 10 characters'



// makeHttpRequest() {
  //   this.product_api.getproducts()
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
}