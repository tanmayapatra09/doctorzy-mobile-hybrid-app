import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CatdoctorsPage } from './catdoctors.page';

const routes: Routes = [
  {
    path: '',
    component: CatdoctorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatdoctorsPage]
})
export class CatdoctorsPageModule {}
