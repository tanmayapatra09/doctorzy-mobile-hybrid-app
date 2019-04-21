import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdoctors',
  templateUrl: './searchdoctors.page.html',
  styleUrls: ['./searchdoctors.page.scss'],
})
export class SearchdoctorsPage implements OnInit {
  doctorCategory = [
    {icon: 'pregnant.png', name: 'Gyanecologist', link: ''},
    {icon: 'baby-boy.png', name: 'Child Specialist', link: ''},
    {icon: 'doctor.png', name: 'General Medicine', link: ''},
    {icon: 'dermathologist.png', name: 'Deratologist', link: ''},
    {icon: 'herbs.png', name: 'Homeopathy', link: ''},
    {icon: 'tooth.png', name: 'Dental', link: ''}
  ];
  categories: any;
  constructor() { }

  ngOnInit() {
    this.categories = this.doctorCategory;
  }

}
