import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-jobland',
  templateUrl: './jobland.component.html',
  styleUrls: ['./jobland.component.css']
})
export class JoblandComponent implements OnInit {
  jobTitle: string = '';
  location: string = '';

  @ViewChild(FileUploadComponent) fileUploadComponent!: FileUploadComponent;

  // triggerFileUpload(): void {
  //   this.fileUploadComponent.triggerFileInput();
  // }
  constructor(private router: Router) { }
  onSearch() {
    const query = `${this.jobTitle} jobs in ${this.location}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleSearchUrl, '_blank');
  }
  ngOnInit(): void {
  }

}
