import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
 data = [];
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    this._http.get('http://localhost/myproj/Freedownloadr1/getlandingpagedata.php').subscribe(d => { this.data = Object.assign(d);console.log(this.data);});
    
  }

}
