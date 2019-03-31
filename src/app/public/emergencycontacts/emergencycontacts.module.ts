import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmergencycontactsPage } from './emergencycontacts.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencycontactsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmergencycontactsPage]
})
export class EmergencycontactsPageModule {}
