import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { TermsandconditionsComponent } from 'src/app/components/termsandconditions/termsandconditions.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false;
  imageUrl: string;
  platformWidth: number;
  constructor(private modalController: ModalController, private platform: Platform) {
    this.platformWidth = platform.width();
    if(this.platformWidth <= 400){
      this.imageUrl = '/assets/img/login-screen-top-blue-bg.png';
    }else{
      this.imageUrl = '/assets/img/login-screen-top-blue-bg-1.png';
    }
    console.log('Width: ' + platform.width());
    console.log('Height: ' + platform.height());
  }

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
