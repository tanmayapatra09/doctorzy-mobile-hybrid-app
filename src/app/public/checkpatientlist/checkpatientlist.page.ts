import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkpatientlist',
  templateUrl: './checkpatientlist.page.html',
  styleUrls: ['./checkpatientlist.page.scss'],
})
export class CheckpatientlistPage implements OnInit {
  slideConfig = {
    slidesPerView: '3',
    spaceBetween: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  constructor() { }

  ngOnInit() {
  }

}
