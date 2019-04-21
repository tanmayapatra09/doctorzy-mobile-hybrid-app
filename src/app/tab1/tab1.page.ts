import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  slideConfig = {
    slidesPerView: '1',
    spaceBetween: 25,
  };
  navCtrl: any;
  constructor(private router: Router) {
  }
  ngOnInit() {
    
  }
}
