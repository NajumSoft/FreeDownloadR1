import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent implements OnInit {
  faStar = faStar;
  fileStatus:string = 'Empty';
 data:any ;
  constructor(private _http:HttpClient,private _route:Router) { }

  ngOnInit(): void {
    this._http.get('http://localhost/myproj/Freedownloadr1/getlandingpagedata.php').subscribe(d => { this.data = Object.assign(d);console.log(this.data);});
    
  }
  download(i:any){
    console.log(i.downloadPath);
    //window.open(i.downloadPath);
    window.open(i.downloadPath);
    

  }
  hello(){
    console.log('hello');
  }
}
