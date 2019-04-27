import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // {path: 'home',loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'welcome', loadChildren: './public/welcome/welcome.module#WelcomePageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { path: 'otp', loadChildren: './public/otp/otp.module#OtpPageModule' },
  { path: 'catdoctors', loadChildren: './public/catdoctors/catdoctors.module#CatdoctorsPageModule' },
  { path: 'emergencycontacts', loadChildren: './public/emergencycontacts/emergencycontacts.module#EmergencycontactsPageModule' },
  { path: 'myservicepage', loadChildren: './public/myservicepage/myservicepage.module#MyservicepagePageModule' },
  { path: 'individualprofile', loadChildren: './public/individualprofile/individualprofile.module#IndividualprofilePageModule' },
  { path: 'searchdoctors', loadChildren: './public/searchdoctors/searchdoctors.module#SearchdoctorsPageModule' },
  { path: 'diagcenter', loadChildren: './public/diagcenter/diagcenter.module#DiagcenterPageModule' },
  { path: 'bookingconfirmation', loadChildren: './public/bookingconfirmation/bookingconfirmation.module#BookingconfirmationPageModule' },
  { path: 'doctorscreen', loadChildren: './public/doctorscreen/doctorscreen.module#DoctorscreenPageModule' },
  { path: 'checkpatientlist', loadChildren: './public/checkpatientlist/checkpatientlist.module#CheckpatientlistPageModule' },
  { path: 'appointmenthistory', loadChildren: './public/appointmenthistory/appointmenthistory.module#AppointmenthistoryPageModule' },
  { path: 'labtest', loadChildren: './public/labtest/labtest.module#LabtestPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
