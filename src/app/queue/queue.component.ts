import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  name: string = '';
  selectedGender:string='';
  // searchTerm: string = ''; 
  // phoneNumber: string = '';
  // titleModel: string = ''; 
  items: string[] = ['Item 1', 'Item 3', 'Item 2', 'Item 4'];
  // posts:Post[]=[]
   data = [
    { ID: '1', Name: 'John Doe', Age: '30', Gender: 'Male', Country: 'USA', },
    { ID: '2', Name: 'Jane Smith', Age: '25', Gender: 'Female', Country: 'Canada' },
    { ID: '3', Name: 'Bob Johnson', Age: '40', Gender: 'Male', Country: 'UK' },
  ];
  deleteItem(row: any) {
    const index = this.data.indexOf(row);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
  // ngOnInit(): void {
  //   // Additional initialization logic can go here
  // }

  isButtonClicked: boolean = false;
  nameForm: UntypedFormGroup;
  numberForm: UntypedFormGroup;
  // phone:any;
  // newColumn:any;

  addRow() {
    const newRow = { ID: (this.data.length+1 ).toString(), Name: '',Age: '',Gender: '',Country: ''};
    this.data.push(newRow);
  }
  columns: string[]= [''];
  headers: string[]= [];

  addColumn() {
    // const newColumn = { ID: '', Name: '', Age: '', Gender: '', Country: '' };
    this.columns.push('','','');
    this.headers.push('phone','number','door');
  }
  // columns: string[]= [''];
  
  // Initial column
  
  // addColumn() {
  //   this.columns.push('');
  //   this.headers.push('')
    
  // }

  // addColumn() {
  //   this.columns.forEach(column => column.push('')); // Add an empty cell to each column
  // }

  handleClick(): void {
    this.isButtonClicked = true;
    console.log('Button clicked!');

    if (this.isButtonClicked) {
      console.log('Button was clicked, do something...');
      // Add your conditional logic here
    }
  }

  constructor(private fb: UntypedFormBuilder) {
    this.nameForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z]+$/)]]
    });

    this.numberForm = this.fb.group({
      number: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]]
    });

    // this.numberForm.setValidators(customGroupValidator);
   }

   get f() {
    return this.nameForm.controls;
  }

  // onSubmit(): void {
  //   if (this.nameForm.invalid) {
  //     if (this.f.name.errors?.required) {
  //       alert('Name is required.');
  //     } else if (this.f.name.errors?.maxlength) {
  //       alert('Name should be at most 8 characters.');
  //     } else if (this.f.name.errors?.pattern) {
  //       alert('Only alphabets are allowed in the name.');
  //     }
  //     return;
  //   }

  //   console.log('Form submitted:', this.nameForm.value);
  // }

  // constructor(private fb: FormBuilder) {
   
  // }

  // Getter for easier access to form controls in the template
  get num() {
    return this.numberForm.controls;
  }

  imageUrl: string = 'assets/my-image.jpg';

  ngOnInit(): void {
    // console.log(this.addColumn);
    // for (let i = 0; i < this.data.length - 1; i++) {
    //   this.addColumn();
    // }
  }

}
