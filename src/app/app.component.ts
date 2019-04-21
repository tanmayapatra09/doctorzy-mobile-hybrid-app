import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public publiMenuList = [
    { title: 'Home', url: '/tabs/tab1', icon: 'home', access: 'public' },
    { title: 'Appointment History', url: '/home', icon: 'ice-cream', access: 'public' },
    { title: 'Health Packages', url: '/home', icon: 'home', access: 'public' },
    { title: 'Health Blog', url: '/home', icon: 'home', access: 'public' },
    { title: 'Emergency Contacts', url: '/home', icon: 'home', access: 'public' },
    { title: 'About us', url: '/home', icon: 'home', access: 'public' },
    { title: 'Privacy Policy', url: '/home', icon: 'home', access: 'public' },
    { title: 'Rate us on Playstore', url: '/home', icon: 'home', access: 'public' },
    { title: 'Share App', url: '/home', icon: 'home', access: 'public' },
    
    { title: 'Below generated Pages', url: '/', icon: 'home', access: 'public' },
    { title: 'Login', url: '/login', icon: 'home', access: 'public' },
    { title: 'Register', url: '/register', icon: 'home', access: 'public' },
    // Extra Urls for testing
    { title: 'Intro Screen', url: '/welcome', icon: 'home', access: 'public' },
    { title: 'Doctors List', url: '/myservicepage', icon: 'home', access: 'public' },
    { title: 'Doctor Profile', url: '/individualprofile', icon: 'home', access: 'public' },
    { title: 'Search Doctor', url: '/searchdoctors', icon: 'home', access: 'public' },
    { title: 'Search Diagnostics', url: '/diagcenter', icon: 'home', access: 'public' },
    { title: 'Booking Confirmation', url: '/bookingconfirmation', icon: 'home', access: 'public' },
    { title: 'Doctors Screen', url: '/doctorscreen', icon: 'home', access: 'public' },
    { title: 'Appointment History', url: '/appointmenthistory', icon: 'home', access: 'public' },
    { title: 'Check Patient List', url: '/checkpatientlist', icon: 'home', access: 'public' },

    { title: 'OTP Page', url: '/otp', icon: 'home', access: 'public' },
    { title: 'Emergency contacts', url: '/emergencycontacts', icon: 'home', access: 'public' },
  ];
  public privateMenuList = [
    { title: 'Home', url: '/tabs/tab1', icon: 'home', access: 'public' },
    { title: 'My Account', url: '/members/profile', icon: 'contact', access: 'private' },
    { title: 'Cart', url: '/home', icon: 'cart', access: 'private' },
    { title: 'Orders', url: '/home', icon: 'cube', access: 'private' },
    { title: 'Wishlist', url: '/home', icon: 'heart', access: 'private' },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
