import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  isOpen: boolean = false;

  openPopup(): void {
      this.isOpen = true;
    }

  closePopup(): void {
    this.isOpen = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
