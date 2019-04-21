import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchdoctorsPage } from './searchdoctors.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdoctorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchdoctorsPage]
})
export class SearchdoctorsPageModule {}
