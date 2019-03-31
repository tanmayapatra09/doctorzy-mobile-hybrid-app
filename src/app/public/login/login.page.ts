import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { TermsandconditionsComponent } from 'src/app/components/termsandconditions/termsandconditions.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  // Loading Controller to show a loading popup while contents being loaded
  async termsAndConditions() {
    const modal = await this.modalController.create({
      component: TermsandconditionsComponent,
      componentProps: {
        foo: 'hello',
        bar: 'world',
      }
    });
    return await modal.present();
  }

  onSubmit() {
    // Write your code here
  }
}
