import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {
  ProductData:any;
  
  // constructor(public products:ProductService) { }
  constructor() { }
  ngOnInit(){
    // this.getproducts();
    // this.postproducts();
    // this.putproducts();
    // this.deleteproducts(id);
  // this.getprod();
  // this.getpro();
  //   this.postpro();
  //  this.putprod();
  // this.deleteprod();
  }

  //    getproducts() {
  //     this.products.getMethod().subscribe((response:any) =>{
  //     console.log('api called::',response)
  //     this.ProductData=response;
  //     console.log('api array::',this.ProductData)
  //   });

  //  }

  //   postproducts() {
     
  //     this.products.postMethod().subscribe((response:any) =>{
  //     console.log('api called::',response)
  //     this.ProductData=response;
  //     console.log('api array::',this.ProductData)
  //   });

  //  }

  //  putproducts() {
     
  //   this.products.putMethod().subscribe((response:any) =>{
  //   console.log('api called::',response)
  //   this.ProductData=response;
  //   console.log('api array::',this.ProductData)
  // });

  //  deleteproducts(id: number) {
     
  //   this.products.deleteMethod(id).subscribe((response:any) =>{
  //   console.log('api called::',response)
  //   this.ProductData=response;
  //   console.log('api array::',this.ProductData)
  // });


//  }
//    getprod(): void {
//     this.products.getprod().subscribe((response:any) =>{
//       console.log('api called::',response)
//       this.ProductData=response.products;
//       console.log('api array::',this.ProductData)
//     });
//    }
//    getpro(): void {
//     this.products.getpro().subscribe((response:any) =>{
//       console.log('api called::',response)
//       this.ProductData=response.products;
//       console.log('api array::',this.ProductData)
//     });
//   }

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
//     putprod(): void {
//     let user={
//       // id:2,
//       title:"rrr",
//       brand:"ram"
//     }
//     this.products.putprod(user, 123).subscribe((response:any) =>{
//       console.log('api called::',response)
      
//     });
//   }
//     deleteprod(): void {
//     this.products.deleteprod( 123).subscribe((response:any) =>{
//       console.log('api called::',response)
      
//     });
//   }
// }


}
