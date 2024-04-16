import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  dynamicForm!: FormGroup;
  formFields: any[] = [
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'age', label: 'Age', type: 'number', required: false }
  ];
  // onSubmit(userForm: NgForm) {
  //   if (userForm.valid) {
  //     // Form is valid, handle form submission here
  //     console.log('Form submitted!', userForm.value);
  //   } else {
  //     // Form is invalid, display error messages or handle accordingly
  //     console.log('Form is invalid!');
  //   }
  // }

  // onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     console.log('Form submitted:', form.value);
  //   }
  // }
  

  // contactForm:FormGroup
  // surName:string='';
  constructor(private fb:FormBuilder) { 

    
    // this.contactForm = this.fb.group({
      // surName: ['', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z]+$/)]] 
      // surName: [
      //   "",
      //   [
      //     Validators.required,
      //     Validators.minLength(3),
      //     Validators.maxLength(60),
      //     Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/),
      //   ],
      // ], 
      // surName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
      // Define your form controls here
    // });
  }

  ngOnInit(): void {

    this.dynamicForm = this.fb.group({});
    this.formFields.forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      this.dynamicForm.addControl(field.name, this.fb.control('', validators));
    });
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('Form submitted:', this.dynamicForm.value);
    } else {
      console.error('Form is invalid.');
    }
  }
  }


