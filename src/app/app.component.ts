import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data;
  baseUrl = 'http://localhost/MyProj/freedownloadr1/';

  title = 'FredownloadR1';
  smartkey = 'hello';
  

constructor(private _http:HttpClient) {}
ngOnInit(): void {
  this._http.get(this.baseUrl+'getLandingPageData.php').subscribe(d=>{
    console.log(d);
    this.data = d;
  });
}
}

