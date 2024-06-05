import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  // selectedFile: File | null = null;
  // constructor(private http: HttpClient) { }
  files: File[] = [];
  constructor() { }
  onFileSelected(event: any): void {
    const selectedFiles = event.target.files;
    for (let i = 0; i < selectedFiles.length; i++) {
      this.files.push(selectedFiles[i]);
    }
  }

  viewFile(file: File): void {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  }

  downloadFile(file: File): void {
    const a = document.createElement('a');
    const fileURL = URL.createObjectURL(file);
    a.href = fileURL;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  deleteFile(index: number): void {
    this.files.splice(index, 1);
  }
  // triggerFileInput(): void {
  //   const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  //   fileInput.click();
  // }

  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.selectedFile = input.files[0];
  //     this.onUpload();
  //   }
  // }

  // onUpload(): void {
  //   if (this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('file', this.selectedFile, this.selectedFile.name);

  //     this.http.post('YOUR_BACKEND_URL_HERE', formData).subscribe(
  //       (response) => {
  //         console.log('Upload successful:', response);
  //       },
  //       (error) => {
  //         console.error('Upload failed:', error);
  //       }
  //     );
  //   }
  // }
  ngOnInit(): void {
  }

}
