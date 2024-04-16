import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  
})

export class MusicComponent implements OnInit {
  imageUrl: string = 'assets/images/cover.png.jpg';
  
  
  constructor() { }
  onclick(): void {
    
    // this.buttonBackgroundColor = 'red';
    console.log('Button clicked!');
  }
  buttonBackgroundColor: string = 'initial';

  isButtonDisabled: boolean = false;

  disableButton() {
    // Disable the button on click
    this.isButtonDisabled = true;
  }
  
  ngOnInit(): void {
    
  }

  // url='./images/cover.jpg';
}
