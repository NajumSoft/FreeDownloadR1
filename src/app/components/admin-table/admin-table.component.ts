import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {
  baseUrl = 'http://localhost/MyProj/freedownloadr1/';
  data;
  constructor(private _http:HttpClient) {}
  ngOnInit(): void {
    this._http.get(this.baseUrl+'getLandingPageData.php').subscribe(d=>{
      console.log(d);
      this.data = d;
    });
  }

}
