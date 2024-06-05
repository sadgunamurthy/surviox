import { Component, OnInit } from '@angular/core';

import { FormGroup, UntypedFormControl,UntypedFormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  reactiveForm: any;
  addressForm: any;

  selectedOption: string ='';

  options = [
    { value: 'option1', label: 'Option 1', icon: 'delete' },
    { value: 'option2', label: 'Option 2', icon: 'insert_emoticon' },
    { value: 'option3', label: 'Option 3', icon: 'insert_emoticon' }
  ];
  // formBuilder: any;
  // reactiveForm: any;
  constructor(private fb: UntypedFormBuilder) {
  
    this.reactiveForm = this.fb.group({
      // Define your form controls and validators here
      // const reactiveForm = new FormGroup({
        firstname: new UntypedFormControl('', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z]+$/)]),
        lastname: new UntypedFormControl('',[Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z]+$/)]),
        email: new UntypedFormControl('')
    });
        this.addressForm = this.fb.group({
          address: new UntypedFormControl(''),
          city: new UntypedFormControl(''),
          state: new UntypedFormControl(''),
        })
        console.log(this.reactiveForm.controls.firstname.value);
      console.log(this.reactiveForm.controls.firstname.valid);
      }
      
      get numb() {
        return this.reactiveForm.controls;
      }
      get nu() {
        return this.reactiveForm.controls;
      }
      get n() {
        return this.reactiveForm.controls;
      }

    
   
   
   
  ngOnInit(): void {
    
  }

} 
