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

  slideConfigTwo = {
    slidesPerView: '3.2',
    spaceBetween: 6,
  };

  slideConfigThree = {
    slidesPerView: '1.2',
    spaceBetween: 5,
  };

  slideConfigFour = {
    slidesPerView: '1.4',
    spaceBetween: 6,
  };

  slideConfigCategorySlides = {
    slidesPerView: '2.2',
    spaceBetween: 6,
  };
  
  navCtrl: any;
  constructor(private router: Router) {
  }
  ngOnInit() {
    
  }
  redirectSliderImage() {
    console.log("I will be redirected");
    // Put your redirection Links
  }
}
