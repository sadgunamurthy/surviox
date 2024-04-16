import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import{ ProductService} from '../product.service';
// import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopify',
  templateUrl: './shopify.component.html',
  styleUrls: ['./shopify.component.css']
})

export class ShopifyComponent implements OnInit {
  formBuilder: any;
  // itemForm: FormGroup | undefined;
  // form!: FormGroup;
  form:any;
  ProductData:any;
  constructor(private fb: FormBuilder,public products:ProductService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      items: this.fb.array([
        // this.createItemFormGroup()
      ])
    });
    // this.getprod();
  }

  // getprod(): void {
  //     this.products.getprod().subscribe((response:any) =>{
  //       console.log('api called::',response)
  //       this.ProductData=response.products;
  //       console.log('api array::',this.ProductData)
  //     });
  //    }
 
  // createItemFormGroup(): FormGroup {
  //   return this.fb.group({
  //    name: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z]+$/)]),
  //     description: ['', Validators.required],
  //     price: [0, [Validators.required, Validators.min(0)]],
  //     image: ['', Validators.required]
  //   });
  // }
 
   get items(){
    return this.form.get('items') as FormArray
  }

  deleteItem(index:number){
    this.items.removeAt(index);
  }

  // addItem() {
  //   this.items.push(this.createItemFormGroup());
  // }

  addItem() {
    const newItem = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z]+$/)]),
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      image: ['', Validators.required]
      // Add more fields as needed
    });
    this.items.push(newItem);
  }
  submit(){
    console.log(this.form.value);
  }
  // editItem(index: number): void {
  //   const itemFormGroup = this.items.at(index);
  //   // Update the existing item details with the edited values
  //   itemFormGroup.patchValue({
  //     name: this.form.value.items[index].name,
  //     description: this.form.value.items[index].description,
  //     price: this.form.value.items[index].price,
  //     image: this.form.value.items[index].image
  //   });
  // }
  // isInvalid(controlPath: string): boolean {
  //   const control = this.form.get(controlPath);
  //   return control.invalid && (control.dirty || control.touched);
  // }

  // isTouched(controlPath: string): boolean {
  //   const control = this.form.get(controlPath);
  //   return control.touched;
  // }
}
   
      


   