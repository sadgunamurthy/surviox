import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, UntypedFormArray, AbstractControl } from '@angular/forms';
import{ ProductService} from '../product.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  showForm = true;
  data: any;

  constructor(private fb: UntypedFormBuilder,public products:ProductService) { }

  itemForm:UntypedFormGroup = this.fb.group({
    item_name: ['', [Validators.required, Validators.minLength(8),Validators.pattern(/^[a-zA-Z]+$/)]],
    item_image: ['', [Validators.required, Validators.pattern('^(http|https)://[^ "]+$')]],
    item_description: ['', Validators.required],
    item_price: ['', [Validators.required, Validators.min(0)]],
    contacts:this.fb.array([
      this.fb.group({
        item_number: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
        item_type: ['', [Validators.required, Validators.minLength(3)]],
      }),
    ]),
  });

  get contacts(){
    return this.itemForm.get('contacts') as UntypedFormArray;
  }

   addContact(){
    this.contacts.push(
      this.fb.group({
        item_number: ['', Validators.required], 
        item_type: ['', Validators.required],
      }),
    );
   }

   deleteContact(i:number){
    this.contacts.removeAt(i)
   }

   onSubmit(){
    alert(JSON.stringify(this.itemForm.value,null,2));
   }

  ngOnInit(): void {
    // this.fetchData();
    // this.addData();
    // this.deleteproduct();
  }

  // fetchData() {
  //   console.log("Fetching data...");
  //   this.products.getData().subscribe(data => {
  //     console.log("Fetched data:", data);
  //     this.itemForm.patchValue(data);
  //   });
  // }

  // addData() {    
  //   this.products.postData().subscribe(response => {
  //     console.log('Response:', response);      
  //   }, error => {
  //     console.error('Error:', error);      
  //   });
  // }

  // deleteproduct(): void {
  //     this.products.deleteData(123).subscribe((response:any) =>{
  //       console.log('api called::',response)        
  //     });
  //   }
}

