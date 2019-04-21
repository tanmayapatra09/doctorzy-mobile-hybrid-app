import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorscreen',
  templateUrl: './doctorscreen.page.html',
  styleUrls: ['./doctorscreen.page.scss'],
})
export class DoctorscreenPage implements OnInit {
  slideConfig = {
    slidesPerView: '1.2',
    spaceBetween: 2,
  };
  constructor() { }

  ngOnInit() {
  }

}
