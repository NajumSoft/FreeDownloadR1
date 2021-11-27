import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-upload',
  templateUrl: './app-upload.component.html',
  styleUrls: ['./app-upload.component.scss']
})
export class AppUploadComponent implements OnInit {
  defaulImgUrl: string = "https://resources.ncelp.org/assets/default-f936e9c3ea7a38e2c2092099586a71380b11258697b37fb4df376704495a849a.png";
  defaultThumbnailUrl :string = "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg";

  prograssBar = 0;
  appUpoadForm:any ;
  fileStatus:string = 'Empty'
  baseUrl = 'http://localhost/MyProj/freedownloadr1/'
  constructor(private fb: FormBuilder,private _http:HttpClient) { }

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
      thumbnail: ['', Validators.required],
      categories: ['', Validators.required],

    })
  }





  submitForm(){
     console.log(this.appUpoadForm);
     const formData = new FormData();
     formData.append('appName',this.appUpoadForm.value.appName);
     formData.append('file',this.appUpoadForm.value.file);
     formData.append('thumbnail',this.appUpoadForm.value.thumbnail);
     this._http.post(this.baseUrl+'takeApp.php',formData).subscribe(d=>console.log(d));
     const i = formData;
     console.log(i);
    }
  getFileName(e:any){
    //console.log(e.target.files[0].name);
    //this.appUpoadForm.patchValue({fileName :e.target.files[0].name});
    //this.appUpoadForm.append();
   // this.appUpoadForm.get('filePath').setValue(e.target.files[0]);
    this.appUpoadForm.patchValue({file :e.target.files[0]});
    console.log(this.appUpoadForm.value);
    if(e.target.files[0])
    {
     this.fileStatus  = 'file Loaded'
    }
    else this.fileStatus= 'Empty'
  }
  getThumbnailName(e:any){
    //console.log(e.target.files[0].name);
    //this.appUpoadForm.patchValue({fileName :e.target.files[0].name});
    //this.appUpoadForm.append();
   // this.appUpoadForm.get('filePath').setValue(e.target.files[0]);
    this.appUpoadForm.patchValue({thumbnail :e.target.files[0]});
    console.log(this.appUpoadForm.value);
    if(e.target.files[0])
    {
     this.fileStatus  = 'file Loaded'
    }
    else this.fileStatus= 'Empty'
  }
  fileUploaderFunc(e:any){}
}
