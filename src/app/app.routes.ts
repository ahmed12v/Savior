import { ContactUs } from './shared/Interfaces/Pages/home';
import { AllDepartmentComponent } from './component/doctor/all-department/all-department.component';
import { UserContactUsComponent } from './pages/user-contact-us/user-contact-us.component';
import { DoctorRegisterComponent } from './addtions/doctor-register/doctor-register.component';
import { GynecologistsComponent } from './component/doctor/gynecologists/gynecologists.component';
import { PsychiatristsComponent } from './component/doctor/psychiatrists/psychiatrists.component';
import { DermatologistsComponent } from './component/doctor/dermatologists/dermatologists.component';
import { PhysicalComponent } from './component/doctor/physical/physical.component';
import { GastroenterologistsComponent } from './component/doctor/gastroenterologists/gastroenterologists.component';
import { PediatriciansComponent } from './component/doctor/pediatricians/pediatricians.component';
import { CardiologistsComponent } from './component/doctor/cardiologists/cardiologists.component';
import { OptometristsComponent } from './component/doctor/optometrists/optometrists.component';
import { ThroatComponent } from './component/doctor/throat/throat.component';
import { OrthopedicComponent } from './component/doctor/orthopedic/orthopedic.component';
import { DentistsComponent } from './component/doctor/dentists/dentists.component';
import { ReservtionComponent } from './component/doctor/reservtion/reservtion.component';
import { BookFormComponent } from './component/doctor/book-form/book-form.component';
import { FeedbackComponent } from './component/doctor/feedback/feedback.component';
import { AllDoctoorComponent } from './component/doctor/all-doctoor/all-doctoor.component';
import { NearstLocationFormComponent } from './component/forms/nearst-location-form/nearst-location-form.component';
import { DeliveryFormComponent } from './component/forms/delivery-form/delivery-form.component';
import { UserCartComponent } from './component/user-cart/user-cart.component';
import { MedicineComponent } from './component/medicine/medicine.component';
import { NewPasswordComponent } from './core/Athountcation/new-password/new-password.component';
import { VerifyCodeComponent } from './core/Athountcation/verify-code/verify-code.component';
import { ForgetPasswordComponent } from './core/Athountcation/forget-password/forget-password.component';
import { LoginComponent } from './core/Athountcation/login/login.component';
import { SigninComponent } from './core/Athountcation/signin/signin.component';
import { UpdatepassComponent } from './pages/UserAccount/updatepass/updatepass.component';
import { UpdatHisDataComponent } from './pages/UserAccount/updat-his-data/updat-his-data.component';
import { ProfileComponent } from './pages/UserAccount/profile/profile.component';
import { NotFoundComponent } from './core/importantCompnent/not-found/not-found.component';
import { MedicalTeamComponent } from './pages/medical-team/medical-team.component';
import { FirstaidComponent } from './pages/firstaid/firstaid.component';
import { PharmcyComponent } from './pages/pharmcy/pharmcy.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { AboutSaviorComponent } from './pages/about-savior/about-savior.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmergencyTeamComponent } from './component/emergency-team/emergency-team.component';
import { MedicalDetailsComponent } from './component/medical-details/medical-details.component';

import { FormsModule } from '@angular/forms';
import { authGuard } from './auth.guard';

export const routes: Routes = [


    { path: '', redirectTo: 'about', pathMatch: 'full',  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        (c) => c.HomeComponent
      ),canActivate:[authGuard]
  },
  {
    path: 'ContactUs',
    loadComponent: () =>
      import('./pages/user-contact-us/user-contact-us.component').then(
        (c) => c.UserContactUsComponent
      ),
    canActivate: [authGuard]
  },

  {
  path: 'about',
    loadComponent: () =>
      import('./pages/about-savior/about-savior.component').then(
        (c) => c.AboutSaviorComponent
      ),
  },

  {
    path:'doctor',
    loadComponent :()=>
        import('./pages/doctor/doctor.component').then(
            (C) =>C.DoctorComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'AllDoctor',
    loadComponent :()=>
        import('./component/doctor/all-doctoor/all-doctoor.component').then(
            (C) =>C.AllDoctoorComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'allCatogery',
    loadComponent :()=>
        import('./component/doctor/all-department/all-department.component').then(
            (C) =>C.AllDepartmentComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'dentists',
    loadComponent :()=>
        import('./component/doctor/dentists/dentists.component').then(
            (C) =>C.DentistsComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'orthopedic',
    loadComponent :()=>
        import('./component/doctor/orthopedic/orthopedic.component').then(
            (C) =>C.OrthopedicComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'throat',
    loadComponent :()=>
        import('./component/doctor/throat/throat.component').then(
            (C) =>C.ThroatComponent
        ) ,canActivate:[authGuard]
  },
  
  {
    path:'optometrists',
    loadComponent :()=>
        import('./component/doctor/optometrists/optometrists.component').then(
            (C) =>C.OptometristsComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'cardiologists',
    loadComponent :()=>
        import('./component/doctor/cardiologists/cardiologists.component').then(
            (C) =>C.CardiologistsComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'pediatricians',
    loadComponent :()=>
        import('./component/doctor/pediatricians/pediatricians.component').then(
            (C) =>C.PediatriciansComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'gynecologists',
    loadComponent :()=>
        import('./component/doctor/gynecologists/gynecologists.component').then(
            (C) =>C.GynecologistsComponent
        ) ,
  },
  {
    path:'Physical',
    loadComponent :()=>
        import('./component/doctor/physical/physical.component').then(
            (C) =>C.PhysicalComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'dermatologists',
    loadComponent :()=>
        import('./component/doctor/dermatologists/dermatologists.component').then(
            (C) =>C.DermatologistsComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'gastroenterologists',
    loadComponent :()=>
        import('./component/doctor/gastroenterologists/gastroenterologists.component').then(
            (C) =>C.GastroenterologistsComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'psychiatrists',
    loadComponent :()=>
        import('./component/doctor/psychiatrists/psychiatrists.component').then(
            (C) =>C.PsychiatristsComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'DoctorFeedback/:id',
    loadComponent :()=>
        import('./component/doctor/feedback/feedback.component').then(
            (C) =>C.FeedbackComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'BookNow',
    loadComponent :()=>
        import('./component/doctor/book-form/book-form.component').then(
            (C) =>C.BookFormComponent
        ) ,canActivate:[authGuard]
  },
  {
    path:'DoctorRegister',
    loadComponent :()=>
        import('./addtions/doctor-register/doctor-register.component').then(
            (C) =>C.DoctorRegisterComponent
        ) ,canActivate:[authGuard]
  },
 
  {
    path:'reserv',
    loadComponent :()=>
        import('./component/doctor/reservtion/reservtion.component').then(
            (C) =>C.ReservtionComponent
        ) ,canActivate:[authGuard]
  },
 
  {
    path:'pharmcy',
    loadComponent:()=>
        import('./pages/pharmcy/pharmcy.component').then(
            (C)=>C.PharmcyComponent
        ),canActivate:[authGuard]
 },

 {
     path:'searchMedicine',
     loadComponent:()=>
      import('./component/medicine/medicine.component').then(
        (c)=>c.MedicineComponent
      ),canActivate:[authGuard]
 },
 {
     path:'cart',
     loadComponent:()=>
      import('./component/user-cart/user-cart.component').then(
        (c)=>c.UserCartComponent
      ),canActivate:[authGuard]
 },
 {
     path:'deliveryForm',
     loadComponent:()=>
      import('./component/forms/delivery-form/delivery-form.component').then(
        (c)=>c.DeliveryFormComponent
      ),canActivate:[authGuard]
 },
 {
     path:'nearstForm',
     loadComponent:()=>
      import('./component/forms/nearst-location-form/nearst-location-form.component').then(
        (c)=>c.NearstLocationFormComponent
      ),canActivate:[authGuard]
 },

 {
    path:'firstaid',
    loadComponent:()=>
        import('./pages/firstaid/firstaid.component').then(
            (C)=> C.FirstaidComponent
        ),canActivate:[authGuard]
 },
  
 {
   path:'medicalTeam',
    loadComponent:()=>
        import('./pages/medical-team/medical-team.component').then(
            (C)=> C.MedicalTeamComponent
        ),canActivate:[authGuard]
 },

 {
  path: 'emergency-team',
  loadComponent: () =>
    import('./component/emergency-team/emergency-team.component').then(
      (c) => c.EmergencyTeamComponent
    ),
  canActivate: [authGuard],
},
{
  path: 'medical-details',
    loadComponent: () =>
      import('./component/medical-details/medical-details.component').then(
        (c) => c.MedicalDetailsComponent
      ),
    canActivate: [authGuard],  

},

 {
    path:'profile',
     loadComponent:()=>
        import('./pages/UserAccount/profile/profile.component').then(
            (C)=>C.ProfileComponent
        ),canActivate:[authGuard]
 },

 {
    path:'updatData',
     loadComponent:()=>
        import('./pages/UserAccount/updat-his-data/updat-his-data.component').then(
            (C)=>C.UpdatHisDataComponent
        ),canActivate:[authGuard]
 },

{
    path:'updatPass',
     loadComponent:()=>
        import('./pages/UserAccount/updatepass/updatepass.component').then(
            (C)=> C.UpdatepassComponent
        ),canActivate:[authGuard]
},


 // Athountction Routing

  {
    path:'SignIn',
      loadComponent:()=>
        import('./core/Athountcation/signin/signin.component').then(
            (C)=> C.SigninComponent
        )
  },

  {
    path:'login',
     loadComponent:()=>
        import('./core/Athountcation/login/login.component').then(
            (C)=>C.LoginComponent
        )
  },

  {
    path:'Forget',
     loadComponent:()=>
        import('./core/Athountcation/forget-password/forget-password.component').then(
            (C)=>C.ForgetPasswordComponent
        )
  },
  {
    path:'VierfyCode',
     loadComponent:()=>
        import('./core/Athountcation/verify-code/verify-code.component').then(
            (C)=>C.VerifyCodeComponent
        )
  },

  


  {
    path:'newPass',
     loadComponent:()=>
        import('./core/Athountcation/new-password/new-password.component').then(
            (C)=>C.NewPasswordComponent
        )
  },


  {
    path:"**",
      loadComponent:()=>
         import('./core/importantCompnent/not-found/not-found.component').then(
             (C)=>C.NotFoundComponent
         ),
  },

];