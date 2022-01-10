import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-app-view1',
  templateUrl: './app-view1.component.html',
  styleUrls: ['./app-view1.component.scss']
})
export class AppView1Component implements OnInit {
  @Input()pData;
  faStar= faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
