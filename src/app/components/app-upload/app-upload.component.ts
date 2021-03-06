import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-upload',
  templateUrl: './app-upload.component.html',
  styleUrls: ['./app-upload.component.scss']
})
export class AppUploadComponent implements OnInit {
  defaulFileUrl: string = "https://resources.ncelp.org/assets/default-f936e9c3ea7a38e2c2092099586a71380b11258697b37fb4df376704495a849a.png";
  defaultThumbnailUrl :string = "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg";

  prograssBar = 0;
  appUpoadForm:any ;
  fileStatus:string = 'Drag App Here..';
  imageStatus:string = 'Drag Thumbnail Here..';
  baseUrl = 'http://localhost/MyProj/freedownloadr1/';
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
     formData.append('by',this.appUpoadForm.value.by);
     formData.append('version',this.appUpoadForm.value.version);
     formData.append('operatingSystem',this.appUpoadForm.value.operatingSystem);
     formData.append('license',this.appUpoadForm.value.license);
     formData.append('categories',this.appUpoadForm.value.categories);
     formData.append('descriptions',this.appUpoadForm.value.descriptions);
     formData.append('file',this.appUpoadForm.value.file);
     formData.append('thumbnail',this.appUpoadForm.value.thumbnail);
     this._http.post(this.baseUrl+'takeApp.php',formData,{
      reportProgress: true,
      observe: 'events'
    }).subscribe(event=>{
      if (event.type === HttpEventType.UploadProgress) {
        this.prograssBar = Math.round(100 * event.loaded / event.total);
        }else if(event.type==HttpEventType.Response){
        console.log(event.body)
      }

      // this.prograssBar = (25* events.type);
      // console.log(events.loaded); 
    
    });
    
     const i = formData;
     console.log(i);
    }
  getFileName(e:any){
    this.appUpoadForm.patchValue({file :e.target.files[0]});
    console.log(this.appUpoadForm.value);
    if(e.target.files[0])
    {
     this.fileStatus  = 'file Loaded'
    }
    else this.fileStatus= 'Empty'
  }
  getThumbnailName(e:any){
    this.appUpoadForm.patchValue({thumbnail :e.target.files[0]});
    console.log(this.appUpoadForm.value);
    if(e.target.files[0])
    {
     this.imageStatus  = 'Image Loaded'
     console.log(this.appUpoadForm.value);
    }
    else this.imageStatus= 'Empty'
  }


  readThumbnail(event){
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (e:any) => { // called once readAsDataURL is completed
      this.defaultThumbnailUrl = e.target.result;
    }
  }
  readFile(e){
     console.log(e.target.files[0]);
  }


}
