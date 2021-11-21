import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-upload',
  templateUrl: './app-upload.component.html',
  styleUrls: ['./app-upload.component.scss']
})
export class AppUploadComponent implements OnInit {
  defaulImgUrl: string = "https://resources.ncelp.org/assets/default-f936e9c3ea7a38e2c2092099586a71380b11258697b37fb4df376704495a849a.png";
  prograssBar = 0;
  appUpoadForm:any ;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.appUpoadForm = this.fb.group({
      appName: ['', Validators.required],
      by: ['', Validators.required],
      imageUrl: ['', Validators.required],
      size: ['', Validators.required],
      downloadLink: ['', Validators.required],
      descriptions: ['', Validators.required],
      downloads: ['', Validators.required],
      views: ['', Validators.required],
      version: ['', Validators.required],
      operatingSystem: ['', Validators.required],
      license: ['', Validators.required],
      file: [, Validators.required],
      categories: ['', Validators.required],

    })
  }





  submitForm(){
     console.log(this.appUpoadForm.value);
  }
  fileUploaderFunc(e:any){}
}
