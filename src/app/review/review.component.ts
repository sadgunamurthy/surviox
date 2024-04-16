import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';
// import { TableDataService } from './table-data.service';
// import { Observable } from 'rxjs';
// import { Post } from './post.model'; 
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
 
})
export class ReviewComponent implements OnInit {

  color:any[]=["red","blue","green","black"]
  selectedColor: string;
  myDate: Date;
  constructor(){
    this.selectedColor = this.color[0];
    this.myDate = new Date();
    // this.color="blue";
  }

  // onColorChange(event: any) {
  //   this.selectedColor = event.target.value;
  // }

  onColorChange(event: any) {
    // Check if event exists and has a target property
    if (event && event.target) {
        // Access the value property of the target
        this.selectedColor = event.target.value;
    } else {
        // Handle the case where event or event.target is undefined
        console.error("Event or event.target is undefined.");
    }
}
//   const button = document.getElementById('myButton');

// // Adding event listener to the button
// button.addEventListener('click', function() {
//     alert('Button clicked!');
// });const button = document.getElementById('myButton');

// button: HTMLElement | null; // Ensure consistent typing

//   constructor() {
//     this.button = null; // Initialize button property in the constructor
//   }

// counter: number = 0;

//   incrementCounter(event: MouseEvent) {
//     console.log('Button clicked!', event);
//     this.counter++;
//   }
// DATA: string[] = ['Item 1', 'Item 3', 'Item 2', 'Item 4'];

// username: string='';
// totalPosts: number=0;
// allPosts:Post[]=[];

// deletePost(index: number): void {
//   this.allPosts.splice(index, 1);
//   this.totalPosts = this.allPosts.length;
// }


  ngOnInit(): void {
    
  

  //   this.username =(this.DATA as any).author;
  //   this.totalPosts = (this.DATA as any).thePosts.length;
  //   this.allPosts =(this.DATA as any).thePosts
  }
  // handleClick(): void {
  //   if (this.button) {
  //     // Handle button click event
  //   }
  // }
  


  
 
 

   showCheckbox: boolean = false;

  toggleCheckbox(): void {
    this.showCheckbox = !this.showCheckbox;
  }

  selectedFiles: FileList | null = null;
  isFileSelected: boolean = false;

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
    this.isFileSelected = this.selectedFiles !== null && this.selectedFiles.length > 0;
  }

  onUpload(): void {
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const file = this.selectedFiles.item(i);
        if (file) {
          // Perform file upload logic here for each file
          console.log('Uploading file:', file);
        }
      }
    } else {
      console.error('No files selected.');
    }
  }
  
} 

  // Create an observable that emits values 1, 2, and 3 with a delay
  // const observable = new Observable<number>(observer => {
  //   observer.next(1);
  //   observer.next(2);
  //   observer.next(3);
  //   setTimeout(() => {
  //     observer.next(4);
  //     observer.complete();
  //   }, 1000);
  // });
  
  // // Subscribe to the observable
  // const subscription = observable.subscribe({
  //   next: value => console.log(value),
  //   error: error => console.error(error),
  //   complete: () => console.log('Observable completed')
  // });
  
  // // Unsubscribe from the observable after 2 seconds
  // setTimeout(() => {
  //   subscription.unsubscribe();
  // }, 2000);

  

