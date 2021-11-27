import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  fileStatus:string = 'Empty';
 data:any ;
  constructor(private _http:HttpClient,private _route:Router) { }

  ngOnInit(): void {
    this._http.get('http://localhost/myproj/Freedownloadr1/getlandingpagedata.php').subscribe(d => { this.data = Object.assign(d);console.log(this.data);});
    
  }
  download(i:any){
    console.log(i.downloadPath);
    

  }
}
