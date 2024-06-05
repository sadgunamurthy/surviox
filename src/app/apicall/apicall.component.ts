import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {
  ProductData:any;
  
  constructor(public products:ProductService) { }
 
  ngOnInit(){
    this.getproducts();
    this.postproducts();
    this.putproducts();
    const postId = 1; 
    this.deleteproducts(postId);
 
  }

     getproducts() {
      this.products.getMethod().subscribe((response:any) =>{
      console.log('api called::',response)
      this.ProductData=response;
      console.log('api array::',this.ProductData)
    });
 
    }

    postproducts() {
     
      this.products.postMethod().subscribe((response:any) =>{
      console.log('api post::',response)
      this.ProductData=response;
      console.log('api post1::',this.ProductData)
    });
  }
   putproducts() {
     
    this.products.putMethod().subscribe((response:any) =>{
    console.log('api put::',response)
    this.ProductData=response;
    console.log('api put1::',this.ProductData)
  });
}


   deleteproducts(id: number) {
     
    this.products.deleteMethod(id).subscribe((response:any) =>{
    console.log('api delete::',response)
    this.ProductData=response;
    console.log('api delete1::',this.ProductData)
  });

   }

  }





